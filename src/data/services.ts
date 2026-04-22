import { z } from "zod";

const FaqSchema = z.object({
  q: z.string().min(1),
  a: z.string().min(1),
});

const ServiceSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  name: z.string().min(1),
  shortDescription: z.string().min(10),
  gridDescription: z.string().min(300).max(800),
  longDescription: z.string().min(40),
  bullets: z.array(z.string().min(1)).min(3).max(6),
  priceNote: z.string().min(1),
  heroImage: z.string().nullable(),
  gridImage: z.string().nullable(),
  iconName: z.string().min(1),
  faqs: z.array(FaqSchema).min(2).max(6),
  schema: z.object({
    serviceType: z.string().min(1),
    description: z.string().min(1),
  }),
});

export type Service = z.infer<typeof ServiceSchema>;

const raw: Service[] = [
  {
    slug: "car-recovery",
    name: "Car Recovery",
    shortDescription:
      "24/7 vehicle recovery across London — breakdowns, flat batteries, blown tyres, anywhere your car has stopped.",
    gridDescription:
      "[DRAFT] If your car has stopped moving — a breakdown on the North Circular, a flat battery in a residential street, a blown tyre on the motorway — we are 25 minutes away on average, any hour, every day. Our 6-vehicle fleet runs flatbeds and a 12-ton recovery truck, so we can move anything from a city car to a long-wheelbase van without rolling damage. One call covers collection, tow and delivery to your chosen destination, with a fixed quote confirmed before the truck leaves the yard.",
    longDescription:
      "[DRAFT] If your car has stopped — a breakdown on the North Circular, a flat battery in a residential street, a blown tyre on the motorway — we are 25 minutes away on average, 24 hours a day, every day of the year. Our 6-vehicle fleet includes flatbeds and a 12-ton recovery truck, so we can move anything from a city car to a long-wheelbase van without damage. We work with the AA, FMG and local garages, and we carry PAS43 certification and a full O-Licence — the credentials insurers and workshops need. One call handles the collection, the tow, and the delivery to your chosen destination.",
    bullets: [
      "24 hours, every day — no out-of-hours hedging",
      "25-minute average response across London",
      "Flatbed recovery — no rolling damage",
      "PAS43 certified, O-Licence holder",
      "Direct partnerships with AA and FMG",
    ],
    priceNote: "Fixed quote confirmed on the call — no meter running",
    heroImage: null,
    gridImage: "/images/vehicle-recovery.jpg",
    iconName: "truck",
    faqs: [
      {
        q: "How quickly can you get to me?",
        a: "Average response across our London coverage area is 25 minutes. On a busy night it can be longer — we'll give you an honest time on the call, not a guess.",
      },
      {
        q: "Can you recover any vehicle?",
        a: "Cars, vans, light commercials, motorbikes and EVs — all covered by our 6-vehicle fleet, which includes flatbeds and a 12-ton recovery truck.",
      },
      {
        q: "Is the price fixed before you arrive?",
        a: "Yes. We confirm a fixed quote on the call based on pickup postcode, destination and vehicle type. No meter running, no surprise add-ons.",
      },
      {
        q: "Do you work with insurers?",
        a: "Yes — we hold PAS43 2012 certification and a full O-Licence, which is what insurer panels and workshops require. We have ongoing contracts with the AA, FMG and several local garages.",
      },
    ],
    schema: {
      serviceType: "Vehicle Recovery",
      description:
        "24/7 vehicle recovery service across London — breakdowns, mechanical failures, and flat batteries handled by a PAS43-certified operator.",
    },
  },

  {
    slug: "accident-recovery",
    name: "Accident Recovery",
    shortDescription:
      "Post-collision recovery across London — dispatched fast, coordinated with insurers, vehicle handled carefully.",
    gridDescription:
      "[DRAFT] After a collision the last thing you want is to wait on a roadside managing your own logistics. We handle accident recovery across London 24/7 — flatbed lift to avoid further damage, direct coordination with your insurer if you want us to, and delivery to the approved repairer, your home, or our secure yard. PAS43 2012 certification and IVR-certified drivers are what insurer panels and AA/FMG dispatch require — that's exactly what we hold, and exactly why claim-approved recoveries can be billed direct.",
    longDescription:
      "[DRAFT] After a collision the last thing you want is to wait on a roadside managing your own logistics. We handle accident recovery across London on a 24/7 basis — flatbed lift to avoid further damage, coordination with your insurer if you want us to, and delivery to the approved repairer, your home, or our secure storage yard. Our drivers are IVR-certified and operate under a full O-Licence. We carry PAS43 2012 certification, which is what most insurer panels require to approve a claim-related recovery.",
    bullets: [
      "24/7 accident dispatch — no out-of-hours gap",
      "Flatbed lift only — no rolling a damaged vehicle",
      "Insurer-approved: PAS43 2012 + O-Licence + IVR drivers",
      "Direct liaison with AA / FMG / your broker",
      "Secure yard storage available from the same call",
    ],
    priceNote: "Most claim-approved recoveries billed direct to your insurer",
    heroImage: null,
    gridImage: "/images/accident-recovery.jpg",
    iconName: "shield",
    faqs: [
      {
        q: "Will my insurer pay for the recovery?",
        a: "In most claim-approved cases, yes — we can bill direct. Because we hold PAS43 2012 and a full O-Licence, we're on the panel for most UK insurers and AA/FMG dispatch.",
      },
      {
        q: "Can you recover the vehicle to my repairer of choice?",
        a: "Yes. Tell us the destination on the call and we'll confirm. If your insurer has specified an approved repairer we'll coordinate with them.",
      },
      {
        q: "What if the vehicle is badly damaged?",
        a: "Our 12-ton recovery truck and HIAB can handle vehicles that other operators can't, including cars that won't roll. We lift from above rather than dragging.",
      },
      {
        q: "Do you work with the police?",
        a: "Yes. We are regularly called to clear accident scenes and transport vehicles to the police pound when required, with all the PG9 paperwork handled.",
      },
    ],
    schema: {
      serviceType: "Accident Recovery",
      description:
        "24/7 post-collision vehicle recovery across London with PAS43 certification, IVR-certified drivers, and direct insurer coordination.",
    },
  },

  {
    slug: "police-pound-release",
    name: "Police Pound Release",
    shortDescription:
      "Release your vehicle from any Metropolitan Police pound — paperwork handled, same-day collection.",
    gridDescription:
      "[DRAFT] Getting a vehicle out of a Metropolitan Police pound is a paperwork exercise dressed up as a recovery job — insurance docs, V5, ID, the release fee, the storage charge, and the right form at the right window. We do this several times a week. We collect from Charlton, Perivale and every other MPS-contracted pound, handle the paperwork on your behalf with signed authorisation, and deliver the vehicle to your home, garage or a holding location. Same-day turnaround in most cases, once documents are in order.",
    longDescription:
      "[DRAFT] Getting a vehicle out of a Metropolitan Police pound is a paperwork exercise dressed up as a recovery job — insurance docs, V5, ID, the release fee, the storage charge, and the correct form at the correct window. We do this several times a week. We collect from Charlton, Perivale and every other MPS-contracted pound, handle the release paperwork on your behalf (with authorisation), and deliver the vehicle to your home, garage, or a holding location. Same-day turnaround in most cases.",
    bullets: [
      "Release from Charlton, Perivale and all MPS pounds",
      "Paperwork handled — we know which form at which window",
      "Same-day collection in most cases",
      "Flatbed delivery — no further damage on release",
      "PG9-certified operator if your vehicle needs re-inspection",
    ],
    priceNote: "Fixed release-and-delivery quote — pound fees paid on your behalf, reconciled after",
    heroImage: null,
    gridImage: "/images/police-pound-release.jpg",
    iconName: "file-check",
    faqs: [
      {
        q: "What paperwork do I need to send you?",
        a: "At minimum: V5 logbook (or a letter of authority if you don't hold the V5), your insurance certificate covering the vehicle, your photo ID, and a signed authority for us to act on your behalf. We'll tell you the exact set on the call.",
      },
      {
        q: "How long does a pound release take?",
        a: "If paperwork is in order, same-day in most cases. If the V5 is elsewhere or insurance needs to be arranged, we can usually complete the next working day.",
      },
      {
        q: "Can you pay the pound fees for me?",
        a: "Yes. We pay the release and storage fees on your behalf and reconcile them on our final invoice, with receipts attached.",
      },
      {
        q: "What if my vehicle has a PG9 prohibition?",
        a: "We can still recover it — we operate under a full O-Licence and our drivers are IVR-certified. A PG9 vehicle has to be moved on a flatbed, which is our default anyway.",
      },
    ],
    schema: {
      serviceType: "Police Pound Release",
      description:
        "Metropolitan Police pound release and vehicle collection service — paperwork handled, same-day delivery across London.",
    },
  },

  {
    slug: "specialist-recovery",
    name: "Specialist Recovery",
    shortDescription:
      "EV, hybrid, keyless, motorbike and classic recovery — flatbed-only, drivers trained for vehicles others decline.",
    gridDescription:
      "[DRAFT] A modern EV with a locked-down 12V battery, a keyless car you can't get into without the fob, a motorbike that needs soft-strap transport, a classic too low to winch — these are the vehicles a generic operator declines, damages, or charges double for. We run a specialist fleet and train drivers on the protocol each type requires: flatbed-only for EVs and hybrids, manufacturer-approved entry for keyless, soft-strap or wheel-chock for bikes, and HIAB lift for classics and low-clearance vehicles.",
    longDescription:
      "[DRAFT] A modern EV with a locked-down 12V battery, a keyless car you can't get into without the fob, a motorbike that needs softstrap transport, a classic that can't be winched — these are the vehicles a generic recovery operator declines, damages, or charges double for. We operate a specialist fleet and train our drivers in the protocols each type requires. Flatbed-only transport for EVs and hybrids (no drivetrain damage), manufacturer-approved recovery procedures for keyless, soft-strap or wheel-chock transport for bikes, and our HIAB for classics and low-clearance vehicles that can't be winched.",
    bullets: [
      "EV / hybrid — flatbed transport, no drivetrain damage",
      "Keyless cars — manufacturer-approved entry and tow protocols",
      "Motorbikes — softstrap or wheel-chock depending on bike",
      "Classics and low-clearance — HIAB lift, no winch damage",
      "PAS43-certified operator + IVR-certified drivers",
    ],
    priceNote: "Quoted on vehicle type and pickup location — flatbed/HIAB included, not an upgrade",
    heroImage: null,
    gridImage: "/images/specialist-recovery.jpg",
    iconName: "zap",
    faqs: [
      {
        q: "Do you really handle EVs properly?",
        a: "Yes. EVs go on a flatbed only — never towed with wheels on the ground, which damages the drivetrain. Our drivers are trained on major manufacturer recovery protocols (Tesla, BMW, VW, Kia).",
      },
      {
        q: "My keyless car is locked and the fob is out of battery. Can you still move it?",
        a: "Yes — this is one of the commonest calls we get. We follow manufacturer-approved entry and neutral-selection procedures, no damage to the car.",
      },
      {
        q: "Do you carry motorbikes?",
        a: "Yes. We use soft-straps and a front-wheel chock on our flatbed — no straps over paint, no dropped bikes. Sports bikes, tourers, classics all covered.",
      },
      {
        q: "Can you recover a very low classic car?",
        a: "Yes. For cars that can't be winched up a flatbed ramp, we lift with our HIAB. No scraping, no strap damage on vulnerable paint.",
      },
    ],
    schema: {
      serviceType: "Specialist Vehicle Recovery",
      description:
        "Specialist recovery for EVs, hybrids, keyless vehicles, motorbikes and classic cars across London.",
    },
  },

  {
    slug: "vehicle-storage",
    name: "Vehicle Storage",
    shortDescription:
      "Secure short- and long-term vehicle storage in Harrow — CCTV, gated yard, insurance-approved.",
    gridDescription:
      "[DRAFT] If you need somewhere to keep a vehicle after recovery — waiting for an insurance decision, a repairer slot, a sale, or while you're abroad — our Harrow yard provides CCTV-monitored, gated, insurance-approved storage. We take vehicles directly from recovery (ours or anyone else's), issue a secure-storage receipt insurers accept as chain-of-custody evidence, and can release to you, a repairer or a nominated buyer on 24 hours' notice. Daily and weekly rates, no minimum term.",
    longDescription:
      "[DRAFT] If you need somewhere to keep a vehicle after a recovery — waiting for an insurance decision, for a repairer slot, for a sale, or while you're abroad — our Harrow yard provides CCTV-monitored, gated, insurance-approved storage. We take vehicles directly from recovery (ours or anyone else's), issue a secure-storage receipt for your insurer, and can release to you, a repairer, or a buyer on 24 hours' notice. Daily and weekly rates, no minimum term.",
    bullets: [
      "CCTV-monitored, gated yard in Harrow",
      "Insurance-approved secure-storage receipt provided",
      "Same-day collection from recovery — ours or anyone else's",
      "Daily, weekly or monthly — no minimum commitment",
      "Release to any nominated third party with 24 hours' notice",
    ],
    priceNote: "Rates from [TK storage daily rate] / day — reconciled weekly",
    heroImage: null,
    gridImage: "/images/vehicle-storage.jpg",
    iconName: "warehouse",
    faqs: [
      {
        q: "How secure is the yard?",
        a: "CCTV coverage, gated vehicle entry, controlled access. We issue a storage receipt with the exact pickup and drop-off times, which insurers accept as evidence of chain of custody.",
      },
      {
        q: "Can I store a vehicle you didn't recover?",
        a: "Yes. We'll collect from any location in the London area, or you can drop the vehicle in directly.",
      },
      {
        q: "Is there a minimum storage period?",
        a: "No. Daily rates from day one, with weekly and monthly rates that reduce the per-day cost if you know you'll need longer.",
      },
      {
        q: "Can a repairer or buyer collect without me being there?",
        a: "Yes — with 24 hours' notice and a signed release authority from you, we'll hand the vehicle over to any nominated third party.",
      },
    ],
    schema: {
      serviceType: "Vehicle Storage",
      description:
        "Secure, CCTV-monitored vehicle storage in Harrow, London. Insurance-approved with flexible daily, weekly and monthly rates.",
    },
  },
];

export const services = raw.map((s) => ServiceSchema.parse(s));

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
