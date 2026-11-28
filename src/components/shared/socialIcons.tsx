import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TelegramIcon,
  TikTokIcon,
  YouTubeIcon,
} from "./icons";

/** Icon for a social network by its label (Facebook, Telegram, …). */
export const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  Facebook: <FacebookIcon />,
  Instagram: <InstagramIcon />,
  Telegram: <TelegramIcon />,
  LinkedIn: <LinkedInIcon />,
  YouTube: <YouTubeIcon />,
  TikTok: <TikTokIcon />,
};
