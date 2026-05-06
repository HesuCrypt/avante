/**
 * PARTNERS / CLIENTS LOGOS & CONTENT
 * 
 * To replace a partner:
 * 1. Update the name and color.
 * 2. (Optional) Add a 'logo' field if you want to use local images instead of text.
 */

export type Partner = {
  name: string;
  color: string;
  logo?: string;
};

export const PARTNERS: Partner[] = [
  { name: "ISSY", color: "#000000" },
  { name: "SM", color: "#0056B3" },
  { name: "LUCKY BEAUTY", color: "#FF6B6B" },
  { name: "BLANC NUE", color: "#4A4A4A" },
  { name: "FABOULASH", color: "#C76EAF" },
  { name: "GOOD MOLECULES", color: "#2E7D32" },
  { name: "TILLO", color: "#2E86DE" },
  { name: "MY BEAUTY STORY", color: "#D4458B" },
  { name: "IMMA BEAUT", color: "#E65100" },
];
