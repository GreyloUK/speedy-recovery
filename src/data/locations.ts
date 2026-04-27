import { z } from "zod";
import ealingImage from "../assets/images/areas/ealing.jpg";
import greenfordImage from "../assets/images/areas/greenford.jpg";
import harrowImage from "../assets/images/areas/harrow.jpg";
import hayesImage from "../assets/images/areas/hayes.jpg";
import perivaleImage from "../assets/images/areas/perivale.jpg";

type LocalImage = typeof harrowImage;

const ImageSchema = z
  .object({
    src: z.string().min(1),
    width: z.number().positive(),
    height: z.number().positive(),
    format: z.string().min(1),
  })
  .passthrough()
  .transform((value) => value as LocalImage);

const NullableImageSchema = z.union([ImageSchema, z.null()]);

const FaqSchema = z.object({
  q: z.string().min(1),
  a: z.string().min(1),
});

const ContentSectionSchema = z.object({
  heading: z.string().min(1),
  body: z.string().min(80),
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
  detailSections: z.array(ContentSectionSchema).min(2).max(5),
  responseMinutes: z.number().int().positive(),
  nearbyAreas: z.array(z.string().min(1)).min(3),
  servicesOffered: z.array(z.string().min(1)).min(3),
  faqs: z.array(FaqSchema).min(2).max(5),
  heroImage: NullableImageSchema,
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
  postcode: "UB6 7LH",
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
      "Our registered operating base is in North Harrow, giving Speedy Recovery a genuine local presence for car recovery in Harrow, North Harrow and the wider HA postcode area. Calls across HA1, HA2, HA3, HA7 and HA8 are handled from our own yard, not passed to a call-centre network. If you have broken down near Northwick Park, Harrow-on-the-Hill, Wealdstone, Pinner, Stanmore, Sudbury Hill or the A312, we are typically with you in around 20 minutes depending on traffic. The same Harrow yard is also our secure vehicle storage facility, so accident-damaged, police-pound-released or insurer-held vehicles can be recovered and stored without changing hands. From this base we handle breakdown recovery, accident recovery, car, van and motorcycle recovery, specialist transport, repossession support and secure storage across north-west London.",
    detailSections: [
      {
        heading: "Car recovery in Harrow and HA postcodes",
        body: "Harrow recovery calls often come from residential streets, station car parks, school roads, local garages and the main routes linking the borough to Wembley, Northolt, Edgware and the M1. We cover HA1, HA2, HA3, HA4, HA5, HA7 and HA8 with flatbed recovery for cars, vans and motorcycles, including vehicles with flat batteries, blown tyres, clutch failure, accident damage or a fault that makes driving unsafe. Because our own operating base is in North Harrow, we can usually give a realistic response time as soon as we know the pickup postcode and destination.",
      },
      {
        heading: "Secure vehicle storage from our Harrow yard",
        body: "The Harrow site is also our secure storage yard, which is useful when a vehicle cannot go straight home after recovery. Accident-damaged vehicles, insurer-held vehicles, police-pound collections and trade vehicles can be recovered into controlled storage, then released to a repairer, buyer, insurer, fleet manager or nominated driver once the authority is in place. Keeping recovery and storage under one operator reduces handovers, protects chain of custody and makes it easier to keep track of where the vehicle is.",
      },
      {
        heading: "Breakdowns, accident recovery and specialist vehicle moves",
        body: "From Harrow we handle ordinary breakdown recovery as well as jobs that need more planning, including EV recovery, keyless vehicles, motorcycles, classic cars, supercars, vans and loaded light commercials. Our 6-vehicle fleet includes flatbeds, HIAB support and a 7.5-ton recovery truck for heavier and/or loaded vehicles, so the right truck can be assigned before dispatch. If the vehicle needs to go to a local garage, an insurer-approved repairer, a storage yard or a destination elsewhere in London + M25, we can arrange that on the same call.",
      },
      {
        heading: "Local routes we attend from Harrow",
        body: "Common Harrow callouts include the A312, Pinner Road, Kenton Road, Northwick Park, Harrow town centre, Stanmore Hill, Rayners Lane and routes towards Wembley, Edgware and the M1. We also attend homes, garages, business premises and car parks where the issue is less dramatic but still needs a proper recovery truck. Having a real Harrow operating base means the page is not just a location keyword; it reflects where vehicles are actually dispatched, stored and handed over.",
      },
    ],
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
      "vehicle-repossession",
      "supercar-classic-car-transportation",
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
    heroImage: harrowImage,
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
      "Our Perivale operating point on Walmgate Road, UB6 7LH, puts us close to one of the busiest recovery corridors in west London. From here we cover car recovery in Perivale, UB6, Greenford, Northolt, Ealing, Hanwell, Park Royal and the A40. Perivale is also a key location for drivers dealing with the Metropolitan Police pound: if your vehicle is at Perivale car pound and cannot be driven away, Speedy Recovery can help with collection, flatbed transport and delivery to your home, repairer or our secure Harrow yard once the release paperwork is in place. We also cover breakdowns, accident recovery, motorcycles, vans, keyless vehicles, EVs and specialist moves from this base. Typical response around Perivale is around 22 minutes, with faster attendance possible when a truck is already positioned on the A40 corridor.",
    detailSections: [
      {
        heading: "Car recovery in Perivale, UB6 and the A40 corridor",
        body: "Perivale is one of the most important dispatch points for our west London recovery work because it sits beside the A40, Greenford, Northolt, Alperton, Park Royal and Ealing. We recover vehicles from residential roads, supermarket car parks, industrial estates, garage forecourts and roadside incidents where a standard patrol cannot get the vehicle moving again. Calls are handled by our own drivers and trucks, with flatbed recovery available for cars, vans, motorcycles, EVs, keyless vehicles and accident-damaged vehicles that should not be driven away.",
      },
      {
        heading: "Perivale car pound release and collection",
        body: "Perivale car pound is a regular reason customers need recovery rather than a simple taxi ride home. If the Metropolitan Police pound releases the vehicle but it is not insured, not roadworthy, damaged, prohibited or unable to start, we can collect it by flatbed and deliver it to your home, repairer or secure storage. We do not replace the pound's paperwork checks, but we can explain what recovery information is needed, attend once authority is ready and move the vehicle without adding further damage.",
      },
      {
        heading: "Local support for garages, fleets and private drivers",
        body: "The Perivale base supports private drivers, local repairers, trade customers and fleet operators that need quick movement across west London. A van stuck on an industrial estate, a motorcycle that needs careful loading, a classic car going to a specialist garage or a vehicle being moved after an insurance claim can all be handled from the same operating point. Where a vehicle needs holding after collection, we can take it to our secure Harrow yard and release it later under agreed authority.",
      },
      {
        heading: "Perivale recovery routes and nearby areas",
        body: "From Walmgate Road we can reach the A40, Greenford, Northolt, Park Royal, Alperton, Sudbury, Hanwell and Ealing without crossing the whole city first. That matters when a vehicle is blocking a driveway, sitting on a busy route or stranded near an industrial estate where access can change quickly. We ask for the nearest landmark or postcode, confirm whether the vehicle rolls or steers, and agree the destination before dispatch so the recovery is planned around the actual location.",
      },
    ],
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
      "vehicle-repossession",
      "supercar-classic-car-transportation",
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
    heroImage: perivaleImage,
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
      "Greenford sits directly beside our Perivale operating point, so it is one of the fastest areas in our west London coverage. We regularly handle car recovery in Greenford, van recovery around the industrial estates, motorcycle recovery from residential streets and accident recovery on the A40. Typical response is around 15 minutes depending on traffic, especially for calls near Greenford Road, Ruislip Road, Perivale Station, the Greenford roundabout, Sudbury, Northolt and Park Royal. Because Greenford has a mix of residential roads, commercial yards and fast A-road traffic, the calls range from flat batteries and blown tyres to keyless vehicles that will not select neutral, light-commercial recoveries and vehicles that need secure storage after an accident. Jobs are dispatched from Perivale, so we do not claim a Greenford office we do not have.",
    detailSections: [
      {
        heading: "Greenford recovery from Perivale dispatch",
        body: "Greenford is covered from our Perivale operating point, so attendance is usually fast without pretending we have a separate Greenford office. We recover vehicles from Greenford Road, Ruislip Road, Oldfield Lane, Perivale Station, the Greenford roundabout, Sudbury, Northolt and the nearby industrial estates. The area generates a mix of private car breakdowns, delivery van faults, commercial yard collections, motorcycle recoveries and accident jobs on the A40, all of which can be moved by flatbed to your chosen destination.",
      },
      {
        heading: "A40, Park Royal and industrial estate recovery",
        body: "The A40 and the Greenford/Park Royal commercial routes are regular recovery points for us. Vans and light commercials often need more than roadside assistance, particularly when they are loaded, have clutch or gearbox failure, or cannot be moved safely by a small patrol vehicle. Our fleet includes a 7.5-ton recovery truck for heavier and/or loaded vehicles, plus HIAB support where access or vehicle condition means the job needs more than a simple winch onto a flatbed.",
      },
      {
        heading: "Cars, motorcycles, EVs and keyless vehicles in UB6",
        body: "Modern recovery work in Greenford is not limited to older petrol and diesel cars. We regularly move EVs, hybrids and keyless vehicles that need manufacturer-aware handling, correct neutral selection and flatbed transport to avoid drivetrain damage. Motorcycles are loaded with appropriate restraint methods, while accident-damaged vehicles can be taken to a repairer, insurer location or secure storage depending on what the driver, garage or claims handler needs next.",
      },
      {
        heading: "Destination options after a Greenford breakdown",
        body: "Once a vehicle is loaded in Greenford, the next step can be local or further across London + M25. Some drivers want delivery to a nearby garage, while others need the vehicle taken home, moved to a dealer, sent to an insurer-approved repairer or held securely while parts and authorisation are arranged. We agree the destination before the truck leaves Perivale so the job is not treated as a vague tow. Clear destination planning helps avoid second recoveries and keeps costs, timing and responsibility easier to understand. It also helps us match the truck to the vehicle and access point before dispatch, which is especially useful around busy yards and estates.",
      },
    ],
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
      "vehicle-repossession",
      "supercar-classic-car-transportation",
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
    heroImage: greenfordImage,
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
      "Ealing recovery calls are dispatched from our Perivale base, a short run down the A40 or across via the A4020 Uxbridge Road. We cover car recovery in Ealing Broadway, West Ealing, North Ealing, Hanwell, Acton and the surrounding W5 and W13 postcodes, with typical response around 20 minutes depending on traffic. The area brings a high mix of hybrid, EV and keyless vehicles, so flatbed recovery and correct neutral-selection procedures matter. We also work the North Circular and Hanger Lane approaches, where accident recovery and hard-shoulder clearance need a calm, properly equipped operator. Whether the vehicle is stranded in a residential street, outside a station, near a garage or on a busy route through the borough, Speedy Recovery can recover it to your home, repairer or secure storage.",
    detailSections: [
      {
        heading: "Car recovery in Ealing Broadway, W5 and W13",
        body: "Ealing recovery jobs are usually dispatched from Perivale, giving us a practical route into Ealing Broadway, West Ealing, North Ealing, Hanwell, Acton, South Ealing and the surrounding W5 and W13 streets. We recover cars, vans and motorcycles from homes, station areas, retail car parks, garages, apartment blocks and roadside locations where the vehicle cannot be safely driven. The destination can be your home, a chosen repairer, an insurer-approved garage, a fleet depot or secure storage if the next step has not been agreed.",
      },
      {
        heading: "Hanger Lane, A40 and North Circular recovery",
        body: "The A40, Hanger Lane and North Circular approaches need a recovery operator that understands busy traffic conditions and can clear a vehicle without unnecessary delay. We handle breakdowns, accident recovery and immobilised vehicles on these routes with flatbed recovery as the default method. If the vehicle has been damaged, has a steering or suspension issue, will not select neutral or should not be driven after a collision, we can load it safely and take it where the driver or insurer needs it to go.",
      },
      {
        heading: "EV, hybrid and keyless vehicle recovery in Ealing",
        body: "Ealing has a high number of newer vehicles, including EVs, hybrids and keyless cars that can create awkward recovery situations. A dead 12V battery, locked transmission, electronic parking brake or missing key can turn a simple callout into a job that needs proper equipment and patience. Our drivers use flatbed transport and follow careful loading procedures, reducing the risk of drivetrain, bodywork or trim damage while the vehicle is being moved through London traffic.",
      },
      {
        heading: "Garages, homes and restricted-access collection points",
        body: "Ealing recoveries are not always from obvious roadside positions. We often collect from underground car parks, apartment developments, tight residential streets, garage forecourts, station areas and commercial premises where access has to be understood before dispatch. The call handler will ask whether the vehicle can roll, whether the steering is free, whether there are height restrictions and where the vehicle needs to go. That small amount of planning helps us send the right truck and avoid a wasted journey in a busy borough, especially around controlled parking, narrow side roads and station traffic.",
      },
    ],
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
      "vehicle-repossession",
      "supercar-classic-car-transportation",
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
    heroImage: ealingImage,
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
      "Hayes is covered from our Perivale base by running down the A40, onto the A312 and into UB3 and UB4. Typical response is around 25 minutes depending on traffic. We regularly handle car recovery in Hayes, Yeading, Hayes End, Southall, Hillingdon and the Heathrow corridor, including airport collection vehicles that will not start, vans working the freight routes, and breakdowns on the A312, A4 and M4 approaches. Fleet and commercial work is a major part of this patch, so we carry a 7.5-ton recovery truck for heavier and/or loaded vehicles, plus HIAB support where a standard flatbed is not enough. From a flat battery outside a home to accident recovery near the Heathrow routes, Speedy Recovery can collect, transport and deliver the vehicle to your chosen destination or secure storage.",
    detailSections: [
      {
        heading: "Car recovery in Hayes, UB3 and UB4",
        body: "Hayes recovery calls are handled from Perivale by running down the A40, A312 and surrounding routes into UB3 and UB4. We cover Hayes, Yeading, Hayes End, Southall, Hillingdon, Cranford, West Drayton and the Heathrow corridor for breakdowns, accident recovery, flat batteries, blown tyres, vans that will not start and vehicles that should not be driven after a warning light or mechanical failure. We can collect from homes, workplaces, airport parking, garages, hotels, retail parks and roadside locations.",
      },
      {
        heading: "Heathrow corridor and commercial vehicle recovery",
        body: "The Hayes and Heathrow corridor produces a lot of van and light-commercial recovery work because of freight routes, airport support businesses, trades, couriers and fleet operators. A loaded van with clutch failure, a light commercial with suspension damage or a vehicle stuck at a depot entrance needs the right truck rather than a quick tow. Our 7.5-ton recovery vehicle and HIAB support help us recover heavier and/or loaded vehicles and move them to repair, storage or a nominated business address.",
      },
      {
        heading: "A312, A4 and M4 breakdown support",
        body: "We regularly attend breakdowns and accident scenes on the A312, A4 and M4 approaches around Hayes. These calls need clear timing, a suitable collection point and a destination agreed before dispatch, especially when traffic is heavy or the vehicle is in a risky position. Once loaded, we can deliver to your home, a local garage, an insurer-approved repairer or our secure storage yard while a claim, repair slot or fleet decision is arranged.",
      },
      {
        heading: "Private, trade and fleet recovery in Hayes",
        body: "Hayes produces a mix of private car breakdowns, trade movements and fleet recovery work. A family car outside a home, a courier van at a depot, a motorcycle near a station, a non-running airport parking vehicle or a damaged light commercial all need slightly different handling. We confirm the vehicle type, loading condition and destination before sending the truck, then recover by flatbed wherever possible. If the vehicle needs to wait for repair approval, inspection or onward delivery, secure storage can be arranged through the same call, with later release to the authorised driver, repairer or fleet contact. That keeps the recovery practical for both private drivers and business users.",
      },
    ],
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
      "vehicle-repossession",
      "supercar-classic-car-transportation",
    ],
    faqs: [
      {
        q: "Do you cover Heathrow-corridor breakdowns?",
        a: "Yes — the A312 and M4 junctions around Hayes are part of our regular patch. We dispatch a flatbed from Perivale the moment we take the call.",
      },
      {
        q: "Can you recover vans and light commercials in Hayes?",
        a: "Yes. We run a 7.5-ton recovery truck for heavier and/or loaded vehicles, plus a HIAB for commercial-vehicle work, which is a big part of what we do in the Heathrow freight corridor.",
      },
      {
        q: "How long does it take to get to Hayes from your base?",
        a: "Typical Hayes response is 25 minutes from our Perivale operating point. On weekday rush hours the A40 can add time — we'll give you an honest estimate on the call.",
      },
    ],
    heroImage: hayesImage,
    verified: false,
  },
];

export const locations = raw.map((l) => LocationSchema.parse(l));

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
