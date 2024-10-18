import { VoteForm } from "./vote-form";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto space-y-6 my-6">
      <h1 className="text-3xl font-bold">Core Web Vitals</h1>
      <h2>
        Segons les dades de CrUX, quina de les Core Web Vitals té un percentatge de <strong>URLs bones</strong> més
        baix?
      </h2>

      <VoteForm />
    </main>
  );
}
