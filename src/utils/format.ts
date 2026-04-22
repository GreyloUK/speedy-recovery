import { business } from "../data/business";

export function telHref(e164: string = business.phone.e164): string {
  return `tel:${e164}`;
}

export function formatPhone(display: string = business.phone.display): string {
  return display;
}
