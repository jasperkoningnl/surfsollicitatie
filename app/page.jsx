import Blob from "../components/Blob";
import Header from "../components/Header";
import HeroPhoto from "../components/HeroPhoto";

function LinkedInIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function MailIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function PhoneIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ArrowUpIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M12 19V5" />
      <path d="m5 12 7-7 7 7" />
    </svg>
  );
}

const sections = [
  {
    id: "techniek",
    color: "#E67300",
    tag: "Techniek & Communicatie",
    heading: "Van ICT-journalist tot digitaal regisseur",
    paragraphs: [
      "Mijn technische nieuwsgierigheid begon vroeg. Voor mijn eerste stage bij De Telegraaf las ik het handboek HTML 4. Als ICT-journalist bij PC Magazine en ZDNet.nl schreef ik dagelijks over technologie voor een breed publiek. Niet als programmeur, maar als vertaler: complexe techniek omzetten naar heldere taal.",
      "Die vaardigheid gebruik ik nog steeds. Bij Nederland van Boven dook ik in de wereld van geodata en vertaalde dat naar datavisualisaties voor televisie. Als projectleider bij VPRO Digitaal voerde ik het gesprek met interaction designers, ontwikkelaars en vormgevers. En als eindredacteur bij Brainwash stuur ik de digitale strategie aan.",
    ],
    highlights: ["PC Magazine & ZDNet.nl", "Nederland van Boven", "VPRO Digitaal", "Brainwash"],
  },
  {
    id: "cms",
    color: "#0077C0",
    tag: "CMS'en & Online Kanalen",
    heading: "Thuis in elk systeem",
    paragraphs: [
      "In mijn carrière werkte ik met WordPress, Magnolia, Prepr, Waxtrapp en vele andere content management systemen. Daarnaast nieuwsbriefsystemen, social media tools en specifieke platforms voor online communities. Elk systeem heeft zijn eigen logica en beperkingen, en ik vind het een uitdaging om die te leren kennen en er het maximale uit te halen.",
      "Bij de VPRO was ik verantwoordelijk voor de opzet van de sociale kanalen van VPRO, Tegenlicht en later Brainwash. Van strategie tot dagelijkse uitvoering. Ik zette VPROGids.nl op als channel manager en werkte met tools als JIRA, Trello, Notion en Airtable voor workflowbeheer.",
      "Momenteel experimenteer ik met het zelf bouwen van kleine tools met behulp van AI. Niet omdat ik developer wil worden, maar omdat ik wil begrijpen hoe deze technologie werkt. Om te snappen welke mogelijkheden en risico's ermee gepaard gaan.",
    ],
    highlights: ["WordPress", "Magnolia", "Prepr", "JIRA", "Notion"],
    backdropBlob: { side: "left", color: "#0077C0" },
  },
  {
    id: "communities",
    color: "#008942",
    tag: "Communities",
    heading: "Betrokkenheid creëren en vasthouden",
    paragraphs: [
      "Een sterk online kanaal draait om de mensen die het gebruiken. Dat leerde ik al vroeg bij de NCRV, waar ik de online forums van Stand.nl en Rondom Tien modereerde. In een tijd dat online communities nog nieuw waren, ontdekte ik hoe je een veilige en levendige plek voor gesprek creëert.",
      "Bij de VPRO bouwde ik verder aan die ervaring. Voor programma's als Landroof en Café de Liefde ontwikkelde ik online communities waar kijkers actief konden meedoen. Bij Tegenlicht hielp ik het netwerk van lokale Meet Ups groeien: een mooi voorbeeld van hoe online en offline betrokkenheid elkaar versterken.",
      "Dat de online communities van SURF bij deze functie horen, maakt de rol extra aantrekkelijk. Het communities-platform is dé plek waar inhoudelijke interactie met de doelgroep plaatsvindt, en ik weet uit ervaring hoe je zo'n platform levend houdt.",
    ],
    highlights: ["Stand.nl & Rondom Tien", "Landroof & Café de Liefde", "Tegenlicht Meet Ups", "Brainwash socials"],
    image: "/jasper2.jpg",
    imageAlt: "Jasper Koning",
    floatImage: true,
    backdropBlob: { side: "right", color: "#008942" },
  },
  {
    id: "projecten",
    color: "#772583",
    tag: "Projecten & Stakeholders",
    heading: "Van wens naar werkend platform",
    paragraphs: [
      "Als projectleider bij VPRO Digitaal stuurde ik de ontwikkeling aan van platforms als VPRO.nl en HollandDoc.nl. Interne wensen ophalen bij redacties, die vertalen naar een plan van aanpak, en het traject met externe ontwikkelpartijen begeleiden. Bij Nederland van Boven coördineerde ik een crossmediaal project met buitenlandse databedrijven, belangenorganisaties en interne afdelingen, inclusief de organisatie van een hackathon.",
      "Bij de VPRO maakte ik de invoering van agile werken mee. Ik werkte met JIRA, schreef user stories en begeleidde gebruikerstests bij het opzetten van de app Koos voor VPRO Gids. Als eindredacteur ben ik verantwoordelijk voor budgetten, planning en het bewaken van de lijn op meerdere kanalen tegelijk.",
      "Als content manager bij GezondheidsNet was ik zelfstandig verantwoordelijk voor conceptontwikkeling, het selecteren van partners voor design en techniek, en de integratie van een Nederlandse en internationale medische encyclopedie.",
    ],
    highlights: ["HollandDoc.nl", "Nederland van Boven", "App Koos (VPRO Gids)", "GezondheidsNet"],
  },
  {
    id: "waarom",
    color: "#DF3226",
    tag: "Waarom SURF?",
    heading: "Technologie met maatschappelijke impact",
    paragraphs: [
      "Na jaren in de Hilversumse mediawereld wil ik een nieuwe stap maken. Niet weg van wat ik goed kan, maar naar een omgeving waar ik het anders kan inzetten. Een coöperatie die technologie voor het hoger onderwijs en onderzoek verzorgt, en dat doet vanuit samenwerking en kennisdeling, spreekt me aan.",
      "De missie van SURF raakt aan wat mij drijft: technologie toegankelijk maken voor een breed publiek. In de mediawereld deed ik dat voor kijkers en lezers. Bij SURF zou ik dat doen voor onderwijs en onderzoek, een sector die er echt toe doet.",
      "De manier waarop SURF met haar leden werkt, de autonomie die medewerkers krijgen, de nadruk op zelfstandigheid en de open cultuur: dat past bij hoe ik het beste werk. Niet als uitvoerder van opdrachten, maar als iemand die meedenkt, verbindt en de regie voert.",
    ],
    highlights: ["Coöperatieve structuur", "Onderwijs & onderzoek", "Autonomie & eigenaarschap"],
    tinted: true,
  },
];

// Convert a #RRGGBB hex to rgba with given alpha.
function rgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Big SURF blob in the top-right, deliberately bleeding off the viewport */}
      <Blob
        color="#E67300"
        className="absolute -top-32 -right-48 w-[780px] h-[440px] opacity-[0.11] pointer-events-none"
      />
      <Blob
        color="#0077C0"
        className="absolute top-[260px] -left-56 w-[560px] h-[320px] opacity-[0.07] pointer-events-none"
      />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 pt-14 md:pt-20 pb-16 md:pb-24">
        <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-center">
          <div className="md:col-span-7">
            <div className="inline-block rounded-full bg-black/[0.06] border border-black/[0.06] px-4 py-1.5 text-[11px] font-heading font-extrabold uppercase tracking-[0.16em] text-black/70 mb-6">
              Interactieve sollicitatie
            </div>
            <h1
              className="font-heading text-5xl md:text-6xl lg:text-[68px] leading-[1.02] tracking-tight text-black"
              style={{ fontWeight: 900, textWrap: "balance" }}
            >
              De verbindende factor tussen techniek, content en gebruiker
            </h1>
            <div className="mt-7 space-y-4 text-lg text-black/80 leading-relaxed max-w-xl">
              <p className="font-bold text-black">
                Welkom. Ik ben Jasper Koning, eindredacteur bij Brainwash
                (omroep HUMAN) en daarvoor o.a. werkzaam bij VPRO, PC Magazine
                en NCRV. Mijn hele carrière beweeg ik me op het snijvlak van
                techniek, content en coördinatie.
              </p>
              <p>
                Op deze pagina laat ik zien hoe mijn achtergrond aansluit op de
                rol van Product Owner Communicatiekanalen bij SURF.
              </p>
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#techniek"
                className="inline-flex items-center gap-2 rounded-full bg-surf-orange text-white text-sm font-semibold px-6 py-3 shadow-[0_12px_28px_-14px_rgba(230,115,0,0.7)] hover:brightness-95 transition"
              >
                Lees mijn verhaal
                <span aria-hidden>→</span>
              </a>
              <a
                href="https://linkedin.com/in/jasperkoning"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white border border-black/15 text-black text-sm font-semibold px-6 py-3 hover:border-black/35 transition"
              >
                <LinkedInIcon className="w-[15px] h-[15px]" />
                LinkedIn
              </a>
            </div>
          </div>
          <div className="md:col-span-5">
            <HeroPhoto />
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionCard({ section }) {
  const tintBg = section.tinted ? rgba(section.color, 0.05) : "#ffffff";
  const tintBorder = section.tinted ? rgba(section.color, 0.18) : "rgba(0,0,0,0.04)";
  return (
    <section id={section.id} className="scroll-mt-28 relative">
      {/* Optional big backdrop blob that bleeds out of the card */}
      {section.backdropBlob && (
        <Blob
          color={section.backdropBlob.color}
          className={`absolute ${section.backdropBlob.side === "left" ? "-left-56" : "-right-56"} top-1/2 -translate-y-1/2 w-[720px] h-[400px] opacity-[0.09] pointer-events-none`}
        />
      )}
      <div
        className="relative rounded-card shadow-card overflow-hidden border"
        style={{ background: tintBg, borderColor: tintBorder }}
      >
        <div className="relative p-7 md:p-12">
          <div
            className="inline-block rounded-full px-3.5 py-1.5 text-[11px] font-heading font-extrabold uppercase tracking-[0.1em] text-white"
            style={{ background: section.color }}
          >
            {section.tag}
          </div>
          <h2
            className="mt-5 font-heading font-extrabold text-3xl md:text-[40px] leading-[1.1] tracking-tight max-w-3xl"
            style={{ textWrap: "balance" }}
          >
            {section.heading}
          </h2>
          {section.floatImage && section.image ? (
            <div className="mt-6 text-[17px] md:text-lg leading-relaxed text-black/80">
              <img
                src={section.image}
                alt={section.imageAlt || ""}
                className="hidden md:block float-right ml-8 mb-4 w-[300px] lg:w-[340px] h-auto object-cover shadow-[0_20px_40px_-18px_rgba(0,0,0,0.30)]"
                style={{ borderRadius: "24px 24px 4px 24px" }}
              />
              <img
                src={section.image}
                alt={section.imageAlt || ""}
                className="md:hidden w-full h-auto object-cover mb-5 shadow-[0_20px_40px_-18px_rgba(0,0,0,0.30)]"
                style={{ borderRadius: "24px 24px 4px 24px" }}
              />
              <div className="space-y-4">
                {section.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div style={{ clear: "both" }} />
            </div>
          ) : (
            <div className="mt-5 space-y-4 text-[17px] md:text-lg leading-relaxed text-black/80 max-w-3xl">
              {section.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          )}
          <div
            className="mt-8 pt-6 border-t flex flex-wrap gap-2"
            style={{ borderColor: rgba(section.color, 0.18) }}
          >
            {section.highlights.map((h) => (
              <span
                key={h}
                className="inline-block rounded-full text-[14px] font-bold px-4 py-1.5 whitespace-nowrap"
                style={{
                  background: rgba(section.color, 0.1),
                  color: section.color,
                }}
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
    <footer className="relative bg-surf-purple text-white overflow-hidden mt-16 md:mt-24">
      <Blob
        color="#ffffff"
        className="absolute -top-40 -right-40 w-[640px] h-[360px] opacity-[0.06] pointer-events-none"
      />
      <Blob
        color="#E67300"
        className="absolute -bottom-32 -left-32 w-[520px] h-[300px] opacity-[0.12] pointer-events-none"
      />
      <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-20 md:pt-28 pb-14 md:pb-16">
        <div className="flex items-start justify-between gap-8">
          <div className="flex flex-col md:flex-row md:items-start md:gap-16 lg:gap-24 flex-1">
            <div>
              <div className="font-heading font-extrabold text-3xl md:text-4xl text-white leading-tight">
                Jasper Koning
              </div>
              <div className="mt-2 text-white/70 text-sm md:text-base">
                Sollicitatie Productowner Communicatiekanalen
              </div>
            </div>
            <div className="mt-10 md:mt-2 space-y-4 text-[15px] md:text-base">
              <a
                href="mailto:kingjay@gmail.com"
                className="flex items-center gap-3 text-white/90 hover:text-white transition"
              >
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 border border-white/15">
                  <MailIcon className="w-4 h-4" />
                </span>
                kingjay@gmail.com
              </a>
              <a
                href="tel:+31652633802"
                className="flex items-center gap-3 text-white/90 hover:text-white transition"
              >
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 border border-white/15">
                  <PhoneIcon className="w-4 h-4" />
                </span>
                06 - 52 63 38 02
              </a>
              <a
                href="https://linkedin.com/in/jasperkoning"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-white/90 hover:text-white transition"
              >
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 border border-white/15">
                  <LinkedInIcon className="w-4 h-4" />
                </span>
                linkedin.com/in/jasperkoning
              </a>
            </div>
          </div>
          <a
            href="#top"
            aria-label="Terug naar boven"
            className="shrink-0 inline-flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition"
          >
            <ArrowUpIcon className="w-5 h-5" />
          </a>
        </div>

        <div className="mt-14 md:mt-20 pt-6 border-t border-white/15 text-xs text-white/55 max-w-3xl">
          Deze pagina is gebouwd met behulp van AI als onderdeel van mijn
          sollicitatie.
        </div>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden">
        <Hero />
        <div className="max-w-6xl mx-auto px-5 md:px-8 space-y-10 md:space-y-14 pb-10 md:pb-16">
          {sections.map((s) => (
            <SectionCard key={s.id} section={s} />
          ))}
        </div>
        <Footer />
      </main>
    </>
  );
}
