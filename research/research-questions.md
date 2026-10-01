# Research questions

Week 1. These replace the 5 questions in the plan. Each one is tied to something we build or decide in the 8 weeks. If a question's answer wouldn't change a screen, a rule or a gate, it isn't here.

## The questions

### RQ1. When priorities changed recently, what happened to the work that was already in flight?

Who stopped it, who didn't hear, and how long did it keep moving?

**Why this one:** It tests A1 (shifting priorities is a top-3 pain) and decides the hero story at the week 3 gate. It goes further than asking whether priorities change, though. Unknot's proof is *stale tickets plus work still moving on dropped goals*. If teams that change priorities stop the old work cleanly, there's nothing for Unknot to find, and the change brief and stop list fix a problem nobody has. We need the concrete aftermath, not the complaint.

**Feeds:** week 3 gate, journey map ("today, without Unknot"), problem statement.

### RQ2. When priorities change, does the tracker show it? Or does it live in Slack, meetings and people's heads?

**Why this one:** It's the riskiest question in the project, and the original plan doesn't ask it. The whole real slice reads the tracker. Detection looks for label, milestone and priority changes, and finds the decision lead from *who made them*. If teams don't touch the board when priorities change, detection misses the change. If they leave dead tickets "In progress" forever, it raises false alarms. Interviews are the cheapest place to find out before spending 20+ hours on detection.

**Feeds:** detection rules v0 and tuning, the check-up shortlist (which teams' boards are actually readable), the A6 hand checks.

### RQ3. What proof makes a fact about your team's work believable, and what makes it feel wrong or accusatory?

**Why this one:** It tests A2. The fact card (moment 1) is the first thing anyone sees, and the week 4 gate is "understood without explanation." We need to know which proof people check (ticket links? dates? who changed what?), what they'd dispute, and *why*: "paused on purpose," "that's tracked somewhere else," "that person's on leave." Those reasons become the correction options in moment 2.

**Feeds:** fact card content, the proof list component, the one-tap correction options, voice rules.

### RQ4. Who actually makes the priority call, and how would they take being shown their own changes?

**Why this one:** The fix goes to the decision lead, who is usually the person whose changes caused the churn. "Your priorities changed 3 times this month" can read as a fact or as blame. That risk is specific to this product, and it covers A3 (leads approve in one tap) and A5 (team-level data is enough for leaders). The question also checks that "decision lead" is a real, findable person and not a committee.

**Feeds:** fix routing, approval rules, fact card tone, decision lead persona, buyer profile. Asked in full to the 2 leads; members get only "who made that call and how did you find out."

### RQ5. In the hero story, which agent actions feel helpful, which feel bossy, and which feel like being watched?

**Why this one:** The plan asked this in the abstract ("where's the line between help and surveillance?"). Abstract questions get abstract answers ("it depends"). So this version tests the actual moments we're going to build:

- Moment 4: a DM saying "2 of your tickets are on the stop list. Archive them or hand over your notes?"
- Moment 5: being told your work overlaps with the new goal, plus a proposed 15-min chat
- Moment 9: a company leader seeing which teams have unstable priorities

This tests A4 and decides which actions run on their own and which need approval.

**Feeds:** the approval rules, the Company view's content, the "What Unknot sees" page, the test plan's surveillance-worry measure.

## What I left out, and why

| Left out | Why |
| --- | --- |
| "Who'd pay?" (in the original RQ5) | Pricing is out of scope, and 4 team members and 2 leads can't answer it. A light "who'd push for this?" probe stays in RQ4, which is enough for the one-paragraph buyer profile. |
| "What slows your team down?" in general | Too open, and other friction stories are out of scope. We still need to rank shifting priorities against other pains (the week 3 gate). The "walk me through your last week" section does that by listening, without leading. |
| "What would you let an agent do without asking?" (original RQ3) | Merged into RQ5. Asked against real moments, not in general. |
| Slack integration, tool preferences, feature wishes | Out of scope for the 8 weeks. They go on the phase 2 list if they come up. |

## Riskiest assumptions, ranked

Ranked by how much breaks if the assumption is wrong × how unsure we are.

| Rank | # | Assumption | If wrong | Tested by | Week |
| --- | --- | --- | --- | --- | --- |
| 1 | **A7 (new)** | Priority changes and stopped work show up in the tracker | Real slice finds nothing or raises false alarms | RQ2, then GitHub hand checks | 2–3 |
| 2 | A1 | Shifting priorities is a top-3 pain | Hero story switches (fallback exists) | RQ1 | 2 |
| 3 | A6 | Plain rules spot stale work and dropped goals correctly | Findings page is wrong in public | Hand checks, check-ups | 2–7 |
| 4 | A3 | Leads approve a fix in one tap, even when it's about their own changes | The core loop stalls at step 1 | RQ4, then tests | 2, 7 |
| 5 | A2 | Stale tickets and work on dropped goals are proof people trust | Fact card fails the week 4 gate | RQ3, then tests | 2, 7 |
| 6 | A4 | Personal steps feel helpful, not bossy | Member moments need redesign | RQ5, then tests | 2, 7 |
| 7 | A5 | Team-level data is enough for leaders | Company view needs rethinking, which only matters in phase 2+ | RQ4 | 2 |

## Changes to the interview guide

The guide covers RQ1, RQ3, RQ4 and RQ5 already. Nothing covers RQ2, so it gets 3 minutes taken from other sections. Still 40 minutes:

1. Intro and consent (3 min)
2. Walk me through your last week at work (8 → **6 min**)
3. Tell me about the last time priorities changed. What happened to the work you'd started? (10 min) → RQ1
4. Who made that call, and how did you find out? (7 → **6 min**) → RQ4
5. **New: When that change happened, what changed on your board, if anything? Who moved things? Are there tickets on it right now that everyone knows are dead? (3 min)** → RQ2
6. React to 2 sample agent messages, shown as plain text (8 min) → RQ3, RQ5. Use the moment 1 fact card and the moment 4 member step. Both roles see both messages.
7. What would feel like being watched? (4 min) → RQ5. Anchor it: "What if your company's leadership saw which teams change priorities most?"
