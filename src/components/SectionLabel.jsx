import { ArrowUpRight } from "lucide-react";

function SectionLabel({
  number,
  label,
  align = "left",
  className = "",
}) {
  const alignment =
    align === "center"
      ? "items-center text-center"
      : align === "right"
        ? "items-end text-right"
        : "items-start text-left";

  return (
    <div
      className={`flex flex-col ${alignment} ${className}`}
    >
      <div className="flex items-center gap-3">
        <span className="font-space text-[9px] font-bold tracking-[0.18em] text-white/25">
          {number}
        </span>

        <span className="h-px w-8 bg-white/20" />

        <span className="font-space text-[9px] font-bold uppercase tracking-[0.22em] text-white/45">
          {label}
        </span>

        <ArrowUpRight
          size={11}
          className="text-white/25"
        />
      </div>
    </div>
  );
}

export default SectionLabel;