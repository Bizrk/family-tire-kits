export interface VideoLink {
  id: string;
  title: string;
  url: string;
  embed: boolean;
  description?: string;
}

export interface InstructionStep {
  stepNumber: number;
  title: string;
  summary: string;
  details: string[];
  warning?: string;
  tip?: string;
}

export interface FamilyMemberKit {
  slug: string;
  name: string;
  vehicle?: string;
  customNote?: string;
  videos: VideoLink[];
  customSteps?: InstructionStep[];
}

export const DEFAULT_VIDEOS: VideoLink[] = [
  {
    id: "patch-kit",
    title: "How to Use a Tire Plug / Patch Kit",
    url: "https://youtube.com/shorts/Va5Efw-BnOs?si=2KZ2BEvaiSNfrL3a",
    embed: true,
    description: "Step-by-step demonstration on finding the puncture, using the reamer tool, and inserting a rubber tire plug to seal a tread hole."
  },
  {
    id: "change-tire",
    title: "Basics of Changing a Spare Tire",
    url: "https://youtube.com/shorts/eVtytg89T84?si=AgHVTlbhPAJ74MjS",
    embed: true,
    description: "Essential emergency steps for safely lifting the vehicle, loosening lug nuts, replacing the flat tire with the spare, and tightening securely."
  }
];

export const DEFAULT_INSTRUCTION_STEPS: InstructionStep[] = [
  {
    stepNumber: 1,
    title: "Safety First & Parking",
    summary: "Park safely away from traffic and secure the vehicle.",
    details: [
      "Pull completely off the road to a flat, safe surface (avoid hills or soft dirt).",
      "Turn on Hazard Lights (blinkers) immediately.",
      "Engage Emergency Parking Brake firmly.",
      "If changing a tire, place blocks or heavy objects behind tires on the opposite side to prevent rolling."
    ],
    warning: "Never attempt to plug a tire or use a jack on a steep incline or on the shoulder of a high-speed highway without adequate safety clearance."
  },
  {
    stepNumber: 2,
    title: "Determine: Plug/Repair vs. Spare Replacement",
    summary: "Identify if the tire can be plugged on the car or if it needs to be swapped.",
    details: [
      "Plugs ONLY work for holes in the main tread area caused by nails, screws, or small punctures.",
      "If the puncture is on the SIDEWALL or if the tire has a blowout/large tear, do NOT attempt to plug it. Replace with the spare tire or call roadside assistance."
    ],
    warning: "Sidewall punctures CANNOT be safely plugged. Swap to the spare tire or request towing."
  },
  {
    stepNumber: 3,
    title: "Using the Tire Repair Plug Kit",
    summary: "How to seal a tread puncture step-by-step.",
    details: [
      "Locate the nail or object causing the leak.",
      "Use pliers (or the kit tool) to pull out the object.",
      "Insert the T-handle rasp/reamer tool into the hole and push in/out to clean and roughen the hole.",
      "Thread a sticky repair plug strip halfway through the eyelet of the T-handle needle tool.",
      "Apply rubber cement (if included) to the plug strip.",
      "Push the needle tool with the plug strip directly into the hole until about 1/2 inch of plug remains outside the tire.",
      "Pull the handle straight out firmly without twisting. The plug stays inside!",
      "Trim the excess plug flush with the tire tread using a razor or pocket knife."
    ],
    tip: "Keep a portable 12V tire inflator in your kit to re-inflate the tire right after plugging!"
  },
  {
    stepNumber: 4,
    title: "Changing to the Spare Tire (If Repairing Isn't Possible)",
    summary: "Safely mounting the spare tire.",
    details: [
      "Loosen lug nuts 1/2 turn while the tire is STILL on the ground (righty-tighty, lefty-loosey).",
      "Locate the vehicle's jack point under the metal frame (check owner's manual).",
      "Raise vehicle until the flat tire is ~2 inches off the ground.",
      "Remove lug nuts completely and pull flat tire off straight.",
      "Mount the spare tire onto the wheel studs.",
      "Hand-tighten lug nuts in a star pattern.",
      "Lower vehicle until tire touches ground, then fully torque lug nuts in a star pattern."
    ],
    warning: "Never place any body part underneath a vehicle supported only by a jack."
  },
  {
    stepNumber: 5,
    title: "Air Pressure & Final Inspection",
    summary: "Check PSI and drive carefully.",
    details: [
      "Use a tire pressure gauge to verify PSI meets vehicle recommendations (listed inside driver's door jam).",
      "If using a compact spare ('donut'), do not exceed 50 MPH (80 km/h) or drive more than 50 miles.",
      "Re-check tire pressure after driving 5-10 miles."
    ]
  }
];

export const FAMILY_MEMBERS: FamilyMemberKit[] = [
  {
    slug: "adam",
    name: "Adam",
    vehicle: "Adam's Vehicle",
    customNote: "Keep your kit and portable 12V air compressor in the rear trunk storage compartment.",
    videos: DEFAULT_VIDEOS
  },
  {
    slug: "lesly",
    name: "Lesly",
    vehicle: "Lesly's Vehicle",
    customNote: "Your tire repair kit and jack tools are located under the rear cargo mat.",
    videos: DEFAULT_VIDEOS
  },
  {
    slug: "parker",
    name: "Parker",
    vehicle: "Parker's Vehicle",
    customNote: "Your repair kit is stored in the glove compartment / trunk side cubby.",
    videos: DEFAULT_VIDEOS
  },
  {
    slug: "claire",
    name: "Claire",
    vehicle: "Claire's Vehicle",
    customNote: "Check your spare tire air pressure regularly! Kit is in the rear trunk floor.",
    videos: DEFAULT_VIDEOS
  },
  {
    slug: "jason",
    name: "Jason",
    vehicle: "Jason's Vehicle",
    customNote: "Your tire plug kit includes a heavy-duty T-handle and 12V inflator.",
    videos: DEFAULT_VIDEOS
  },
  {
    slug: "melissa",
    name: "Melissa",
    vehicle: "Melissa's Vehicle",
    customNote: "Remember: hazards on and park on flat ground before getting started!",
    videos: DEFAULT_VIDEOS
  },
  {
    slug: "lance",
    name: "Lance",
    vehicle: "Lance's Vehicle",
    customNote: "Kit is located in the under-seat storage box.",
    videos: DEFAULT_VIDEOS
  }
];

export function getFamilyMember(slug: string): FamilyMemberKit | undefined {
  return FAMILY_MEMBERS.find((m) => m.slug.toLowerCase() === slug.toLowerCase());
}
