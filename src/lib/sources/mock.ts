import type { DataSource } from "./types";

// Bramble: fictional 140-person Berlin scale-up. Full 6-week history
// for the Platform team is written in week 6.
export const mockSource: DataSource = {
  kind: "mock",
  async fetchSnapshot() {
    return {
      source: "mock",
      workspace: "Bramble · Platform",
      fetchedAt: new Date().toISOString(),
      people: [],
      goals: [],
      items: [],
      events: [],
    };
  },
};
