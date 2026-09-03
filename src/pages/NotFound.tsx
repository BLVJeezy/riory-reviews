import { useLanguage } from "@/i18n/LanguageProvider";
import { riorySiteUrl } from "@/lib/riorySite";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center text-center gap-4 px-6 pt-32 pb-20">
        <h1 className="text-4xl font-heading font-bold">404</h1>
        <p className="text-muted-foreground font-body">Deze pagina bestaat niet.</p>
        <a href={riorySiteUrl("/", lang)} className="text-primary font-body font-semibold hover:underline">
          Ga naar riory.be
        </a>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
