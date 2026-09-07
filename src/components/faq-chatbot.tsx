import { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";

type FaqEntry = {
  /** words/phrases that trigger this answer when found in the user's message */
  keywords: string[];
  /** shown as a tappable suggestion chip */
  question: string;
  answer: string;
};

const FAQS: FaqEntry[] = [
  {
    keywords: ["who is justine", "about you", "yourself", "introduce", "who are you"],
    question: "Who is Justine?",
    answer:
      "I'm Justine Coniendo, a Cum Laude B.S. IT graduate from Carlos Hilado Memorial State University. I work as an SEO & AI Automation Specialist, with a background in web development and graphic design.",
  },
  {
    keywords: ["service", "offer", "what can you do", "what do you do"],
    question: "What services do you offer?",
    answer:
      "Three main areas: Web Development & Layout, Graphic & Brand Design, and SEO & AI Automation — keyword strategy, on-page audits, and AI-assisted reporting pipelines.",
  },
  {
    keywords: ["skill", "good at", "expertise"],
    question: "What are your skills?",
    answer:
      "SEO & keyword research, AI automation & workflows, web development, layout & graphic design, database management, analytics & reporting, plus communication and team leadership.",
  },
  {
    keywords: ["where do you work", "current job", "employer", "currently work"],
    question: "Where do you currently work?",
    answer:
      "I'm currently an SEO Specialist & AI Automation Specialist at ML Digital Marketing Agency (since August 2026), handling accounts like HeiPro Digital, Prioritized SEO, and Next Level Wealth.",
  },
  {
    keywords: ["experience", "work history", "career", "internship"],
    question: "What's your work experience?",
    answer:
      "Alongside my current role at ML Digital Marketing Agency, I interned at PIES Information Technology Solutions doing web development and design, freelanced as a graphic designer since 2022, and served as Media, Layout & Graphics Editor for The Aquarian, CHMSU-Binalbagan's student publication.",
  },
  {
    keywords: ["education", "school", "degree", "study", "university", "college"],
    question: "What's your educational background?",
    answer:
      "I hold a Bachelor of Science in Information Technology from Carlos Hilado Memorial State University (2022–2026), where I graduated Cum Laude.",
  },
  {
    keywords: ["certif", "training", "course"],
    question: "Any certifications?",
    answer:
      "Yes — SEO Specialist Training from ML Digital Marketing Agency, The Aquarian Workshop at CHMSU Talisay, and Leadership Training with the Esteemed Alliance of Information Technology Students at CHMSU.",
  },
  {
    keywords: ["portfolio", "project", "previous work", "examples", "sample", "sonarco"],
    question: "Can I see your previous work?",
    answer:
      "Definitely — check out the Previous Works section above for brand identity, web build, editorial layout, and social campaign samples, including the SONARCO capstone platform.",
  },
  {
    keywords: ["contact", "reach", "email", "phone", "hire you", "get in touch"],
    question: "How can I contact you?",
    answer:
      'Email me at www.jlc4@gmail.com, call/text +63 991 901 5227, or use the social icons in the header/footer — Facebook, Instagram, WhatsApp, or LinkedIn. You can also hit the "Say hello" button up top.',
  },
  {
    keywords: ["available", "freelance", "open to", "new project", "opportunit"],
    question: "Are you available for new projects?",
    answer:
      "Yes, I'm currently open to new projects — feel free to reach out through the Contact section and let's talk.",
  },
  {
    keywords: ["location", "based", "where are you", "live", "city"],
    question: "Where are you based?",
    answer: "I'm based in Himamaylan City, Negros Occidental, Philippines.",
  },
  {
    keywords: ["rate", "price", "cost", "budget", "charge", "fee"],
    question: "What are your rates?",
    answer:
      "Rates depend on project scope — the best way to get an accurate quote is to reach out directly through the Contact section with details about what you need.",
  },
  {
    keywords: ["resume", "cv"],
    question: "Can I get your resume?",
    answer:
      "Sure — message me directly through the Contact section and I'll send over my full resume.",
  },
  {
    keywords: ["seo"],
    question: "What SEO work do you do?",
    answer:
      "Keyword research, on-page audits, content optimization, competitor and backlink analysis, and Google Business Profile optimization — currently applied across client accounts including HeiPro Digital, Prioritized SEO, and Next Level Wealth.",
  },
  {
    keywords: ["automation", "workflow", "ghl", "gohighlevel", "ai automation"],
    question: "What AI automation work do you do?",
    answer:
      "I build AI-assisted workflows to automate SEO reporting and content QA, including automation built in GoHighLevel for client accounts like Next Level Wealth.",
  },
];

const FALLBACK =
  "I don't have a ready answer for that — but you can ask me about my skills, services, experience, education, or previous work. For anything else, the Contact section is the best way to reach me directly!";

const SUGGESTIONS = [
  "What services do you offer?",
  "What's your work experience?",
  "How can I contact you?",
  "Are you available for new projects?",
];

function normalize(s: string) {
  return s.toLowerCase().replace(/[^\w\s]/g, " ");
}

function findAnswer(input: string): string {
  const norm = normalize(input);
  let best: FaqEntry | null = null;
  let bestScore = 0;
  for (const faq of FAQS) {
    let score = 0;
    for (const kw of faq.keywords) {
      if (norm.includes(kw)) score += kw.split(" ").length;
    }
    if (score > bestScore) {
      bestScore = score;
      best = faq;
    }
  }
  return bestScore > 0 && best ? best.answer : FALLBACK;
}

type Message = { role: "user" | "bot"; text: string };

const GREETING: Message = {
  role: "bot",
  text: "Hi! I'm Justine's portfolio assistant. Ask me about skills, services, experience, or how to get in touch.",
};

export function FaqChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    const answer = findAnswer(trimmed);
    setMessages((m) => [...m, { role: "user", text: trimmed }, { role: "bot", text: answer }]);
    setInput("");
  }

  return (
    <>
      {/* Floating toggle button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat assistant" : "Open chat assistant"}
        aria-expanded={open}
        className="fixed bottom-5 right-5 z-50 size-14 rounded-full bg-terra text-contrast-fg shadow-lg shadow-terra/30 grid place-items-center transition-transform duration-200 hover:scale-105 active:scale-95"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-5 z-50 w-[calc(100vw-2.5rem)] max-w-[360px] h-[480px] max-h-[70vh] bg-paper border border-line rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-colors duration-300">
          <div className="px-4 py-3 border-b border-line bg-surface shrink-0">
            <p className="font-display font-semibold uppercase text-sm">Ask about Justine</p>
            <p className="text-xs text-soft mt-0.5">Instant answers from my portfolio FAQ</p>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] text-sm leading-relaxed rounded-2xl px-3 py-2 ${
                  m.role === "user"
                    ? "ml-auto bg-terra text-contrast-fg rounded-br-sm"
                    : "mr-auto bg-surface text-ink rounded-bl-sm"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          <div className="px-3 pb-2 flex flex-wrap gap-1.5 shrink-0">
            {SUGGESTIONS.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => send(q)}
                className="text-[11px] font-medium border border-line rounded-full px-2.5 py-1 text-soft transition-colors hover:border-terra hover:text-terra"
              >
                {q}
              </button>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="border-t border-line p-2 flex items-center gap-2 shrink-0"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a question..."
              className="flex-1 bg-transparent text-sm px-2 py-2 outline-none placeholder:text-soft"
            />
            <button
              type="submit"
              aria-label="Send"
              disabled={!input.trim()}
              className="size-9 shrink-0 rounded-full bg-terra text-contrast-fg grid place-items-center transition-transform hover:scale-105 active:scale-95 disabled:opacity-40 disabled:hover:scale-100"
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
