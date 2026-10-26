import {
  Calendar, ClipboardList, Contact, CreditCard, Facebook, FileDown, FileText, Headphones, IdCard, Image, Instagram, Link,
  Linkedin, Mail, MapPin, MessageCircle, MessageSquare, Music, Phone, PlayCircle, Send, Star, Tag, Twitter, Wifi, Youtube,
  type LucideIcon,
} from "lucide-react";

export interface QrTypeItem {
  label: string;
  icon: LucideIcon;
}

export interface QrTypeGroup {
  title: string;
  description: string;
  items: QrTypeItem[];
}

export const QR_TYPE_GROUPS: QrTypeGroup[] = [
  {
    title: "Everyday",
    description: "Links, contacts and the basics",
    items: [
      { label: "Website", icon: Link },
      { label: "Wi-Fi", icon: Wifi },
      { label: "vCard", icon: Contact },
      { label: "MeCard", icon: IdCard },
      { label: "Email", icon: Mail },
      { label: "Phone", icon: Phone },
      { label: "SMS", icon: MessageSquare },
      { label: "Location", icon: MapPin },
      { label: "Event", icon: Calendar },
      { label: "Text", icon: FileText },
    ],
  },
  {
    title: "Social",
    description: "Profiles and chats",
    items: [
      { label: "WhatsApp", icon: MessageCircle },
      { label: "Instagram", icon: Instagram },
      { label: "Facebook", icon: Facebook },
      { label: "YouTube", icon: Youtube },
      { label: "X", icon: Twitter },
      { label: "LinkedIn", icon: Linkedin },
      { label: "Spotify", icon: Music },
      { label: "Telegram", icon: Send },
    ],
  },
  {
    title: "Media",
    description: "Files people open on the spot",
    items: [
      { label: "PDF", icon: FileDown },
      { label: "Video", icon: PlayCircle },
      { label: "Audio", icon: Headphones },
      { label: "Image", icon: Image },
    ],
  },
  {
    title: "Business",
    description: "Payments, offers and feedback",
    items: [
      { label: "PayPal", icon: CreditCard },
      { label: "Coupon", icon: Tag },
      { label: "Google review", icon: Star },
      { label: "Feedback form", icon: ClipboardList },
    ],
  },
];

export const QR_TYPE_COUNT = QR_TYPE_GROUPS.reduce((sum, group) => sum + group.items.length, 0);
