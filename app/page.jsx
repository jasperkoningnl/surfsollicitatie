import Blob from "../components/Blob";

const sections = [
  {
    id: "techniek",
    color: "#E67300",
    tag: "Techniek & Communicatie",
    short: "Techniek",
    heading: "Van ICT-journalist tot digitaal regisseur",
    paragraphs: [
      "Mijn technische nieuwsgierigheid begon vroeg. Voor mijn eerste stage bij De Telegraaf las ik het handboek HTML 4. Als ICT-journalist bij PC Magazine en ZDNet.nl schreef ik dagelijks over technologie voor een breed publiek. Niet als programmeur, maar als vertaler: complexe techniek omzetten naar heldere taal.",
      "Die vaardigheid gebruik ik nog steeds. Bij Nederland van Boven dook ik in de wereld van geodata en vertaalde dat naar datavisualisaties voor televisie. Als projectleider bij VPRO Digitaal voerde ik het gesprek met interaction designers, ontwikkelaars en vormgevers. En als eindredacteur bij Brainwash stuur ik de digitale strategie aan.",
    ],
    highlights: ["PC Magazine & ZDNet.nl", "Nederland van Boven", "VPRO Digitaal", "Brainwash"],
    blobPos: "top-right",
  },
  {
    id: "cms",
    color: "#0077C0",
    tag: "CMS'en & Online Kanalen",
    short: "CMS'en",
    heading: "Thuis in elk systeem",
    paragraphs: [
      "In mijn carrière werkte ik met WordPress, Magnolia, Prepr, Waxtrapp en vele andere content management systemen. Daarnaast nieuwsbriefsystemen, social media tools en specifieke platforms voor online communities. Elk systeem heeft zijn eigen logica en beperkingen, en ik vind het een uitdaging om die te leren kennen en er het maximale uit te halen.",
      "Bij de VPRO was ik verantwoordelijk voor de opzet van de sociale kanalen van VPRO, Tegenlicht en later Brainwash. Van strategie tot dagelijkse uitvoering. Ik zette VPROGids.nl op als channel manager en werkte met tools als JIRA, Trello, Notion en Airtable voor workflowbeheer.",
      "Momenteel experimenteer ik met het zelf bouwen van kleine tools met behulp van AI. Niet omdat ik developer wil worden, maar omdat ik wil begrijpen hoe deze technologie werkt. Om te snappen welke mogelijkheden en risico's ermee gepaard gaan.",
    ],
    highlights: ["WordPress", "Magnolia", "Prepr", "JIRA", "Notion"],
    blobPos: "bottom-left",
  },
  {
    id: "communities",
    color: "#008942",
    tag: "Communities",
    short: "Communities",
    heading: "Betrokkenheid creëren en vasthouden",
    paragraphs: [
      "Een sterk online kanaal draait om de mensen die het gebruiken. Dat leerde ik al vroeg bij de NCRV, waar ik de online forums van Stand.nl en Rondom Tien modereerde. In een tijd dat online communities nog nieuw waren, ontdekte ik hoe je een veilige en levendige plek voor gesprek creëert.",
      "Bij de VPRO bouwde ik verder aan die ervaring. Voor programma's als Landroof en Café de Liefde ontwikkelde ik online communities waar kijkers actief konden meedoen. Bij Tegenlicht hielp ik het netwerk van lokale Meet Ups groeien: een mooi voorbeeld van hoe online en offline betrokkenheid elkaar versterken.",
      "Dat de online communities van SURF bij deze functie horen, maakt de rol extra aantrekkelijk. Het communities-platform is dé plek waar inhoudelijke interactie met de doelgroep plaatsvindt, en ik weet uit ervaring hoe je zo'n platform levend houdt.",
    ],
    highlights: ["Stand.nl & Rondom Tien", "Landroof & Café de Liefde", "Tegenlicht Meet Ups", "Brainwash socials"],
    blobPos: "top-left",
  },
  {
    id: "projecten",
    color: "#772583",
    tag: "Projecten & Stakeholders",
    short: "Projecten",
    heading: "Van wens naar werkend platform",
    paragraphs: [
      "Als projectleider bij VPRO Digitaal stuurde ik de ontwikkeling aan van platforms als VPRO.nl en HollandDoc.nl. Interne wensen ophalen bij redacties, die vertalen naar een plan van aanpak, en het traject met externe ontwikkelpartijen begeleiden. Bij Nederland van Boven coördineerde ik een crossmediaal project met buitenlandse databedrijven, belangenorganisaties en interne afdelingen, inclusief de organisatie van een hackathon.",
      "Bij de VPRO maakte ik de invoering van agile werken mee. Ik werkte met JIRA, schreef user stories en begeleidde gebruikerstests bij het opzetten van de app Koos voor VPRO Gids. Als eindredacteur ben ik verantwoordelijk voor budgetten, planning en het bewaken van de lijn op meerdere kanalen tegelijk.",
      "Als content manager bij GezondheidsNet was ik zelfstandig verantwoordelijk voor conceptontwikkeling, het selecteren van partners voor design en techniek, en de integratie van een Nederlandse en internationale medische encyclopedie.",
    ],
    highlights: ["HollandDoc.nl", "Nederland van Boven", "App Koos (VPRO Gids)", "GezondheidsNet"],
    blobPos: "bottom-right",
  },
  {
    id: "waarom",
    color: "#DF3226",
    tag: "Waarom SURF?",
    short: "Waarom SURF?",
    heading: "Technologie met maatschappelijke impact",
    paragraphs: [
      "Na jaren in de Hilversumse mediawereld wil ik een nieuwe stap maken. Niet weg van wat ik goed kan, maar naar een omgeving waar ik het anders kan inzetten. Een coöperatie die technologie voor het hoger onderwijs en onderzoek verzorgt, en dat doet vanuit samenwerking en kennisdeling, spreekt me aan.",
      "De missie van SURF raakt aan wat mij drijft: technologie toegankelijk maken voor een breed publiek. In de mediawereld deed ik dat voor kijkers en lezers. Bij SURF zou ik dat doen voor onderwijs en onderzoek, een sector die er echt toe doet.",
      "De manier waarop SURF met haar leden werkt, de autonomie die medewerkers krijgen, de nadruk op zelfstandigheid en de open cultuur: dat past bij hoe ik het beste werk. Niet als uitvoerder van opdrachten, maar als iemand die meedenkt, verbindt en de regie voert.",
    ],
    highlights: ["Coöperatieve structuur", "Onderwijs & onderzoek", "Autonomie & eigenaarschap"],
    blobPos: "top-right",
  },
];

function JKMark({ size = 44 }) {
  return (
    <div
      className="relative flex items-center justify-center shrink-0"
      style={{ width: size, height: size }}
      aria-hidden
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
        <path
          fill="#E67300"
          d="M50 2c22 0 42 14 46 34 4 22-10 40-28 50-18 10-42 12-54-2C2 70-2 48 8 30 18 12 32 2 50 2z"
        />
      </svg>
      <span className="relative font-heading font-extrabold text-white text-sm tracking-tight">
        JK
      </span>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-black/5">
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <JKMark size={40} />
          <div className="min-w-0">
            <div className="font-heading font-extrabold text-[15px] md:text-base leading-tight truncate">
              Jasper Koning
            </div>
            <div className="text-[11px] md:text-xs text-black/60 leading-tight truncate">
              Sollicitatie Productowner Communicatiekanalen
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 md:gap-6 text-sm shrink-0">
          <a
            href="https://linkedin.com/in/jasperkoning"
            target="_blank"
            rel="noreferrer"
            className="text-surf-orange font-semibold hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="tel:+31652633802"
            className="hidden sm:inline text-black/70 hover:text-black"
          >
            06-52633802
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Blob
        color="#E67300"
        className="absolute -top-40 -right-40 w-[520px] h-[520px] opacity-[0.06]"
      />
      <Blob
        color="#0077C0"
        className="absolute top-40 -left-48 w-[420px] h-[420px] opacity-[0.05]"
      />
      <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-10 md:pb-16">
        <div className="text-[11px] md:text-xs font-heading font-extrabold uppercase tracking-[0.14em] text-surf-orange mb-5">
          Interactieve sollicitatie · SURF
        </div>
        <h1 className="font-heading font-extrabold text-4xl md:text-6xl leading-[1.05] tracking-tight max-w-4xl">
          De verbindende factor tussen techniek, content en gebruiker
        </h1>
        <div className="mt-8 max-w-2xl space-y-4 text-lg md:text-xl text-black/75 leading-relaxed">
          <p>
            Welkom. Ik ben Jasper Koning, eindredacteur bij Brainwash (omroep
            HUMAN) en daarvoor o.a. werkzaam bij VPRO, PC Magazine en NCRV.
            Mijn hele carrière beweeg ik me op het snijvlak van techniek,
            content en coördinatie.
          </p>
          <p>
            Op deze pagina laat ik zien hoe mijn achtergrond aansluit op de rol
            van Product Owner Communicatiekanalen bij SURF.
          </p>
        </div>
        <nav className="mt-10 flex flex-wrap gap-2 md:gap-2.5">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="group inline-flex items-center gap-2 rounded-full bg-white border border-black/10 pl-3 pr-4 py-2 text-xs md:text-[13px] font-semibold text-black/75 transition hover:text-black shadow-sm"
              style={{ "--c": s.color }}
            >
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ background: s.color }}
              />
              <span className="whitespace-nowrap">{s.short}</span>
              <style>{``}</style>
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}

function SectionCard({ section, index }) {
  const blobPositions = {
    "top-right": "-top-24 -right-24",
    "top-left": "-top-24 -left-24",
    "bottom-right": "-bottom-24 -right-24",
    "bottom-left": "-bottom-24 -left-24",
  };
  return (
    <section id={section.id} className="scroll-mt-28">
      <div className="relative bg-white rounded-card shadow-card overflow-hidden">
        <Blob
          color={section.color}
          className={`absolute ${blobPositions[section.blobPos]} w-[360px] h-[360px] opacity-[0.05] pointer-events-none`}
        />
        <div className="relative p-7 md:p-12">
          <div
            className="inline-block rounded-full px-3.5 py-1.5 text-[11px] font-heading font-extrabold uppercase tracking-[0.1em] text-white"
            style={{ background: section.color }}
          >
            {section.tag}
          </div>
          <h2 className="mt-5 font-heading font-extrabold text-3xl md:text-4xl leading-tight max-w-3xl">
            {section.heading}
          </h2>
          <div className="mt-5 space-y-4 text-[17px] md:text-lg leading-relaxed text-black/75 max-w-3xl">
            {section.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-2">
            {section.highlights.map((h) => (
              <span
                key={h}
                className="inline-block rounded-full bg-black/[0.04] text-black/70 text-[12px] font-semibold px-3 py-1.5 whitespace-nowrap"
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative mt-20 md:mt-28 bg-[#1a1a1a] text-white/85 overflow-hidden">
      <Blob
        color="#E67300"
        className="absolute -top-32 -right-32 w-[420px] h-[420px] opacity-[0.07]"
      />
      <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="flex items-center gap-3 mb-8">
          <JKMark size={40} />
          <div className="font-heading font-extrabold text-lg">Jasper Koning</div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-10 text-sm">
          <div>
            <div className="text-[11px] uppercase tracking-[0.14em] font-heading font-extrabold text-surf-orange mb-2">
              E-mail
            </div>
            <a
              href="mailto:kingjay@gmail.com"
              className="hover:text-white break-all"
            >
              kingjay@gmail.com
            </a>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.14em] font-heading font-extrabold text-surf-orange mb-2">
              Telefoon
            </div>
            <a href="tel:+31652633802" className="hover:text-white">
              06-52633802
            </a>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.14em] font-heading font-extrabold text-surf-orange mb-2">
              LinkedIn
            </div>
            <a
              href="https://linkedin.com/in/jasperkoning"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              linkedin.com/in/jasperkoning
            </a>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 text-xs text-white/50 max-w-2xl">
          Deze pagina is gebouwd met behulp van AI als onderdeel van mijn
          sollicitatie.
        </div>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <div className="max-w-6xl mx-auto px-5 md:px-8 space-y-8 md:space-y-10 pb-10">
        {sections.map((s, i) => (
          <SectionCard key={s.id} section={s} index={i} />
        ))}
      </div>
      <Footer />
    </main>
  );
}
