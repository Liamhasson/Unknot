// The core object: Friction → Fix → Result. Shared by the designed prototype
// and the real slice. Draft v0; finalised in week 3 after synthesis.

export type Level = "me" | "team" | "company";

export type FrictionType =
  | "shifting_priorities" // hero story
  | "meetings_without_decisions"
  | "repeat_questions"
  | "no_focus_time"
  | "stuck_handoffs";

// One fact, always with its proof. Facts come from code, never from AI.
export interface Proof {
  label: string; // "Ticket PLAT-142 untouched for 16 days"
  itemIds: string[];
  url?: string;
}

export interface Friction {
  id: string;
  type: FrictionType;
  teamId: string;
  detectedAt: string;
  // e.g. { priorityChanges: 3, staleItems: 4, peopleOnDroppedGoals: 2 }
  measures: Record<string, number>;
  proof: Proof[];
  decisionLeadId?: string;
}

export type FixStatus = "proposed" | "approved" | "corrected" | "running" | "kept" | "adjusted" | "reverted";

export interface Fix {
  id: string;
  frictionId: string;
  kind: "change_brief" | "async_trial" | "pin_answer" | "focus_block" | "handoff_contact";
  status: FixStatus;
  approverId: string;
  draft?: string; // AI-written words; the facts in it come from the Friction
  startedAt?: string;
}

// One small action for one person.
export interface Step {
  id: string;
  fixId: string;
  personId: string;
  text: string; // "2 of your tickets are on the stop list. Archive them or hand over your notes?"
  status: "open" | "done" | "skipped";
}

export interface Result {
  fixId: string;
  measuredAt: string;
  before: Record<string, number>;
  after: Record<string, number>;
  decision?: "keep" | "adjust" | "revert";
}

// Anyone can correct a wrong fact in one tap.
export interface Correction {
  id: string;
  frictionId: string;
  personId: string;
  itemIds: string[];
  reason: string; // "Paused on purpose"
  at: string;
}
