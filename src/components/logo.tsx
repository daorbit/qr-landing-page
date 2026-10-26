import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Logo({ size = 44 }: { size?: number }) {
  return (
    <Link href="/" className="flex items-center" aria-label={`${site.name} home`}>
      <Image src="/logo.png" alt={site.name} width={size} height={size} priority />
    </Link>
  );
}
