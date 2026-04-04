/**
 * CONTENT – Alle editierbaren Inhalte der Website
 * Hier Texte, Bilder, Links und Kontaktdaten ändern.
 */

export const SITE = {
  bandName: "DREWS CORDALIS PETRY",
  tagline: "Drei Stimmen. Eine Bühne.",
  description:
    "Modernes Schlager-Entertainment mit Herz, Energie und Haltung – für Events, Galas, Festivals und TV.",
};

export const NAV_ITEMS = [
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Musik", href: "#musik" },
  { label: "Referenzen", href: "#referenzen" },
  { label: "Events", href: "#events" },
  { label: "Booking", href: "#booking" },
];

export const HERO = {
  headline: "Drei Stimmen.",
  headlineAccent: "Eine Bühne.",
  subline:
    "Modernes Schlager-Entertainment mit Energie, Haltung und Herz. Für Events, die in Erinnerung bleiben.",
  ctaPrimary: "Booking anfragen",
  ctaSecondary: "Videos ansehen",
  // Platzhalter – eigenes Hero-Bild hier eintragen:
  backgroundImage: "",
  // YouTube Video ID für stummen Hintergrund-Loop:
  backgroundVideoId: "rIcloZ8CTMY",
};

export interface Member {
  name: string;
  role: string;
  description: string;
  image: string;
  // Spotify Track ID für den Embed-Player unter der Karte:
  spotifyTrackId?: string;
}

export const BIO = {
  label: "Das Trio",
  headline: "Musik liegt in der Familie",
  intro:
    "Drei Namen, drei Legenden, eine neue Generation. Joelina Drews, Lucas Cordalis und Achim Petry vereinen das musikalische Erbe ihrer berühmten Väter mit einem eigenen, modernen Sound. Kein Retro-Trip, sondern das, was Schlager heute sein kann: authentisch, nahbar und live auf den Punkt.",
  members: [
    {
      name: "Joelina Drews",
      role: "Gesang · Tochter von Jürgen Drews",
      description:
        "Aufgewachsen im Rampenlicht als Tochter des legendären Königs von Mallorca. Joelina verbindet Pop, R&B und Schlager zu einem eigenen Sound – modern, selbstbewusst und mit einer Stimme, die unter die Haut geht. Botschafterin, Musikerin, Entertainerin.",
      image: "/images/joelina-drews.webp",
      spotifyTrackId: "12mXObfbesuwbI7JLWaYgx",
    },
    {
      name: "Lucas Cordalis",
      role: "Gesang · Sohn von Costa Cordalis",
      description:
        "Sänger, Produzent und TV-Persönlichkeit. Lucas trägt das musikalische Erbe seines Vaters Costa Cordalis weiter – mit eigener Handschrift. Dschungelcamp-Gewinner 2023, Songwriter, Studio-Profi und auf der Bühne ein Entertainer mit Charme und Substanz.",
      image: "/images/lucas-cordalis.jpg",
      spotifyTrackId: "4AxO0ArSrauGsPpnCunsKh",
    },
    {
      name: "Achim Petry",
      role: "Gesang · Sohn von Wolfgang Petry",
      description:
        "Rock trifft Schlager: Achim Petry bringt die Energie seines Vaters Wolfgang Petry mit auf die Bühne – rau, ehrlich und mitreißend. Seine Debütsingle verdrängte Helene Fischer von Platz 1 der DJ-Charts. Sänger, Songwriter und Live-Garant.",
      image: "/images/achim-petry.jpg",
      spotifyTrackId: "6pNxJ8P6hqyLjPGvlcaTt2",
    },
  ] as Member[],
  extendedBio:
    "Was Drews, Cordalis und Petry verbindet, ist mehr als ein berühmter Nachname: Es ist die gemeinsame Überzeugung, dass gute Unterhaltung ehrlich sein muss. Seit 2024 stehen sie zusammen auf der Bühne – mit den größten Hits ihrer Väter und eigenen Songs. Ihr Debütalbum 'Das Beste' erschien im Juni 2025.",
};

export interface Release {
  title: string;
  description: string;
  year: string;
  coverImage: string;
  // Spotify Track ID für Embed-Player in der Karte:
  spotifyTrackId?: string;
  streamingLinks: { platform: string; url: string }[];
}

export const MUSIC = {
  label: "Musik",
  headline: "Unsere Songs",
  subline: "Eigene Titel, die im Ohr bleiben – und auf der Bühne funktionieren.",
  // Spotify Album/Embed ID für den integrierten Player:
  spotifyAlbumId: "7DpcvKmI7fNbmj3bi75YDM",
  releases: [
    {
      title: "Verlieben, verloren, vergessen, verzeih'n",
      description: "Der Wolfgang-Petry-Klassiker in neuer Trio-Version. Gänsehaut garantiert – live und auf Platte.",
      year: "2025",
      coverImage: "",
      spotifyTrackId: "12mXObfbesuwbI7JLWaYgx",
      streamingLinks: [
        { platform: "Spotify", url: "https://open.spotify.com/intl-de/track/12mXObfbesuwbI7JLWaYgx" },
      ],
    },
    {
      title: "Wahnsinn",
      description: "Wolfgang Petrys Mega-Hit, neu interpretiert von drei Stimmen. Energie pur – auf jeder Bühne ein Highlight.",
      year: "2025",
      coverImage: "",
      spotifyTrackId: "4AxO0ArSrauGsPpnCunsKh",
      streamingLinks: [
        { platform: "Spotify", url: "https://open.spotify.com/intl-de/track/4AxO0ArSrauGsPpnCunsKh" },
      ],
    },
    {
      title: "Ein Bett im Kornfeld",
      description: "Der Jürgen-Drews-Evergreen in frischem Trio-Gewand. Sommer, Bühne, gute Laune – der Song, der jedes Publikum mitreißt.",
      year: "2025",
      coverImage: "",
      spotifyTrackId: "6pNxJ8P6hqyLjPGvlcaTt2",
      streamingLinks: [
        { platform: "Spotify", url: "https://open.spotify.com/intl-de/track/6pNxJ8P6hqyLjPGvlcaTt2" },
      ],
    },
  ] as Release[],
};

export interface Video {
  title: string;
  description: string;
  // YouTube Embed ID (z.B. "dQw4w9WgXcQ"):
  youtubeId: string;
  // Platzhalter – eigene Thumbnails hier eintragen (oder leer lassen für YouTube-Thumbnail):
  thumbnail: string;
}

export const VIDEOS = {
  label: "Videos",
  headline: "Live erleben",
  subline: "Bühne, Studio, Backstage – so klingen und wirken wir.",
  items: [
    {
      title: "Live-Auftritt",
      description: "Ausschnitt von einem Live-Auftritt – Energie pur auf der Bühne.",
      youtubeId: "rIcloZ8CTMY",
      thumbnail: "",
    },
    {
      title: "Musikvideo – Songtitel 1",
      description: "Das offizielle Musikvideo zur ersten Single.",
      youtubeId: "",
      thumbnail: "",
    },
    {
      title: "TV-Auftritt",
      description: "Unser Auftritt in der Sendung XY – live und unplugged.",
      youtubeId: "",
      thumbnail: "",
    },
  ] as Video[],
};

export interface ReferenceClip {
  title: string;
  show: string;
  youtubeId: string;
}

export const REFERENCES = {
  label: "Referenzen",
  headline: "Bekannt von Bühne & Bildschirm",
  subline: "Auszug unserer Auftritte, Sendungen und Kooperationen.",
  clips: [
    {
      title: "Ein Bett im Kornfeld",
      show: "Schlagerbooom Open Air 2025 (ARD)",
      youtubeId: "rIcloZ8CTMY",
    },
    {
      title: "Ein Bett im Kornfeld",
      show: "ZDF-Fernsehgarten",
      youtubeId: "1WpfNA8sl8g",
    },
    {
      title: "Ein Bett im Kornfeld",
      show: "Immer wieder sonntags",
      youtubeId: "NepE4pueodQ",
    },
    {
      title: "Wahnsinn",
      show: "Silvester-Schlagerbooom (ARD)",
      youtubeId: "Jz0_AGheBiI",
    },
    {
      title: "Verlieben, verloren, vergessen, verzeih'n",
      show: "Schlagerchampions",
      youtubeId: "CJ5RlOgqlPA",
    },
    {
      title: "Medley (Wieder alles im Griff / Anita)",
      show: "TV-Auftritt",
      youtubeId: "dwgJXD3qlyY",
    },
  ] as ReferenceClip[],
  quote: {
    text: 'Entertainment auf höchstem Niveau – ein Trio, das jede Bühne füllt.',
    author: "Veranstalter Stadtfest 2024",
  },
};

// Zentrale Event-Liste – Single Source of Truth für Icons und Booking-Auswahl
export const EVENT_TYPES = [
  { value: "stadtfest", label: "Stadtfest" },
  { value: "firmenfeier", label: "Firmenfeier" },
  { value: "festival", label: "Festival" },
  { value: "openair", label: "Open Air" },
  { value: "schlagerabend", label: "Schlagerabend" },
  { value: "mallorca", label: "Mallorca Party" },
  { value: "sommerfest", label: "Sommerfest" },
  { value: "karneval", label: "Karneval" },
  { value: "aftershow", label: "Aftershow" },
] as const;

export type EventTypeValue = typeof EVENT_TYPES[number]["value"];

export interface ContactPerson {
  role: string;
  name: string;
  company: string;
  email: string;
  phone: string;
}

export const BOOKING = {
  label: "Booking",
  headline: "Jetzt buchen",
  subline:
    "Sie planen ein Event, eine Gala oder ein Festival? Wir freuen uns auf Ihre Anfrage.",
  contacts: [
    {
      role: "Booking & Management",
      name: "Max Mustermann",
      company: "Muster Entertainment GmbH",
      email: "booking@beispiel.de",
      phone: "+49 123 456 7890",
    },
    {
      role: "Promotion & Presse",
      name: "Erika Musterfrau",
      company: "PR Agentur Muster",
      email: "presse@beispiel.de",
      phone: "+49 123 456 7891",
    },
  ] as ContactPerson[],
};

export const FOOTER = {
  copyright: `© ${new Date().getFullYear()} DREWS CORDALIS PETRY. Alle Rechte vorbehalten.`,
  socials: [
    { platform: "Spotify", url: "https://open.spotify.com/intl-de/artist/5kF4PCcWUUpnVsPS9mjkoK?si=84ARAYCRT1a2XafJWRGu3g", icon: "spotify" },
    { platform: "Instagram", url: "https://www.instagram.com/fiestarecordsmusic", icon: "instagram" },
    { platform: "YouTube", url: "https://youtube.com/@fiestarecordsmusic", icon: "youtube" },
  ],
  legalLinks: [
    { label: "Impressum", href: "#impressum" },
    { label: "Datenschutz", href: "#datenschutz" },
  ],
};
