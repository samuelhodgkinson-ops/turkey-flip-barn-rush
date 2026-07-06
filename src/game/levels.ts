// Level definitions, species and environment themes for Turkey Flip Barn Rush.

export type ObstacleKind =
  | 'wall'
  | 'hay'
  | 'trough'
  | 'gate'
  | 'mud'
  | 'equipment';

// Axis-aligned box obstacle expressed in world XZ coordinates.
export interface ObstacleSpec {
  kind: ObstacleKind;
  x: number; // center x
  z: number; // center z
  w: number; // full width along x
  d: number; // full depth along z
  h: number; // visual height
  solid: boolean; // blocks player + creature movement
  blocksSight: boolean; // creatures can hide behind it
}

// ---------------- species ----------------
export type Species =
  | 'turkey'
  | 'hen'
  | 'chicken'
  | 'salmon'
  | 'shrimp'
  | 'pig'
  | 'worker';

export interface SpeciesStyle {
  kind: 'bird' | 'fish' | 'shrimp' | 'pig' | 'worker';
  body: number;
  alt: number;
  accent: number;
  bronzeBody: number;
  bronzeAccent: number;
  scale: number;
  radius: number;
  hoverY: number; // >0 for swimming creatures
  tailFan?: boolean; // big turkey tail
}

export const SPECIES: Record<Species, SpeciesStyle> = {
  turkey: {
    kind: 'bird',
    body: 0x7a4a2b,
    alt: 0x955b34,
    accent: 0xc0392b,
    bronzeBody: 0xcd7f32,
    bronzeAccent: 0xffd479,
    scale: 1,
    radius: 0.5,
    hoverY: 0,
    tailFan: true,
  },
  hen: {
    kind: 'bird',
    body: 0xf2efe6,
    alt: 0xe8e2d0,
    accent: 0xd23a2a,
    bronzeBody: 0xe8c14f,
    bronzeAccent: 0xfff0a0,
    scale: 0.85,
    radius: 0.42,
    hoverY: 0,
    tailFan: false,
  },
  chicken: {
    kind: 'bird',
    body: 0x9c4a26,
    alt: 0x7a3a1e,
    accent: 0xd23a2a,
    bronzeBody: 0xd9a441,
    bronzeAccent: 0xffe08a,
    scale: 0.8,
    radius: 0.4,
    hoverY: 0,
    tailFan: false,
  },
  salmon: {
    kind: 'fish',
    body: 0xd9736b,
    alt: 0xc85a52,
    accent: 0xb0c4d0,
    bronzeBody: 0xe0a030,
    bronzeAccent: 0xfff0b0,
    scale: 1,
    radius: 0.5,
    hoverY: 1.4,
  },
  shrimp: {
    kind: 'shrimp',
    body: 0xf08a6a,
    alt: 0xe0704a,
    accent: 0xffd0b0,
    bronzeBody: 0xf0c040,
    bronzeAccent: 0xfff0b0,
    scale: 0.9,
    radius: 0.38,
    hoverY: 1.1,
  },
  pig: {
    kind: 'pig',
    body: 0xeda6a6,
    alt: 0xe08f8f,
    accent: 0xd98080,
    bronzeBody: 0xd9b24a,
    bronzeAccent: 0xfff0a0,
    scale: 1.15,
    radius: 0.65,
    hoverY: 0,
  },
  worker: {
    kind: 'worker',
    body: 0x3a6ea5,
    alt: 0x2a3a55,
    accent: 0xe8c9a0,
    bronzeBody: 0x8a5a20,
    bronzeAccent: 0xffd479,
    scale: 1,
    radius: 0.5,
    hoverY: 0,
  },
};

// ---------------- themes ----------------
export type Theme =
  | 'barn'
  | 'henhouse'
  | 'savanna'
  | 'ocean'
  | 'deepocean'
  | 'pigpen'
  | 'office';

export interface ThemeStyle {
  bg: number;
  fogColor: number;
  fogNear: number;
  fogFar: number;
  floorColor: number;
  strawFloor: boolean; // use straw canvas texture
  wallColor: number;
  wallHeight: number;
  hemiSky: number;
  hemiGround: number;
  hemiInt: number;
  dirColor: number;
  dirInt: number;
  ambInt: number;
  obstacleColor: number; // hay-equivalent solid
  troughColor: number;
  mudColor: number;
  decor: 'beams' | 'trees' | 'bubbles' | 'fences' | 'ceiling';
  underwater: boolean;
}

export const THEMES: Record<Theme, ThemeStyle> = {
  barn: {
    bg: 0x1a1410,
    fogColor: 0x1a1410,
    fogNear: 30,
    fogFar: 80,
    floorColor: 0xcbab5f,
    strawFloor: true,
    wallColor: 0x7a5230,
    wallHeight: 6,
    hemiSky: 0xfff0d0,
    hemiGround: 0x402a18,
    hemiInt: 0.9,
    dirColor: 0xffe6b0,
    dirInt: 0.7,
    ambInt: 0.25,
    obstacleColor: 0xc9a94e,
    troughColor: 0x5b3a20,
    mudColor: 0x4a3526,
    decor: 'beams',
    underwater: false,
  },
  henhouse: {
    bg: 0x241a12,
    fogColor: 0x241a12,
    fogNear: 28,
    fogFar: 70,
    floorColor: 0xd8c48a,
    strawFloor: true,
    wallColor: 0x8a6a3a,
    wallHeight: 5.5,
    hemiSky: 0xfff4dc,
    hemiGround: 0x4a3420,
    hemiInt: 1.0,
    dirColor: 0xfff0c0,
    dirInt: 0.8,
    ambInt: 0.3,
    obstacleColor: 0xd8b968,
    troughColor: 0x6a4a28,
    mudColor: 0x5a4430,
    decor: 'beams',
    underwater: false,
  },
  savanna: {
    bg: 0x9ec6e0,
    fogColor: 0xcfe3d8,
    fogNear: 45,
    fogFar: 120,
    floorColor: 0xc8b465,
    strawFloor: false,
    wallColor: 0x8a6a3a,
    wallHeight: 2.6,
    hemiSky: 0xbfe0ff,
    hemiGround: 0x9c8a3a,
    hemiInt: 1.1,
    dirColor: 0xfff2c0,
    dirInt: 1.0,
    ambInt: 0.4,
    obstacleColor: 0x8a7a3a,
    troughColor: 0x4a6a8a,
    mudColor: 0x6a5a30,
    decor: 'trees',
    underwater: false,
  },
  ocean: {
    bg: 0x0f5a78,
    fogColor: 0x1170a0,
    fogNear: 18,
    fogFar: 60,
    floorColor: 0xc9c08a,
    strawFloor: false,
    wallColor: 0x0d4a66,
    wallHeight: 8,
    hemiSky: 0x9fe0ff,
    hemiGround: 0x0a4055,
    hemiInt: 1.0,
    dirColor: 0xbfeaff,
    dirInt: 0.7,
    ambInt: 0.35,
    obstacleColor: 0xd98a4a,
    troughColor: 0x2a8a7a,
    mudColor: 0x2a6a8a,
    decor: 'bubbles',
    underwater: true,
  },
  deepocean: {
    bg: 0x08324a,
    fogColor: 0x0a3f5a,
    fogNear: 14,
    fogFar: 48,
    floorColor: 0x9a9270,
    strawFloor: false,
    wallColor: 0x07293a,
    wallHeight: 8,
    hemiSky: 0x5fb0d0,
    hemiGround: 0x052330,
    hemiInt: 0.9,
    dirColor: 0x8fd0ee,
    dirInt: 0.6,
    ambInt: 0.3,
    obstacleColor: 0xc07a4a,
    troughColor: 0x1f6a6a,
    mudColor: 0x1a5570,
    decor: 'bubbles',
    underwater: true,
  },
  pigpen: {
    bg: 0x6a7a8a,
    fogColor: 0x8a8f8a,
    fogNear: 35,
    fogFar: 95,
    floorColor: 0x6a5238,
    strawFloor: false,
    wallColor: 0x7a5a34,
    wallHeight: 2.4,
    hemiSky: 0xcfe0ec,
    hemiGround: 0x4a3826,
    hemiInt: 1.0,
    dirColor: 0xfff0d0,
    dirInt: 0.85,
    ambInt: 0.35,
    obstacleColor: 0xc9a94e,
    troughColor: 0x4a3420,
    mudColor: 0x3a2a1c,
    decor: 'fences',
    underwater: false,
  },
  office: {
    bg: 0xdfe4e8,
    fogColor: 0xe6ebf0,
    fogNear: 40,
    fogFar: 110,
    floorColor: 0x5a6470,
    strawFloor: false,
    wallColor: 0xd8dce0,
    wallHeight: 4,
    hemiSky: 0xffffff,
    hemiGround: 0x8a9098,
    hemiInt: 1.1,
    dirColor: 0xffffff,
    dirInt: 0.6,
    ambInt: 0.5,
    obstacleColor: 0x9098a0,
    troughColor: 0x3a4a6a,
    mudColor: 0x3a5a8a,
    decor: 'ceiling',
    underwater: false,
  },
};

export interface LevelConfig {
  index: number;
  name: string;
  subtitle: string;
  species: Species;
  theme: Theme;
  critterLabel: string; // plural, for HUD (e.g. TURKEYS)
  specialLabel: string; // e.g. Golden Turkey
  flipVerb: string; // e.g. Flip
  barnWidth: number; // along x
  barnDepth: number; // along z
  normalCount: number;
  bronzeCount: number;
  targetScore: number;
  baseSpeed: number;
  fleeSpeed: number;
  evasiveness: number; // 0..1
  blocking: number; // 0..1
  hasEquipment: boolean;
}

export const LEVELS: LevelConfig[] = [
  {
    index: 0,
    name: 'Basic Barn',
    subtitle: 'Learn the ropes. Flip the flock of turkeys.',
    species: 'turkey',
    theme: 'barn',
    critterLabel: 'TURKEYS',
    specialLabel: 'Golden Turkey',
    flipVerb: 'Flip',
    barnWidth: 36,
    barnDepth: 36,
    normalCount: 15,
    bronzeCount: 1,
    targetScore: 18,
    baseSpeed: 2.4,
    fleeSpeed: 4.2,
    evasiveness: 0.4,
    blocking: 0.25,
    hasEquipment: false,
  },
  {
    index: 1,
    name: 'Hen House',
    subtitle: 'Layer hens are jumpy. Flip the flock.',
    species: 'hen',
    theme: 'henhouse',
    critterLabel: 'HENS',
    specialLabel: 'Golden Hen',
    flipVerb: 'Flip',
    barnWidth: 40,
    barnDepth: 40,
    normalCount: 18,
    bronzeCount: 1,
    targetScore: 22,
    baseSpeed: 2.7,
    fleeSpeed: 4.6,
    evasiveness: 0.5,
    blocking: 0.35,
    hasEquipment: false,
  },
  {
    index: 2,
    name: 'Savanna Scramble',
    subtitle: 'Free-range chickens on an African field.',
    species: 'chicken',
    theme: 'savanna',
    critterLabel: 'CHICKENS',
    specialLabel: 'Golden Rooster',
    flipVerb: 'Flip',
    barnWidth: 50,
    barnDepth: 50,
    normalCount: 22,
    bronzeCount: 2,
    targetScore: 28,
    baseSpeed: 3.0,
    fleeSpeed: 5.1,
    evasiveness: 0.6,
    blocking: 0.4,
    hasEquipment: false,
  },
  {
    index: 3,
    name: 'Salmon Run',
    subtitle: 'Dive in and flip the salmon underwater.',
    species: 'salmon',
    theme: 'ocean',
    critterLabel: 'SALMON',
    specialLabel: 'King Salmon',
    flipVerb: 'Flip',
    barnWidth: 48,
    barnDepth: 48,
    normalCount: 24,
    bronzeCount: 2,
    targetScore: 32,
    baseSpeed: 3.2,
    fleeSpeed: 5.4,
    evasiveness: 0.7,
    blocking: 0.45,
    hasEquipment: false,
  },
  {
    index: 4,
    name: 'Shrimp Reef',
    subtitle: 'Deeper water, darting shrimp. Flip them all.',
    species: 'shrimp',
    theme: 'deepocean',
    critterLabel: 'SHRIMP',
    specialLabel: 'Tiger Prawn',
    flipVerb: 'Flip',
    barnWidth: 52,
    barnDepth: 52,
    normalCount: 28,
    bronzeCount: 2,
    targetScore: 36,
    baseSpeed: 3.5,
    fleeSpeed: 5.8,
    evasiveness: 0.82,
    blocking: 0.55,
    hasEquipment: true,
  },
  {
    index: 5,
    name: 'The Pig Pen',
    subtitle: 'Muddy, crowded and chaotic. Flip the hogs.',
    species: 'pig',
    theme: 'pigpen',
    critterLabel: 'PIGS',
    specialLabel: 'Prize Hog',
    flipVerb: 'Flip',
    barnWidth: 46,
    barnDepth: 46,
    normalCount: 20,
    bronzeCount: 2,
    targetScore: 32,
    baseSpeed: 3.0,
    fleeSpeed: 5.0,
    evasiveness: 0.7,
    blocking: 0.7,
    hasEquipment: false,
  },
  {
    index: 6,
    name: 'The Office',
    subtitle: 'Flip your colleagues before the meeting. Mind the carts!',
    species: 'worker',
    theme: 'office',
    critterLabel: 'STAFF',
    specialLabel: 'The Manager',
    flipVerb: 'Flip',
    barnWidth: 54,
    barnDepth: 54,
    normalCount: 26,
    bronzeCount: 3,
    targetScore: 42,
    baseSpeed: 3.6,
    fleeSpeed: 6.1,
    evasiveness: 0.9,
    blocking: 0.8,
    hasEquipment: true,
  },
];

export const LEVEL_DURATION = 60; // seconds

// Scoring constants
export const SCORE_NORMAL = 1;
export const SCORE_BRONZE = 5;
export const COMBO_WINDOW = 4; // seconds
export const COMBO_MAX = 5;
export const PENALTY_MISS = -1;
export const PENALTY_HAZARD = -2;

export const FLIP_RANGE = 2.6; // how close to flip
