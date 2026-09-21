import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export type WorkImage = { type: "image"; src: string; alt: string; pos?: "top" | "center" };
export type WorkVideo = { type: "video"; url: string; caption: string };
export type WorkMedia = WorkImage | WorkVideo;
export type Work = { title: string; note: string; media: WorkMedia[] };

function fbEmbedSrc(url: string) {
  const href = encodeURIComponent(url);
  return `https://www.facebook.com/plugins/video.php?href=${href}&show_text=false&width=340&height=604&t=0`;
}

export function WorksLightbox({ work, onClose }: { work: Work | null; onClose: () => void }) {
  const [index, setIndex] = useState(0);

  // Reset to the first item whenever a new category is opened.
  useEffect(() => {
    setIndex(0);
  }, [work]);

  // Lock page scroll + support keyboard navigation while open.
  useEffect(() => {
    if (!work) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && work) setIndex((i) => (i + 1) % work.media.length);
      if (e.key === "ArrowLeft" && work)
        setIndex((i) => (i - 1 + work.media.length) % work.media.length);
    }
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [work, onClose]);

  if (!work) return null;
  const item = work.media[index] ?? work.media[0];
  if (!item) return null;
  const hasMultiple = work.media.length > 1;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${work.title} gallery`}
      className="fixed inset-0 z-[60] bg-ink/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 size-11 rounded-full bg-paper/90 text-ink grid place-items-center transition-transform hover:scale-105 active:scale-95"
      >
        <X size={20} />
      </button>

      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => (i - 1 + work.media.length) % work.media.length);
            }}
            aria-label="Previous item"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 size-11 rounded-full bg-paper/90 text-ink grid place-items-center transition-transform hover:scale-105 active:scale-95"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => (i + 1) % work.media.length);
            }}
            aria-label="Next item"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 size-11 rounded-full bg-paper/90 text-ink grid place-items-center transition-transform hover:scale-105 active:scale-95"
          >
            <ChevronRight size={22} />
          </button>
        </>
      )}

      <div
        className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === "image" ? (
          <img
            src={item.src}
            alt={item.alt}
            className={`max-h-[70vh] w-auto max-w-full rounded-xl object-contain ${
              item.pos === "top" ? "object-top" : "object-center"
            }`}
          />
        ) : (
          <div className="max-h-[70vh] aspect-[9/16] w-auto rounded-xl overflow-hidden bg-black">
            <iframe
              key={item.url}
              src={fbEmbedSrc(item.url)}
              title={item.caption}
              className="h-full w-full"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allow="autoplay; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        )}
        <div className="text-center text-paper">
          <p className="font-display font-semibold uppercase">{work.title}</p>
          <p className="text-sm opacity-80 mt-0.5">
            {item.type === "video" ? item.caption : work.note}
          </p>
          {hasMultiple && (
            <p className="text-xs opacity-60 mt-2">
              {index + 1} / {work.media.length}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
