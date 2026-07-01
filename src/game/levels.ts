// Level definitions and shared world types for Turkey Flip Barn Rush.

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
  solid: boolean; // blocks player + turkey movement
  blocksSight: boolean; // turkeys can hide behind it
}

export interface LevelConfig {
  index: number;
  name: string;
  subtitle: string;
  barnWidth: number; // along x
  barnDepth: number; // along z
  normalTurkeys: number;
  bronzeTurkeys: number;
  targetScore: number;
  // AI tuning
  turkeyBaseSpeed: number;
  turkeyFleeSpeed: number;
  evasiveness: number; // 0..1 how reactive/jittery turkeys are
  blocking: number; // 0..1 tendency to crowd the player
  hasEquipment: boolean;
}

export const LEVELS: LevelConfig[] = [
  {
    index: 0,
    name: 'Basic Barn',
    subtitle: 'Learn the ropes. Flip the flock.',
    barnWidth: 36,
    barnDepth: 36,
    normalTurkeys: 15,
    bronzeTurkeys: 1,
    targetScore: 20,
    turkeyBaseSpeed: 2.4,
    turkeyFleeSpeed: 4.2,
    evasiveness: 0.4,
    blocking: 0.25,
    hasEquipment: false,
  },
  {
    index: 1,
    name: 'Partitioned Barn',
    subtitle: 'Pens, gates and mud. Watch your route.',
    barnWidth: 46,
    barnDepth: 46,
    normalTurkeys: 22,
    bronzeTurkeys: 2,
    targetScore: 35,
    turkeyBaseSpeed: 2.9,
    turkeyFleeSpeed: 5.0,
    evasiveness: 0.6,
    blocking: 0.45,
    hasEquipment: false,
  },
  {
    index: 2,
    name: 'Chaos Barn',
    subtitle: 'Maze, mud and machinery. Total mayhem.',
    barnWidth: 56,
    barnDepth: 56,
    normalTurkeys: 30,
    bronzeTurkeys: 3,
    targetScore: 50,
    turkeyBaseSpeed: 3.4,
    turkeyFleeSpeed: 5.8,
    evasiveness: 0.85,
    blocking: 0.7,
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
