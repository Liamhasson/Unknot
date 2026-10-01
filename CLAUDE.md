@AGENTS.md

# Unknot

Plan: `docs/plan.md`. Product decisions there are locked unless research breaks them; new ideas go on the phase 2 list, not into the 8 weeks.

- Facts come from plain code over a `TrackerSnapshot` (`src/lib/sources/types.ts`). AI only writes words (fact card, change brief), never decides facts.
- Every source is read-only. Never add a write call to a tracker API.
- Never send a check-up team's data to a free AI tier. Public GitHub data only.
- Never commit anything from `research/interviews/` or real check-up data.
- Desktop only, 1440px wide, AA contrast, keyboard access on every button.

## Public GitHub data

Three repos for the real slice:

- **nextcloud/server**: release milestones that slip, and work going stale.
- **microsoft/vscode**: issues move between "Backlog Candidates", "On Deck", "Backlog" and release milestones. Huge repo, so pull one area label and the last 6 months only.
- **element-hq/element-web**: team labels ("Team: Crypto" etc.) and severity/occurrence labels. Severity labels aren't confirmed yet. If they're thin, swap in **kubernetes/kubernetes**, which has explicit priority labels.

- The GitHub token lives in `.env.local`. Never commit it.
- Raw data goes in `data/raw/<repo>/` and stays out of git.
