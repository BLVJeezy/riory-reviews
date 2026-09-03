import vanAbout from "@/assets/photos/riory-van-about.webp";
import vanHero from "@/assets/photos/riory-van-hero-two.webp";
import cameraInspectie from "@/assets/photos/service-camera-inspectie.webp";
import leegpompen from "@/assets/photos/service-leegpompen-reinigen.webp";
import leidingenSeptisch from "@/assets/photos/service-leidingen-septisch.webp";
import geurdetectie from "@/assets/photos/service-ontstoppingen-geurdetectie.webp";
import septisch1 from "@/assets/photos/septisch-1.webp";
import septisch3 from "@/assets/photos/septisch-3.webp";
import regenput from "@/assets/photos/regenput-1.webp";
import verstopping from "@/assets/photos/verstopping-1.webp";
import kelder from "@/assets/photos/kelder-1.webp";
import dakgoot from "@/assets/photos/dakgoot-hoogte-1.webp";
import zuiveren from "@/assets/photos/zuiveren-riolering-1.webp";

export interface Photo {
  src: string;
  alt: string;
}

export const PHOTOS: Photo[] = [
  { src: vanHero, alt: "Riory bestelwagen onderweg naar een klant" },
  { src: cameraInspectie, alt: "Camera-inspectie van een riolering door Riory" },
  { src: septisch1, alt: "Riory ledigt een septische put" },
  { src: verstopping, alt: "Riory lost een verstopping op" },
  { src: leegpompen, alt: "Leegpompen en reinigen van een put door Riory" },
  { src: regenput, alt: "Reiniging van een regenput door Riory" },
  { src: vanAbout, alt: "Riory bestelwagen met uitrusting" },
  { src: geurdetectie, alt: "Ontstopping en geurdetectie door Riory" },
  { src: kelder, alt: "Ondergelopen kelder leeggepompt door Riory" },
  { src: leidingenSeptisch, alt: "Leidingwerk aan een septische put door Riory" },
  { src: dakgoot, alt: "Dakgootreiniging op hoogte door Riory" },
  { src: septisch3, alt: "Werken aan een septische put door Riory" },
  { src: zuiveren, alt: "Zuiveren van een riolering door Riory" },
];
