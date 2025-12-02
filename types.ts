export type Grade = 'A' | 'B' | 'C';

export interface AccelerometerDataPoint {
  time: number; // Seconds or timestamp
  x: number;
  y: number;
  z: number;
}

export interface ActivityMetrics {
  totalDurationMinutes: number;
  sedentaryMinutes: number;
  lightActivityMinutes: number;
  moderateVigorousMinutes: number; // MVPA
  stepsEstimate: number;
  intensityScore: number; // 0-100
}

export interface ChildReport {
  id: string;
  name: string;
  age: number;
  gender: 'male' | 'female';
  createdAt: string; // ISO Date
  metrics: ActivityMetrics;
  grade: Grade;
  recommendation: string;
  chartData: { name: string; value: number }[]; // For pie chart
  timelineData: { time: string; intensity: number }[]; // For area/line chart
}
