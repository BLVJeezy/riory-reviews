import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/i18n/LanguageProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { allServices, SYMPTOM_SERVICE_SLUGS } from "@/data/services";
import { riorySiteUrl } from "@/lib/riorySite";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logoBlack from "@/assets/riory-logo-black.svg";
import logoWhite from "@/assets/riory-logo-white.svg";
import HolidayNotice from "@/components/HolidayNotice";

// Alles hier wijst terug naar riory.be — deze pagina bestaat enkel op riory-reviews.be
// en heeft zelf geen andere routes.

const LIMBURG_CITIES = [
  { slug: "hasselt", label: "Hasselt" },
  { slug: "genk", label: "Genk" },
  { slug: "hoeselt", label: "Hoeselt" },
  { slug: "tongeren", label: "Tongeren" },
  { slug: "maasmechelen", label: "Maasmechelen" },
  { slug: "sint-truiden", label: "Sint-Truiden" },
  { slug: "diepenbeek", label: "Diepenbeek" },
  { slug: "alken", label: "Alken" },
  { slug: "borgloon", label: "Borgloon" },
  { slug: "riemst", label: "Riemst" },
  { slug: "wellen", label: "Wellen" },
  { slug: "zutendaal", label: "Zutendaal" },
  { slug: "kortessem", label: "Kortessem" },
];

const LIEGE_CITIES = [
  { slug: "luik", label: "Luik / Liège" },
  { slug: "rocourt", label: "Rocourt" },
  { slug: "juprelle", label: "Juprelle" },
  { slug: "ans", label: "Ans" },
  { slug: "milmort", label: "Milmort" },
  { slug: "vottem", label: "Vottem" },
];

const SYMPTOM_SET = new Set<string>(SYMPTOM_SERVICE_SLUGS as readonly string[]);
const REGULAR_SERVICES = allServices.filter((s) => !SYMPTOM_SET.has(s.slug));
const SPOED_SERVICES = allServices.filter((s) => SYMPTOM_SET.has(s.slug));

const Navbar = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const { lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [limburgOpen, setLimburgOpen] = useState(false);
  const [liegeOpen, setLiegeOpen] = useState(false);
  const [dienstenOpen, setDienstenOpen] = useState(false);
  const logo = theme === "dark" ? logoWhite : logoBlack;

  const navLinks = [
    { label: t("nav.whyUs"), href: riorySiteUrl("/#waarom-ons", lang) },
    { label: t("nav.references"), href: riorySiteUrl("/#projecten", lang) },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const transparentHero = false;
  const navLogo = logo;
  const navTextClass = "text-foreground hover:text-primary";
  const navIconBorderClass = "border-border text-foreground";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-background"
      }`}
    >
      <div className="max-w-[1400px] mx-auto w-full flex items-center justify-between h-16 md:h-20 px-4 md:px-6">
        <a href={riorySiteUrl("/", lang)} className="ml-0 md:ml-2">
          <img src={navLogo} alt="RIORY - Sterk in Rioleringswerk" className="h-10 md:h-12 lg:h-14 w-auto object-contain shrink-0" />
        </a>

        {/* Desktop */}
        <div className="hidden xl:flex items-center gap-6 2xl:gap-8">
          <DropdownMenu>
            <DropdownMenuTrigger className={`flex items-center gap-1 text-xs xl:text-sm font-body font-semibold uppercase tracking-wider whitespace-nowrap transition-colors outline-none ${navTextClass}`}>
              {t("nav.services")}
              <ChevronDown className="w-3.5 h-3.5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-64">
              <DropdownMenuItem asChild>
                <a href={riorySiteUrl("/diensten", lang)} className="cursor-pointer font-semibold">
                  Alle diensten →
                </a>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              {REGULAR_SERVICES.map((s) => (
                <DropdownMenuItem key={s.slug} asChild>
                  <a href={riorySiteUrl(`/diensten/${s.slug}`, lang)} className="cursor-pointer">
                    {s.shortTitle}
                  </a>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuLabel className="text-xs uppercase tracking-wider text-primary">
                Spoedgevallen
              </DropdownMenuLabel>
              {SPOED_SERVICES.map((s) => (
                <DropdownMenuItem key={s.slug} asChild>
                  <a href={riorySiteUrl(`/diensten/${s.slug}`, lang)} className="cursor-pointer">
                    {s.shortTitle}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-xs xl:text-sm font-body font-semibold uppercase tracking-wider whitespace-nowrap transition-colors ${navTextClass}`}
            >
              {link.label}
            </a>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger className={`flex items-center gap-1 text-xs xl:text-sm font-body font-semibold uppercase tracking-wider whitespace-nowrap transition-colors outline-none ${navTextClass}`}>
              {t("nav.regions")}
              <ChevronDown className="w-3.5 h-3.5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel className="text-xs uppercase tracking-wider text-muted-foreground">
                {t("nav.regionsLimburg")}
              </DropdownMenuLabel>
              {LIMBURG_CITIES.map((c) => (
                <DropdownMenuItem key={c.slug} asChild>
                  <a href={riorySiteUrl(`/regio/${c.slug}`, lang)} className="cursor-pointer">
                    {c.label}
                  </a>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuLabel className="text-xs uppercase tracking-wider text-muted-foreground">
                {t("nav.regionsLiege")}
              </DropdownMenuLabel>
              {LIEGE_CITIES.map((c) => (
                <DropdownMenuItem key={c.slug} asChild>
                  <a href={riorySiteUrl(`/regio/${c.slug}`, lang)} className="cursor-pointer">
                    {c.label}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <LanguageSwitcher textClassName={navTextClass} />
          <a
            href={riorySiteUrl("/sollicitatie", lang)}
            className={`text-xs xl:text-sm font-body font-semibold uppercase tracking-wider whitespace-nowrap transition-colors ${navTextClass}`}
          >
            Vacatures
          </a>
          <Button variant="cta" size="lg" className="rounded-full" asChild>
            <a href={riorySiteUrl("/afspraak", lang)}>{t("nav.appointment")}</a>
          </Button>
        </div>

        {/* Mobile controls */}
        <div className="xl:hidden flex items-center gap-2">
          <button
            className={`relative z-50 w-10 h-10 flex items-center justify-center rounded border transition-colors ${navIconBorderClass}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-charcoal/50 xl:hidden" onClick={() => setIsOpen(false)} />
          <div className="absolute right-6 top-16 z-50 w-72 max-h-[80vh] overflow-y-auto bg-charcoal rounded-lg shadow-xl xl:hidden animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col py-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-5 py-3 text-sm font-body font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <div className="border-t border-white/10 mt-1 pt-2">
                <button
                  type="button"
                  onClick={() => setDienstenOpen((v) => !v)}
                  className="w-full flex items-center justify-between px-5 py-2 text-[10px] font-heading font-bold uppercase tracking-wider text-primary hover:bg-white/10 transition-colors"
                  aria-expanded={dienstenOpen}
                >
                  <span>{t("nav.services")}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dienstenOpen ? "rotate-180" : ""}`} />
                </button>
                {dienstenOpen && (
                  <>
                    <a
                      href={riorySiteUrl("/diensten", lang)}
                      onClick={() => setIsOpen(false)}
                      className="block px-5 py-2 text-sm font-body font-semibold text-white hover:bg-white/10 transition-colors"
                    >
                      Alle diensten →
                    </a>
                    {REGULAR_SERVICES.map((s) => (
                      <a
                        key={s.slug}
                        href={riorySiteUrl(`/diensten/${s.slug}`, lang)}
                        onClick={() => setIsOpen(false)}
                        className="block px-5 py-2 text-sm font-body text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                      >
                        {s.shortTitle}
                      </a>
                    ))}
                    <div className="px-5 pt-3 pb-1 text-[10px] font-heading font-bold uppercase tracking-wider text-primary">
                      Spoedgevallen
                    </div>
                    {SPOED_SERVICES.map((s) => (
                      <a
                        key={s.slug}
                        href={riorySiteUrl(`/diensten/${s.slug}`, lang)}
                        onClick={() => setIsOpen(false)}
                        className="block px-5 py-2 text-sm font-body text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                      >
                        {s.shortTitle}
                      </a>
                    ))}
                  </>
                )}
              </div>

              <div className="border-t border-white/10 mt-1 pt-2">
                <button
                  type="button"
                  onClick={() => setLimburgOpen((v) => !v)}
                  className="w-full flex items-center justify-between px-5 py-2 text-[10px] font-heading font-bold uppercase tracking-wider text-primary hover:bg-white/10 transition-colors"
                  aria-expanded={limburgOpen}
                >
                  <span>{t("nav.regionsLimburg")}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${limburgOpen ? "rotate-180" : ""}`} />
                </button>
                {limburgOpen && LIMBURG_CITIES.map((c) => (
                  <a
                    key={c.slug}
                    href={riorySiteUrl(`/regio/${c.slug}`, lang)}
                    onClick={() => setIsOpen(false)}
                    className="block px-5 py-2 text-sm font-body text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    {c.label}
                  </a>
                ))}
              </div>

              <div className="border-t border-white/10 mt-1 pt-2">
                <button
                  type="button"
                  onClick={() => setLiegeOpen((v) => !v)}
                  className="w-full flex items-center justify-between px-5 py-2 text-[10px] font-heading font-bold uppercase tracking-wider text-primary hover:bg-white/10 transition-colors"
                  aria-expanded={liegeOpen}
                >
                  <span>{t("nav.regionsLiege")}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${liegeOpen ? "rotate-180" : ""}`} />
                </button>
                {liegeOpen && LIEGE_CITIES.map((c) => (
                  <a
                    key={c.slug}
                    href={riorySiteUrl(`/regio/${c.slug}`, lang)}
                    onClick={() => setIsOpen(false)}
                    className="block px-5 py-2 text-sm font-body text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    {c.label}
                  </a>
                ))}
              </div>

              <div className="border-t border-white/10 mt-1 pt-1">
                <LanguageSwitcher variant="mobile" />
              </div>
              <div className="px-3 pt-1 pb-1">
                <a
                  href={riorySiteUrl("/sollicitatie", lang)}
                  onClick={() => setIsOpen(false)}
                  className="block px-2 py-2 text-sm font-body font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors rounded"
                >
                  Vacatures
                </a>
              </div>
              <div className="px-3 pt-2 pb-1">
                <Button variant="cta" size="sm" className="w-full" asChild>
                  <a href={riorySiteUrl("/afspraak", lang)} onClick={() => setIsOpen(false)}>{t("nav.appointment")}</a>
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
      <HolidayNotice />
    </nav>
  );
};

export default Navbar;
