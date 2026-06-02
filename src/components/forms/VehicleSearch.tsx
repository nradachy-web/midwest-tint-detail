"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export interface VehicleSelection {
  year: number;
  make: string;
  model: string;
  trim: string;
}

interface Props {
  onChange: (v: VehicleSelection) => void;
}

const CURRENT_YEAR = 2026;
const START_YEAR = 2000;
const YEARS = Array.from({ length: CURRENT_YEAR - START_YEAR + 1 }, (_, i) => CURRENT_YEAR - i);

const BASE = "https://www.fueleconomy.gov/ws/rest/vehicle/menu";

function parse(data: { menuItem?: { text: string; value: string } | { text: string; value: string }[] }): string[] {
  if (!data?.menuItem) return [];
  const items = Array.isArray(data.menuItem) ? data.menuItem : [data.menuItem];
  return items.map((i) => i.text).sort((a, b) => a.localeCompare(b));
}

const spinner =
  "absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 animate-spin rounded-full border-2 border-steel border-t-cyan";

export default function VehicleSearch({ onChange }: Props) {
  const [year, setYear] = useState<number | null>(null);
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [trim, setTrim] = useState("");

  const [makes, setMakes] = useState<string[]>([]);
  const [models, setModels] = useState<string[]>([]);
  const [trims, setTrims] = useState<string[]>([]);

  const [loadingMakes, setLoadingMakes] = useState(false);
  const [loadingModels, setLoadingModels] = useState(false);
  const [loadingTrims, setLoadingTrims] = useState(false);

  useEffect(() => {
    if (!year) {
      setMakes([]); setMake(""); setModels([]); setModel(""); setTrims([]); setTrim("");
      return;
    }
    let cancelled = false;
    setLoadingMakes(true); setMake(""); setModel(""); setTrim(""); setModels([]); setTrims([]);
    fetch(`${BASE}/make?year=${year}`, { headers: { Accept: "application/json" } })
      .then((r) => r.json())
      .then((d) => { if (!cancelled) setMakes(parse(d)); })
      .catch(() => { if (!cancelled) setMakes([]); })
      .finally(() => { if (!cancelled) setLoadingMakes(false); });
    return () => { cancelled = true; };
  }, [year]);

  useEffect(() => {
    if (!year || !make) { setModels([]); setModel(""); setTrims([]); setTrim(""); return; }
    let cancelled = false;
    setLoadingModels(true); setModel(""); setTrim(""); setTrims([]);
    fetch(`${BASE}/model?year=${year}&make=${encodeURIComponent(make)}`, { headers: { Accept: "application/json" } })
      .then((r) => r.json())
      .then((d) => { if (!cancelled) setModels(parse(d)); })
      .catch(() => { if (!cancelled) setModels([]); })
      .finally(() => { if (!cancelled) setLoadingModels(false); });
    return () => { cancelled = true; };
  }, [year, make]);

  useEffect(() => {
    if (!year || !make || !model) { setTrims([]); setTrim(""); return; }
    let cancelled = false;
    setLoadingTrims(true); setTrim("");
    fetch(`${BASE}/options?year=${year}&make=${encodeURIComponent(make)}&model=${encodeURIComponent(model)}`, { headers: { Accept: "application/json" } })
      .then((r) => r.json())
      .then((d) => { if (!cancelled) { const t = parse(d); setTrims(t); if (t.length === 1) setTrim(t[0]); } })
      .catch(() => { if (!cancelled) setTrims([]); })
      .finally(() => { if (!cancelled) setLoadingTrims(false); });
    return () => { cancelled = true; };
  }, [year, make, model]);

  useEffect(() => {
    if (year && make && model) onChange({ year, make, model, trim });
  }, [year, make, model, trim, onChange]);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div>
        <label className="mb-1.5 block text-sm font-medium text-silver">Year</label>
        <select className="field" value={year ?? ""} onChange={(e) => setYear(e.target.value ? Number(e.target.value) : null)}>
          <option value="">Select year</option>
          {YEARS.map((y) => <option key={y} value={y}>{y}</option>)}
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-silver">Make</label>
        <div className="relative">
          <select
            className={cn("field", (!year || loadingMakes) && "opacity-50")}
            value={make}
            disabled={!year || loadingMakes}
            onChange={(e) => { setMake(e.target.value); setModel(""); setTrim(""); }}
          >
            <option value="">{loadingMakes ? "Loading..." : "Select make"}</option>
            {makes.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
          {loadingMakes && <div className={spinner} />}
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-silver">Model</label>
        <div className="relative">
          <select
            className={cn("field", (!make || loadingModels) && "opacity-50")}
            value={model}
            disabled={!make || loadingModels}
            onChange={(e) => { setModel(e.target.value); setTrim(""); }}
          >
            <option value="">{loadingModels ? "Loading..." : "Select model"}</option>
            {models.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
          {loadingModels && <div className={spinner} />}
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-silver">
          Trim <span className="text-muted">(optional)</span>
        </label>
        <div className="relative">
          <select
            className={cn("field", (!model || loadingTrims) && "opacity-50")}
            value={trim}
            disabled={!model || loadingTrims}
            onChange={(e) => setTrim(e.target.value)}
          >
            <option value="">{loadingTrims ? "Loading..." : trims.length === 0 && model ? "No trims listed" : "Select trim"}</option>
            {trims.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
          {loadingTrims && <div className={spinner} />}
        </div>
      </div>
    </div>
  );
}
