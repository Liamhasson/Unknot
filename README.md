# Unknot

An agent that spots where work breaks across your tools, states it with proof, and turns the fix into one small step per person.

Portfolio case study, Oct 5 – Nov 29, 2026. Full plan: [docs/plan.md](docs/plan.md).

## What's here

One codebase for both halves of the project:

| Part | Real or designed | Where |
| --- | --- | --- |
| Prototype: Bramble, "priorities that keep changing" | Designed, mock data | `src/app/prototype` |
| Findings page | Real, read-only tracker data | `src/app/findings` |
| Tracker sources (mock, GitHub, Linear, Jira) | Real, read-only | `src/lib/sources` |
| Detection rules | Real, plain code, no AI | `src/lib/detection` |
| Friction → Fix → Result model | Shared | `src/lib/model` |

Research lives in `research/`. Interview notes go in `research/interviews/`, which is git-ignored because it holds personal data.

## Run it

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Data rules

- Read-only access everywhere. Sources fetch, they never write back.
- Check-ups run once and nothing is stored afterwards.
- Free AI tiers only on public GitHub data, never on a team's board.
- Team patterns for groups of 5+ only. No individual scores, no reading feelings from messages.
