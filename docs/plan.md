# Unknot: 8-week work plan

Sep 30, 2026 · @Liam

From Oct 5, 2026 to Nov 29, 2026, about 160 hours (9 to 13 every weekday) solo with AI tools, this plan takes Unknot from research to a tested prototype, a working slice on real data, and a published case study. It's built around one friction story, priorities that keep changing, shown end to end across all three levels.

## Scope

The goal is a portfolio case study with a working slice of the real product behind it. The slice runs on real tracker data; the rest is a designed, tested prototype.

**In scope**

- 6 interviews (4 team members, 2 team leads) plus the desk research already done: the Friction Map report and the competitor SWOT.
- One hero friction story, "priorities that keep changing," designed end to end across Me, Team and Company.
- A demo fix library of 5 fixes, with the change brief and stop list fully designed.
- **Designed prototype:** Slack-style chat screens, Team and Company views and a "What Unknot sees" page, coded on mock data.
- **Real slice:** a web page that reads a real tracker read-only, finds stale work and work on dropped goals, and drafts the fact card and change brief. It runs on public GitHub projects first, then on 2 or 3 real teams' boards.
- 5 usability tests, 2 to 3 real check-ups, and one round of fixes.
- A case study on the portfolio site, plus a 60 to 90 second walkthrough video.

**Out of scope for these 8 weeks**

- A real Slack integration. Slack stays in the designed prototype.
- Running on its own every week, and logins for other people. That's phase 2.
- Keeping anyone's data. Check-ups run once and nothing is stored.
- A Microsoft Teams version, a mobile app, and setup flows beyond one screen.
- Other friction stories in depth. They only show up as light vision cards.
- Pricing tests, legal review, company setup and fundraising.

**Definition of done**

- [ ] The prototype is live on a Vercel link and runs the whole hero story without breaking.
- [ ] The real slice is live and works on at least 3 public GitHub projects.
- [ ] 5 tests and at least 2 real check-ups are done, and the top 3 issues are fixed.
- [ ] The case study is published with research, decisions, screens, real findings, test results and next steps.

## Product decisions already made

**Unknot is an agent that spots where work breaks across your tools, states it with proof, and turns the fix into one small step per person.** These decisions came out of the ideation and don't get reopened during the 8 weeks unless research breaks them.

**Core object:** Friction → Fix → Result. Every screen shows this one object from a different angle.

| Level | Job | Where it lives |
| --- | --- | --- |
| Me | Protect my day, do my one step | Slack DMs, calendar |
| Team | Approve one fix, see if it worked | Team channel + small web page |
| Company | Decide which fixes to spread | Web view + monthly summary |

**Rules**

- The agent states facts with proof, never asks for opinions. Anyone can correct a wrong fact in one tap.
- It only shows team patterns for groups of 5+, never individual scores.
- It never guesses how people feel from their messages (banned under the EU AI Act since Feb 2025).
- Everyone can see what leaders see.
- Approvals: an action that only affects you and can be undone happens on its own. Anything affecting other people's time needs the owner's OK. Changes to how a team works go to the decision lead, whoever made the call, whatever their title. After 3 approvals of the same fix type, a team can switch it to automatic.
- Facts come from plain code reading the tracker, never from AI guesses. AI only writes the words. Insights stay inside the engine, and people see actions and results, not charts.

**Target market:** European scale-ups using mixed tools (Slack, Google Workspace, Linear or Jira, Notion). Positioning: "DX for every team."

## The hero story: priorities that keep changing

Bramble is a fictional 140-person Berlin scale-up. Its Platform team (8 people) has had its priorities change 3 times in a month. 4 tickets are half-done and haven't been touched in 2 weeks, 2 people are still building for a goal that was dropped, and nobody has said so out loud. Unknot states it as a fact, shows the proof, and the fix is a change brief plus a stop list, so everyone knows what's dropped and what carries on.

**Who gets the fix:** the decision lead, meaning whoever actually made the priority calls, whatever their title. Unknot finds them from who changed the priorities in the tracker or announced the change. At Bramble that's the Head of Product, not the Platform team lead.

**The proof:** work that got started and then dropped (stale tickets), plus work still moving on goals that were deprioritized.

| # | Moment | Level | Surface | Priority |
| --- | --- | --- | --- | --- |
| 1 | Decision lead gets a fact card: 3 priority changes in a month, 4 stale tickets, 2 people on a dropped goal, with the proof | Team | Slack DM | P0 |
| 2 | Decision lead approves, or corrects: "These tickets are paused on purpose" | Team | Slack DM | P0 |
| 3 | Unknot drafts the change brief and stop list from the latest decisions. The lead edits and sends it, and it's pinned in the team channel | Team | Slack DM + channel | P0 |
| 4 | Each member's step: "2 of your tickets are on the stop list. Archive them or hand over your notes?" | Me | Slack DM | P0 |
| 5 | The 2 people on the dropped goal see where their work overlaps with the new one, plus a proposed 15-min chat the lead accepts | Me | Slack DM | P0 |
| 6 | A week later, Unknot catches change #4 before it spreads by DM and asks the lead to add it to the brief | Team | Slack DM | P1 |
| 7 | Result card after 2 weeks: stale tickets, work on dropped goals, keep / adjust / revert | Team | Slack channel | P0 |
| 8 | Team page: current priorities, stop list, change history, open frictions | Team | Web | P0 |
| 9 | Company view: which teams have unstable priorities and where the changes come from, plus "this fix worked in 3 teams, offer it to 5 more?" | Company | Web | P0 |
| 10 | Leader's monthly summary | Company | Slack DM | P1 |
| 11 | "What Unknot sees" page, open to everyone | All | Web | P0 |
| 12 | Setup: connect tools and privacy settings, one screen | Company | Web | P1 |
| 13 | Vision: 4 other friction stories as light cards | All | Web | P2 |

That's 9 P0 screens, 3 P1 and 1 P2. P0 must ship; P1 and P2 get cut first if time slips.

**Demo fix library**

| Fix | Triggered when Unknot sees... | Measured by | Depth |
| --- | --- | --- | --- |
| Change brief + stop list | Priorities changed 3+ times in a month and started work goes stale | Stale tickets, work on dropped goals | Full (hero) |
| Switch to async for 2 weeks | Recurring meeting, no recorded decision for 3+ weeks | Meeting hours, decisions logged | Card only |
| Name an owner, pin the answer | Same question asked 5+ times | Repeat questions | Card only |
| Shared focus block | Most of the team under 2 hours of focus a day | Focus hours | Card only |
| One contact for handoffs | Work stuck between two teams | Wait time | Card only |

## At a glance

&#91;embedded content: 8-week plan · 4 phases, 8 gates\]

Research runs until week 3, where the hero story gets confirmed or switched. The prototype exists by week 6 and gets tested in week 7.

## Week by week

Every week is 20 hours: 9 to 13, Monday to Friday. Each week ends with a gate. If it's not met, use the cut list under Risks before moving on.

### Week 1 (Oct 5–11): Set up, recruit, pull real data

- [ ] Write the 5 research questions and rank the riskiest assumptions (2h)
- [ ] Write the interview guide and a short consent note (2h)
- [ ] Ask Cyvore's founder for OK, then recruit 6 interviewees and book them for week 2 (3h)
- [ ] Competitor teardown: how Viva Insights, Slackbot and Culture Amp show problems (2h)
- [ ] Set up the Figma file, code repo and a research log (1h)
- [ ] Name check: domain and trademark search for "Unknot" (1h)
- [ ] Pick 3 public GitHub projects with active roadmaps and pull their issues and history with Claude Code (6h)
  - [ ] Create a free fine-grained GitHub token (read-only, public repos) and store it in `.env.local`, which is in `.gitignore`
  - [ ] Pull issues with labels, milestones, assignees, dates, and timeline events: milestoned, demilestoned, labeled, unlabeled, assigned, closed, reopened
  - [ ] Save raw data in `data/raw/<repo>/`, kept out of git
  - [ ] Write a short report per repo: issue count, which signals exist and how often, anything that makes it a bad fit
  - [ ] Review the report with Claude (chat) and decide whether Element stays or Kubernetes replaces it
- [ ] Write detection rules v0: stale work, priority changes, work on dropped goals (3h)

**Deliverable:** booked interviews and real issue data. **Gate:** 5+ interviews booked, and data pulled from at least 1 project.

### Week 2 (Oct 12–18): Interviews and first detection

- [ ] Run 6 interviews, 40 min each, and end each one by asking about a check-up on their board (4h)
- [ ] Write notes right after each one and tag key quotes (2h)
- [ ] Summarize with Claude, then check the summaries against your notes (1.5h)
- [ ] Book 5 test participants for week 7 (1h)
- [ ] Build detection v0 on the GitHub data (8h)
- [ ] Check its findings by hand on 1 project (2h)
- [ ] Buffer for reschedules (1.5h)

**Deliverable:** 6 interview notes, a quote bank and first real findings. **Gate:** 5+ interviews done, and detection finds real stale work you can confirm by hand.

### Week 3 (Oct 19–25): Synthesis, hero decision, tuning

- [ ] Affinity map in FigJam (3h)
- [ ] 2 personas (team member, decision lead) plus a one-paragraph buyer profile (2h)
- [ ] Journey map of how the hero story plays out today, without Unknot (2h)
- [ ] Problem statement, 3 "How might we" questions and success metrics (1.5h)
- [ ] Confirm the hero story at the gate and update the assumptions list (1.5h)
- [ ] Data model shared by the prototype and the real slice: Friction, Fix, Step, Result, Correction (2h)
- [ ] Run detection on the other 2 projects and tune the rules to cut false alarms (5h)
  - [ ] Backtest: replay each repo "as of" a past date (e.g. July 1) and run detection. Then check what really happened afterwards. Were the flagged tickets dropped? Did the flagged milestones slip?
  - [ ] Record the hit rate per repo. It goes into the case study as "it called X of Y correctly"
- [ ] Line up 2 to 3 check-ups with interviewees who said yes (1h)
- [ ] Buffer (2h)

**Gate:** if fewer than 3 of 6 people name shifting priorities as a top-3 pain, switch the hero story to the pain named most. Also, at least 4 of 5 hand-checked findings are correct.

### Week 4 (Oct 26–Nov 1): Concept, flows and AI drafts

- [ ] Service blueprint of the loop: sense, state, fix, steps, prove (2h)
- [ ] User flows for all 13 moments, including the correct and revert paths (3h)
- [ ] Low-fi wireframes of the 9 P0 screens and the findings page (5h)
- [ ] Voice rules for agent messages: one fact, its proof, one action per message (1h)
- [ ] Send 2 wireframed fact cards to 2 interviewees for a quick async reaction (0.5h)
- [ ] AI drafting: fact card and change brief from real findings, trying a free option first (6h)
- [ ] Decide on AI cost: free is good enough, or set a small monthly cap (0.5h)
- [ ] Buffer (2h)

**Deliverable:** flows, wireframes and AI drafts for 1 project. **Gate:** the fact card is understood without explanation, and the drafts read like something a lead would actually send.

### Week 5 (Nov 2–8): Visual design and connector

- [ ] Light brand: logo mark, colors, type, agent tone (2h)
- [ ] Components: fact card, fix card, step card, result card, approval buttons, proof list (2h)
- [ ] Hi-fi P0 screens (6h)
- [ ] Hi-fi P1 screens (1h)
- [ ] Read-only connector for the check-up teams' tool, Linear or Jira (6h)
- [ ] Data safety: read-only tokens, run once, delete after, plus a one-page note for check-up teams (3h)

**Deliverable:** hi-fi screens and a working connector. **Gate:** all 9 P0 screens done, and the connector works on a test workspace.

### Week 6 (Nov 9–15): Build and first check-up

- [ ] Mock data for Bramble: teams, people, tickets, priority changes, 6 weeks of history (2h)
- [ ] Build the prototype in the same codebase: chat frame, Team and Company views, scripted story with a "skip ahead" control (8h)
- [ ] Style the findings page, deploy both to Vercel, fix bugs (2h)
- [ ] Check-up 1: run on a real board, then a 30-min walk-through (3h)
- [ ] Notes from check-up 1, and fix the detection issues it showed (3h)
- [ ] Buffer (2h)

**Gate:** the hero story runs start to finish in under 5 minutes without help, and check-up 1 is done.

### Week 7 (Nov 16–22): Test, iterate, more check-ups

- [ ] Write the test script: 5 tasks, questions, trust rating (1h)
- [ ] Run 5 remote sessions, 40 min each (4h)
- [ ] Rank issues by severity (2h)
- [ ] Fix the top 3 issues in Figma and the code (4h)
- [ ] Check-ups 2 and 3 (6h)
- [ ] Notes from both check-ups (2h)
- [ ] Buffer (1h)

**Gate:** test thresholds met, and at least 2 check-ups done in total. If not, the case study says honestly what didn't work.

### Week 8 (Nov 23–29): Case study and publish

- [ ] Write the case study, including real findings, anonymized (6h)
- [ ] Visuals: cover image, loop diagram, before/after, real findings screens (4h)
- [ ] Walkthrough video, 60 to 90 seconds (2h)
- [ ] Publish on the portfolio site, linking the prototype and the live findings page on public projects (3h)
- [ ] LinkedIn post, and send it to 5 people for feedback (1h)
- [ ] Write the phase 2 plan (2h)
- [ ] Buffer (2h)

**Gate:** definition of done met.

## Research plan

Interviews test the riskiest assumptions before anything gets designed. They also decide the hero story in week 3.

**Research questions**

1. How do people find out priorities changed, and what happens to work they'd already started?
2. Would they trust an agent that states facts about their team's work? What proof do they need?
3. What would they let an agent do without asking?
4. Where's the line between help and surveillance?
5. Who really makes priority calls, who'd push for this, and who'd pay?

**Riskiest assumptions**

| # | Assumption | Tested by | Week |
| --- | --- | --- | --- |
| A1 | Shifting priorities is a top-3 pain | Interviews | 2 |
| A2 | Stale tickets and work on dropped goals are proof people trust | Interviews, then tests | 2, 7 |
| A3 | Leads will approve a fix in one tap | Tests | 7 |
| A4 | Personal steps feel helpful, not bossy | Tests | 7 |
| A5 | Team-level data is enough for leaders | Interviews with leads | 2 |
| A6 | Plain rules in code can spot stale work and dropped goals correctly | Hand checks on GitHub, then check-ups | 2–7 |

**Participants**

- Interviews: 6 people from at least 3 companies. 4 team members and 2 team leads, mixing design, engineering, product and ops.
- Tests: 5 different people. 3 team members and 2 leads.
- Check-ups: 2 or 3 team leads or PMs, ideally from the interviews. One read-only run on their board and a 30-min walk-through of the findings, with their written OK first and nothing kept afterwards.
- Sources: Cyvore (only after the founder says OK) and friends at Berlin tech companies. End each interview with: "Once it works, could I run it on your board once?"

**Interview guide (40 min)**

1. Intro and consent (3 min)
2. Walk me through your last week at work (8 min)
3. Tell me about the last time priorities changed. What happened to the work you'd started? (10 min)
4. Who made that call, and how did you find out? (7 min)
5. React to 2 sample agent messages, shown as plain text (8 min)
6. What would feel like being watched? (4 min)

**Recruiting message**

> Hey! I'm working on a product idea about the stuff that slows teams down at work, like priorities that keep changing. Could I steal 40 minutes for a video call in the week of Oct 12? No prep, just talking about how your week actually goes. Happy to buy you a coffee after.

## Build spec

One codebase holds both the designed prototype and the real slice, so phase 2 builds on it instead of starting over.

- **Stack:** Next.js built with Claude Code, deployed on Vercel.
- **Data layer:** one swappable source. Mock data (Bramble), public GitHub projects, or a check-up team's Linear or Jira, all read-only.
- **Detection:** plain rules in code, never AI guesses. Starting rules, tuned in week 3: a ticket is stale when it was started and hasn't moved in 14 days; a priority change is a change to labels, milestones or priority fields; work on a dropped goal is activity on items whose goal was deprioritized.
- **AI drafting (cost: ?):** AI only writes the fact card and the change brief from the findings. Try free first: a local model on your own computer, or a free tier. Free tiers often allow your data to be used for training, so use them only on public GitHub data, never on a team's board. Decide in week 4 whether free is good enough or a small monthly cap is worth it.
- **Data safety:** read-only access, check-ups run once, nothing stored afterwards, and findings anonymized in the case study.
- **Mock company:** Bramble (fictional), 140 people, 6 teams, using Slack, Google Calendar and Linear. Hero team: Platform, 8 people.
- **Views:** chat with a role switcher (Decision lead, Team member, Person on the dropped goal, Company leader), Team page, Company page, "What Unknot sees" page, and the real findings page.
- **Basics:** desktop only, 1440px wide, AA color contrast and keyboard access for every button.

| Part | Real or designed |
| --- | --- |
| Reading a tracker | Real: GitHub first, then Linear or Jira, read-only |
| Finding stale work and dropped goals | Real, plain rules in code |
| Fact card and change brief text | Real, drafted by AI from the findings |
| Findings page | Real |
| Slack chat frame and messages | Designed, Slack-style with no Slack branding |
| Buttons (approve, correct, keep, revert) | Work in the prototype and change what happens next |
| Time | A "skip ahead" control in the prototype |
| Team and Company views | Designed, on mock data |

## Usability test plan

5 remote sessions of 40 minutes in week 7, each with 5 tasks and a trust rating.

**Tasks**

1. As the decision lead, read the fact card and decide whether to approve or correct it.
2. Correct a wrong fact: 2 of the tickets are paused on purpose.
3. As a member, clear your stop-list tickets.
4. Two weeks later, decide whether to keep the fix.
5. As a leader, find which fix to spread and to which team.

**Pass thresholds**

| Measure | Pass if |
| --- | --- |
| Task success | 4 of 5 people finish each task without help |
| Trust in the fact card | Average of 4 or more out of 5 |
| "I'd want this for my team" | 3 of 5 people say yes |
| Surveillance worry | Nobody calls it surveillance without being asked |

**Real check-ups**

Each check-up is one run on a real board plus a 30-min walk-through with the person who owns it.

| Measure | Good sign |
| --- | --- |
| Findings are right | They confirm at least 4 of 5 findings |
| Would act on it | They say they'd send the change brief |
| Would run it again | They ask for another run |

## Case study

It goes on the portfolio site as a new case study page, with the prototype link and the walkthrough video.

1. The hook: the friction cycle, and why more tools don't fix it
2. Research: the Friction Map report, 6 interviews and what they showed
3. The key insight and the problem statement
4. The concept and its rules, including privacy and approvals
5. The hero story, screen by screen
6. Testing: what broke, what changed
7. Market: competitors and where Unknot fits
8. What's next: the phase 2 to 4 roadmap

The public projects prove the detection works. The team check-ups prove the value.

When talking about how it was made, be concrete: "I designed it in Figma and built the prototype with Claude Code."

## Risks and fallbacks

The biggest risk is now the real-data build: it's the part that's hardest to estimate. So there's a fixed cut order, and the public GitHub results carry the case study even if no team says yes.

| Risk | Likelihood | Fallback |
| --- | --- | --- |
| The real-data build takes longer than planned | High | Skip the Linear/Jira connector; run check-ups only for teams on GitHub, or lean on public projects |
| No team agrees to a check-up | Medium | Public GitHub results carry the case study |
| Free AI drafting isn't good enough | Medium | Use templates for the fact card, or a paid model with a small monthly cap |
| Research points to a different top pain | Medium | Switch the hero story in week 3; same structure, different fix |
| Can't book 6 interviews | Medium | 5 is the minimum; ask each person for a referral |
| New ideas creep in (more stories, Slack integration) | Medium | Anything new goes on the phase 2 list, not into these 8 weeks |
| Weeks slip because of job search or client work | Low to medium | Mornings are protected; keep Nov 30–Dec 6 as a spare week |
| A check-up exposes a team's data | Low | Read-only, run once, nothing stored, findings anonymized |
| Cyvore says no | Low to medium | Recruit from friends only |
| The name "Unknot" is taken | Low to medium | Pick a new name in week 1, before any brand work |

**Cut list, in this order**

1. The P2 vision screen
2. The walkthrough video (use screenshots instead)
3. P1 screens
4. The Linear/Jira connector (GitHub only)
5. Interviews down to 5, tests down to 4
6. Team and Company views as static pages

## After week 8

&#91;embedded content: long-term roadmap · 4 phases, 3 gates\]

This 8-week plan is phase 1. Each later phase gets its own detailed plan once the gate before it is passed, and the dates after November are rough targets. Slack's API terms have limited bulk and historical data access for third-party AI apps since mid-2025, so phase 2 works from live events and Slack's approved app route.

## Open questions

- [ ] Is "Unknot" free as a name and domain? (week 1)
- [x] GitHub projects picked:
  - nextcloud/server: release milestones that slip, work going stale
  - microsoft/vscode: issues moving between "Backlog Candidates", "On Deck", "Backlog" and release milestones. Huge repo, so only one area label and the last 6 months.
  - element-hq/element-web: team labels ("Team: Crypto" etc.) and severity/occurrence labels. Severity labels aren't confirmed yet. If they're thin, swap in kubernetes/kubernetes, which has explicit priority labels.
- [ ] Will Cyvore's founder let you interview their team?
- [ ] AI drafting: is a free option good enough, or is a small paid monthly cap worth it? (week 4)
- [ ] Does the case study get its own page on the Figma portfolio site?
- [ ] Are there weeks between Oct 5 and Nov 29 you already know you'll lose?
