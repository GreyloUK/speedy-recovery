import { business } from "./business";
import { credentials } from "./credentials";
import { sharedFaqs } from "./faqs";
import { locations } from "./locations";
import { navigation } from "./navigation";
import { reviews, reviewsSummary } from "./reviews";
import { seo } from "./seo";
import { services } from "./services";

export const siteConfig = {
  business,
  navigation,
  seo,
  services,
  locations,
  credentials,
  faqs: sharedFaqs,
  reviews,
  reviewsSummary,
} as const;

export {
  business,
  credentials,
  sharedFaqs,
  locations,
  navigation,
  reviews,
  reviewsSummary,
  seo,
  services,
};
