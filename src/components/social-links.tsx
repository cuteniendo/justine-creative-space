import { Facebook, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";

export const SOCIALS = [
  { label: "Facebook", href: "https://www.facebook.com/justine.laurence040", Icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com/tineytwinkles/", Icon: Instagram },
  { label: "Email", href: "mailto:www.jlc4@gmail.com", Icon: Mail },
  { label: "WhatsApp", href: "https://wa.me/+639919015227", Icon: MessageCircle },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/coniendo-justine-laurence-73a680261",
    Icon: Linkedin,
  },
] as const;

type Props = {
  /** extra classes on the wrapper */
  className?: string;
  /** icon button size classes */
  size?: "sm" | "md";
  /** use footer (contrast) colouring */
  variant?: "default" | "contrast";
};

export function SocialLinks({ className = "", size = "sm", variant = "default" }: Props) {
  const box = size === "sm" ? "size-8" : "size-10";
  const icon = size === "sm" ? "size-4" : "size-[18px]";
  const tone =
    variant === "contrast"
      ? "border-contrast-fg/20 text-contrast-fg/80 hover:text-terra hover:border-terra"
      : "border-line text-soft hover:text-terra hover:border-terra";

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {SOCIALS.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
          aria-label={label}
          title={label}
          className={`inline-grid place-items-center rounded-full border transition-all duration-200 hover:-translate-y-0.5 ${box} ${tone}`}
        >
          <Icon className={icon} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
