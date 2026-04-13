"use client";

import { useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import QRCodeStyling from "qr-code-styling";
import { toPng } from "html-to-image";
import type { QRStyling } from "@/types/qrcode";

interface FreeQRPreviewProps {
  content: string;
  styling: QRStyling;
  size?: number;
  className?: string;
}

const FreeQRPreview = forwardRef<HTMLDivElement, FreeQRPreviewProps>(
  ({ content, styling, size = 240, className = "" }, ref) => {
    const qrRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const qrInstanceRef = useRef<QRCodeStyling | null>(null);

    useImperativeHandle(ref, () => qrRef.current as HTMLDivElement);

    useEffect(() => {
      const handleDownload = async (e: Event) => {
        const customEvent = e as CustomEvent;
        if (containerRef.current) {
          const format = customEvent.detail?.format || "png";
          try {
            const dataUrl = await toPng(containerRef.current, {
              backgroundColor: "#ffffff",
              pixelRatio: 2,
            });
            const link = document.createElement("a");
            link.download = `qr-code.${format === "jpg" ? "jpg" : format}`;
            link.href = dataUrl;
            link.click();
          } catch (error) {
            console.error("Failed to download QR code:", error);
          }
        }
      };

      window.addEventListener("download-qr", handleDownload);
      return () => window.removeEventListener("download-qr", handleDownload);
    }, []);

    useEffect(() => {
      if (!qrRef.current) return;

      const hasGradients = !!(styling.dotsGradient || styling.backgroundGradient || styling.cornersSquareOptions?.gradient || styling.cornersDotOptions?.gradient);
      const errorLevel = hasGradients ? "H" : (styling.level || "M");

      const qrOptions = {
        width: size,
        height: size,
        data: content || "https://example.com",
        type: "svg" as const,
        dotsOptions: {
          color: styling.fgColor || "#000000",
          type: (styling.dotsType || "square") as any,
          ...(styling.dotsGradient && { gradient: styling.dotsGradient }),
        },
        backgroundOptions: {
          color: styling.bgColor || "#ffffff",
          ...(styling.backgroundGradient && { gradient: styling.backgroundGradient }),
        },
        cornersSquareOptions: {
          color: styling.cornersSquareOptions?.color || styling.fgColor || "#000000",
          type: (styling.cornersSquareOptions?.type || "square") as any,
          ...(styling.cornersSquareOptions?.gradient && { gradient: styling.cornersSquareOptions.gradient }),
        },
        cornersDotOptions: {
          color: styling.cornersDotOptions?.color || styling.fgColor || "#000000",
          type: (styling.cornersDotOptions?.type || "square") as any,
          ...(styling.cornersDotOptions?.gradient && { gradient: styling.cornersDotOptions.gradient }),
        },
        qrOptions: { errorCorrectionLevel: errorLevel },
      };

      if (qrInstanceRef.current) {
        qrInstanceRef.current.update(qrOptions);
      } else {
        qrInstanceRef.current = new QRCodeStyling(qrOptions);
        qrRef.current.innerHTML = "";
        qrInstanceRef.current.append(qrRef.current);
      }
    }, [content, styling, size]);

    return (
      <div className={`bg-white rounded-xl p-3 sm:p-4 shadow-sm border border-border ${className}`}>
        <div ref={containerRef} className="bg-white p-4">
          <div ref={qrRef} className="flex items-center justify-center" />
          <div className="flex items-center justify-center gap-2 mt-3 pt-3 border-t border-gray-200">
            <img src="/logo.png" alt="QR Studio" className="w-5 h-5 object-contain" />
            <span className="text-xs font-medium text-gray-500">QR Studio</span>
          </div>
        </div>
      </div>
    );
  }
);

FreeQRPreview.displayName = "FreeQRPreview";

export default FreeQRPreview;
