import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import React from "react";
import { Document, Page, Text, View, Link, StyleSheet, Font, renderToFile } from "@react-pdf/renderer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");

// Register fonts from @fontsource packages
const nunitoDir = path.join(root, "node_modules/@fontsource/nunito/files");
const sourceDir = path.join(root, "node_modules/@fontsource/source-sans-3/files");

function pick(dir, filter) {
  const files = fs.readdirSync(dir);
  const match = files.find(filter);
  if (!match) throw new Error(`Font not found in ${dir} matching ${filter}`);
  return path.join(dir, match);
}

const nunitoLatin = (w) => pick(nunitoDir, (f) => f === `nunito-latin-${w}-normal.woff`);
const sourceLatin = (w) => pick(sourceDir, (f) => f === `source-sans-3-latin-${w}-normal.woff`);
const sourceLatinItalic = (w) => pick(sourceDir, (f) => f === `source-sans-3-latin-${w}-italic.woff`);

Font.register({
  family: "Nunito",
  fonts: [
    { src: nunitoLatin(400), fontWeight: 400 },
    { src: nunitoLatin(700), fontWeight: 700 },
    { src: nunitoLatin(800), fontWeight: 800 },
  ],
});

Font.register({
  family: "SourceSans",
  fonts: [
    { src: sourceLatin(400), fontWeight: 400 },
    { src: sourceLatinItalic(400), fontWeight: 400, fontStyle: "italic" },
    { src: sourceLatin(600), fontWeight: 600 },
    { src: sourceLatin(700), fontWeight: 700 },
  ],
});

const ORANGE = "#E67300";
const TEXT = "#1a1a1a";
const MUTED = "#4a4a4a";

const styles = StyleSheet.create({
  page: {
    paddingTop: 56,
    paddingBottom: 56,
    paddingHorizontal: 64,
    fontFamily: "SourceSans",
    fontSize: 10.5,
    lineHeight: 1.55,
    color: TEXT,
  },
  accentBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 6,
    backgroundColor: ORANGE,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 28,
  },
  jkMark: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: ORANGE,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  jkText: {
    color: "#fff",
    fontFamily: "Nunito",
    fontWeight: 800,
    fontSize: 12,
  },
  name: {
    fontFamily: "Nunito",
    fontWeight: 800,
    fontSize: 14,
    color: TEXT,
  },
  nameSub: {
    fontSize: 9,
    color: MUTED,
    marginTop: 1,
  },
  meta: {
    fontSize: 9,
    color: MUTED,
    marginBottom: 18,
  },
  subject: {
    fontFamily: "Nunito",
    fontWeight: 800,
    fontSize: 18,
    color: TEXT,
    marginBottom: 18,
  },
  paragraph: {
    marginBottom: 11,
    textAlign: "justify",
  },
  sign: {
    marginTop: 14,
  },
  ps: {
    marginTop: 14,
    fontSize: 9.5,
    color: MUTED,
    fontStyle: "italic",
  },
  // CV
  cvHeader: {
    marginBottom: 20,
  },
  cvName: {
    fontFamily: "Nunito",
    fontWeight: 800,
    fontSize: 26,
    color: TEXT,
    letterSpacing: 0.2,
  },
  cvContact: {
    fontSize: 10,
    color: MUTED,
    marginTop: 4,
  },
  sectionTitle: {
    fontFamily: "Nunito",
    fontWeight: 800,
    fontSize: 11,
    color: ORANGE,
    textTransform: "uppercase",
    letterSpacing: 1.2,
    marginTop: 16,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
    paddingBottom: 4,
  },
  profile: {
    fontSize: 10.5,
    color: TEXT,
    marginBottom: 4,
  },
  jobRow: {
    marginBottom: 10,
  },
  jobTitle: {
    fontFamily: "Nunito",
    fontWeight: 700,
    fontSize: 11.5,
    color: TEXT,
  },
  jobCompany: {
    fontSize: 10.5,
    color: ORANGE,
    fontFamily: "SourceSans",
    fontWeight: 600,
  },
  jobMeta: {
    fontSize: 9,
    color: MUTED,
    marginBottom: 3,
  },
  bullet: {
    flexDirection: "row",
    marginBottom: 1.5,
  },
  bulletDot: {
    width: 10,
    fontSize: 10,
    color: ORANGE,
  },
  bulletText: {
    flex: 1,
    fontSize: 10,
    color: TEXT,
  },
  skillRow: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skillPill: {
    fontSize: 9.5,
    color: TEXT,
    backgroundColor: "#f1f1ee",
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginRight: 5,
    marginBottom: 5,
  },
});

function JKBlock() {
  return (
    React.createElement(View, { style: styles.jkMark },
      React.createElement(Text, { style: styles.jkText }, "JK")
    )
  );
}

function LetterDoc() {
  const paragraphs = [
    "Het is een cliché om een brief te openen met hoe goed een vacature bij je past. Maar bij de vacature voor Productowner Communicatiekanalen bij SURF kan ik niet anders. Bijdragen aan een online visie en strategie, de spin in het web zijn tussen interne en externe partijen, en de planning en het budget bewaken voor de online kanalen van een organisatie die er echt toe doet. Ik ben enthousiast.",
    "In mijn werk zat ik altijd op het snijvlak van techniek, content en coördinatie. Als projectleider bij VPRO Digitaal stuurde ik platforms aan als VPRO.nl en HollandDoc.nl: interne wensen ophalen, die vertalen naar een plan van aanpak en het traject met externe ontwikkelpartijen begeleiden. Bij Nederland van Boven coördineerde ik een crossmediaal project met buitenlandse databedrijven, belangenorganisaties en interne afdelingen.",
    "Gaandeweg ben ik erachter gekomen dat het projectmatige me minstens zo goed ligt als de inhoudelijke eindverantwoordelijkheid. Processen stroomlijnen, de regie voeren over een traject. Inventariseren wie de relevante stakeholders zijn, gezamenlijke wensen ophalen, onduidelijkheden uitwerken en dat met gebruikersonderzoek en een haalbaarheidsoverzicht vertalen naar een concreet en uitvoerbaar plan. Die rol van spil, waarbij je continu schakelt tussen techniek, design en de mensen die ermee moeten werken, is waar ik het beste tot mijn recht kom.",
    "De technische kant is me vertrouwd. In mijn carrière werkte ik met WordPress, Magnolia, Prepr en vele andere CMS'en. Bij de VPRO maakte ik de invoering van agile werken mee, werkte ik met JIRA, schreef ik user stories en begeleidde ik gebruikerstests bij het opzetten van de app Koos voor VPRO Gids. Die technische affiniteit heb ik al vroeg opgebouwd: als ICT-journalist bij PC Magazine en ZDNet.nl leerde ik technische onderwerpen vertalen naar een breed publiek, een vaardigheid die ik dagelijks gebruik.",
    "Mijn ervaring ligt grotendeels in de Hilversumse mediawereld, maar ik wil graag een nieuwe stap maken. Een coöperatie die technologie voor het hoger onderwijs verzorgt, en dat doet vanuit samenwerking en kennisdeling, spreekt me aan. De manier waarop SURF met haar leden werkt, de autonomie die medewerkers krijgen en de missie om onderwijs en onderzoek digitaal sterker te maken: daar wil ik graag aan bijdragen.",
  ];

  return React.createElement(
    Document,
    null,
    React.createElement(
      Page,
      { size: "A4", style: styles.page },
      React.createElement(View, { style: styles.accentBar, fixed: true }),
      React.createElement(
        View,
        { style: styles.headerRow },
        JKBlock(),
        React.createElement(
          View,
          null,
          React.createElement(Text, { style: styles.name }, "Jasper Koning"),
          React.createElement(Text, { style: styles.nameSub }, "Amersfoort · 06-52633802 · kingjay@gmail.com")
        )
      ),
      React.createElement(Text, { style: styles.meta }, "Amersfoort, 5 april 2026"),
      React.createElement(Text, { style: styles.subject }, "Sollicitatie Productowner Communicatiekanalen"),
      React.createElement(Text, { style: styles.paragraph }, "Beste Edwin,"),
      ...paragraphs.map((p, i) => React.createElement(Text, { key: i, style: styles.paragraph }, p)),
      React.createElement(
        Text,
        { style: styles.paragraph },
        "Om mijn sollicitatie wat kracht bij te zetten, heb ik naast deze brief ook een interactieve sollicitatie gemaakt, met wat hulp van AI: ",
        React.createElement(
          Link,
          { src: "https://surfsollicitatie.vercel.app", style: { color: ORANGE, textDecoration: "none" } },
          "surfsollicitatie.vercel.app"
        )
      ),
      React.createElement(Text, { style: styles.sign }, "Met vriendelijke groet,"),
      React.createElement(Text, { style: { marginTop: 10, fontFamily: "Nunito", fontWeight: 700, fontSize: 12 } }, "Jasper Koning"),
      React.createElement(Text, { style: { fontSize: 9.5, color: MUTED } }, "tel: 06-52633802"),
      React.createElement(
        Text,
        { style: styles.ps },
        "PS. Ter wille van de transparantie: ik heb ook gesolliciteerd op de vacature van Teamhoofd AI & Data bij SURF. De functie van Productowner sluit echter qua hands-on coördinatie, de brugfunctie tussen IT en redactie, en mijn wens om processen te optimaliseren het allerbeste aan bij mijn profiel en ambities."
      )
    )
  );
}

function Job({ title, company, period, location, bullets }) {
  return React.createElement(
    View,
    { style: styles.jobRow, wrap: false },
    React.createElement(Text, { style: styles.jobTitle }, title),
    React.createElement(Text, { style: styles.jobCompany }, company),
    React.createElement(Text, { style: styles.jobMeta }, `${period}${location ? " · " + location : ""}`),
    ...bullets.map((b, i) =>
      React.createElement(
        View,
        { key: i, style: styles.bullet },
        React.createElement(Text, { style: styles.bulletDot }, "•"),
        React.createElement(Text, { style: styles.bulletText }, b)
      )
    )
  );
}

function CVDoc() {
  const jobs = [
    {
      title: "Eindredacteur",
      company: "Brainwash (omroep HUMAN)",
      period: "Oktober 2023 – heden",
      location: "Hilversum",
      bullets: [
        "Aansturing van de redactie",
        "Ontwikkeling van nieuwe formats",
        "Strategie sociale media",
        "Redactioneel concept ontwikkelen",
      ],
    },
    {
      title: "Eindredacteur",
      company: "VPRO Tegenlicht",
      period: "November 2022 – oktober 2023",
      location: "Hilversum",
      bullets: ["Doorontwikkeling redactionele koers"],
    },
    {
      title: "Channel Manager",
      company: "VPRO Gids",
      period: "Juni 2018 – november 2022",
      location: "Hilversum",
      bullets: [
        "Ontwikkeling en beheer van VPROGids.nl",
        "Opzet en uitrol sociale media strategie",
      ],
    },
    {
      title: "Eindredacteur",
      company: "NOS op 3",
      period: "September 2017 – mei 2018",
      location: "Hilversum",
      bullets: ["Verantwoordelijk voor online contentstrategie"],
    },
    {
      title: "Verschillende rollen",
      company: "VPRO",
      period: "Oktober 2007 – augustus 2017",
      location: "Hilversum",
      bullets: [
        "Eindredacteur Nederland van Boven: verantwoordelijk voor de redactionele aansturing van het crossmediale project en de datavisualisaties",
        "Projectleider VPRO Digitaal: inhoudelijke projectleiding voor platforms als VPRO.nl, HollandDoc en Upload TV; strategie en coördinatie",
        "(Web)redacteur voor o.a. Eva la Futura, Robo Sapiens, Landroof en Café de Liefde",
        "Redacteur digitaal VPRO Tegenlicht: verantwoordelijk voor website, sociale media en betrokken bij de opzet van de Tegenlicht Meet Ups",
      ],
    },
    {
      title: "Content Manager",
      company: "Gezondheidsnet.nl",
      period: "2006 – 2007",
      location: "",
      bullets: ["Verantwoordelijk voor restyle en contentstrategie van Gezondheidsnet.nl"],
    },
    {
      title: "(Senior) Webredacteur",
      company: "NCRV",
      period: "2002 – 2006",
      location: "",
      bullets: ["Online redactie voor titels als Stand.nl, Rondom 10 en Dokument"],
    },
    {
      title: "Redacteur & Webredacteur",
      company: "Minoc Business Press",
      period: "1999 – 2002",
      location: "",
      bullets: [
        "Redacteur PC Magazine NL: ICT-nieuws, technologische ontwikkelingen, games en productreviews",
        "Webredacteur ZDNet.nl: schrijven en vertalen van nieuwsberichten voor internationale publicatie",
      ],
    },
  ];

  const skills = [
    "Eindredactie & redactionele coördinatie",
    "Formatontwikkeling & storytelling",
    "Communitybuilding & publieksinteractie",
    "Crossmediale strategieën",
    "CMS (WordPress, Magnolia, Prepr)",
    "Social (Instagram, TikTok, Facebook, YouTube, LinkedIn)",
    "Meta Business Suite",
    "Google Analytics",
    "Airtable",
    "Notion",
    "Photoshop",
    "ChatGPT",
    "Claude (Code)",
    "Gemini",
  ];

  return React.createElement(
    Document,
    null,
    React.createElement(
      Page,
      { size: "A4", style: styles.page },
      React.createElement(View, { style: styles.accentBar, fixed: true }),
      React.createElement(
        View,
        { style: styles.cvHeader },
        React.createElement(
          View,
          { style: { flexDirection: "row", alignItems: "center" } },
          JKBlock(),
          React.createElement(
            View,
            null,
            React.createElement(Text, { style: styles.cvName }, "JASPER KONING"),
            React.createElement(
              Text,
              { style: styles.cvContact },
              "Amersfoort  ·  06-52633802  ·  kingjay@gmail.com  ·  linkedin.com/in/jasperkoning"
            )
          )
        )
      ),
      React.createElement(Text, { style: styles.sectionTitle }, "Profiel"),
      React.createElement(
        Text,
        { style: styles.profile },
        "Ervaren (eind)redacteur met een journalistieke achtergrond en een passie voor inhoud, strategie en digitale innovatie. Gespecialiseerd in het ontwikkelen van formats en het aansturen van redacties binnen publieke media. Combineert redactionele scherpte met gevoel voor publieksinteractie en visuele vertelvormen. Bekroond met o.a. de Prix Italia en Prix Europa voor Nederland van Boven."
      ),
      React.createElement(Text, { style: styles.sectionTitle }, "Werkervaring"),
      ...jobs.map((j, i) => React.createElement(Job, { key: i, ...j })),
      React.createElement(Text, { style: styles.sectionTitle }, "Opleiding"),
      React.createElement(Text, { style: { fontFamily: "Nunito", fontWeight: 700, fontSize: 11.5 } }, "HBO Journalistiek"),
      React.createElement(Text, { style: { fontSize: 10, color: ORANGE, fontFamily: "SourceSans", fontWeight: 600 } }, "Windesheim, Zwolle"),
      React.createElement(Text, { style: { fontSize: 9, color: MUTED } }, "1995 – 2001"),
      React.createElement(Text, { style: styles.sectionTitle }, "Vaardigheden"),
      React.createElement(
        View,
        { style: styles.skillRow },
        ...skills.map((s, i) => React.createElement(Text, { key: i, style: styles.skillPill }, s))
      )
    )
  );
}

async function main() {
  const outDir = path.join(root, "public");
  fs.mkdirSync(outDir, { recursive: true });
  await renderToFile(LetterDoc(), path.join(outDir, "Jasper-Koning-Sollicitatiebrief-SURF.pdf"));
  await renderToFile(CVDoc(), path.join(outDir, "Jasper-Koning-CV.pdf"));
  console.log("PDFs generated.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
