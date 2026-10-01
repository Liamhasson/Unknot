// Normalised, read-only view of a tracker. Every source (mock Bramble,
// public GitHub, a check-up team's Linear or Jira) maps into these shapes,
// so detection never knows where the data came from.

export type SourceKind = "mock" | "github" | "linear" | "jira";

export interface Person {
  id: string;
  name: string;
  teamId?: string;
}

export interface Goal {
  id: string;
  name: string;
  // GitHub: a milestone or label. Linear: a project or cycle. Jira: an epic.
  kind: "milestone" | "label" | "project" | "epic";
}

export type ItemState = "open" | "started" | "done" | "closed";

export interface Item {
  id: string;
  url?: string;
  title: string;
  state: ItemState;
  assigneeIds: string[];
  goalIds: string[];
  labels: string[];
  createdAt: string; // ISO 8601
  updatedAt: string;
}

// One change on one item. Priority changes and staleness are both derived
// from this history, and `actorId` is how the decision lead is found.
export type ItemEventType =
  | "created"
  | "started"
  | "commented"
  | "assigned"
  | "unassigned"
  | "label_added"
  | "label_removed"
  | "goal_added"
  | "goal_removed"
  | "priority_changed"
  | "closed"
  | "reopened"
  | "linked_change"; // PR, commit or branch linked to the item

export interface ItemEvent {
  itemId: string;
  type: ItemEventType;
  actorId: string;
  at: string;
  from?: string;
  to?: string;
}

export interface TrackerSnapshot {
  source: SourceKind;
  workspace: string; // e.g. "nextcloud/server" or "Bramble · Platform"
  fetchedAt: string;
  people: Person[];
  goals: Goal[];
  items: Item[];
  events: ItemEvent[];
}

export interface DataSource {
  kind: SourceKind;
  // Read-only by contract: sources fetch, they never write back.
  fetchSnapshot(options: { since: string }): Promise<TrackerSnapshot>;
}
