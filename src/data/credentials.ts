import { z } from "zod";

const CredentialSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  summary: z.string().min(1),
  certNumber: z.string().nullable(),
  iconName: z.string().min(1),
  category: z.enum(["accreditation", "partnership"]),
});

export type Credential = z.infer<typeof CredentialSchema>;

const raw: Credential[] = [
  {
    id: "pas43",
    label: "PAS43 2012 certified",
    summary:
      "The recognised UK standard for roadside vehicle recovery — required by most insurer panels before a claim-approved job is released.",
    certNumber: null,
    iconName: "badge-check",
    category: "accreditation",
  },
  {
    id: "o-licence",
    label: "O-Licence holder",
    summary:
      "Full DVSA Operator's Licence. Required to carry vehicles commercially and to move PG9-prohibited recoveries on a flatbed.",
    certNumber: null,
    iconName: "file-check",
    category: "accreditation",
  },
  {
    id: "ivr",
    label: "IVR-certified drivers",
    summary:
      "Every driver on our rota holds the Institute of Vehicle Recovery competency certification — independently assessed, what insurers and pounds expect.",
    certNumber: null,
    iconName: "user-check",
    category: "accreditation",
  },
  {
    id: "aa",
    label: "AA approved",
    summary:
      "Dispatched directly by the Automobile Association for breakdowns and accidents across our London coverage area.",
    certNumber: null,
    iconName: "radio",
    category: "partnership",
  },
  {
    id: "fmg",
    label: "FMG partner",
    summary:
      "Contracted partner to FMG — the UK's largest independent fleet incident management provider.",
    certNumber: null,
    iconName: "network",
    category: "partnership",
  },
];

export const credentials = raw.map((c) => CredentialSchema.parse(c));
