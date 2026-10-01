import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-8 px-6 py-24">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold tracking-tight">Unknot</h1>
        <p className="text-lg text-foreground/70">
          Spots where work breaks across your tools, states it with proof, and
          turns the fix into one small step per person.
        </p>
      </div>
      <nav className="flex flex-col gap-3">
        <Link className="underline underline-offset-4" href="/prototype">
          Prototype: Bramble, priorities that keep changing
        </Link>
        <Link className="underline underline-offset-4" href="/findings">
          Findings: real data from public GitHub projects
        </Link>
      </nav>
    </main>
  );
}
