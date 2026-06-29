import { z } from "zod";
import { business } from "./business";
import ealingImage from "../assets/images/areas/ealing.jpg";
import greenfordImage from "../assets/images/areas/greenford.jpg";
import harrowImage from "../assets/images/areas/car-recovery-harrow.jpg";
import hayesImage from "../assets/images/areas/hayes.jpg";
import perivaleImage from "../assets/images/areas/perivale.jpg";
import southallImage from "../assets/images/areas/southall.jpg";
import wembleyImage from "../assets/images/areas/wembley.jpg";
import parkRoyalImage from "../assets/images/areas/park-royal.jpg";

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
  detailSections: z.array(ContentSectionSchema).min(2).max(10),
  responseMinutes: z.number().int().positive(),
  nearbyAreas: z.array(z.string().min(1)).min(3),
  servicesOffered: z.array(z.string().min(1)).min(3),
  faqs: z.array(FaqSchema).min(2).max(8),
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
      "Car recovery in Harrow runs from our own registered yard at Cardoc House in North Harrow, HA2 6AE, so a flatbed is dispatched from inside the borough rather than routed through a national call centre. We are PAS43 certified, hold a full O-Licence and run IVR-trained drivers, we work directly on the AA and FMG panels, and our secure, CCTV-monitored storage yard is a short run away in Northolt, UB5. Being based in HA2 means a typical 20-minute response across HA1, HA2, HA3, HA7 and HA8, covering Harrow-on-the-Hill, Wealdstone, Pinner, Stanmore, Kenton and Hatch End, plus the A40, A409, A410 and A312. From this base we handle breakdowns, accident recovery, police pound collection, secure storage and car, van, 4x4 and motorcycle recovery, 24 hours a day, with a fixed price agreed before the truck leaves the yard.",
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
        heading: "Can you fix my car at the roadside in Harrow?",
        body: "Not every Harrow job ends with the car on the back of a truck. A lot of calls are quick roadside fixes, and if we can safely sort it at the kerb you are moving again without a full recovery charge:\n\nIf it cannot be fixed safely on the spot, the same driver loads the vehicle and takes it where it needs to go, so you are not waiting twice. We tell you honestly on the call which of the two it is likely to be.",
        bullets: [
          "Jump start for a flat or dead battery",
          "Lockout help and lost-key situations",
          "Wheel change after a blown or flat tyre",
          "Fuel brought out if you have run dry or misfuelled",
        ],
      },
      {
        heading: "What should I do when my car breaks down in Harrow?",
        body: "If you have stopped somewhere live or exposed, your safety comes before the car. A few quick steps make the recovery faster and safer:\n\nFrom there, call us with the fault, the vehicle and whether it still rolls and steers. We confirm a fixed price and a realistic arrival time, and the same flatbed takes the vehicle wherever it needs to go.",
        bullets: [
          "Get yourself and any passengers to a safe spot, off the carriageway where you can",
          "Switch on your hazard lights so other drivers see you early",
          "Note the nearest postcode, junction or landmark so we can reach you quickly",
          "Stay well clear of moving traffic while you wait, especially on the A40 or A409",
        ],
      },
      {
        heading: "How much does car recovery in Harrow cost?",
        body: "We give a fixed price on the call before the truck leaves, so there are no surprises when we arrive. The quote depends on the vehicle, the pickup postcode, the destination and whether it is a straight recovery or a more involved job such as a pound collection or a winch-out.\n\nThere is no out-of-hours surcharge, so a callout at 3am costs the same as one at noon. If we are paying police pound fees on your behalf they are reconciled separately with receipts, and for an insurer-approved accident recovery we can usually bill the work directly to your insurer.",
      },
      {
        heading: "Accident recovery, police pound release and auction collections",
        body: "From Harrow we also handle the jobs that need more than a standard breakdown call. After a collision we recover accident-damaged cars by flatbed and can take them to your insurer-approved repairer, a garage of your choice or our secure Northolt yard while a claim is sorted.\n\nIf your vehicle has been seized and held at the Perivale or Charlton car pound, we collect it once the release paperwork is ready and deliver it home or to a repairer. We also collect cars bought at auction or on eBay and bring them back to Harrow or wherever you need them, which saves driving an unseen or untaxed vehicle across London. Tell us the destination and we plan the whole move on one call.",
      },
      {
        heading: "Secure vehicle storage at our Northolt yard",
        body: "The Harrow site is also our secure storage yard, which matters when a vehicle cannot go straight home after recovery. Accident-damaged cars, insurer-held vehicles, pound collections and trade stock come off the truck and into a gated, CCTV-monitored compound, then get released to a repairer, buyer, insurer, fleet manager or nominated driver once the authority is in place.\n\nBecause one operator handles recovery and storage, there are fewer handovers, a clear chain of custody and you always know where the vehicle is. Storage can be arranged on the same call as the recovery, short term while parts or approval are sorted, or longer if a claim or sale takes time.",
      },
      {
        heading: "Harrow neighbourhoods and routes we cover",
        body: "We cover the whole of Harrow and the HA postcodes, with common callout points right across the borough:\n\nWe attend homes, garages, business premises, station car parks and live roadside incidents where a patrol van cannot get the vehicle moving again. From the same HA2 base we also reach the towns that ring Harrow, including Stanmore, Pinner, Edgware, Northolt, Wembley, Ruislip, Uxbridge, Bushey and Borehamwood. Every Harrow job is dispatched from our base, and if a vehicle needs holding it goes to our secure Northolt yard, so the response time we quote is based on where the truck actually is.",
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
        body: "We have been recovering vehicles from Harrow since 1995, and we are genuinely based here, not a number that diverts to a broker, so the truck starts from HA2 rather than the far side of London. We hold PAS43 2012 certification, a full O-Licence and run IVR-trained drivers, which is exactly what insurers, fleet operators and the police pounds require, and we work directly on the AA and FMG panels.\n\nOur six-vehicle fleet runs flatbeds, a 12-ton recovery truck for heavy or loaded vehicles and HIAB support, so the right truck is matched to the job before dispatch. Drivers across Harrow rate us five stars on our verified Google Business Profile, and the price is fixed on the call with no out-of-hours surcharge.",
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
      {
        q: "Do you charge extra for car recovery in Harrow at night or weekends?",
        a: "No. We are genuinely 24/7 with no out-of-hours surcharge, so a night, weekend or bank holiday callout in Harrow costs the same as a daytime one. You get a fixed price on the call before the truck leaves.",
      },
      {
        q: "Can you recover a car with no MOT, no insurance or a PG9 prohibition?",
        a: "Yes. Because the vehicle travels on a flatbed rather than under its own power, we can legally move a car with no MOT, no insurance or a PG9 prohibition. This is common with police pound releases and seized vehicles.",
      },
    ],
    heroImage: harrowImage,
    verified: true,
    gbpName: business.googleProfiles.harrow.name,
    gbpUrl: business.googleProfiles.harrow.href,
    mapEmbedSrc: business.googleProfiles.harrow.embedSrc,
    napIntro:
      "Our registered base sits just off Pinner Road in North Harrow, with secure vehicle storage at our dedicated yard nearby in Northolt. From here we cover HA1 through HA8, Stanmore, Pinner and Edgware, with a 20-minute average response across the borough.",
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
      "Our Perivale operating point on Walmgate Road, UB6 7LH sits beside one of the busiest recovery corridors in west London. From here we handle car recovery in Perivale, Greenford, Northolt, Ealing, Hanwell and Park Royal, plus the A40 itself, with a typical response of about 22 minutes. Walmgate Road is also home to the Metropolitan Police car pound. If your vehicle has been released from Perivale car pound but cannot legally or safely be driven, we collect it on a flatbed and deliver it to your home, your repairer or our secure Northolt yard. Breakdowns, accident recovery, motorcycles, vans, keyless cars and EVs all run from this base around the clock.",
    detailSections: [
      {
        heading: "Car recovery in Perivale, UB6 and the A40 corridor",
        body: "Perivale is the dispatch point for most of our west London work because it sits beside the A40 and borders Greenford, Northolt, Alperton, Park Royal and Ealing. We recover from residential roads, supermarket car parks, industrial estates, garage forecourts and live roadside incidents where a patrol van cannot get the car moving again. Every job goes on a flatbed, so nothing is dragged:\n\nOur own drivers take every call, give a fixed price before the truck leaves and confirm a realistic arrival time for your postcode.",
        bullets: [
          "Cars, including automatics and low-clearance vehicles",
          "Vans up to long-wheelbase and Luton box vans",
          "Motorcycles, loaded and strapped properly",
          "EVs, hybrids and keyless cars, never ground-towed",
          "Accident-damaged vehicles that should not be driven",
        ],
      },
      {
        heading: "Can you collect my car from Perivale car pound?",
        body: "Yes. The car pound on Walmgate Road is a regular reason drivers need a recovery truck rather than a taxi home, and our operating point is on the same road. If the pound releases your vehicle but it has no valid insurance for the drive, no MOT, a PG9 prohibition or a fault that stops it starting, it has to leave on a flatbed.\n\nWe cannot do the pound's paperwork for you, but we will tell you what the pound asks for, attend once your release authority is ready and move the vehicle without adding a scratch.",
      },
      {
        heading: "Local support for garages, fleets and private drivers",
        body: "The Perivale base supports private drivers, local repairers, trade customers and fleet operators across west London. A van stuck on an industrial estate, a motorcycle that needs careful loading, a classic car heading to a specialist garage or a vehicle moving after an insurance claim are all routine jobs from this yard.\n\nWe have been recovering vehicles across west London since 1995, and if a vehicle needs holding after collection we take it to our secure Northolt yard and release it under agreed authority.",
      },
      {
        heading: "Which Perivale roads and areas do you cover?",
        body: "From Walmgate Road we reach these routes and neighbourhoods without crossing the city first, which counts when a vehicle is blocking a driveway or stranded on a busy route:\n\nBefore dispatch we ask for the nearest landmark or postcode, check whether the vehicle rolls and steers, and agree the destination, so the truck that arrives is the right one for the job.",
        bullets: [
          "The A40 and the Hanger Lane approaches",
          "Greenford, Northolt and Park Royal",
          "Alperton, Sudbury and Hanwell",
          "Ealing and the surrounding UB6 and W-postcode streets",
        ],
      },
      {
        heading: "How much does car recovery in Perivale cost?",
        body: "We give a fixed price on the call before the truck leaves, based on the vehicle, the pickup postcode, the destination and whether it is a straight recovery or a pound collection. There is no out-of-hours surcharge, so a night or weekend callout costs the same as a daytime one.\n\nFor a Perivale pound collection we can pay the statutory release and storage fees on your behalf and reconcile them with receipts, and for an insurer-approved accident recovery we can usually bill the work directly to your insurer.",
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
        a: "3 Walmgate Road, Perivale. It's an operational base. Vehicle storage runs out of our dedicated yard in Northolt.",
      },
      {
        q: "Do you cover A40 breakdowns?",
        a: "Yes, regularly. The A40 corridor is one of our busiest routes and we keep vehicles positioned for fast response.",
      },
      {
        q: "Is your Perivale address the same as your registered office?",
        a: "No. Our registered base is Cardoc House, North Harrow, HA2 6AE. Perivale is an operating location we run from to cover the west London corridor faster.",
      },
      {
        q: "Can you recover a car from Perivale pound with no MOT or insurance?",
        a: "Yes. Because the vehicle travels on a flatbed rather than under its own power, we can move a car released from Perivale pound even with no MOT, no insurance or a PG9 prohibition. We attend once your release paperwork and authority are ready.",
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
        heading: "Car recovery in Greenford, dispatched from Perivale",
        body: "Greenford is covered from our Perivale operating point, so attendance is usually fast without pretending we have a separate Greenford office. We recover from a wide spread of local roads and edges of the borough, and most calls fall into a few familiar areas:\n\nThe work here is a mix of private car breakdowns, delivery van faults, commercial yard collections, motorcycle recoveries and accident jobs on the A40, all of which can be moved by flatbed to your chosen destination.",
        bullets: [
          "Greenford Road, Ruislip Road and Oldfield Lane",
          "Perivale Station and the Greenford roundabout",
          "Sudbury, Northolt and Park Royal",
          "The nearby industrial estates",
        ],
      },
      {
        heading: "Can you recover vans and commercials around Greenford?",
        body: "Yes. The A40 and the Greenford and Park Royal commercial routes are regular recovery points for us. Vans and light commercials often need more than roadside assistance, particularly when they are loaded, have clutch or gearbox failure, or cannot be moved safely by a small patrol vehicle. Our fleet includes a 12-ton recovery truck for heavier or loaded vehicles, plus HIAB support where access or vehicle condition means the job needs more than a simple winch onto a flatbed. Speedy Recovery has run recovery across west London since 1995, so loaded yards and tight industrial estates are familiar ground.",
      },
      {
        heading: "Cars, motorcycles, EVs and keyless vehicles in UB6",
        body: "Recovery work in Greenford is not limited to older petrol and diesel cars. We regularly handle a range of vehicle types, each loaded the right way for its drivetrain and condition:\n\nAccident-damaged vehicles can be taken to a repairer, insurer location or secure storage depending on what the driver, garage or claims handler needs next.",
        bullets: [
          "EVs, hybrids and keyless vehicles, never ground-towed",
          "Cars needing correct neutral selection and flatbed transport",
          "Motorcycles, loaded with appropriate restraint methods",
          "Accident-damaged vehicles that should not be driven",
        ],
      },
      {
        heading: "Where can you take my car after a Greenford breakdown?",
        body: "Once a vehicle is loaded in Greenford, the next step can be local or further across London and the M25. Some drivers want delivery to a nearby garage, while others need the vehicle taken home, moved to a dealer, sent to an insurer-approved repairer or held securely while parts and authorisation are arranged. We agree the destination before the truck leaves Perivale, so the job is not treated as a vague tow. Clear destination planning helps avoid second recoveries and keeps costs, timing and responsibility easier to understand. It also helps us match the truck to the vehicle and access point before dispatch, which is especially useful around busy yards and estates.",
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
      {
        q: "Is the price fixed for a Greenford recovery?",
        a: "Yes. We confirm a fixed price before the truck leaves Perivale, with no out-of-hours surcharge for Greenford callouts, so you know the cost before we set off.",
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
        heading: "Car recovery in Ealing, W5 and W13",
        body: "Ealing recovery jobs are usually dispatched from Perivale, giving us a practical route into Ealing Broadway, West Ealing, North Ealing, Hanwell, Acton, South Ealing and the surrounding W5 and W13 streets. We recover cars, vans and motorcycles from homes, station areas, retail car parks, garages, apartment blocks and roadside locations where the vehicle cannot be safely driven.\n\nThe destination can be your home, a chosen repairer, an insurer-approved garage, a fleet depot or secure storage if the next step has not been agreed.",
      },
      {
        heading: "Can you reach the A40, Hanger Lane and the North Circular?",
        body: "Yes. The A40, Hanger Lane and North Circular approaches need a recovery operator that understands busy traffic conditions and can clear a vehicle without unnecessary delay. We handle breakdowns, accident recovery and immobilised vehicles on these routes with flatbed recovery as the default method. If the vehicle has been damaged, has a steering or suspension issue, will not select neutral or should not be driven after a collision, we can load it safely and take it where the driver or insurer needs it to go.",
      },
      {
        heading: "Can you recover an electric or keyless car in Ealing?",
        body: "Ealing has a high number of newer vehicles, including EVs, hybrids and keyless cars that can create awkward recovery situations. A dead 12V battery, locked transmission, electronic parking brake or missing key can turn a simple callout into a job that needs proper equipment and patience. We handle vehicle types including:\n\nOur drivers use flatbed transport and follow careful loading procedures, reducing the risk of drivetrain, bodywork or trim damage while the vehicle is being moved through London traffic.",
        bullets: [
          "EVs, never ground-towed",
          "Hybrids and plug-in hybrids",
          "Keyless cars with a locked transmission or missing key",
          "Cars with an electronic parking brake or dead 12V battery",
          "Vans and motorcycles",
        ],
      },
      {
        heading: "Garages, homes and restricted-access collection points",
        body: "Ealing recoveries are not always from obvious roadside positions. We often collect from a range of locations where access has to be understood before dispatch:\n\nThe call handler will ask whether the vehicle can roll, whether the steering is free, whether there are height restrictions and where the vehicle needs to go. That planning helps us send the right truck and avoid a wasted journey in a busy borough, and we have worked these streets since 1995.",
        bullets: [
          "Underground car parks",
          "Apartment developments",
          "Tight residential streets",
          "Garage forecourts",
          "Station areas and commercial premises",
        ],
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
      {
        q: "Is there a surcharge for out-of-hours recovery in Ealing?",
        a: "No. You get a fixed price for your W5 or W13 job before the truck leaves, with no extra charge for evenings, weekends or out-of-hours callouts.",
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
      "Hayes is covered from our Perivale base by running down the A40, onto the A312 and into UB3 and UB4. Typical response is around 25 minutes depending on traffic. We regularly handle car recovery in Hayes, Yeading, Hayes End, Southall, Hillingdon and the Heathrow corridor, including airport collection vehicles that will not start, vans working the freight routes, and breakdowns on the A312, A4 and M4 approaches. Fleet and commercial work is a major part of this patch, so we carry a 12-ton recovery truck for heavier and/or loaded vehicles, plus HIAB support where a standard flatbed is not enough. From a flat battery outside a home to accident recovery near the Heathrow routes, Speedy Recovery can collect, transport and deliver the vehicle to your chosen destination or secure storage.",
    detailSections: [
      {
        heading: "Car recovery in Hayes, UB3 and UB4",
        body: "Hayes recovery calls are handled from Perivale by running down the A40, A312 and surrounding routes into UB3 and UB4. We cover Hayes, Yeading, Hayes End, Southall, Hillingdon, Cranford, West Drayton and the Heathrow corridor for breakdowns, accident recovery, flat batteries, blown tyres, vans that will not start and vehicles that should not be driven after a warning light or mechanical failure. We collect from a wide range of points across the area:\n\nWhatever the pickup point, we agree the destination before the truck leaves so the job is not treated as a vague tow.",
        bullets: [
          "Homes and workplaces",
          "Airport parking",
          "Garages and hotels",
          "Retail parks",
          "Roadside on the A312, A4 and M4 approaches",
        ],
      },
      {
        heading: "Can you recover vans and fleet vehicles in Hayes?",
        body: "Yes. The Hayes and Heathrow corridor produces a lot of van and light-commercial recovery work because of freight routes, airport support businesses, trades, couriers and fleet operators. A loaded van with clutch failure, a light commercial with suspension damage or a vehicle stuck at a depot entrance needs the right truck rather than a quick tow. Our 12-ton recovery vehicle and HIAB support help us recover heavier and loaded vehicles and move them to repair, storage or a nominated business address. We have handled this kind of commercial work since 1995.",
      },
      {
        heading: "Do you cover the A312, A4 and M4 around Hayes?",
        body: "We regularly attend breakdowns and accident scenes on the A312, A4 and M4 approaches around Hayes. These calls need clear timing, a suitable collection point and a destination agreed before dispatch, especially when traffic is heavy or the vehicle is in a risky position. Once loaded, we can deliver to your home, a local garage, an insurer-approved repairer or our secure storage yard while a claim, repair slot or fleet decision is arranged.",
      },
      {
        heading: "Private, trade and fleet recovery in Hayes",
        body: "Hayes produces a mix of private car breakdowns, trade movements and fleet recovery work. Each one needs slightly different handling, and we recover the following by flatbed wherever possible:\n\nWe confirm the vehicle type, loading condition and destination before sending the truck. If the vehicle needs to wait for repair approval, inspection or onward delivery, secure storage can be arranged through the same call, with later release to the authorised driver, repairer or fleet contact.",
        bullets: [
          "Family cars outside a home",
          "Courier vans at a depot",
          "Motorcycles near a station",
          "Non-running airport parking vehicles",
          "Damaged light commercials",
        ],
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
        a: "Yes. We run a 12-ton recovery truck for heavier and/or loaded vehicles, plus a HIAB for commercial-vehicle work, which is a big part of what we do in the Heathrow freight corridor.",
      },
      {
        q: "How long does it take to get to Hayes from your base?",
        a: "Typical Hayes response is 25 minutes from our Perivale operating point. On weekday rush hours the A40 can add time, and we'll give you an honest estimate on the call.",
      },
      {
        q: "Do you charge extra for out-of-hours recovery in Hayes?",
        a: "No. We give a fixed price before the truck leaves, with no out-of-hours surcharge for Hayes, so the figure you agree on the call is the figure you pay.",
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
        body: "Southall recovery calls are handled from Perivale, a short run down Greenford Road or the A312. We collect from across UB1 and UB2, including:\n\nFlatbed recovery is the default for cars, vans, motorcycles, EVs and keyless vehicles, including accident-damaged vehicles that should not be driven and cars that fail to start on cold mornings. The destination, whether that is home, a garage, an insurer-approved repairer or secure storage, is agreed before dispatch.",
        bullets: [
          "Residential streets around the Broadway and Southall Green",
          "Station areas and retail car parks",
          "Garage forecourts",
          "Workplaces across UB1 and UB2",
        ],
      },
      {
        heading: "Why is The Parkway, A312 and Uxbridge Road such busy recovery ground?",
        body: "The A312 Parkway and the A4020 Uxbridge Road carry heavy traffic between Hayes, Heathrow and Ealing, and they generate regular breakdown and accident recovery work. A vehicle stopped on The Parkway needs clearing quickly and safely, so we confirm the direction of travel and nearest junction before the truck leaves. From the same routes we also reach Norwood Green, Heston and the M4 approaches when a job needs taking further across the corridor.",
      },
      {
        heading: "Can you recover loaded vans from the Southall industrial estates?",
        body: "Yes. Southall's industrial land along the Grand Union Canal and around Bridge Road produces loaded-van and light-commercial recovery work that a standard patrol cannot move. Clutch and gearbox failures, suspension damage and vehicles stuck at depot entrances need the right truck rather than a tow rope. Our fleet includes a 12-ton recovery truck for heavier and loaded vehicles, plus HIAB support where access is tight, so trade and fleet vehicles can be recovered to a repairer, depot or secure storage without a second move.",
      },
      {
        heading: "Honest dispatch, real response times",
        body: "We do not claim a Southall office. Calls are dispatched from our Perivale operating point, which borders the area and keeps typical response around 20 minutes depending on traffic. The call handler gives you an arrival window based on where the truck actually is, confirms a fixed price for the job, and keeps you updated if A312 or Uxbridge Road traffic changes the picture.\n\nWorking the streets around Old Southall and Norwood Green since 1995, we know the corridor well, and if the vehicle needs to be held rather than delivered, our secure Northolt yard is available through the same call.",
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
        a: "Yes. We run a 12-ton recovery truck for heavier and/or loaded vehicles plus HIAB support, so couriers, trades and fleet vans around Bridge Road and the canal-side estates are routine work for us.",
      },
      {
        q: "Is the price fixed, and do you charge extra out of hours in Southall?",
        a: "The price is fixed and confirmed before the truck leaves Perivale. There is no out-of-hours surcharge for Southall jobs, so the figure quoted on the call is what you pay whatever the time.",
      },
    ],
    heroImage: southallImage,
    verified: false,
  },

  {
    slug: "wembley",
    name: "Wembley",
    postcode: "HA9",
    address: { ...perivaleAddress },
    basedAt: "perivale",
    geo: null,
    intro:
      "Car recovery in Wembley is dispatched from our Perivale operating point, reaching HA9 and HA0 in around 20 minutes via the A4005 Bridgewater Road or the A406. We cover Wembley Park, Wembley Central, North Wembley, Tokyngton and Alperton, plus the streets around the stadium and arena, where event-day congestion, tight residential parking and the A404 Harrow Road all generate steady recovery work. From a flat battery outside a house off Forty Lane to a car that will not start in a retail-park car park, or an accident on the North Circular, we recover cars, vans, motorcycles, EVs and keyless vehicles by flatbed, 24 hours a day. We confirm the exact pickup point, whether the vehicle rolls and steers, and the destination before a truck leaves Perivale.",
    detailSections: [
      {
        heading: "Car recovery in Wembley, HA9 and HA0",
        body: "Wembley recovery calls are handled from Perivale, a short run across the A406 or down the A4005. We collect from across HA9 and HA0, including:\n\nFlatbed recovery is the default for cars, vans, motorcycles, EVs and keyless vehicles, including accident-damaged cars that should not be driven and vehicles that fail to start after an event. The destination, whether that is home, a garage, an insurer-approved repairer or secure storage, is agreed before dispatch.",
        bullets: [
          "Residential streets around Wembley Park and Tokyngton",
          "Stadium and arena car parks on event days",
          "The London Designer Outlet and retail parks",
          "Workplaces and depots across HA0 and HA9",
        ],
      },
      {
        heading: "Can you recover near the stadium on an event day?",
        body: "Yes, and it is one of the trickier jobs in the area. Concert and match days close roads, fill car parks and leave Olympic Way and Forty Lane heavily congested, so a stranded vehicle needs an operator who knows the approaches and can reach it from the right direction. We confirm your exact location and the nearest open route before the truck leaves Perivale, and we keep you updated if stewarding or road closures change the picture. Flatbed recovery means we can clear the vehicle cleanly once we reach it, without adding to the congestion.",
      },
      {
        heading: "Do you cover the North Circular and A404 in Wembley?",
        body: "Yes. The A406 North Circular along the south of Wembley and the A404 Harrow Road are busy, fast routes where breakdowns and accidents need clearing quickly and safely. We attend immobilised and accident-damaged vehicles with flatbed recovery as the default, and where a vehicle will not select neutral, has steering or suspension damage or should not be driven after a collision, we load it safely and take it to your home, repairer or secure storage.",
      },
      {
        heading: "Heavier and commercial vehicles in Wembley",
        body: "Wembley and the Alperton industrial fringe produce loaded-van and light-commercial recovery work alongside the private-car jobs. A loaded van with clutch failure, a fleet vehicle stuck at a depot or a car boxed in on a tight estate needs the right truck rather than a quick tow. Our fleet includes a 12-ton recovery truck for heavier and loaded vehicles, plus a HIAB for keyless cars, vehicles parked in between others and specialist lifts, so trade and fleet vehicles can be recovered to a repairer, depot or secure storage without a second move.",
      },
    ],
    responseMinutes: 20,
    nearbyAreas: [
      "Wembley Park",
      "North Wembley",
      "Alperton",
      "Tokyngton",
      "Sudbury",
      "Harlesden",
      "Stonebridge",
      "Perivale",
    ],
    servicesOffered: [
      "car-recovery",
      "accident-recovery",
      "police-pound-release",
      "specialist-recovery",
      "vehicle-repossession",
      "vehicle-storage",
    ],
    faqs: [
      {
        q: "How quickly can you reach Wembley?",
        a: "Typically around 20 minutes from our Perivale operating point, via the A4005 or the A406. Event-day road closures around the stadium can add time, and we'll give you an honest window on the call.",
      },
      {
        q: "Can you recover a vehicle near Wembley Stadium on a match or concert day?",
        a: "Yes. We know the Olympic Way and Forty Lane approaches and the car-park layouts, and we confirm the nearest open route before the truck leaves so we reach you from the right direction despite the closures.",
      },
      {
        q: "Do you cover the North Circular through Wembley?",
        a: "Yes. The A406 along the south of Wembley is one of our regular routes. Flatbed on scene, the vehicle cleared safely, then delivered to your chosen destination or secure storage.",
      },
    ],
    heroImage: wembleyImage,
    verified: false,
  },

  {
    slug: "park-royal",
    name: "Park Royal",
    postcode: "NW10",
    address: { ...perivaleAddress },
    basedAt: "perivale",
    geo: null,
    intro:
      "Park Royal sits directly beside our Perivale operating point, just east along the A40, so it is one of the fastest areas in our west London coverage with a typical response around 15 minutes. As one of the largest industrial and logistics estates in Europe, Park Royal and NW10 generate a heavy mix of fleet, van and light-commercial recovery work alongside private cars: loaded vehicles with clutch or gearbox failure, vans stuck at depot entrances, accident recovery on Western Avenue and the North Circular, and keyless or immobilised cars at the First Central and Abbey Road business parks. We recover everything on a flatbed, with a 12-ton recovery truck and HIAB support for the heavier and tighter jobs, and confirm the pickup point, vehicle condition and destination before a truck leaves Perivale.",
    detailSections: [
      {
        heading: "Commercial and fleet recovery in Park Royal, NW10",
        body: "Park Royal is built around manufacturing, food production, logistics and trade, so a large share of our work here is vans and light commercials rather than only private cars. We collect from across the estate and the surrounding NW10 streets, including:\n\nFor loaded or heavier vehicles our 12-ton recovery truck gives us more options than a small recovery truck, and where a vehicle is boxed in between others, will not take a key or needs lifting clear, the HIAB does the work a winch cannot. The destination, whether a repairer, depot, dealer or secure storage, is agreed before dispatch.",
        bullets: [
          "Industrial units and depots across the estate",
          "First Central and the Abbey Road business parks",
          "Western Avenue (A40) and the A406 approaches",
          "Residential NW10 streets towards Harlesden and Willesden",
        ],
      },
      {
        heading: "Can you recover loaded vans and heavier vehicles?",
        body: "Yes, and it is a core part of what we do in Park Royal. A loaded panel van with clutch or gearbox failure, a light commercial with suspension damage or a vehicle that has broken down fully laden cannot be moved safely by a small patrol vehicle. Our 12-ton recovery truck is built for exactly this, and our HIAB handles vehicles parked tightly between others or in positions a winch cannot reach. We move them to a repairer, depot or secure storage in a single, documented job, which matters for fleet operators and trade customers who need a clean record of the movement.",
      },
      {
        heading: "Do you cover Western Avenue and the North Circular?",
        body: "Yes. The A40 Western Avenue runs straight past our Perivale base and through Park Royal, and the A406 North Circular meets it at the Hanger Lane gyratory, so these are routes we work daily. Breakdowns and accidents on fast dual carriageways need clearing quickly and safely, and flatbed recovery is our default. Where a vehicle has been damaged, will not select neutral or should not be driven after a collision, we load it safely and take it where the driver, fleet manager or insurer needs it to go.",
      },
      {
        heading: "Honest dispatch, real response times",
        body: "We do not claim a Park Royal office. Calls are dispatched from our Perivale operating point next door, which keeps typical response around 15 minutes depending on traffic and the time of day. The call handler gives you an arrival window based on where the truck actually is, confirms a fixed price for the job, and keeps you updated if the A40 or Hanger Lane traffic changes the picture. If the vehicle needs holding rather than delivering, secure storage is available through the same call.",
      },
    ],
    responseMinutes: 15,
    nearbyAreas: [
      "North Acton",
      "Harlesden",
      "Willesden",
      "Alperton",
      "Hanger Lane",
      "Greenford",
      "Perivale",
      "Acton",
    ],
    servicesOffered: [
      "car-recovery",
      "accident-recovery",
      "specialist-recovery",
      "vehicle-repossession",
      "supercar-classic-car-transportation",
      "vehicle-storage",
    ],
    faqs: [
      {
        q: "How quickly can you reach Park Royal?",
        a: "Usually around 15 minutes, because Park Royal is right next to our Perivale operating point along the A40. We'll give you an honest arrival window on the call based on traffic and where the nearest truck is.",
      },
      {
        q: "Can you recover loaded vans and fleet vehicles from the estate?",
        a: "Yes. We run a 12-ton recovery truck for heavier and loaded vehicles plus HIAB support for vehicles boxed in or needing a lift, so loaded vans, light commercials and fleet vehicles around the estate are routine work for us.",
      },
      {
        q: "Do you handle accident recovery on Western Avenue and the North Circular?",
        a: "Yes. The A40 and the A406 at Hanger Lane are daily routes for us. We attend with flatbed recovery as the default, clear the vehicle safely and deliver it to your repairer, depot or secure storage.",
      },
    ],
    heroImage: parkRoyalImage,
    verified: false,
  },
];

export const locations = raw.map((l) => LocationSchema.parse(l));

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
