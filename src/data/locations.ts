import { z } from "zod";

const FaqSchema = z.object({
  q: z.string().min(1),
  a: z.string().min(1),
});

const AddressSchema = z.object({
  street: z.string().min(1),
  locality: z.string().min(1),
  region: z.string().min(1),
  postcode: z.string().min(2),
  country: z.string().length(2),
});

const LocationSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  name: z.string().min(1),
  postcode: z.string().min(2),
  address: AddressSchema,
  basedAt: z.string().optional(),
  geo: z
    .object({
      lat: z.number(),
      lng: z.number(),
    })
    .nullable(),
  intro: z.string().min(40),
  responseMinutes: z.number().int().positive(),
  nearbyAreas: z.array(z.string().min(1)).min(3),
  servicesOffered: z.array(z.string().min(1)).min(3),
  faqs: z.array(FaqSchema).min(2).max(5),
  heroImage: z.string().nullable(),
  verified: z.boolean(),
  napIntro: z.string().min(40).optional(),
  gbpUrl: z.string().url().optional(),
});

export type Location = z.infer<typeof LocationSchema>;

const harrowAddress = {
  street: "Cardoc House",
  locality: "North Harrow",
  region: "Harrow",
  postcode: "HA2 6AE",
  country: "GB",
} as const;

const perivaleAddress = {
  street: "3 Walmgate Road",
  locality: "Perivale",
  region: "Greenford",
  postcode: "[TK UB postcode]",
  country: "GB",
} as const;

const raw: Location[] = [
  {
    slug: "harrow",
    name: "Harrow",
    postcode: "HA2",
    address: { ...harrowAddress },
    geo: null,
    intro:
      "[DRAFT] Our registered operating base is in North Harrow, which means recovery calls across HA1, HA2, HA3, HA7 and HA8 are handled from our own yard. If you've broken down on the A312, the A4090, or any of the residential streets between Harrow-on-the-Hill and Stanmore, we're typically there inside 20 minutes. The same yard is where we provide CCTV-monitored vehicle storage — so if your car needs holding after a recovery, it doesn't leave our sight.",
    responseMinutes: 20,
    nearbyAreas: [
      "Harrow-on-the-Hill",
      "North Harrow",
      "South Harrow",
      "Wealdstone",
      "Stanmore",
      "Pinner",
      "Rayners Lane",
      "Kenton",
      "Edgware",
    ],
    servicesOffered: [
      "car-recovery",
      "accident-recovery",
      "police-pound-release",
      "specialist-recovery",
      "vehicle-storage",
    ],
    faqs: [
      {
        q: "Where exactly is your Harrow base?",
        a: "Cardoc House, North Harrow, HA2 6AE. It's our registered operating base and the yard where we store vehicles after recovery.",
      },
      {
        q: "How quickly can you get to me in Harrow?",
        a: "Typical response across HA1–HA8 is 15–25 minutes depending on time of day and traffic. On motorway incidents nearby (M1 J5, A40) we aim for 25 minutes.",
      },
      {
        q: "Do you cover the whole of north-west London?",
        a: "Yes — we regularly work across Wembley, Ealing, Hayes, Greenford and Uxbridge from our Harrow base. Central London too, though response times are longer.",
      },
    ],
    heroImage: "/images/areas/harrow.jpg",
    verified: true,
    napIntro:
      "Our registered base sits just off Pinner Road in North Harrow — a secure yard that also serves as our vehicle storage facility. From here we cover HA1 through HA8, Stanmore, Pinner and Edgware, with a 20-minute average response across the borough.",
  },

  {
    slug: "perivale",
    name: "Perivale",
    postcode: "UB6",
    address: { ...perivaleAddress },
    geo: null,
    intro:
      "[DRAFT] Our Perivale operating point on Walmgate Road covers recovery calls across UB5, UB6, UB7, W5, W7 and the industrial estates around Greenford and Park Royal. The A40 runs through our coverage area, so motorway breakdowns here are a core part of what we do — flatbed on scene, hard shoulder cleared, vehicle at your chosen destination or our Harrow yard.",
    responseMinutes: 22,
    nearbyAreas: [
      "Perivale",
      "Greenford",
      "Northolt",
      "Park Royal",
      "Ealing",
      "Hanwell",
      "Alperton",
      "Sudbury",
    ],
    servicesOffered: [
      "car-recovery",
      "accident-recovery",
      "police-pound-release",
      "specialist-recovery",
    ],
    faqs: [
      {
        q: "Where is your Perivale base?",
        a: "3 Walmgate Road, Perivale. It's an operational base — vehicle storage runs out of our main Harrow yard.",
      },
      {
        q: "Do you cover A40 breakdowns?",
        a: "Yes, regularly. The A40 corridor is one of our busiest routes and we keep vehicles positioned for fast response.",
      },
      {
        q: "Is your Perivale address the same as your registered office?",
        a: "No — our registered base is Cardoc House, North Harrow, HA2 6AE. Perivale is an operating location we run from to cover the west London corridor faster.",
      },
    ],
    heroImage: "/images/areas/perivale.jpg",
    verified: false,
    napIntro:
      "Our Perivale operating point on Walmgate Road covers UB5, UB6, UB7, W5, W7 and the industrial estates around Greenford and Park Royal. The A40 corridor is a core part of our patch — we keep a vehicle positioned here for sub-25-minute response.",
  },

  {
    slug: "greenford",
    name: "Greenford",
    postcode: "UB6",
    address: { ...perivaleAddress },
    basedAt: "perivale",
    geo: null,
    intro:
      "[DRAFT] Greenford sits directly next to our Perivale operating point, so response times here are the fastest in our west-London coverage — often 15 minutes or less. The A40 runs through the middle of UB6, and we regularly work the industrial estates around Greenford Road and the residential streets off Ruislip Road. If your car has stopped anywhere between Perivale Station and the Greenford roundabout, we're effectively round the corner.",
    responseMinutes: 15,
    nearbyAreas: [
      "Perivale",
      "Northolt",
      "Sudbury",
      "Alperton",
      "Southall",
      "Ealing",
      "Park Royal",
    ],
    servicesOffered: [
      "car-recovery",
      "accident-recovery",
      "police-pound-release",
      "specialist-recovery",
    ],
    faqs: [
      {
        q: "Which base handles Greenford calls?",
        a: "Our Perivale operating point — it's on Walmgate Road, which borders UB6. That's why our Greenford response is typically 15 minutes.",
      },
      {
        q: "Do you cover the Greenford industrial estates?",
        a: "Yes — we do a lot of commercial-vehicle recovery across the Greenford and Park Royal industrial estates, including light commercials and vans that need flatbed transport.",
      },
      {
        q: "Can you handle A40 breakdowns around Greenford?",
        a: "Regularly. The A40 is one of our busiest routes — we keep vehicles positioned for motorway incidents between Hanger Lane and Perivale.",
      },
    ],
    heroImage: "/images/areas/greenford.jpg",
    verified: false,
  },

  {
    slug: "ealing",
    name: "Ealing",
    postcode: "W5",
    address: { ...perivaleAddress },
    basedAt: "perivale",
    geo: null,
    intro:
      "[DRAFT] Ealing recovery calls are dispatched from our Perivale base, which is a short run down the A40 or across via the A4020 (Uxbridge Road). Typical response across W5 and W13 is 20 minutes. We work across the residential streets of Ealing Broadway, West Ealing, Hanwell and Acton, as well as the North Circular where it crosses the borough — flatbed transport only, because Ealing has a high density of keyless and hybrid vehicles that shouldn't be ground-towed.",
    responseMinutes: 20,
    nearbyAreas: [
      "Ealing Broadway",
      "West Ealing",
      "North Ealing",
      "Hanwell",
      "Acton",
      "Brentford",
      "Chiswick",
      "Southall",
    ],
    servicesOffered: [
      "car-recovery",
      "accident-recovery",
      "police-pound-release",
      "specialist-recovery",
    ],
    faqs: [
      {
        q: "How fast can you get to Ealing?",
        a: "Typical response to W5 and W13 is 20 minutes from our Perivale operating point, via the A40 or the A4020.",
      },
      {
        q: "Do you handle keyless / hybrid recovery in Ealing?",
        a: "Yes, specifically. Ealing has a high share of keyless and hybrid vehicles — we transport them on a flatbed only, with manufacturer-approved entry and neutral-selection procedures.",
      },
      {
        q: "Can you recover from the North Circular in Ealing?",
        a: "Yes — the A406 is one of our regular routes. Flatbed on scene, hard shoulder cleared, vehicle delivered to your chosen destination.",
      },
    ],
    heroImage: "/images/areas/ealing.jpg",
    verified: false,
  },

  {
    slug: "hayes",
    name: "Hayes",
    postcode: "UB3",
    address: { ...perivaleAddress },
    basedAt: "perivale",
    geo: null,
    intro:
      "[DRAFT] Hayes is covered from our Perivale base — a straight run down the A40, onto the A312, into UB3 and UB4. Typical response is 25 minutes depending on time of day. We regularly work the Heathrow corridor, the A312 between Hayes Bypass and the M4, and the residential streets of Hayes End and Yeading. Fleet and commercial work is a big share of what we do here — we carry a 12-ton recovery truck and a HIAB for the van and light-commercial traffic that uses the Heathrow freight routes.",
    responseMinutes: 25,
    nearbyAreas: [
      "Hayes End",
      "Yeading",
      "West Drayton",
      "Southall",
      "Hillingdon",
      "Cranford",
      "Heston",
      "Uxbridge",
    ],
    servicesOffered: [
      "car-recovery",
      "accident-recovery",
      "police-pound-release",
      "specialist-recovery",
    ],
    faqs: [
      {
        q: "Do you cover Heathrow-corridor breakdowns?",
        a: "Yes — the A312 and M4 junctions around Hayes are part of our regular patch. We dispatch a flatbed from Perivale the moment we take the call.",
      },
      {
        q: "Can you recover vans and light commercials in Hayes?",
        a: "Yes. We run a 12-ton recovery truck and a HIAB specifically for commercial-vehicle work, which is a big part of what we do in the Heathrow freight corridor.",
      },
      {
        q: "How long does it take to get to Hayes from your base?",
        a: "Typical Hayes response is 25 minutes from our Perivale operating point. On weekday rush hours the A40 can add time — we'll give you an honest estimate on the call.",
      },
    ],
    heroImage: "/images/areas/hayes.jpg",
    verified: false,
  },
];

export const locations = raw.map((l) => LocationSchema.parse(l));

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
