import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import FieldWork from "@/components/FieldWork";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Leadership from "@/components/Leadership";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Research from "@/components/Research";
import RevealObserver from "@/components/RevealObserver";
import { site } from "@/data/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.fullName,
  alternateName: [site.name, site.shortName],
  url: site.url,
  email: `mailto:${site.email}`,
  jobTitle: "Graduate Research Assistant, PhD Student",
  affiliation: { "@type": "CollegeOrUniversity", name: "Oklahoma State University" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Oklahoma State University" },
    { "@type": "CollegeOrUniversity", name: "Sree Vidyanikethan Engineering College" },
  ],
  knowsAbout: ["Machine learning", "Irrigation scheduling", "Soil moisture", "Agricultural engineering", "Water management"],
  sameAs: [site.links.linkedin, site.links.github],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Research />
        <Publications />
        <Experience />
        <FieldWork />
        <Projects />
        <Leadership />
        <Contact />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
