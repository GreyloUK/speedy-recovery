import { z } from "zod";

const ReviewSchema = z.object({
  author: z.string().min(1),
  rating: z.number().int().min(1).max(5),
  text: z.string().min(10),
  dateISO: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  source: z.literal("Google"),
});

export type Review = z.infer<typeof ReviewSchema>;

export const reviewsSummary: {
  averageRating: number | null;
  totalReviews: number | null;
  googleProfileUrl: string | null;
  isPlaceholder: boolean;
} = {
  averageRating: null,
  totalReviews: null,
  googleProfileUrl: null,
  isPlaceholder: true,
};

const raw: Review[] = [];

export const reviews = raw.map((r) => ReviewSchema.parse(r));
