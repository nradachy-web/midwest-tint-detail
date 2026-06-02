import { cn } from "@/lib/utils";

export default function Hairline({
  sweep = false,
  className,
}: {
  sweep?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("hairline", sweep && "hairline-sweep", className)} aria-hidden />
  );
}
