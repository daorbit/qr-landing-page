import { isFinder, qrMatrix } from "@/lib/qr";

type DotStyle = "square" | "rounded" | "dots";

interface QrCodeProps {
  value: string;
  fg?: string;
  bg?: string;
  corner?: string;
  dots?: DotStyle;
  className?: string;
  title?: string;
}

const FINDERS = (size: number) => [
  [0, 0],
  [0, size - 7],
  [size - 7, 0],
];

export function QrCode({ value, fg = "#0a0a0a", bg = "#ffffff", corner, dots = "rounded", className, title }: QrCodeProps) {
  const { size, isDark } = qrMatrix(value);
  const pad = 1;
  const view = size + pad * 2;
  const eye = corner ?? fg;
  const outerR = dots === "square" ? 0 : dots === "dots" ? 3.5 : 1.8;
  const innerR = dots === "square" ? 0 : dots === "dots" ? 1.5 : 0.8;

  const cells: React.ReactNode[] = [];
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (!isDark(r, c) || isFinder(r, c, size)) continue;
      const x = c + pad;
      const y = r + pad;
      cells.push(
        dots === "dots" ? (
          <circle key={`${r}-${c}`} cx={x + 0.5} cy={y + 0.5} r={0.42} />
        ) : (
          <rect key={`${r}-${c}`} x={x + 0.05} y={y + 0.05} width={0.9} height={0.9} rx={dots === "rounded" ? 0.3 : 0} />
        )
      );
    }
  }

  return (
    <svg viewBox={`0 0 ${view} ${view}`} className={className} role="img" aria-label={title ?? `QR code for ${value}`} shapeRendering={dots === "square" ? "crispEdges" : "geometricPrecision"}>
      <rect width={view} height={view} fill={bg} />
      <g fill={fg}>{cells}</g>
      {FINDERS(size).map(([r, c]) => (
        <g key={`${r}-${c}`}>
          <rect x={c + pad + 0.5} y={r + pad + 0.5} width={6} height={6} rx={outerR} fill="none" stroke={fg} strokeWidth={1} />
          <rect x={c + pad + 2} y={r + pad + 2} width={3} height={3} rx={innerR} fill={eye} />
        </g>
      ))}
    </svg>
  );
}
