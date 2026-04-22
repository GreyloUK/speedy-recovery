import { z } from "zod";

const ReviewSchema = z.object({
  author: z.string().min(1),
  rating: z.number().int().min(1).max(5),
  text: z.string().min(10),
  dateISO: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  source: z.literal("Google"),
});

export type Review = z.infer<typeof ReviewSchema>;

export const reviewsSummary = {
  averageRating: 4.9,
  totalReviews: 127,
  googleProfileUrl: "[TK Google Business Profile URL]",
  isPlaceholder: true,
} as const;

const raw: Review[] = [
  {
    author: "[TK reviewer]",
    rating: 5,
    text: "[TK real Google review — client to export]",
    dateISO: "2026-03-15",
    source: "Google",
  },
  {
    author: "[TK reviewer]",
    rating: 5,
    text: "[TK real Google review — client to export]",
    dateISO: "2026-02-08",
    source: "Google",
  },
  {
    author: "[TK reviewer]",
    rating: 5,
    text: "[TK real Google review — client to export]",
    dateISO: "2026-01-24",
    source: "Google",
  },
];

export const reviews = raw.map((r) => ReviewSchema.parse(r));
