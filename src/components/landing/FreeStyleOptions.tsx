"use client";

import type { QRStyling } from "@/types/qrcode";

interface FreeStyleOptionsProps {
  styling: QRStyling;
  onStyleChange: (style: Partial<QRStyling>) => void;
}

const colorPresets = [
  { name: "Black", fg: "#000000", bg: "#ffffff" },
  { name: "Blue", fg: "#1e40af", bg: "#ffffff" },
  { name: "Purple", fg: "#7c3aed", bg: "#ffffff" },
  { name: "Green", fg: "#059669", bg: "#ffffff" },
  { name: "Red", fg: "#dc2626", bg: "#ffffff" },
  { name: "Orange", fg: "#ea580c", bg: "#ffffff" },
];

const dotPatterns: Array<{ type: QRStyling["dotsType"]; label: string }> = [
  { type: "square", label: "Square" },
  { type: "dots", label: "Dots" },
  { type: "rounded", label: "Rounded" },
  { type: "classy", label: "Classy" },
];

const FreeStyleOptions = ({ styling, onStyleChange }: FreeStyleOptionsProps) => {
  const handleColorChange = (fg: string, bg: string) => {
    onStyleChange({
      fgColor: fg,
      bgColor: bg,
      cornersSquareOptions: { ...styling.cornersSquareOptions, color: fg } as any,
      cornersDotOptions: { ...styling.cornersDotOptions, color: fg } as any,
    });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium mb-3 block">Color Theme</label>
        <div className="grid grid-cols-6 gap-2">
          {colorPresets.map((preset) => (
            <button
              key={preset.name}
              onClick={() => handleColorChange(preset.fg, preset.bg)}
              className={`h-10 w-full rounded-lg border-2 transition-all ${
                styling.fgColor === preset.fg ? "border-primary ring-2 ring-primary/20" : "border-border hover:border-primary/50"
              }`}
              style={{ backgroundColor: preset.fg }}
              title={preset.name}
            />
          ))}
        </div>
      </div>
      <div>
        <label className="text-sm font-medium mb-3 block">Pattern Style</label>
        <div className="grid grid-cols-4 gap-2">
          {dotPatterns.map((pattern) => (
            <button
              key={pattern.type}
              className={`h-9 text-xs rounded-md transition-all ${
                styling.dotsType === pattern.type
                  ? "bg-primary text-primary-foreground"
                  : "border border-border hover:bg-muted"
              }`}
              onClick={() => onStyleChange({ dotsType: pattern.type })}
            >
              {pattern.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FreeStyleOptions;
