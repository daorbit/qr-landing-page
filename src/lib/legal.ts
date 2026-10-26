import { site } from "./site";

export type LegalBlock = string | { list: string[] };

export interface LegalSection {
  heading: string;
  body: LegalBlock[];
}

export interface LegalDoc {
  slug: string;
  title: string;
  description: string;
  updated: string;
  sections: LegalSection[];
}

const OPERATOR = "DA Orbit";
const UPDATED = "26 October 2026";
const CONTACT = `If you have any questions, write to us at ${site.supportEmail} or use the contact form on our website.`;

export const LEGAL_DOCS: LegalDoc[] = [
  {
    slug: "privacy",
    title: "Privacy Policy",
    description: "What we collect when you use QR Studio and when people scan your codes, why we collect it, and the choices you have.",
    updated: UPDATED,
    sections: [
      {
        heading: "Who we are",
        body: [
          `${site.name} is operated by ${OPERATOR} ("we", "us"). This policy explains how we handle personal information when you visit our website, use the ${site.name} app at ${site.appUrl.replace("https://", "")}, or scan a QR code created with it.`,
        ],
      },
      {
        heading: "Information you give us",
        body: [
          "When you create an account or use the app, we collect:",
          {
            list: [
              "Account details: your name, email address and password, or your Google account details if you sign in with Google.",
              "Profile details you choose to add, such as a photo, mobile number, country, city, language, timezone and time format.",
              "Workspace details: workspace names, the people you invite and the roles you give them.",
              "Content you create: QR codes, their destinations and settings, designs, logos, card templates and images you upload.",
              "Billing details: your plan, payment amounts and order references. Card and bank details are entered with Razorpay and are never stored by us.",
              "Messages you send us through email or our contact form.",
            ],
          },
        ],
      },
      {
        heading: "Information collected when a code is scanned",
        body: [
          "When someone scans a code created with QR Studio, our servers record details about that scan so the code's owner can see analytics. These include:",
          {
            list: [
              "The date and time of the scan.",
              "The IP address of the device, and an approximate location derived from it: country, region, city and timezone.",
              "The type of device, its browser and operating system, taken from the browser's user agent.",
              "The referring page, when the browser provides one.",
            ],
          },
          "We do not use scan data to identify individual people, build advertising profiles or track people across other websites.",
        ],
      },
      {
        heading: "How we use information",
        body: [
          {
            list: [
              "To provide, operate and secure the app, including redirecting scans to the right destination.",
              "To show scan analytics to the owner of each code and their workspace.",
              "To process payments, issue invoices and manage subscriptions.",
              "To send service emails such as sign-in codes, invitations, receipts and important account notices.",
              "To answer your questions and provide support.",
              "To understand how the website and app are used so we can improve them.",
              "To prevent fraud and abuse, and to meet our legal obligations.",
            ],
          },
        ],
      },
      {
        heading: "Service providers we share data with",
        body: [
          "We do not sell your personal information. We share it only with providers that help us run the service, and only as much as they need:",
          {
            list: [
              "Razorpay, to process payments.",
              "Cloudinary, to store images and logos you upload.",
              "MongoDB Atlas, to host our database.",
              "Google, to send email and to let you sign in with your Google account.",
              "Quantalog, to measure visits to this website.",
            ],
          },
          "We may also disclose information if the law requires it, or to protect the rights, safety and property of our users or the public.",
        ],
      },
      {
        heading: "Cookies and local storage",
        body: [
          "The app stores a sign-in token and your preferences, such as your theme, in your browser so you stay signed in. You can clear these at any time from your browser settings, which will sign you out.",
        ],
      },
      {
        heading: "How long we keep data",
        body: [
          "We keep account data and the codes you create for as long as your account is active. Scan analytics are kept with the code they belong to. When you delete a code, a workspace or your account, we delete the related data within a reasonable period, except where we must keep records such as invoices to meet legal or tax obligations.",
        ],
      },
      {
        heading: "Your choices and rights",
        body: [
          {
            list: [
              "You can view and update your profile at any time in the app's settings.",
              "You can delete your codes and workspaces from within the app.",
              `You can ask us for a copy of your data, or ask us to delete your account, by writing to ${site.supportEmail}.`,
            ],
          },
        ],
      },
      {
        heading: "Security",
        body: [
          "We use encrypted connections (HTTPS), access controls and trusted infrastructure providers to protect your information. No system is completely secure, so please use a strong password and keep it private.",
        ],
      },
      {
        heading: "Children",
        body: ["QR Studio is not intended for children under 13, and we do not knowingly collect personal information from them."],
      },
      {
        heading: "Changes to this policy",
        body: ["We may update this policy from time to time. When we do, we will change the date at the top of this page, and we will notify account holders by email of any significant changes."],
      },
      { heading: "Contact", body: [CONTACT] },
    ],
  },
  {
    slug: "terms",
    title: "Terms of Service",
    description: "The agreement between you and us when you use QR Studio.",
    updated: UPDATED,
    sections: [
      {
        heading: "Agreement",
        body: [
          `These terms are an agreement between you and ${OPERATOR}, which operates ${site.name}. By creating an account or using the service, you agree to them. If you use ${site.name} on behalf of an organisation, you confirm that you are allowed to accept these terms for it.`,
        ],
      },
      {
        heading: "Your account",
        body: [
          {
            list: [
              "You must give accurate information when you sign up and keep it up to date.",
              "You are responsible for keeping your password private and for all activity under your account.",
              "You must be at least 13 years old to use the service.",
            ],
          },
        ],
      },
      {
        heading: "Workspaces and teams",
        body: [
          "A workspace can have several members with different roles. Workspace owners and admins decide who has access and are responsible for the actions of the people they invite. Plans and limits apply to the workspace as a whole.",
        ],
      },
      {
        heading: "Acceptable use",
        body: [
          "You agree not to use QR Studio to create or point codes to content that:",
          {
            list: [
              "is illegal, fraudulent or deceptive, including phishing pages or scams;",
              "contains malware or anything designed to harm devices or data;",
              "infringes someone else's copyright, trademark or other rights;",
              "harasses, threatens or exploits others;",
              "sends spam or bulk messages that people did not ask for.",
            ],
          },
          "We may disable codes, pause redirects or suspend accounts that break these rules, with or without notice.",
        ],
      },
      {
        heading: "Your content",
        body: [
          "You own the content you create and upload, including your designs, logos and destination links. You give us permission to store, process and display it only as needed to run the service for you.",
        ],
      },
      {
        heading: "Our service",
        body: [
          `${site.name}, its software, design and brand belong to ${OPERATOR}. These terms do not give you any rights to them beyond using the service as intended.`,
          "We work to keep the service running and your codes redirecting, but we may need to change features, carry out maintenance or fix problems. We do not guarantee that the service will be uninterrupted or error-free.",
        ],
      },
      {
        heading: "Plans and payments",
        body: [
          {
            list: [
              "Some features need a paid plan. Prices are shown in Indian Rupees (INR) and are charged through Razorpay, monthly or yearly.",
              "Each plan has limits, such as the number of codes, scans per code and seats. When a limit is reached, some features may stop until you upgrade or the limit resets.",
              "Paid plans give access for the period you paid for. Refunds are covered by our Refund Policy.",
            ],
          },
        ],
      },
      {
        heading: "Codes after a plan ends",
        body: [
          "If your plan expires or a code passes its scan limit or expiry date, people who scan it may see a page explaining that the code is unavailable instead of being redirected. Upgrading or renewing restores redirects within your plan's limits.",
        ],
      },
      {
        heading: "Ending your account",
        body: [
          "You can stop using the service at any time. We may suspend or close accounts that break these terms or put the service or other users at risk. When an account is closed, its codes stop redirecting.",
        ],
      },
      {
        heading: "Disclaimers and liability",
        body: [
          'The service is provided "as is". To the extent the law allows, we are not liable for indirect, incidental or consequential losses, or for loss of profits, data or business, arising from your use of the service. Our total liability for any claim is limited to the amount you paid us in the 12 months before the claim.',
        ],
      },
      {
        heading: "Changes to these terms",
        body: ["We may update these terms. If a change is significant, we will tell account holders by email or in the app before it takes effect. Continuing to use the service after that means you accept the updated terms."],
      },
      {
        heading: "Governing law",
        body: ["These terms are governed by the laws of India."],
      },
      { heading: "Contact", body: [CONTACT] },
    ],
  },
  {
    slug: "refunds",
    title: "Cancellation & Refund Policy",
    description: "How cancellations work and when you can get your money back.",
    updated: UPDATED,
    sections: [
      {
        heading: "Cancelling a subscription",
        body: [
          "You can cancel a paid plan at any time. After you cancel, you keep access to your paid features until the end of the period you have already paid for, and the plan does not renew.",
        ],
      },
      {
        heading: "7-day money-back guarantee",
        body: [
          "If you are not happy with a new subscription, you can ask for a full refund within 7 days of your first payment for that plan.",
        ],
      },
      {
        heading: "What is not refundable",
        body: [
          {
            list: [
              "Requests made more than 7 days after the payment.",
              "Renewals of a plan you have already used beyond its first 7 days.",
              "Partly used billing periods, including after a downgrade.",
              "Accounts closed for breaking our Terms of Service.",
            ],
          },
        ],
      },
      {
        heading: "How to ask for a refund",
        body: [
          `Write to ${site.supportEmail} from the email address on your account, and include your order ID from the invoice and a short reason. We reply within 5 to 7 business days.`,
        ],
      },
      {
        heading: "How refunds are paid",
        body: [
          "Approved refunds are returned to the original payment method through Razorpay. Depending on your bank or card provider, it usually takes 5 to 10 business days for the money to appear.",
        ],
      },
      {
        heading: "Changing plans",
        body: [
          "Upgrades take effect straight away. Downgrades take effect from your next billing period, and we do not refund the difference for the current period.",
        ],
      },
      { heading: "Contact", body: [CONTACT] },
    ],
  },
  {
    slug: "shipping",
    title: "Shipping & Delivery Policy",
    description: "How QR Studio is delivered. Everything is digital, so nothing is shipped.",
    updated: UPDATED,
    sections: [
      {
        heading: "Digital service",
        body: [`${site.name} is an online software service. We do not sell or ship any physical goods, so no shipping charges apply.`],
      },
      {
        heading: "Instant access",
        body: [
          "Your account is ready as soon as you sign up. When a payment succeeds, your new plan is applied to your workspace straight away, and you will see it on the Plans and billing page in the app.",
        ],
      },
      {
        heading: "Downloads",
        body: ["QR codes can be downloaded from the app as PNG, JPG or WebP images as soon as they are created."],
      },
      {
        heading: "Confirmations and invoices",
        body: [
          "We email you to confirm important account events, such as sign-up and payments. Invoices for every successful payment can be downloaded from the Plans and billing page in the app.",
        ],
      },
      {
        heading: "Problems with access",
        body: [`If a payment succeeded but your plan has not changed, or you cannot reach your account, write to ${site.supportEmail} with your order ID and we will sort it out.`],
      },
      { heading: "Contact", body: [CONTACT] },
    ],
  },
];

export const findLegalDoc = (slug: string) => LEGAL_DOCS.find((doc) => doc.slug === slug);
