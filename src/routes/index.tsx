import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/reveal";
import { ThemeToggle } from "@/components/theme-toggle";
import { SocialLinks } from "@/components/social-links";
import portrait from "@/assets/portrait.jpg.asset.json";
import brandAgsGarden from "@/assets/works/brand-ags-garden.jpg";
import brandIteaLogo from "@/assets/works/brand-itea-logo.jpg";
import webDashboard from "@/assets/works/web-dashboard.png";
import webInfographic from "@/assets/works/web-infographic.png";
import editorialPressFreedom from "@/assets/works/editorial-press-freedom.jpg";
import socialFisheriesCover from "@/assets/works/social-fisheries-cover.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Justine Coniendo — SEO & AI Automation Specialist" },
      {
        name: "description",
        content:
          "Portfolio of Justine Laurence G. Coniendo — a Cum Laude B.S. IT graduate, web developer and graphic designer based in Himamaylan City, Negros Occidental, Philippines. Skills in web development, graphic design, SEO and AI automation.",
      },
      { property: "og:title", content: "Justine Coniendo — SEO & AI Automation Specialist" },
      {
        property: "og:description",
        content:
          "Cum Laude B.S. IT graduate blending web development, graphic design, SEO and AI automation. Based in Himamaylan City, Philippines.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const NAV_LINKS = [
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Experience" },
  { href: "#works", label: "Projects" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

const SKILLS = [
  { name: "SEO & Keyword Research", note: "Rank & refine" },
  { name: "AI Automation & Workflows", note: "Smarter workflows" },
  { name: "Web Development", note: "Front to back end" },
  { name: "Layout & Graphic Design", note: "Brand to print" },
  { name: "Database Management", note: "Clean, indexed data" },
  { name: "Analytics & Reporting", note: "Data that drives" },
  { name: "Communication", note: "Clear, collaborative" },
  { name: "Leadership & Collaboration", note: "Team & editorial" },
];

const SERVICES = [
  {
    title: "Web Development & Layout",
    desc: "Responsive, accessible sites and clean, scalable front-end builds — from wireframe to shipped page.",
  },
  {
    title: "Graphic & Brand Design",
    desc: "Identities, editorial layouts, and print-ready collateral that communicate brand messages with detail-oriented consistency.",
  },
  {
    title: "SEO & AI Automation",
    desc: "Keyword strategy, on-page audits, and AI-assisted reporting pipelines that take the busywork out of SEO.",
  },
];

const EXPERIENCE = [
  {
    period: "Aug 2026 — Present",
    role: "SEO Specialist & AI Automation Specialist",
    org: "ML Digital Marketing Agency",
    desc: "Conducted keyword research, on-page SEO audits, and content optimization across client accounts including HeiPro Digital, Prioritized SEO, and Next Level Wealth; tracked performance using Google Analytics and SE Ranking; performed competitor and backlink analysis using Semrush; optimized Google Business Profile listings; built AI-assisted workflows to automate SEO reporting and content QA.",
  },
  {
    period: "Feb — Jun 2026",
    role: "Student Intern",
    org: "PIES Information Technology Solutions",
    desc: "Web development, web layout and design, plus PowerPoint presentations and document production for client deliverables.",
  },
  {
    period: "2022 — 2026",
    role: "Freelance Graphic Designer",
    org: "Independent clients",
    desc: "Creating visually compelling designs that communicate brand messages with customized, detail-oriented solutions across a range of clients.",
  },
  {
    period: "2023 — 2026",
    role: "Media, Layout & Graphics Editor",
    org: "The Aquarian, CHMSU-Binalbagan",
    desc: "Supervised the layout and graphics team, led video productions, and worked as broadcasting correspondent and journalist for the student publication.",
  },
];

const EDUCATION = [
  {
    degree: "Bachelor of Science in Information Technology",
    org: "Carlos Hilado Memorial State University",
    period: "2022 — 2026",
    note: "Cum Laude",
  },
];

const CERTIFICATIONS = [
  { name: "SEO Specialist Training", org: "ML Digital Marketing Agency", period: "July 2026" },
  { name: "The Aquarian Workshop", org: "CHMSU Talisay", period: "September 2024" },
  {
    name: "Leadership Training",
    org: "Esteemed Alliance of Information Technology Students, CHMSU",
    period: "April 2026",
  },
];

const WORKS: {
  title: string;
  note: string;
  images: { src: string; alt: string; pos?: "top" | "center" }[];
}[] = [
  {
    title: "Brand identity",
    note: "AG's Garden social ad & iTEA org logo — brand and print design.",
    images: [
      { src: brandAgsGarden, alt: "AG's Garden social media promotional graphic" },
      { src: brandIteaLogo, alt: "iTEA (Esteemed Alliance of IT Students) organization logo" },
    ],
  },
  {
    title: "Web build",
    note: "SONARCO loan & e-commerce platform — dashboard build and research poster.",
    images: [
      { src: webDashboard, alt: "SONARCO e-commerce platform product dashboard screenshot" },
      { src: webInfographic, alt: "SONARCO capstone research poster" },
    ],
  },
  {
    title: "Editorial layout",
    note: "World Press Freedom Day — The Aquarian editorial graphic.",
    images: [
      { src: editorialPressFreedom, alt: "World Press Freedom Day editorial poster", pos: "top" },
    ],
  },
  {
    title: "Social campaign",
    note: "Fisheries Extension book cover design.",
    images: [
      { src: socialFisheriesCover, alt: "Fisheries Extension book cover design", pos: "top" },
    ],
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Justine was one of those students who didn't just meet requirements — he pushed to understand the \u2018why\u2019 behind every system he built. That mindset showed in his output, and it's no surprise he graduated Cum Laude.",
    name: "Gerle Mae Alabado, MIT",
    role: "College Professor, Carlos Hilado Memorial State University",
  },
  {
    quote:
      "During his internship, Justine picked up our web workflow fast and needed very little hand-holding. He'd come back with layouts that were already client-ready, not just drafts.",
    name: "Joken E. Villanueva, MIT",
    role: "OJT Supervisor, PIES Information Technology Solutions",
  },
  {
    quote:
      "I advised Justine's team on SONARCO, their loan application and e-commerce platform for an agrarian reform cooperative. He handled the technical build with real care for the end users \u2014 smallholder farmers who needed something genuinely usable, not just functional.",
    name: "Gaily Rey April M. Guzon, PhDTM",
    role: "Capstone Adviser, Carlos Hilado Memorial State University",
  },
  {
    quote:
      "Justine keeps our SEO reporting for the HeiPro Digital account tight and on schedule. He flags ranking shifts before I even have to ask, which makes client updates a lot less stressful on my end.",
    name: "Angelica Olaciman",
    role: "Account Manager, ML Digital Marketing Agency",
  },
  {
    quote:
      "He built out automation in GoHighLevel that cut a lot of manual reporting work for the Next Level Wealth account. Practical, not over-engineered \u2014 exactly what we needed.",
    name: "Mark Bernard Santa Ana",
    role: "GHL Account Manager, ML Digital Marketing Agency",
  },
  {
    quote:
      "Justine's on-page audits for the Prioritized SEO account are thorough without being bloated. He explains findings clearly enough that I can hand them straight to the client.",
    name: "Jineveve Sumingcan",
    role: "Team Leader, ML Digital Marketing Agency",
  },
];

const SECTION_TITLE =
  "font-display font-bold uppercase tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-[0.95]";

/** First + last initials from a display name, e.g. "Gerle Mae Alabado, MIT" -> "GA" */
function initials(name: string) {
  const clean = (name.split(",")[0] ?? name).trim();
  const parts = clean.split(/\s+/).filter(Boolean);
  return ((parts[0]?.[0] ?? "") + (parts[parts.length - 1]?.[0] ?? "")).toUpperCase();
}

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="min-h-screen bg-paper text-ink font-body antialiased transition-colors duration-300">
      {/* VERTICAL EDITORIAL SIDE LABELS */}
      <div
        aria-hidden="true"
        className="hidden lg:flex flex-col gap-10 fixed left-3 top-1/2 -translate-y-1/2 z-40 pointer-events-none"
      >
        {["Web Development", "SEO & AI"].map((label) => (
          <span
            key={label}
            className="text-[10px] font-medium uppercase tracking-[0.3em] text-soft [writing-mode:vertical-rl] rotate-180"
          >
            {label}
          </span>
        ))}
      </div>
      <div
        aria-hidden="true"
        className="hidden lg:flex flex-col gap-10 fixed right-3 top-1/2 -translate-y-1/2 z-40 pointer-events-none"
      >
        {["Branding", "Digital Experience"].map((label) => (
          <span
            key={label}
            className="text-[10px] font-medium uppercase tracking-[0.3em] text-soft [writing-mode:vertical-rl]"
          >
            {label}
          </span>
        ))}
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-paper/85 backdrop-blur border-b border-line transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between gap-4">
          <a
            href="#top"
            className="flex flex-col leading-none group"
            onClick={() => setMenuOpen(false)}
          >
            <span className="font-display font-bold uppercase text-xl tracking-tight transition-colors group-hover:text-terra">
              JUSTINE CONIENDO
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-soft mt-1">
              SEO &amp; AI Automation Specialist
            </span>
          </a>

          <div className="hidden md:flex items-center gap-7 text-sm text-soft">
            <nav className="flex items-center gap-7">
              {NAV_LINKS.slice(0, 4).map((l) => (
                <a key={l.href} href={l.href} className="link-underline">
                  {l.label}
                </a>
              ))}
            </nav>
            <SocialLinks className="border-l border-line pl-4" />
            <a
              href="#contact"
              className="font-medium uppercase tracking-wide text-contrast-fg bg-terra rounded-full px-4 py-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-terra/30"
            >
              Say hello
            </a>
            <ThemeToggle />
          </div>

          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            {/* Mobile menu button */}
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="inline-flex items-center justify-center size-10 rounded-full border border-line transition-colors hover:border-terra"
            >
              <span className="sr-only">Menu</span>
              <div className="flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 w-5 bg-ink transition-transform duration-200 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
                />
                <span
                  className={`block h-0.5 w-5 bg-ink transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`block h-0.5 w-5 bg-ink transition-transform duration-200 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        {menuOpen && (
          <div className="md:hidden border-t border-line bg-paper">
            <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 text-base font-display uppercase tracking-wide border-b border-line last:border-0 transition-colors hover:text-terra"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-4 inline-flex items-center justify-center font-medium uppercase text-contrast-fg bg-terra rounded-full px-4 py-3"
              >
                Say hello
              </a>
              <SocialLinks size="md" className="mt-4 justify-center" />
            </nav>
          </div>
        )}
      </header>

      <main id="top" className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* HERO */}
        <section className="pt-14 sm:pt-20 pb-20">
          <Reveal>
            <div className="flex items-center gap-2 mb-6">
              <span className="size-2.5 rounded-full bg-terra" />
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-terra">
                Portfolio — 2026
              </span>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
            <div>
              <Reveal delay={0.06}>
                <h1 className="font-display font-bold uppercase leading-[0.88] tracking-tight text-[clamp(3.5rem,11vw,8rem)]">
                  Justine
                  <br /> Coniendo
                </h1>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-soft text-pretty">
                  Cum Laude B.S. IT graduate from Carlos Hilado Memorial State University, blending
                  computer programming, database management, layout and graphic design. Passionate
                  about dynamic environments that foster professional growth, continuous learning,
                  and meaningful contributions to organizational success.
                </p>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="inline-flex items-center text-sm font-medium bg-terra-soft text-terra rounded-full px-4 py-2">
                    Himamaylan City, Neg. Occ.
                  </span>
                  <span className="inline-flex items-center text-sm font-medium bg-surface rounded-full px-4 py-2">
                    BSIT, Cum Laude
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm font-medium bg-surface rounded-full px-4 py-2">
                    <span className="size-1.5 rounded-full bg-terra" />
                    Currently: SEO Specialist at ML Digital Marketing Agency
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.24}>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <a
                    href="#works"
                    className="font-display font-semibold uppercase tracking-wide text-contrast-fg bg-terra rounded-full px-6 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-terra/30"
                  >
                    View my work
                  </a>
                  <a
                    href="#contact"
                    className="font-display font-semibold uppercase tracking-wide border border-line rounded-full px-6 py-3 transition-colors duration-200 hover:border-terra hover:text-terra"
                  >
                    Get in touch
                  </a>
                </div>
              </Reveal>
            </div>

            {/* PORTRAIT */}
            <Reveal delay={0.1} className="order-first lg:order-none">
              <div className="relative mx-auto w-full max-w-[380px] aspect-square">
                <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-full bg-terra" />
                <div className="absolute inset-0 overflow-hidden rounded-full ring-1 ring-line">
                  <img
                    src={portrait.url}
                    alt="Portrait of Justine Laurence G. Coniendo"
                    className="h-full w-full object-cover object-top"
                    loading="eager"
                  />
                </div>
                {/* Rotating stamp badge, pinned to the bottom-right edge of the photo */}
                <div className="absolute bottom-0 right-0 translate-x-[10%] translate-y-[10%] size-24 sm:size-28 rounded-full bg-paper ring-1 ring-line shadow-lg grid place-items-center">
                  <svg
                    viewBox="0 0 100 100"
                    className="absolute inset-2.5 h-[calc(100%-1.25rem)] w-[calc(100%-1.25rem)] animate-[spin_14s_linear_infinite] text-terra"
                    aria-hidden="true"
                  >
                    <defs>
                      <path
                        id="stampCircle"
                        fill="none"
                        d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                      />
                    </defs>
                    <text
                      fontSize="7.4"
                      fontWeight="600"
                      letterSpacing="2.2"
                      className="uppercase fill-current"
                    >
                      <textPath href="#stampCircle" startOffset="0%">
                        Open for new projects •
                      </textPath>
                    </text>
                  </svg>
                  <span className="size-2.5 rounded-full bg-terra" />
                  <span className="sr-only">Open for new projects</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-16 sm:py-20 border-t border-line scroll-mt-20">
          <Reveal>
            <div className="flex items-baseline gap-4 mb-10">
              <span className="font-display font-semibold text-terra text-lg">01</span>
              <h2 className={SECTION_TITLE}>Skills &amp; expertise</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {SKILLS.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.03}>
                <div className="bg-surface rounded-2xl p-5 h-full border border-transparent transition-all duration-300 hover:border-terra hover:-translate-y-1">
                  <span className="block font-display font-semibold uppercase text-lg leading-tight">
                    {s.name}
                  </span>
                  <span className="block text-sm text-soft mt-1">{s.note}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-16 sm:py-20 border-t border-line scroll-mt-20">
          <Reveal>
            <div className="flex items-baseline gap-4 mb-6">
              <span className="font-display font-semibold text-terra text-lg">02</span>
              <h2 className={SECTION_TITLE}>Services</h2>
            </div>
          </Reveal>
          <div className="border-t border-line">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.04}>
                <a
                  href="#contact"
                  className="group border-b border-line py-6 flex items-center justify-between gap-4 transition-colors duration-200 hover:bg-surface/70"
                >
                  <div>
                    <span className="font-display font-semibold uppercase text-xl transition-colors group-hover:text-terra">
                      {s.title}
                    </span>
                    <p className="text-soft text-sm mt-1 max-w-[60ch]">{s.desc}</p>
                  </div>
                  <span className="text-soft group-hover:text-terra group-hover:translate-x-1 transition-all duration-200 text-2xl">
                    &rarr;
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        {/* WORK EXPERIENCE */}
        <section id="work" className="py-16 sm:py-20 border-t border-line scroll-mt-20">
          <Reveal>
            <div className="flex items-baseline gap-4 mb-10">
              <span className="font-display font-semibold text-terra text-lg">03</span>
              <h2 className={SECTION_TITLE}>Work experience</h2>
            </div>
          </Reveal>
          <div className="relative pl-6 sm:pl-8">
            <div className="absolute left-0 top-2 bottom-2 w-[3px] bg-line rounded-full" />
            {EXPERIENCE.map((e, i) => (
              <Reveal key={e.role} delay={i * 0.04}>
                <div className={`relative ${i === EXPERIENCE.length - 1 ? "" : "pb-10"}`}>
                  <span className="absolute -left-[27px] sm:-left-[35px] top-1.5 size-4 rounded-full bg-terra ring-4 ring-paper" />
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-soft">
                    {e.period}
                  </p>
                  <h3 className="font-display font-semibold uppercase text-xl mt-1">{e.role}</h3>
                  <p className="text-terra text-sm font-medium">{e.org}</p>
                  <p className="text-soft text-sm mt-2 max-w-[52ch]">{e.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* EDUCATION & CERTIFICATIONS */}
        <section id="education" className="py-16 sm:py-20 border-t border-line scroll-mt-20">
          <Reveal>
            <div className="flex items-baseline gap-4 mb-10">
              <span className="font-display font-semibold text-terra text-lg">04</span>
              <h2 className={SECTION_TITLE}>Education &amp; certifications</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4">
            <Reveal delay={0.04}>
              <div className="bg-surface rounded-2xl p-6 h-full">
                <h3 className="font-display font-semibold uppercase text-lg mb-4">Education</h3>
                <div className="space-y-4">
                  {EDUCATION.map((ed) => (
                    <div key={ed.degree}>
                      <p className="font-medium">{ed.degree}</p>
                      <p className="text-soft text-sm mt-0.5">{ed.org}</p>
                      <p className="text-soft text-sm">
                        {ed.period}
                        {ed.note ? ` · ${ed.note}` : ""}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="bg-surface rounded-2xl p-6 h-full">
                <h3 className="font-display font-semibold uppercase text-lg mb-4">
                  Certifications
                </h3>
                <div className="space-y-4">
                  {CERTIFICATIONS.map((c) => (
                    <div key={c.name}>
                      <p className="font-medium">{c.name}</p>
                      <p className="text-soft text-sm mt-0.5">{c.org}</p>
                      <p className="text-soft text-sm">{c.period}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* PREVIOUS WORKS */}
        <section id="works" className="py-16 sm:py-20 border-t border-line scroll-mt-20">
          <Reveal>
            <div className="flex items-baseline gap-4 mb-10">
              <span className="font-display font-semibold text-terra text-lg">05</span>
              <h2 className={SECTION_TITLE}>Previous works</h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {WORKS.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.05}>
                <div className="group bg-surface rounded-2xl p-4 h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-ink/10">
                  <div className="w-full aspect-[3/2] rounded-xl overflow-hidden outline-1 -outline-offset-1 outline-line flex gap-0.5 bg-terra-soft">
                    {w.images.map((img) => (
                      <img
                        key={img.src}
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        className={`h-full flex-1 object-cover ${img.pos === "top" ? "object-top" : "object-center"}`}
                      />
                    ))}
                  </div>
                  <div className="px-2 pt-4 pb-2">
                    <span className="font-display font-semibold uppercase transition-colors group-hover:text-terra">
                      {w.title}
                    </span>
                    <span className="block text-sm text-soft mt-0.5">{w.note}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="py-16 sm:py-20 border-t border-line scroll-mt-20">
          <Reveal>
            <div className="flex items-baseline gap-4 mb-10">
              <span className="font-display font-semibold text-terra text-lg">06</span>
              <h2 className={SECTION_TITLE}>Kind words</h2>
            </div>
          </Reveal>
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 sm:mx-0 sm:px-0 [scrollbar-width:thin]">
            {TESTIMONIALS.map((t, i) => (
              <Reveal
                key={t.name}
                delay={i * 0.05}
                className="shrink-0 w-[85%] sm:w-[360px] snap-start"
              >
                <div className="bg-surface rounded-2xl p-6 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/10">
                  <p className="leading-relaxed text-pretty flex-1">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-5 flex items-center gap-3">
                    <span className="bg-terra-soft text-terra size-9 rounded-full grid place-items-center text-[11px] font-semibold">
                      {initials(t.name)}
                    </span>
                    <span className="text-sm">
                      <span className="font-medium block">{t.name}</span>
                      <span className="text-soft">{t.role}</span>
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      {/* CONTACT FOOTER */}
      <footer
        id="contact"
        className="mt-8 bg-contrast text-contrast-fg scroll-mt-20 transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-terra mb-6">
              Let&rsquo;s make something
            </p>
            <h2 className="font-display font-bold uppercase text-[clamp(2.75rem,8vw,6rem)] leading-[0.9] tracking-tight">
              Get in touch
            </h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-3 gap-8">
            <Reveal delay={0.05}>
              <div>
                <p className="text-xs uppercase tracking-[0.15em] opacity-50 mb-2">Phone</p>
                <a
                  href="tel:+639919015227"
                  className="font-display font-semibold uppercase text-lg hover:text-terra transition-colors"
                >
                  +63 991 901 5227
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <p className="text-xs uppercase tracking-[0.15em] opacity-50 mb-2">Email</p>
                <a
                  href="mailto:www.jlc4@gmail.com"
                  className="font-display font-semibold text-lg hover:text-terra transition-colors break-all"
                >
                  www.jlc4@gmail.com
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div>
                <p className="text-xs uppercase tracking-[0.15em] opacity-50 mb-2">Location</p>
                <p className="font-display font-semibold uppercase text-lg">
                  Himamaylan City
                  <br />
                  Negros Occidental, PH
                </p>
              </div>
            </Reveal>
          </div>
          <div className="mt-12">
            <SocialLinks variant="contrast" size="md" />
          </div>
          <div className="mt-10 pt-6 border-t border-contrast-fg/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm opacity-70">
            <span>&copy; {new Date().getFullYear()} Justine Laurence G. Coniendo</span>
            <span className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-terra" />
              Open to new projects
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
