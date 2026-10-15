import fs from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";
import FloatingNav from "@/components/navigation/FloatingNav";
import Approach from "@/components/sections/Approach";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Highlights from "@/components/sections/Highlights";
import Projects from "@/components/sections/Projects";
import StackBand from "@/components/sections/StackBand";
import { getDictionary, isLocale } from "@/content";

const photoFile = "tryelson.jpg";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);
  const photo = fs.existsSync(path.join(process.cwd(), "public", photoFile)) ? `/${photoFile}` : null;

  return (
    <>
      <FloatingNav t={t.nav} locale={locale} />
      <main>
        <Hero t={t.hero} photo={photo} />
        <Highlights t={t.highlights} />
        <StackBand label={t.stack.label} />
        <Approach t={t.approach} />
        <Experience t={t.experience} />
        <Projects t={t.projects} />
        <Contact t={t.contact} footer={t.footer} />
      </main>
    </>
  );
}
