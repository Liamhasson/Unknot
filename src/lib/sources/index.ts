import type { DataSource, SourceKind } from "./types";
import { mockSource } from "./mock";

// One swappable source. GitHub lands in week 1, Linear or Jira in week 5.
const sources: Partial<Record<SourceKind, DataSource>> = {
  mock: mockSource,
};

export function getSource(kind: SourceKind): DataSource {
  const source = sources[kind];
  if (!source) throw new Error(`Data source "${kind}" is not built yet`);
  return source;
}

export type * from "./types";
