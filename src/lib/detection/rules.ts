// Detection is plain code over a TrackerSnapshot, never AI. Starting
// thresholds from the plan; tuned against hand-checked findings in week 3.

export const RULES = {
  // Started and hasn't moved in this many days.
  staleAfterDays: 14,
  // Priority changes in the window that make it a pattern.
  priorityChangesThreshold: 3,
  priorityWindowDays: 30,
  // Team patterns only for groups at least this big. Never individual scores.
  minGroupSize: 5,
} as const;
