import { z } from "zod";
import { business } from "./business";
import ealingImage from "../assets/images/areas/ealing.jpg";
import greenfordImage from "../assets/images/areas/greenford.jpg";
import harrowImage from "../assets/images/areas/car-recovery-harrow.jpg";
import hayesImage from "../assets/images/areas/hayes.jpg";
import perivaleImage from "../assets/images/areas/perivale.jpg";
import southallImage from "../assets/images/areas/southall.jpg";

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
  // `body` may contain blank-line breaks (\n\n) to render multiple paragraphs.
  // When `bullets` is present they render after the first paragraph, with any
  // remaining paragraphs after the list (lead-in -> list -> wrap-up).
  body: z.string().min(80),
  bullets: z.array(z.string().min(1)).min(2).optional(),
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
  detailSections: z.array(ContentSectionSchema).min(2).max(7),
  responseMinutes: z.number().int().positive(),
  nearbyAreas: z.array(z.string().min(1)).min(3),
  servicesOffered: z.array(z.string().min(1)).min(3),
  faqs: z.array(FaqSchema).min(2).max(5),
  heroImage: NullableImageSchema,
  verified: z.boolean(),
  gbpName: z.string().min(1).optional(),
  napIntro: z.string().min(40).optional(),
  gbpUrl: z.string().url().optional(),
  mapEmbedSrc: z.string().url().optional(),
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
    geo: {
      lat: 51.5879762,
      lng: -0.3596593,
    },
    intro:
      "Car recovery in Harrow runs from our own registered yard at Cardoc House in North Harrow, HA2 6AE, so a flatbed is dispatched from inside the borough rather than routed through a national call centre. We are PAS43 certified, hold a full O-Licence and run IVR-trained drivers, we work directly on the AA and FMG panels, and the same Harrow yard is our secure, CCTV-monitored storage facility. Being based in HA2 means a typical 20-minute response across HA1, HA2, HA3, HA7 and HA8, covering Harrow-on-the-Hill, Wealdstone, Pinner, Stanmore, Kenton and Hatch End, plus the A40, A409, A410 and A312. From this base we handle breakdowns, accident recovery, police pound collection, secure storage and car, van, 4x4 and motorcycle recovery, 24 hours a day, with a fixed price agreed before the truck leaves the yard.",
    detailSections: [
      {
        heading: "Car recovery in Harrow for cars, vans, 4x4s and motorbikes",
        body: "Most Harrow callouts come from residential streets, station car parks, school runs, garage forecourts and the main routes out towards Wembley, Edgware, Northolt and the M1. Give us the pickup postcode and the destination and we confirm a realistic arrival time before the truck leaves. We recover the lot on a flatbed, so nothing is dragged:\n\nWhether it is a flat battery, a blown tyre, a clutch or gearbox failure, accident damage or a car that simply will not start, one flatbed and one fixed price covers the whole job.",
        bullets: [
          "Cars, including automatics and low-clearance vehicles",
          "Vans from short-wheelbase up to long-wheelbase and Luton box vans",
          "4x4s and motorhomes",
          "Motorcycles, loaded and strapped properly",
          "EVs, hybrids and keyless cars, never ground-towed",
        ],
      },
      {
        heading: "Roadside help in Harrow before you need a tow",
        body: "Not every Harrow job ends with the car on the back of a truck. A lot of calls are quick roadside fixes, and if we can safely sort it at the kerb you are moving again without a full recovery charge:\n\nIf it cannot be fixed safely on the spot, the same driver loads the vehicle and takes it where it needs to go, so you are not waiting twice. We tell you honestly on the call which of the two it is likely to be.",
        bullets: [
          "Jump start for a flat or dead battery",
          "Lockout help and lost-key situations",
          "Wheel change after a blown or flat tyre",
          "Fuel brought out if you have run dry or misfuelled",
        ],
      },
      {
        heading: "Accident recovery, police pound release and auction collections",
        body: "From Harrow we also handle the jobs that need more than a standard breakdown call. After a collision we recover accident-damaged cars by flatbed and can take them to your insurer-approved repairer, a garage of your choice or our own yard while a claim is sorted.\n\nIf your vehicle has been seized and held at the Perivale or Charlton car pound, we collect it once the release paperwork is ready and deliver it home or to a repairer. We also collect cars bought at auction or on eBay and bring them back to Harrow or wherever you need them, which saves driving an unseen or untaxed vehicle across London. Tell us the destination and we plan the whole move on one call.",
      },
      {
        heading: "Secure vehicle storage at our Harrow yard",
        body: "The Harrow site is also our secure storage yard, which matters when a vehicle cannot go straight home after recovery. Accident-damaged cars, insurer-held vehicles, pound collections and trade stock come off the truck and into a gated, CCTV-monitored compound, then get released to a repairer, buyer, insurer, fleet manager or nominated driver once the authority is in place.\n\nBecause one operator handles recovery and storage, there are fewer handovers, a clear chain of custody and you always know where the vehicle is. Storage can be arranged on the same call as the recovery, short term while parts or approval are sorted, or longer if a claim or sale takes time.",
      },
      {
        heading: "Harrow neighbourhoods and routes we cover",
        body: "We cover the whole of Harrow and the HA postcodes, with common callout points right across the borough:\n\nWe attend homes, garages, business premises, station car parks and live roadside incidents where a patrol van cannot get the vehicle moving again. Every Harrow job is dispatched from, and if needed stored at, our own HA2 yard, so the response time we quote is based on where the truck actually is.",
        bullets: [
          "North Harrow, South Harrow and Harrow-on-the-Hill",
          "Harrow town centre, Wealdstone and Kenton",
          "Pinner, Hatch End and Rayners Lane",
          "Stanmore and Edgware",
          "The A40, A409, A410 and A312",
          "Pinner Road, Kenton Road and Northwick Park",
        ],
      },
      {
        heading: "Why Harrow drivers choose Speedy Recovery",
        body: "We are genuinely based in Harrow, not a number that diverts to a broker, so the truck starts from HA2 rather than the far side of London. We hold PAS43 2012 certification, a full O-Licence and run IVR-trained drivers, which is exactly what insurers, fleet operators and the police pounds require, and we work directly on the AA and FMG panels.\n\nOur six-vehicle fleet runs flatbeds, a 7.5-ton recovery truck for heavy or loaded vehicles and HIAB support, so the right truck is matched to the job before dispatch. Drivers across Harrow rate us five stars on our verified Google Business Profile, and the price is fixed on the call with no out-of-hours surcharge.",
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
        a: "Yes. We regularly work across Wembley, Ealing, Hayes, Greenford and Uxbridge from our Harrow base. We cover central London too, though response times are longer.",
      },
      {
        q: "Can you recover an electric or keyless car in Harrow?",
        a: "Yes. EVs, hybrids and keyless cars are recovered on a flatbed only, never ground-towed, using the correct neutral-selection and high-voltage handling procedure for the vehicle. A dead key fob, a locked transmission or an electronic handbrake is a routine call for us.",
      },
      {
        q: "Can you collect a car I bought at auction or on eBay and bring it to Harrow?",
        a: "Yes. We regularly collect auction, dealer and private-sale vehicles and deliver them to Harrow or anywhere across London and the M25, which avoids driving an unseen, untaxed or uninsured car home. Give us the collection postcode and we confirm a fixed price before we set off.",
      },
    ],
    heroImage: harrowImage,
    verified: true,
    gbpName: business.googleProfiles.harrow.name,
    gbpUrl: business.googleProfiles.harrow.href,
    mapEmbedSrc: business.googleProfiles.harrow.embedSrc,
    napIntro:
      "Our registered base sits just off Pinner Road in North Harrow, a secure yard that also serves as our vehicle storage facility. From here we cover HA1 through HA8, Stanmore, Pinner and Edgware, with a 20-minute average response across the borough.",
  },

  {
    slug: "perivale",
    name: "Perivale",
    postcode: "UB6",
    address: { ...perivaleAddress },
    geo: {
      lat: 51.5606392,
      lng: -0.31315745,
    },
    intro:
      "Our Perivale operating point on Walmgate Road, UB6 7LH sits beside one of the busiest recovery corridors in west London. From here we handle car recovery in Perivale, Greenford, Northolt, Ealing, Hanwell and Park Royal, plus the A40 itself, with a typical response of about 22 minutes. Walmgate Road is also home to the Metropolitan Police car pound. If your vehicle has been released from Perivale car pound but cannot legally or safely be driven, we collect it on a flatbed and deliver it to your home, your repairer or our secure Harrow yard. Breakdowns, accident recovery, motorcycles, vans, keyless cars and EVs all run from this base around the clock.",
    detailSections: [
      {
        heading: "Car recovery in Perivale, UB6 and the A40 corridor",
        body: "Perivale is the dispatch point for most of our west London work because it sits beside the A40 and borders Greenford, Northolt, Alperton, Park Royal and Ealing. We recover vehicles from residential roads, supermarket car parks, industrial estates, garage forecourts and live roadside incidents where a patrol van cannot get the car moving again. Our own drivers take every call, and flatbed recovery covers cars, vans, motorcycles, EVs, keyless vehicles and accident-damaged cars that should not be driven.",
      },
      {
        heading: "Perivale car pound release and collection",
        body: "The car pound on Walmgate Road is a regular reason drivers need a recovery truck rather than a taxi home. If the pound releases your vehicle but it has no valid insurance for the drive, no MOT, a PG9 prohibition or a fault that stops it starting, it has to leave on a flatbed. We cannot do the pound's paperwork for you, but we will tell you what the pound asks for, attend once your release authority is ready and move the vehicle without adding a scratch.",
      },
      {
        heading: "Local support for garages, fleets and private drivers",
        body: "The Perivale base supports private drivers, local repairers, trade customers and fleet operators across west London. A van stuck on an industrial estate, a motorcycle that needs careful loading, a classic car heading to a specialist garage or a vehicle moving after an insurance claim are all routine jobs from this yard. If a vehicle needs holding after collection, we take it to our secure Harrow yard and release it under agreed authority.",
      },
      {
        heading: "Perivale recovery routes and nearby areas",
        body: "From Walmgate Road we reach the A40, Greenford, Northolt, Park Royal, Alperton, Sudbury, Hanwell and Ealing without crossing the city first. That counts when a vehicle is blocking a driveway or stranded on a busy route. Before dispatch we ask for the nearest landmark or postcode, check whether the vehicle rolls and steers, and agree the destination, so the truck that arrives is the right one for the job.",
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
        a: "3 Walmgate Road, Perivale. It's an operational base. Vehicle storage runs out of our main Harrow yard.",
      },
      {
        q: "Do you cover A40 breakdowns?",
        a: "Yes, regularly. The A40 corridor is one of our busiest routes and we keep vehicles positioned for fast response.",
      },
      {
        q: "Is your Perivale address the same as your registered office?",
        a: "No. Our registered base is Cardoc House, North Harrow, HA2 6AE. Perivale is an operating location we run from to cover the west London corridor faster.",
      },
    ],
    heroImage: perivaleImage,
    verified: true,
    gbpName: business.googleProfiles.perivalePolicePound.name,
    gbpUrl: business.googleProfiles.perivalePolicePound.href,
    mapEmbedSrc: business.googleProfiles.perivalePolicePound.embedSrc,
    napIntro:
      "Our Perivale operating point on Walmgate Road covers UB5, UB6, UB7, W5, W7 and the industrial estates around Greenford and Park Royal. The A40 corridor is a core part of our patch and we keep a truck positioned here, so response is usually under 25 minutes.",
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
        a: "Our Perivale operating point on Walmgate Road, which borders UB6. That's why our Greenford response is typically 15 minutes.",
      },
      {
        q: "Do you cover the Greenford industrial estates?",
        a: "Yes. We do a lot of commercial-vehicle recovery across the Greenford and Park Royal industrial estates, including light commercials and vans that need flatbed transport.",
      },
      {
        q: "Can you handle A40 breakdowns around Greenford?",
        a: "Regularly. The A40 is one of our busiest routes and we keep vehicles positioned for incidents between Hanger Lane and Perivale.",
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
        a: "Yes, specifically. Ealing has a high share of keyless and hybrid vehicles. We transport them on a flatbed only, with manufacturer-approved entry and neutral-selection procedures.",
      },
      {
        q: "Can you recover from the North Circular in Ealing?",
        a: "Yes. The A406 is one of our regular routes. Flatbed on scene, hard shoulder cleared, vehicle delivered to your chosen destination.",
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
        a: "Yes. The A312 and M4 junctions around Hayes are part of our regular patch. We dispatch a flatbed from Perivale the moment we take the call.",
      },
      {
        q: "Can you recover vans and light commercials in Hayes?",
        a: "Yes. We run a 7.5-ton recovery truck for heavier and/or loaded vehicles, plus a HIAB for commercial-vehicle work, which is a big part of what we do in the Heathrow freight corridor.",
      },
      {
        q: "How long does it take to get to Hayes from your base?",
        a: "Typical Hayes response is 25 minutes from our Perivale operating point. On weekday rush hours the A40 can add time, and we'll give you an honest estimate on the call.",
      },
    ],
    heroImage: hayesImage,
    verified: false,
  },

  {
    slug: "southall",
    name: "Southall",
    postcode: "UB1",
    address: { ...perivaleAddress },
    basedAt: "perivale",
    geo: null,
    intro:
      "Car recovery in Southall is dispatched from our Perivale operating point, reaching UB1 and UB2 in around 20 minutes via Greenford Road and the A312. We cover the Broadway, Southall Green, Norwood Green, the Uxbridge Road corridor and the industrial land between the Grand Union Canal and the rail line, an area that produces a steady mix of private car breakdowns, loaded van recoveries and accident jobs on The Parkway. Southall's streets are busy and tightly parked, so we confirm the exact pickup point, whether the vehicle rolls and steers, and the destination before a truck leaves Perivale. From a flat battery outside a house in Old Southall to a courier van down on the A312, we recover cars, vans, motorcycles, EVs and keyless vehicles by flatbed, 24 hours a day.",
    detailSections: [
      {
        heading: "Car recovery in Southall, UB1 and UB2",
        body: "Southall recovery calls are handled from Perivale, a short run down Greenford Road or the A312. We collect from residential streets around the Broadway and Southall Green, station areas, retail car parks, garage forecourts and workplaces across UB1 and UB2. Flatbed recovery is the default for cars, vans, motorcycles, EVs and keyless vehicles, including accident-damaged vehicles that should not be driven and cars that fail to start on cold mornings. The destination, whether that's home, a garage, an insurer-approved repairer or secure storage, is agreed before dispatch.",
      },
      {
        heading: "The Parkway, A312 and Uxbridge Road recovery",
        body: "The A312 Parkway and the A4020 Uxbridge Road carry heavy traffic between Hayes, Heathrow and Ealing, and they generate regular breakdown and accident recovery work. A vehicle stopped on The Parkway needs clearing quickly and safely, so we confirm the direction of travel and nearest junction before the truck leaves. From the same routes we also reach Norwood Green, Heston and the M4 approaches when a job needs taking further across the corridor.",
      },
      {
        heading: "Vans, trade vehicles and the industrial estates",
        body: "Southall's industrial land along the canal and around Bridge Road produces loaded-van and light-commercial recovery work that a standard patrol cannot move. Clutch and gearbox failures, suspension damage and vehicles stuck at depot entrances need the right truck rather than a tow rope. Our fleet includes a 7.5-ton recovery truck for heavier and/or loaded vehicles, plus HIAB support where access is tight, so trade and fleet vehicles can be recovered to a repairer, depot or secure storage without a second move.",
      },
      {
        heading: "Honest dispatch, real response times",
        body: "We do not claim a Southall office. Calls are dispatched from our Perivale operating point, which borders the area and keeps typical response around 20 minutes depending on traffic. The call handler gives you an arrival window based on where the truck actually is, confirms a fixed price for the job, and keeps you updated if A312 or Uxbridge Road traffic changes the picture. If the vehicle needs to be held rather than delivered, our secure Harrow yard is available through the same call.",
      },
    ],
    responseMinutes: 20,
    nearbyAreas: [
      "Southall Green",
      "Norwood Green",
      "Hanwell",
      "Hayes",
      "Greenford",
      "Heston",
      "Ealing",
      "West Drayton",
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
        q: "How quickly can you reach Southall?",
        a: "Typically around 20 minutes from our Perivale operating point, via Greenford Road or the A312. Rush hour on the Uxbridge Road can add time, and we'll give you an honest window on the call.",
      },
      {
        q: "Do you cover The Parkway and the A312?",
        a: "Yes. The A312 between Hayes and the A40 is one of our regular routes. We confirm your direction of travel and nearest junction so the truck approaches from the right side.",
      },
      {
        q: "Can you recover loaded vans from the Southall industrial estates?",
        a: "Yes. We run a 7.5-ton recovery truck for heavier and/or loaded vehicles plus HIAB support, so couriers, trades and fleet vans around Bridge Road and the canal-side estates are routine work for us.",
      },
    ],
    heroImage: southallImage,
    verified: false,
  },
];

export const locations = raw.map((l) => LocationSchema.parse(l));

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
