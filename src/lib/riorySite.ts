import type { Language } from "@/i18n/config";

const RIORY_BASE_URL = "https://www.riory.be";

/** Bouwt een absolute URL naar riory.be, met taalprefix voor en/fr. */
export const riorySiteUrl = (path = "/", lang: Language = "nl") => {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const prefixed = lang === "nl" ? cleanPath : `/${lang}${cleanPath === "/" ? "" : cleanPath}`;
  return `${RIORY_BASE_URL}${prefixed}`;
};
