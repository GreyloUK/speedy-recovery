import { z } from "zod";
import bentleyRecoveryImage from "../assets/images/bentley-recovery.jpeg";
import classicCarRecoveryImage from "../assets/images/classic-car-recovery.jpeg";
import crashedCarRecoveryImage from "../assets/images/crashed-car-recovery.jpeg";
import dpdVanRecoveryImage from "../assets/images/dpd-van-recovery.jpg";
import emergencyServicesVehicleRecoveryImage from "../assets/images/emergency-services-vehicle-recovery.jpeg";
import jaguarRecoveryImage from "../assets/images/jaguar-recovery.jpeg";
import lamborghiniRecoveryImage from "../assets/images/lamborghini-recovery.jpg";
import lamboRecoveryImage from "../assets/images/lambo-recovery.jpeg";
import lorryRecoveryImage from "../assets/images/lorry-recovery.jpeg";
import motorbikeRecoveryImage from "../assets/images/motorbike-recovery.jpg";
import peopleCarrierRecoveryImage from "../assets/images/people-carrier-recovery.jpeg";
import policePoundRecoveryImage from "../assets/images/police-pound-recovery.jpeg";
import recoveryVanRecoveryImage from "../assets/images/recovery-van-recovery.jpeg";
import rentalVanRecoveryImage from "../assets/images/rental-van-recovery.jpeg";
import vanRecoveryImage from "../assets/images/van-recovery.jpeg";
import vehicleStorageImage from "../assets/images/vehicle-storage.jpg";
import vintageCarRecoveryImage from "../assets/images/vintage-car-recovery.jpeg";
import workVanRecoveryImage from "../assets/images/work-van-recovery.jpeg";

type LocalImage = typeof vehicleStorageImage;

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

const GalleryImageSchema = z.object({
  image: ImageSchema,
  alt: z.string().min(1),
});

const FaqSchema = z.object({
  q: z.string().min(1),
  a: z.string().min(1),
});

const ContentSectionSchema = z.object({
  heading: z.string().min(1),
  body: z.string().min(80),
});

const ServiceSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  name: z.string().min(1),
  seoTitle: z.string().min(1),
  metaDescription: z.string().min(1),
  heroTitle: z.string().min(1),
  shortDescription: z.string().min(10),
  gridDescription: z.string().min(300).max(800),
  longDescription: z.string().min(40),
  detailSections: z.array(ContentSectionSchema).min(2).max(6),
  bullets: z.array(z.string().min(1)).min(3).max(6),
  priceNote: z.string().min(1),
  heroImage: NullableImageSchema,
  gridImage: NullableImageSchema,
  galleryImages: z.array(GalleryImageSchema),
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
    name: "Car, Van & Motorcycle Recovery",
    seoTitle: "Car & Vehicle Recovery London + M25 — 24/7",
    metaDescription:
      "24/7 car and vehicle recovery across London + M25 for cars, vans and motorbikes. PAS43 certified, O-Licence holder, 25-min average response.",
    heroTitle: "Car & Vehicle Recovery London + M25",
    shortDescription:
      "24/7 car, van and motorcycle recovery across London + M25 — breakdowns, flat batteries, blown tyres, anywhere your vehicle has stopped.",
    gridDescription:
      "If your vehicle has stopped moving — a breakdown on the North Circular, a flat battery in a residential street, a blown tyre on the motorway or a motorbike that needs loading safely — we are 25 minutes away on average, any hour, every day. Our 6-vehicle fleet runs flatbeds and a 7.5-ton recovery truck, so we can move cars, vans and motorcycles without rolling damage. One call covers collection, recovery and delivery to your chosen destination.",
    longDescription:
      "If your car, van or motorcycle has stopped — a breakdown on the North Circular, a flat battery in a residential street, a blown tyre on the motorway — we are 25 minutes away on average, 24 hours a day, every day of the year. Our 6-vehicle fleet includes flatbeds and a 7.5-ton recovery truck for heavier and/or loaded vehicles, so we can move anything from a city car to a long-wheelbase van without damage. We work with the AA, FMG and local garages, and we carry PAS43 certification and a full O-Licence — the credentials insurers and workshops need.",
    detailSections: [
      {
        heading: "24 hour breakdown recovery for cars, vans and motorbikes",
        body: "Car recovery in London rarely happens somewhere convenient. It might be a dead battery outside home, a blown tyre on the A40, a van that will not start after a delivery, or a motorbike that needs proper strapping rather than a rushed tow. Speedy Recovery dispatches 24/7 with flatbeds, trained drivers and a fixed quote agreed before the truck leaves.",
      },
      {
        heading: "Car recovery west London and north London",
        body: "Our Harrow and Perivale bases give us strong coverage across west London, north-west London and the M25 approaches. We regularly attend Harrow, Perivale, Greenford, Ealing, Hayes, Park Royal, Northolt, Wembley, Pinner and Stanmore, with a 25-minute average response across our operating area.",
      },
      {
        heading: "Why choose a PAS43-certified recovery operator",
        body: "Speedy Recovery is PAS43 certified, holds a full O-Licence and uses IVR-trained drivers. That matters when a vehicle needs insurer-approved recovery, flatbed transport, secure storage or careful handling that a general tow truck operator may not be set up to provide.",
      },
      {
        heading: "Flatbed recovery without avoidable damage",
        body: "Most of our car, van and motorcycle recovery work is carried out by flatbed because it gives better control over the vehicle once it has failed. That matters for automatic gearboxes, EVs, hybrids, low-clearance cars, vehicles with steering or suspension damage and motorcycles that need proper restraint. Before dispatch, we ask for the vehicle type, condition, pickup point and destination so the right truck and loading method are sent first time. The aim is simple: recover the vehicle once, move it safely and avoid making a bad breakdown more expensive.",
      },
      {
        heading: "Recovery to your chosen garage, home or storage",
        body: "A breakdown does not always end with the vehicle going home. Some customers need delivery to a local garage, others need an insurer-approved repairer, a dealership, a workplace, secure storage or a second address where the vehicle can be inspected. We agree the destination before the truck leaves and can help decide the practical option if you are unsure. If the vehicle cannot be repaired immediately, our Harrow storage yard can hold it securely while parts, insurance approval or onward transport are arranged.",
      },
      {
        heading: "When to call for professional recovery",
        body: "If the vehicle will not start, has a warning light you do not trust, has lost coolant, has steering or suspension damage, is stuck in gear or is sitting somewhere unsafe, it is usually better to recover it than attempt to limp home. We can also help when another roadside provider has attended but cannot complete the job. A proper flatbed recovery avoids dragging, overheating or causing secondary damage, and it gives you a clean handover to the garage or destination that will deal with the fault.",
      },
    ],
    bullets: [
      "24 hours, every day — no out-of-hours hedging",
      "25-minute average response across London + M25",
      "Cars, vans and motorcycles recovered safely",
      "Flatbed recovery — no rolling damage",
      "7.5-ton truck for heavier and/or loaded vehicles",
      "PAS43 certified, O-Licence holder",
    ],
    priceNote: "Fixed quote confirmed on the call — no meter running",
    heroImage: peopleCarrierRecoveryImage,
    gridImage: dpdVanRecoveryImage,
    galleryImages: [
      {
        image: dpdVanRecoveryImage,
        alt: "DPD van loaded on a Speedy Recovery flatbed in London",
      },
      {
        image: rentalVanRecoveryImage,
        alt: "Rental van secured on a Speedy Recovery flatbed",
      },
      {
        image: recoveryVanRecoveryImage,
        alt: "Car recovered on a Speedy Recovery truck in a residential street",
      },
      {
        image: vanRecoveryImage,
        alt: "Large van transported by Speedy Recovery",
      },
      {
        image: peopleCarrierRecoveryImage,
        alt: "People carrier recovered by Speedy Recovery",
      },
    ],
    iconName: "truck",
    faqs: [
      {
        q: "How quickly can you get to me?",
        a: "Average response across our London coverage area is 25 minutes. On a busy night it can be longer — we'll give you an honest time on the call, not a guess.",
      },
      {
        q: "Can you recover any vehicle?",
        a: "Cars, vans, light commercials, motorbikes and EVs — all covered by our 6-vehicle fleet, which includes flatbeds and a 7.5-ton recovery truck for heavier and/or loaded vehicles.",
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
        "24/7 car, van and motorcycle recovery service across London + M25 — breakdowns, mechanical failures, and flat batteries handled by a PAS43-certified operator.",
    },
  },

  {
    slug: "accident-recovery",
    name: "Accident Recovery",
    seoTitle: "Accident Recovery London + M25 — 24/7",
    metaDescription:
      "24/7 accident recovery service across London + M25. Insurer-ready, PAS43 certified, IVR-trained drivers and flatbed recovery after a collision.",
    heroTitle: "Accident Recovery, London + M25 — 24/7",
    shortDescription:
      "Post-collision recovery across London + M25 — dispatched fast, coordinated with insurers, vehicle handled carefully.",
    gridDescription:
      "After a collision the last thing you want is to wait on a roadside managing your own logistics. We handle accident recovery across London + M25 24/7 — flatbed lift to avoid further damage, direct coordination with your insurer if you want us to, and delivery to the approved repairer, your home, or our secure yard. PAS43 2012 certification and IVR-certified drivers are what insurer panels and AA/FMG dispatch require, and our own fleet means the vehicle is handled by our drivers from collection through to delivery.",
    longDescription:
      "After a collision the last thing you want is to wait on a roadside managing your own logistics. We handle accident recovery across London + M25 on a 24/7 basis — flatbed lift to avoid further damage, coordination with your insurer if you want us to, and delivery to the approved repairer, your home, or our secure storage yard. Our drivers are IVR-certified and operate under a full O-Licence. We carry PAS43 2012 certification, which is what most insurer panels require to approve a claim-related recovery.",
    detailSections: [
      {
        heading: "Accident recovery service after a crash",
        body: "After a crash, the vehicle may not be safe to drive even if it still starts. We recover accident-damaged cars, vans and motorbikes by flatbed, reducing the risk of further damage and keeping the process calm when the driver is already dealing with shock, paperwork and insurance calls.",
      },
      {
        heading: "Insurer-ready recovery and storage",
        body: "Our PAS43 certification, O-Licence and IVR-trained drivers help satisfy the checks insurers, brokers and fleet handlers expect. We can deliver the vehicle to an approved repairer, your chosen garage, your home or our secure yard while the claim is being assessed.",
      },
      {
        heading: "Accident recovery near me across London + M25",
        body: "We dispatch from Harrow and Perivale for fast attendance across west and north-west London, with London + M25 coverage handled by the nearest available truck. We regularly recover vehicles from residential streets, A-roads, motorway approaches and busy junctions where scene clearance needs to be handled properly.",
      },
      {
        heading: "What happens after the vehicle is loaded",
        body: "Once an accident-damaged vehicle is safely on the truck, the next step depends on the condition of the vehicle and the instructions from the driver, insurer or fleet contact. We can deliver to a nominated bodyshop, an approved repairer, your home, a workplace or secure storage while the claim is assessed. If the vehicle is unsafe to move again, we can keep it in controlled storage until an assessor, repairer or buyer is ready. Clear destination planning avoids unnecessary double-handling and helps keep the recovery record tidy for the claim.",
      },
      {
        heading: "Support for private drivers, fleets and insurers",
        body: "Some accident calls come directly from private drivers at the roadside, while others come from garages, brokers, insurers, fleet managers or police-supported scene clearance. Speedy Recovery is set up for both: fast attendance for urgent incidents, plus the paperwork discipline needed when a claim, storage receipt or chain-of-custody record matters. We record the pickup details, transport the vehicle by flatbed and keep communication straightforward, especially when the person who owns the vehicle is not the same person arranging the recovery.",
      },
      {
        heading: "Roadside safety after a collision",
        body: "If the vehicle is in a live lane, blocking traffic or sitting somewhere exposed, the priority is to get people to a safe position and arrange recovery quickly. We ask for the exact location, vehicle condition, whether the police or insurer are involved, and whether the vehicle can roll or steer. That helps us send the right truck and avoid delays at the scene. Once the vehicle is loaded, we can move it away from the roadside pressure and into repair, storage or assessment.",
      },
    ],
    bullets: [
      "24/7 accident dispatch — no out-of-hours gap",
      "Flatbed lift only — no rolling a damaged vehicle",
      "Insurer-approved: PAS43 2012 + O-Licence + IVR drivers",
      "Direct liaison with AA / FMG / your broker",
      "Secure yard storage available from the same call",
    ],
    priceNote: "Most claim-approved recoveries billed direct to your insurer",
    heroImage: crashedCarRecoveryImage,
    gridImage: crashedCarRecoveryImage,
    galleryImages: [
      {
        image: crashedCarRecoveryImage,
        alt: "Accident-damaged car recovered on a Speedy Recovery flatbed",
      },
    ],
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
        a: "Our 7.5-ton recovery truck and HIAB can handle vehicles that other operators can't, including cars that won't roll. We lift from above rather than dragging.",
      },
      {
        q: "Do you work with the police?",
        a: "Yes. We are regularly called to clear accident scenes and transport vehicles to the police pound when required, with all the PG9 paperwork handled.",
      },
    ],
    schema: {
      serviceType: "Accident Recovery",
      description:
        "24/7 post-collision vehicle recovery across London + M25 with PAS43 certification, IVR-certified drivers, and direct insurer coordination.",
    },
  },

  {
    slug: "police-pound-release",
    name: "Police Pound Release",
    seoTitle: "Perivale & Charlton Car Pound Release — London",
    metaDescription:
      "Need your car back from Perivale or Charlton car pound? Speedy Recovery handles police pound release, flatbed collection and delivery across London + M25.",
    heroTitle: "Need your car back from Charlton or Perivale pound?",
    shortDescription:
      "Release your vehicle from any Metropolitan Police pound — paperwork handled, same-day collection.",
    gridDescription:
      "Need your car back from Charlton or Perivale car pound? Getting a vehicle released is a paperwork exercise dressed up as a recovery job — insurance documents, V5, ID, release charges, storage charges and the right authority for the right window. We handle Metropolitan Police pound release several times a week, collecting from Perivale, Charlton and other MPS-contracted pounds, then delivering the vehicle to your home, garage or secure holding location once the documents are in order.",
    longDescription:
      "If your vehicle is being held at Perivale car pound, Charlton car pound or another Metropolitan Police pound, we can help you arrange the release, collection and onward transport. Pound release is rarely just a tow: the pound needs the right proof of ownership, valid insurance, photo ID, release authority and payment of statutory removal and storage charges before a vehicle can leave. Speedy Recovery handles this work regularly, including vehicles with PG9 prohibitions, vehicles that will not start and cars that should not be driven away without inspection. With signed authority, we collect from the pound, load the vehicle onto a flatbed and deliver it to your home, repairer, storage facility or another nominated address. If the paperwork is complete, same-day release is often possible.",
    detailSections: [
      {
        heading: "Perivale car pound collection",
        body: "Perivale is one of the key Metropolitan Police pound locations, and our Walmgate Road operating point puts us close to the release route. If your vehicle is at Perivale car pound and cannot be driven away, we can collect it on a flatbed once the release documents and authority are ready.",
      },
      {
        heading: "Charlton car pound release",
        body: "We also collect from Charlton car pound and other MPS-contracted pounds. The process is the same: confirm the correct documents, pay the statutory charges at the pound, load the vehicle safely and deliver it to the address, garage or storage facility you nominate.",
      },
      {
        heading: "Release car from police pound",
        body: "To release a car from a police pound you normally need proof of ownership, valid insurance, photo ID, the correct release notice and payment of removal and storage charges. If the vehicle has a PG9 prohibition, is accident damaged, will not start or should not be driven, a professional recovery operator is the safer route out.",
      },
      {
        heading: "Police pound release guide",
        body: "For the full document checklist, fee notes and pound process, use our Metropolitan Police pound release guide. The guide covers what the pound asks for; this service page is for arranging the recovery, collection and delivery once release is possible.",
      },
      {
        heading: "Why flatbed collection matters after pound release",
        body: "A vehicle leaving a police pound is not always ready to go straight back on the road. It may have accident damage, a PG9 prohibition, no current insurance for the driver, a flat battery, missing keys or a fault that led to the seizure in the first place. Flatbed collection gives you a route out of the pound without risking a further offence, breakdown or damage on the way home. We confirm the destination before attending so the vehicle can be taken to your home, repairer, inspection site or secure storage in one movement.",
      },
      {
        heading: "Collection timing and release authority",
        body: "Police pound release is time-sensitive because storage charges can keep building while paperwork is incomplete. We cannot bypass the pound's own checks, but once the release authority is ready we can plan collection around the opening window, vehicle condition and destination. If you are arranging collection for someone else, we will tell you what authority we need before dispatch. That helps avoid a wasted journey, especially when the registered keeper, insurer and person collecting are not the same person.",
      },
    ],
    bullets: [
      "Release from Charlton, Perivale and all MPS pounds",
      "Paperwork handled — we know which form at which window",
      "Same-day collection in most cases",
      "Flatbed delivery — no further damage on release",
      "PG9-certified operator if your vehicle needs re-inspection",
    ],
    priceNote: "Fixed release-and-delivery quote — pound fees paid on your behalf, reconciled after",
    heroImage: policePoundRecoveryImage,
    gridImage: policePoundRecoveryImage,
    galleryImages: [
      {
        image: policePoundRecoveryImage,
        alt: "Vehicle collected by Speedy Recovery near a police pound",
      },
    ],
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
        "Metropolitan Police pound release and vehicle collection service — paperwork handled, same-day delivery across London + M25.",
    },
  },

  {
    slug: "specialist-recovery",
    name: "Specialist Recovery",
    seoTitle: "Motorbike Recovery London + Specialist Vehicle Recovery",
    metaDescription:
      "Motorbike recovery, EV recovery, keyless car recovery and forklift transport across London + M25. IVR-trained operators and specialist loading.",
    heroTitle: "Motorbike Recovery & Specialist Vehicle Recovery",
    shortDescription:
      "EV, hybrid, keyless, forklift, motorbike and classic recovery — specialist fleet and trained drivers for vehicles others decline.",
    gridDescription:
      "A modern EV with a locked-down 12V battery, a keyless car you can't get into without the fob, a forklift that needs moving between sites, a motorbike that needs soft-strap transport, a classic too low to winch — these are the vehicles a generic operator declines, damages, or charges double for. We run a specialist fleet and train drivers on the protocol each type requires: flatbed-only for EVs and hybrids, manufacturer-approved entry for keyless, soft-strap or wheel-chock for bikes, HIAB lift where needed, and 7.5-ton capacity for heavier and/or loaded vehicles.",
    longDescription:
      "A modern EV with a locked-down 12V battery, a keyless car you can't get into without the fob, a forklift that needs moving, a motorbike that needs soft-strap transport, a classic that can't be winched — these are the vehicles a generic recovery operator declines, damages, or charges double for. We operate a specialist fleet and train our drivers in the protocols each type requires. Flatbed-only transport for EVs and hybrids, manufacturer-approved recovery procedures for keyless vehicles, soft-strap or wheel-chock transport for bikes, HIAB support for classics and low-clearance vehicles, and careful forklift transportation across London + M25. The important part is matching the recovery method to the vehicle before anything is moved. We plan the loading, restraint and destination around the risk, whether the job is urgent or booked in advance. If a vehicle has limited steering, locked brakes, unusual weight, tight access or fragile bodywork, we would rather know that on the call and send the right equipment than improvise beside the vehicle.",
    detailSections: [
      {
        heading: "Motorbike recovery London + M25",
        body: "Motorbike recovery needs the right loading and restraint, not straps thrown over paintwork. We use soft-strap and wheel-chock methods depending on the bike, with flatbed transport for sports bikes, commuters, tourers and classic motorcycles across London + M25.",
      },
      {
        heading: "EV and hybrid breakdown recovery",
        body: "Electric and hybrid vehicles should not be ground-towed in the way older vehicles often were. We use flatbed transport and follow safe handling principles around high-voltage drivetrains, locked 12V batteries and manufacturer-specific neutral procedures.",
      },
      {
        heading: "Keyless car recovery",
        body: "Keyless vehicles can fail in awkward ways: a dead fob, a locked transmission, a vehicle that will not enter neutral or an electronic handbrake that will not release. Our operators are trained to approach these jobs carefully and avoid unnecessary dragging or damage.",
      },
      {
        heading: "Forklift and low-clearance vehicle transport",
        body: "For forklifts, low-clearance cars and specialist vehicles, we assess weight, access, loading angle and destination before quoting. HIAB support and 7.5-ton capacity help us handle jobs that a standard roadside operator may decline.",
      },
      {
        heading: "Specialist recovery planning before dispatch",
        body: "Specialist recovery is often decided before the truck leaves the yard. We ask about the vehicle type, whether it rolls, whether keys are available, the surface it is parked on, loading access, height restrictions and the intended destination. That information helps us avoid sending the wrong vehicle to a difficult job. It also gives customers a clearer quote because HIAB support, 7.5-ton capacity, keyless procedures or extra loading time can be factored in at the start rather than becoming a surprise later.",
      },
      {
        heading: "Trade, garage and business vehicle moves",
        body: "Alongside emergency breakdowns, we support garages, fleet teams, builders, warehouse operators and local businesses that need awkward vehicles moved reliably. That might mean transporting a forklift between sites, moving a non-running EV to a dealer, collecting a motorbike for repair, or recovering a low-clearance classic from a workshop where access is tight. These jobs still need proper recovery standards: safe loading, careful restraint, clear destination details and a driver who understands the vehicle before touching it.",
      },
    ],
    bullets: [
      "EV / hybrid — flatbed transport, no drivetrain damage",
      "Keyless cars — manufacturer-approved entry and tow protocols",
      "Motorbikes — softstrap or wheel-chock depending on bike",
      "Forklift transportation across London + M25",
      "Classics and low-clearance — HIAB lift, no winch damage",
      "PAS43-certified operator + IVR-certified drivers",
    ],
    priceNote: "Quoted on vehicle type and pickup location — flatbed/HIAB included, not an upgrade",
    heroImage: motorbikeRecoveryImage,
    gridImage: motorbikeRecoveryImage,
    galleryImages: [
      {
        image: motorbikeRecoveryImage,
        alt: "Motorbike secured on a Speedy Recovery flatbed",
      },
      {
        image: lorryRecoveryImage,
        alt: "Lorry and heavier vehicle recovery by Speedy Recovery",
      },
      {
        image: emergencyServicesVehicleRecoveryImage,
        alt: "Emergency services vehicle recovered by Speedy Recovery",
      },
    ],
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
      {
        q: "Do you move forklifts?",
        a: "Yes. We provide forklift transportation across London + M25, quoted by pickup point, delivery point, vehicle weight and access requirements.",
      },
    ],
    schema: {
      serviceType: "Specialist Vehicle Recovery",
      description:
        "Specialist recovery for EVs, hybrids, keyless vehicles, forklifts, motorbikes and classic cars across London + M25.",
    },
  },

  {
    slug: "vehicle-repossession",
    name: "Vehicle Repossession",
    seoTitle: "Vehicle Repossession Services London + M25",
    metaDescription:
      "B2B vehicle repossession and recovery support across London + M25 for finance houses, fleet operators, solicitors and authorised agents.",
    heroTitle: "Vehicle Repossession Services for Finance & Fleet Teams",
    shortDescription:
      "Professional vehicle repossession and recovery across London + M25 for authorised bailiffs, finance houses, investigators and police work.",
    gridDescription:
      "Vehicle repossession needs a calm, professional recovery operator who can remove the vehicle, record its condition and hold it securely without turning the job into a scene. Speedy Recovery provides authorised vehicle repossession and removal across London + M25 for bailiffs, finance houses, fraud investigators and police-supported work. Vehicles can be transported to our secure holding facility or forwarded to an auction house or nominated address, with images taken before removal and CCTV-monitored storage available 24 hours a day.",
    longDescription:
      "Speedy Recovery provides authorised vehicle repossession and removal across London + M25 for bailiffs, finance houses, fraud investigators and police-supported work. We handle the recovery side professionally: careful loading, images taken before removal, secure CCTV-monitored holding, and onward transport to an auction house, storage facility or nominated destination. Our team can support keyless vehicle recovery and no-fuss removals where the correct authority is in place.",
    detailSections: [
      {
        heading: "B2B repossession support",
        body: "This page is written for finance houses, fleet operators, solicitors, authorised agents and enforcement partners rather than private buyers searching for repossessed cars. We provide the recovery, transport and secure holding capability behind an authorised repossession process.",
      },
      {
        heading: "Evidence-led vehicle removal",
        body: "Repossession work needs a controlled handover. We record vehicle condition, take images before removal, load carefully and transport to the agreed destination, storage site or auction house. Secure CCTV-monitored holding is available where a vehicle cannot be forwarded immediately.",
      },
      {
        heading: "PAS43 and O-Licence recovery operator",
        body: "Speedy Recovery is PAS43 certified and operates under a full O-Licence, giving finance and fleet teams confidence that the recovery side is handled by a properly equipped commercial operator. Jobs are quoted by vehicle type, access, authority, pickup and delivery requirements.",
      },
      {
        heading: "Secure holding after repossession",
        body: "A repossessed vehicle often needs to be held securely before auction, inspection, repair, collection by an authorised party or onward delivery. Our Harrow yard gives finance and fleet clients a controlled storage option with CCTV monitoring and release procedures, reducing the number of handovers after recovery. We can collect the vehicle, hold it under agreed authority and release it only when the correct instruction is received. That is particularly useful when the asset needs condition checks, documentation or lender approval before it moves again.",
      },
      {
        heading: "Discreet removal across London + M25",
        body: "Repossession work benefits from a recovery operator that arrives with the correct truck, loads efficiently and avoids unnecessary attention. We support authorised removals from residential streets, business premises, car parks, yards and repair sites across London + M25, always working from the authority supplied by the client or enforcement partner. If the vehicle is keyless, blocked in, damaged, loaded or unable to roll, we assess access before dispatch so the removal can be handled calmly and professionally.",
      },
      {
        heading: "Vehicle types and onward destinations",
        body: "Repossession and asset recovery can involve ordinary cars, vans, fleet vehicles, keyless vehicles, light commercials, damaged vehicles and assets that have been left at garages or business premises. We can move the vehicle to secure storage, an auction house, a repairer, a lender-appointed site or another nominated destination once authority is confirmed. For loaded or heavier vehicles, our 7.5-ton capacity gives us more options than a small recovery truck, while still keeping the movement documented and controlled. We can also support follow-on movement after the first recovery, such as storage-to-auction, storage-to-repairer or handover to a verified collection agent. Each stage is agreed with the authorised contact so the vehicle is not released or redirected without clear instruction, and the final destination is recorded before transport.",
      },
    ],
    bullets: [
      "London + M25 vehicle repossession and removal",
      "Support for bailiffs, finance houses and investigators",
      "Pre-removal images taken for condition records",
      "Secure CCTV-monitored vehicle holding available",
      "Forwarding to auction house or nominated destination",
    ],
    priceNote: "Quoted on vehicle type, access, pickup location and delivery destination",
    heroImage: workVanRecoveryImage,
    gridImage: workVanRecoveryImage,
    galleryImages: [
      {
        image: workVanRecoveryImage,
        alt: "Commercial work van recovered by Speedy Recovery",
      },
    ],
    iconName: "file-check",
    faqs: [
      {
        q: "Who do you provide repossession support for?",
        a: "We support authorised bailiffs, finance houses, fraud investigators and police-supported removals where the correct authority is in place.",
      },
      {
        q: "Can you store a repossessed vehicle?",
        a: "Yes. Vehicles can be held at our secure CCTV-monitored facility, then released or forwarded to an auction house or nominated destination.",
      },
      {
        q: "Do you take condition records before removal?",
        a: "Yes. Images are taken before removal so the vehicle condition is recorded before transport.",
      },
      {
        q: "Can you handle keyless vehicles?",
        a: "Yes, where the correct authority is in place. We can support keyless vehicle recovery and transport using the right loading procedure for the vehicle.",
      },
    ],
    schema: {
      serviceType: "Vehicle Repossession",
      description:
        "Professional authorised vehicle repossession and recovery across London + M25 with secure holding, condition images and onward transport.",
    },
  },

  {
    slug: "supercar-classic-car-transportation",
    name: "Supercar & Classic Car Transportation",
    seoTitle: "Classic Car & Supercar Transport London + M25",
    metaDescription:
      "Classic car transport, supercar recovery and prestige vehicle movement across London + M25. Careful loading for low-clearance and high-value cars.",
    heroTitle: "Classic Car & Supercar Transport London + M25",
    shortDescription:
      "Careful supercar, prestige and classic car transportation across London + M25 by trained recovery operators.",
    gridDescription:
      "Supercars, prestige cars and classic vehicles need more than a standard tow. Speedy Recovery provides careful transportation across London + M25 for vehicles that need low-clearance loading, discreet handling and drivers who understand the risk around paint, suspension, trim and value. We can collect from homes, garages, storage facilities, dealerships and repairers, then deliver to your chosen address with a clear quote agreed over the phone before the truck is dispatched.",
    longDescription:
      "Speedy Recovery provides supercar, prestige and classic car transportation across London + M25. Whether your vehicle is being moved from home to a garage, collected from storage, delivered to a repairer or recovered after an incident, our trained operators use careful loading and secure transport procedures suited to high-value and older vehicles. We quote clearly over the phone, collect from the agreed location and deliver to your chosen destination without hidden add-ons.",
    detailSections: [
      {
        heading: "Classic car transport near me",
        body: "Classic cars often need more planning than a standard recovery. Low clearance, older braking systems, fragile trim, unusual starting procedures and agreed-value insurance all change how a vehicle should be loaded and moved. We plan the collection around the car, not the other way round.",
      },
      {
        heading: "Supercar and luxury car recovery",
        body: "Supercars and luxury vehicles need careful loading, sensible restraint points and a driver who understands the cost of getting it wrong. We collect from homes, garages, dealerships, storage facilities, repairers and roadside locations across London + M25.",
      },
      {
        heading: "Transport for low-clearance and high-value vehicles",
        body: "Where a vehicle cannot be winched safely, we assess loading angle, access and whether HIAB support is needed. This is especially important for classics, prestige vehicles and cars that have been accident damaged or immobilised in a restricted space.",
      },
      {
        heading: "Careful movement for garages, owners and dealers",
        body: "Prestige and classic vehicle transport is often arranged by owners, specialist garages, storage facilities, dealerships and repairers who need the vehicle moved without drama. We agree the pickup point, delivery address, access, vehicle condition and loading constraints before dispatch, then use careful restraint and a controlled delivery handover. The service is useful for non-running classics, prestige vehicles going to repair, cars coming out of storage and high-value vehicles that should not be driven through London traffic while a fault is being investigated.",
      },
      {
        heading: "High-value recovery after a fault or incident",
        body: "Not every supercar or classic transport job is a planned movement. If a high-value car develops a fault, has a warning light, loses coolant, suffers suspension damage or is involved in a minor incident, driving it further can create a much larger repair bill. Flatbed recovery lets the vehicle be moved to a trusted garage or secure location while keeping mileage, heat, vibration and roadside handling to a minimum. For London + M25 work, we keep the scope clear and quote around the actual vehicle, access and destination.",
      },
      {
        heading: "London + M25 prestige vehicle movements",
        body: "For this first stage, our prestige transport copy is deliberately focused on London + M25 movements rather than making wider claims that need separate confirmation. That includes short-distance garage transfers, home-to-repairer journeys, collection from storage, immobilised vehicles in car parks and careful movement from dealerships or workshops. We keep the wording plain because the service depends on the real details: vehicle clearance, whether it runs, how much space there is to load, where it is going and who is authorised to receive it at the other end. The quote is built from those details, not from a generic public price.",
      },
    ],
    bullets: [
      "Supercar, prestige and classic car transport",
      "London + M25 collection and delivery",
      "Careful loading for low-clearance vehicles",
      "Collection from home, garage, storage or dealership",
      "PAS43-certified operator + IVR-certified drivers",
    ],
    priceNote: "Quoted by vehicle, access requirements, pickup point and delivery destination",
    heroImage: lamboRecoveryImage,
    gridImage: classicCarRecoveryImage,
    galleryImages: [
      {
        image: lamboRecoveryImage,
        alt: "Lamborghini transported on a Speedy Recovery flatbed",
      },
      {
        image: lamborghiniRecoveryImage,
        alt: "Supercar secured on a Speedy Recovery flatbed",
      },
      {
        image: classicCarRecoveryImage,
        alt: "Classic car loaded carefully by Speedy Recovery",
      },
      {
        image: vintageCarRecoveryImage,
        alt: "Vintage car transported by Speedy Recovery",
      },
      {
        image: bentleyRecoveryImage,
        alt: "Bentley transported by Speedy Recovery",
      },
      {
        image: jaguarRecoveryImage,
        alt: "Jaguar positioned for careful flatbed loading",
      },
    ],
    iconName: "badge-check",
    faqs: [
      {
        q: "Do you transport supercars and prestige vehicles?",
        a: "Yes. We transport supercars, prestige cars and high-value vehicles across London + M25 using careful loading and secure transport procedures.",
      },
      {
        q: "Can you move classic cars with low clearance?",
        a: "Yes. We plan the loading method around the vehicle's clearance, condition and access at collection and delivery.",
      },
      {
        q: "Where can you collect from?",
        a: "We can collect from homes, garages, storage facilities, dealerships, repairers and roadside locations across London + M25.",
      },
      {
        q: "Will the quote be agreed before collection?",
        a: "Yes. We confirm the quote over the phone based on vehicle type, location, destination and any access requirements.",
      },
    ],
    schema: {
      serviceType: "Supercar and Classic Car Transportation",
      description:
        "Careful supercar, prestige and classic car transportation across London + M25 by PAS43-certified recovery operators.",
    },
  },

  {
    slug: "vehicle-storage",
    name: "Vehicle Storage",
    seoTitle: "Vehicle Storage London — Secure Car Storage",
    metaDescription:
      "Secure vehicle storage in Harrow for London + M25. CCTV-monitored yard for recovered cars, insurance claims, police pound release and trade storage.",
    heroTitle: "Secure Vehicle Storage London + M25",
    shortDescription:
      "Secure short- and long-term vehicle storage in Harrow — CCTV, gated yard, insurance-approved.",
    gridDescription:
      "If you need secure vehicle storage after a recovery, accident, police pound release or insurance claim, our Harrow yard gives you a controlled place to hold the vehicle while the next step is agreed. The site is gated and CCTV-monitored, with storage receipts available for insurers, repairers and fleet operators that need clear chain-of-custody records. We can collect the vehicle ourselves, receive it after another recovery, and release it to you, a repairer or a nominated third party once authority is confirmed.",
    longDescription:
      "If you need somewhere secure to keep a vehicle after recovery, police pound release, an accident or an insurance claim, our Harrow yard provides CCTV-monitored, gated vehicle storage with controlled release. We regularly hold vehicles while customers wait for an insurer decision, a repairer slot, a buyer collection, auction forwarding or further inspection. We can collect the vehicle as part of the recovery, receive it from another operator, issue a storage receipt for your records, and release it to you, a repairer or a nominated third party once authority is confirmed. Storage is quoted by vehicle type, access, expected length of stay and any release requirements, so private customers, insurers and trade customers know what is being arranged before the vehicle is moved.",
    detailSections: [
      {
        heading: "Secure car storage after recovery",
        body: "Many vehicles need somewhere safe to sit before the next decision is made. That could be after an accident, after police pound release, during an insurance claim, while a repairer slot is arranged or before a buyer or auction house collects. Our Harrow yard provides controlled, CCTV-monitored storage for those situations.",
      },
      {
        heading: "Vehicle storage for insurers, trade and private customers",
        body: "We can store vehicles recovered by us or received from another operator. Storage receipts and clear release records help insurers, garages, fleet teams and private customers keep track of where the vehicle is and who is authorised to collect it.",
      },
      {
        heading: "Storage linked to police pound release",
        body: "Police pound release often creates an immediate storage need: the car is out of the pound, but not yet roadworthy, insured, repaired or ready to return home. We can collect from the pound, transport the vehicle and hold it securely until the next step is agreed.",
      },
      {
        heading: "Controlled release and chain of custody",
        body: "Vehicle storage is only useful if release is controlled properly. We record the collection and delivery details, hold the vehicle in our Harrow yard and release it to the owner, repairer, insurer, buyer or nominated third party once authority is confirmed. This matters for accident claims, police pound collections, repossession work, trade storage and vehicles waiting for repair approval. A clear chain of custody gives everyone involved confidence about where the vehicle has been and who has authorised the next movement.",
      },
      {
        heading: "Storage as part of the recovery plan",
        body: "Storage is often arranged at the same time as recovery because the destination is not always obvious in the first phone call. A damaged car may need insurer approval, a seized vehicle may need inspection, a fleet vehicle may need a decision from head office and a non-running private vehicle may need a garage slot before it can move again. If secure storage is the sensible interim step, we can recover the vehicle, hold it safely and arrange onward delivery once the next instruction is clear.",
      },
      {
        heading: "Who uses our vehicle storage",
        body: "Our storage yard is used by private drivers, insurers, repairers, fleet operators, trade customers and authorised parties who need a vehicle held after recovery. The common thread is that the vehicle needs to stay secure while a decision is made. It may be waiting for assessment, repair approval, parts, buyer collection, auction forwarding, release paperwork or a nominated driver. We keep the process straightforward: confirm the vehicle, record the handover, hold it securely and release it only when the agreed authority is in place.",
      },
    ],
    bullets: [
      "CCTV-monitored, gated yard in Harrow",
      "Insurance-approved secure-storage receipt provided",
      "Same-day collection from recovery — ours or anyone else's",
      "Short- or longer-term storage arranged by call",
      "Release to any nominated third party with 24 hours' notice",
    ],
    priceNote: "Storage quoted on vehicle type, access, length of stay and release requirements",
    heroImage: vehicleStorageImage,
    gridImage: vehicleStorageImage,
    galleryImages: [],
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
        a: "Storage is arranged around the vehicle, expected length of stay and release requirements. We confirm the arrangement on the call rather than publishing generic public pricing.",
      },
      {
        q: "Can a repairer or buyer collect without me being there?",
        a: "Yes — with 24 hours' notice and a signed release authority from you, we'll hand the vehicle over to any nominated third party.",
      },
    ],
    schema: {
      serviceType: "Vehicle Storage",
      description:
        "Secure, CCTV-monitored vehicle storage in Harrow for London + M25 with controlled release, storage receipts and quoted arrangements.",
    },
  },
];

export const services = raw.map((s) => ServiceSchema.parse(s));

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
