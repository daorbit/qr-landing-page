"use client";

import { useEffect, useRef } from "react";
import { site } from "@/lib/site";

export function ContactForm() {
  const ref = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      const frame = ref.current;
      if (!frame || e.source !== frame.contentWindow) return;
      if (e.data?.type === "da-forms:height") frame.style.height = `${e.data.height}px`;
      if (e.data?.type === "da-forms:ready") {
        frame.contentWindow?.postMessage({ type: "da-forms:context", page: location.href, referrer: document.referrer }, "*");
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return <iframe ref={ref} src={site.contactFormUrl} title="Get in touch" loading="lazy" className="block h-[600px] w-full border-0" />;
}
