# Research questions

Week 1. Five research questions, each tied to something we build or decide in the 8 weeks. Under each one are the scenarios we actually ask in the interview. Each scenario is a short situation followed by "what do you do?", so we hear how people act, not what they think of the idea.

**One rule for every scenario:** people are bad at predicting what they'd do. Every scenario ends with **"When did something like this last happen? What did you actually do?"** The scenario gets them talking. The real story is the evidence.

Role tags: **[all]** everyone, **[member]** team members only, **[lead]** team leads only.

---

## RQ1. When priorities change, what happens to the work already in progress?

**Why:** It tests A1 (shifting priorities is a top-3 pain) and decides the hero story at the week 3 gate. Unknot's proof is stale tickets plus work still moving on dropped goals. If teams stop old work cleanly when priorities change, the change brief and stop list fix nothing. We need the aftermath, not the complaint.

**Feeds:** week 3 gate, journey map, problem statement.

**S1 [all]: The Monday switch**
> It's Monday morning. Your lead posts in the team channel: "From today we're focusing on the new onboarding flow." You have two tickets from the old goal. One is about 80% done, the other you just started. Nobody mentions them.
>
> What do you do with those two tickets this week?

Probe: Who would you ask? Would you quietly finish the 80% one? What happens to them on the board?

**S2 [all]: Three weeks later**
> Three weeks after that switch, someone notices a teammate is still building for the old goal.
>
> How could that happen on your team? How would it come out, and whose problem is it?

Probe: How often does this happen? What did it cost the last time?

---

## RQ2. When priorities change, does the tracker show it?

**Why:** It's the riskiest question in the project. The real slice reads only the tracker. It looks for label, milestone and priority changes, and finds the decision lead from who made them. If changes live in Slack and meetings, detection finds nothing. If dead tickets sit "In progress" forever, it raises false alarms.

**Feeds:** detection rules v0, tuning, the check-up shortlist, A6/A7 hand checks.

**S3 [all]: The board a week later**
> Same Monday switch. A week has passed.
>
> If I opened your board right now, what on it would show that priorities changed? Who would have changed it?

Probe: Are there tickets on your board right now that everyone knows are dead? Why are they still there?

**S4 [all]: The new joiner**
> A new person joins your team tomorrow. Nobody briefs them. They only look at the board to work out what matters.
>
> What would they get wrong?

---

## RQ3. What proof makes a fact about your team believable, and what makes it feel wrong or accusatory?

**Why:** It tests A2. The fact card is the first thing anyone sees, and the week 4 gate is "understood without explanation." We need to know what people check, what they'd push back on, and *why*. Those reasons become the one-tap correction options.

**Feeds:** fact card content, proof list, correction options, voice rules.

**S5 [all]: The Monday DM**
> You get this message on Monday morning, with links to each ticket:
>
> *"Platform's priorities changed 3 times in the last 30 days. 4 tickets started before those changes haven't moved in 14+ days. 2 people are still working on Self-serve billing, which was dropped on Sep 12."*
>
> What's the first thing you'd check? Which part would you push back on?

Probe: What would make you trust it? What would make you ignore it? Who would you forward it to?

**S6 [lead]: One of them is wrong**
> You look at the 4 tickets. One of them is paused on purpose, and the tool doesn't know that.
>
> What do you want to happen next?

Probe: How much effort would you put into correcting it? What if it made the same mistake next month?

---

## RQ4. Who actually makes the priority call, and how do they take being shown their own changes?

**Why:** The fix goes to the decision lead, who is usually the person whose changes caused the churn. "Your priorities changed 3 times" can read as a fact or as blame. That risk is specific to this product. It also covers A3 (leads approve in one tap) and A5 (team-level data is enough for leaders), and checks that a "decision lead" is a real person, not a committee.

**Feeds:** fix routing, approval rules, fact card tone, decision lead persona, buyer profile.

**S7 [lead]: It was you**
> You made those 3 priority changes, each for a good reason. The message from S5 lands in your DMs, and it's clearly about your calls.
>
> How does it land? What would you want it to say instead?

Probe: Would you rather it went to someone else? Who else should see it?

**S8 [lead]: The brief is ready**
> Under the message there's a ready draft: what's dropped, what carries on, and which tickets stop. One button sends it to the team channel.
>
> Do you send it as is, edit it first, or ignore it? Why?

**S9 [member]: Who made the call**
> Think about the last time your priorities changed.
>
> Who actually made that call, and how did you find out? If you saw two people still building for a dropped goal, who would you tell?

**S10 [lead]: Going wider**
> Your Head of Product hears about it and wants it for every team.
>
> Who in the company would push for it, and who would push back?

---

## RQ5. In the hero story, which agent actions feel helpful, which feel bossy, and which feel like being watched?

**Why:** Asking "where's the line between help and surveillance?" in the abstract only gets "it depends." These scenarios are the actual moments we're building (4, 5 and 9), so the answers decide which actions run on their own and which need approval.

**Feeds:** approval rules, Company view content, the "What Unknot sees" page, the surveillance-worry test measure.

**S11 [all]: Your stop list**
> You get a DM: *"2 of your tickets are on the stop list. Archive them or hand over your notes?"*
>
> Helpful, bossy, or something else? What would you change?

**S12 [member]: The overlap**
> You were one of the two still working on the dropped goal. The tool shows you where your work overlaps with the new goal and suggests a 15-minute chat with your lead. Your lead already said yes.
>
> How does that feel?

**S13 [all]: The leadership page**
> Your company's leadership has a page showing which teams change priorities most and where the changes come from. Your team is at the top.
>
> How do you feel? And what if everyone could see the exact same page?

---

## What I left out, and why

| Left out | Why |
| --- | --- |
| "Who'd pay?" | Pricing is out of scope, and 4 team members and 2 leads can't answer it. S10 covers who'd push for it, which is enough for the buyer profile. |
| "What slows your team down?" in general | Too open, and other friction stories are out of scope. The opening "walk me through last week" ranks pains by listening instead of asking. |
| "What would you let an agent do without asking?" | Replaced by S11–S13, which test real moments. |
| Slack integration, tools, feature wishes | Out of scope. Phase 2 list if it comes up. |

## Riskiest assumptions, ranked

Ranked by how much breaks if wrong × how unsure we are.

| Rank | # | Assumption | If wrong | Tested by | Week |
| --- | --- | --- | --- | --- | --- |
| 1 | **A7 (new)** | Priority changes and stopped work show up in the tracker | Real slice finds nothing or raises false alarms | S3, S4, GitHub hand checks | 2–3 |
| 2 | A1 | Shifting priorities is a top-3 pain | Hero story switches (fallback exists) | S1, S2, opening | 2 |
| 3 | A6 | Plain rules spot stale work and dropped goals correctly | Findings page is wrong in public | Hand checks, check-ups | 2–7 |
| 4 | A3 | Leads approve a fix in one tap, even when it's about their own changes | The loop stalls at step 1 | S7, S8, then tests | 2, 7 |
| 5 | A2 | Stale tickets and work on dropped goals are proof people trust | Fact card fails the week 4 gate | S5, S6, then tests | 2, 7 |
| 6 | A4 | Personal steps feel helpful, not bossy | Member moments need redesign | S11, S12, then tests | 2, 7 |
| 7 | A5 | Team-level data is enough for leaders | Company view needs rethinking, which only matters in phase 2+ | S10, S13 | 2 |

## Interview run order (40 min)

Members and leads get different sets so each interview fits in 40 minutes. Scenarios marked *if time* are dropped first.

| Min | Section | Members | Leads |
| --- | --- | --- | --- |
| 3 | Intro and consent | ✓ | ✓ |
| 6 | Walk me through your last week | ✓ | ✓ |
| 10 | The switch | S1, S2 | S1, S2 *if time* |
| 5 | The board | S3, S4 | S3, S4 *if time* |
| 8 | The message | S5, S9 | S5, S6, S7, S8 |
| 6 | The boundaries | S11, S12, S13 | S13, S10 |
| 2 | Close: "Once it works, could I run it on your board once?" | ✓ | ✓ |
