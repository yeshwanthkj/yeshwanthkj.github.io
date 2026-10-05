import { publications, selfNames } from "@/data/publications";
import PublicationList from "./PublicationList";
import { Section, SectionHeader } from "./ui";

export default function Publications() {
  const papers = publications.filter((p) => p.kind === "paper").length;
  const talks = publications.length - papers;
  return (
    <Section id="publications">
      <SectionHeader
        id="publications"
        index="03"
        eyebrow="Publications & presentations"
        title="Papers, talks and posters."
        intro={`${papers} papers and ${talks} conference presentations across IEEE, ASABE and Oklahoma water-research venues.`}
      />
      <div data-reveal>
        <PublicationList items={publications} selfNames={selfNames} />
      </div>
    </Section>
  );
}
