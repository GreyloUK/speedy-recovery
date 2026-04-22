import { z } from "zod";

const FaqSchema = z.object({
  q: z.string().min(1),
  a: z.string().min(1),
});

export type Faq = z.infer<typeof FaqSchema>;

const raw: Faq[] = [
  {
    q: "Are you really 24/7?",
    a: "Yes. 24 hours, every day of the year — including Christmas, bank holidays and the small hours. There is no 'out of hours surcharge' and no 'call back tomorrow'.",
  },
  {
    q: "Which areas do you cover?",
    a: "All of greater London. Our registered base is in Harrow (HA2 6AE) and we operate from Perivale for west-London coverage. Typical response times across the whole coverage area are 20–30 minutes.",
  },
  {
    q: "What does it cost?",
    a: "We quote a fixed price on the call — no meter running, no surprise extras. If your recovery is insurer-approved (PAS43 / AA / FMG) we usually bill the insurer direct.",
  },
  {
    q: "Do you handle insurance work?",
    a: "Yes. We hold PAS43 2012 certification and a full O-Licence — the credentials that put us on most insurer panels. Our drivers are IVR-certified.",
  },
  {
    q: "Can you release a vehicle from a police pound?",
    a: "Yes — Charlton, Perivale and every other Metropolitan Police pound. We handle the paperwork on your behalf once you've sent the required documents.",
  },
];

export const sharedFaqs = raw.map((f) => FaqSchema.parse(f));
