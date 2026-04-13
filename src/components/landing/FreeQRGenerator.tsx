"use client";

import { useState, useRef, useCallback } from "react";
import { Download, Link as LinkIcon, Phone, Mail, MessageSquare, Palette, ArrowRight } from "lucide-react";
import type { QRStyling } from "@/types/qrcode";
import { defaultStyling } from "@/types/qrcode";
import { APP_URL } from "@/lib/config";
import FreeQRPreview from "./FreeQRPreview";
import FreeStyleOptions from "./FreeStyleOptions";

const FreeQRGenerator = () => {
  const [qrType, setQrType] = useState<"url" | "phone" | "email" | "sms">("url");
  const [content, setContent] = useState("https://example.com");
  const [styling, setStyling] = useState<QRStyling>({ ...defaultStyling });
  const qrRef = useRef<HTMLDivElement>(null);

  const handleStyleChange = useCallback((newStyle: Partial<QRStyling>) => {
    setStyling((prev) => ({ ...prev, ...newStyle }));
  }, []);

  const getQRContent = () => {
    const trimmed = content.trim();
    switch (qrType) {
      case "phone": return `tel:${trimmed.replace(/\s+/g, "")}`;
      case "email": return `mailto:${trimmed}`;
      case "sms": return `sms:${trimmed.replace(/\s+/g, "")}`;
      default: return trimmed;
    }
  };

  const getPlaceholder = (typeParam?: typeof qrType) => {
    const t = typeParam ?? qrType;
    switch (t) {
      case "phone": return "+1 234 567 8900";
      case "email": return "email@example.com";
      case "sms": return "+1 234 567 8900";
      default: return "https://example.com";
    }
  };

  const getLabel = () => {
    switch (qrType) {
      case "phone": return "Phone Number";
      case "email": return "Email Address";
      case "sms": return "Phone Number for SMS";
      default: return "Website URL";
    }
  };

  return (
    <div className="grid lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
      {/* Left: Form */}
      <div className="lg:col-span-3 p-5 sm:p-6 border border-border/80 rounded-lg bg-card">
        <div className="space-y-5">
          <div>
            <label className="text-xs font-medium mb-2.5 block text-muted-foreground uppercase tracking-wide">QR Code Type</label>
            <div className="grid grid-cols-4 gap-2">
              {[
                { type: "url" as const, icon: <LinkIcon className="h-4 w-4" />, label: "URL" },
                { type: "phone" as const, icon: <Phone className="h-4 w-4" />, label: "Phone" },
                { type: "email" as const, icon: <Mail className="h-4 w-4" />, label: "Email" },
                { type: "sms" as const, icon: <MessageSquare className="h-4 w-4" />, label: "SMS" },
              ].map((item) => (
                <button
                  key={item.type}
                  className={`flex flex-col items-center h-auto py-2.5 gap-1 transition-all rounded-md border text-xs ${
                    qrType === item.type
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border/80 hover:border-border bg-card"
                  }`}
                  onClick={() => {
                    setQrType(item.type);
                    setContent(getPlaceholder(item.type));
                  }}
                >
                  {item.icon}
                  <span className="text-[10px] font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="content" className="text-xs font-medium mb-2 block text-muted-foreground uppercase tracking-wide">{getLabel()}</label>
            <input
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder={getPlaceholder()}
              className="w-full h-10 border border-border/80 rounded-md px-3 bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>

          <FreeStyleOptions styling={styling} onStyleChange={handleStyleChange} />

          <div className="bg-muted/40 rounded-lg p-4 border border-border/60">
            <div className="flex items-start gap-3">
              <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Palette className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium mb-0.5">Want more customization?</p>
                <p className="text-xs text-muted-foreground mb-2.5">Access 50+ templates, logo upload, and advanced styling.</p>
                <a href={`${APP_URL}/signup`}>
                  <button className="gap-1 h-7 text-xs border border-border/80 rounded-md px-3 inline-flex items-center hover:bg-muted transition-colors">
                    Sign Up Free <ArrowRight className="h-3 w-3" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Preview */}
      <div className="lg:col-span-2 p-5 sm:p-6 border border-border/80 rounded-lg bg-card">
        <div className="flex flex-col h-full">
          <label className="text-xs font-medium mb-4 text-muted-foreground uppercase tracking-wide">Preview</label>
          <div className="flex-1 flex items-center justify-center min-h-50">
            <FreeQRPreview ref={qrRef} content={getQRContent()} styling={styling} />
          </div>
          <div className="mt-5 space-y-3">
            <div className="grid grid-cols-3 gap-2">
              {["png", "webp", "jpg"].map((format) => (
                <button
                  key={format}
                  className={`gap-1.5 text-xs h-8 inline-flex items-center justify-center rounded-md transition-colors ${
                    format === "png"
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border border-border/80 hover:bg-muted"
                  }`}
                  disabled={content.trim() === ""}
                  onClick={() => {
                    if (!content.trim()) return;
                    const downloadEvent = new CustomEvent("download-qr", { detail: { format } });
                    window.dispatchEvent(downloadEvent);
                  }}
                >
                  <Download className="h-3 w-3" />
                  {format.toUpperCase()}
                </button>
              ))}
            </div>
            <p className="text-[10px] text-center text-muted-foreground">Free downloads include watermark</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeQRGenerator;
