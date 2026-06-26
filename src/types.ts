export interface Pillar {
  id: string;
  title: string;
  badge: string;
  description: string;
  details: string[];
  metricLabel?: string;
  metricValue?: string;
}

export interface MetricCard {
  value: string;
  label: string;
  description: string;
  comparison: string;
}

export interface RevenueStream {
  name: string;
  y1: number; // in Cr (Crores)
  y2: number;
  y3: number;
  margin: number; // percentage
}

export interface RoadmapPhase {
  phase: string;
  timeframe: string;
  title: string;
  items: string[];
}

export interface AdvantagePoint {
  title: string;
  description: string;
}
