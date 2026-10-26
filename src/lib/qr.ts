import QRCode from "qrcode";

export interface QrMatrix {
  size: number;
  isDark: (row: number, col: number) => boolean;
}

export const qrMatrix = (value: string): QrMatrix => {
  const { modules } = QRCode.create(value, { errorCorrectionLevel: "Q" });
  return {
    size: modules.size,
    isDark: (row, col) => Boolean(modules.get(row, col)),
  };
};

export const isFinder = (row: number, col: number, size: number) =>
  (row < 7 && col < 7) || (row < 7 && col >= size - 7) || (row >= size - 7 && col < 7);
