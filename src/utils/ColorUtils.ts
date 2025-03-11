// HEX 색상을 RGB로 변환하는 함수
export const hexToRgb = (hex: string): string => {
  const sanitizedHex = hex.replace("#", "");
  const bigint = parseInt(sanitizedHex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`; // RGB 형식으로 반환
};

// 색상을 어두운 색으로 조정하는 함수
export const darken = (color: string, amount: number) => {
  const [r, g, b] = hexToRgb(color).split(",").map(Number);
  const darkenedR = Math.max(r - amount, 0);
  const darkenedG = Math.max(g - amount, 0);
  const darkenedB = Math.max(b - amount, 0);
  return `rgb(${darkenedR}, ${darkenedG}, ${darkenedB})`; // 어두운 색 반환
};
