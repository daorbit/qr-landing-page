import type { LucideIcon } from "lucide-react";

interface TypeTileProps {
  label: string;
  group: string;
  icon: LucideIcon;
}

export function TypeTile({ label, group, icon: Icon }: TypeTileProps) {
  return (
    <li className="group panel flex aspect-[5/4] flex-col justify-between rounded-2xl p-5 transition-colors duration-200 hover:border-line-strong">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-fg/[0.05] text-fg-2 transition-colors duration-200 group-hover:bg-brand group-hover:text-white">
        <Icon size={18} />
      </span>
      <span>
        <span className="block text-[15px] font-medium text-fg">{label}</span>
        <span className="mt-0.5 block text-[12px] text-muted">{group}</span>
      </span>
    </li>
  );
}
