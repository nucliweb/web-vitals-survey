import { voteService } from "@/services";
import { VoteKey } from "@/services/vote-service";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Home() {
  const results = voteService.fetchAll();
  const totalVotes: number = Object.values<number>(results).reduce((acc: number, curr: number) => acc + curr, 0);

  return (
    <main className="p-6 max-w-3xl mx-auto space-y-6">
      <h1 className="text-4xl text-center font-extrabold mb-4 text-gray-800">Resultats</h1>

      <ul className="flex justify-center gap-6">
        {Object.keys(results).map((key) => (
          <Card key={key} className="w-32 shadow-lg border hover:shadow-xl transition-shadow duration-200">
            <CardHeader>
              <CardTitle className="text-center text-xl font-bold">{key.toUpperCase()}</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center items-center">
              <span className="text-4xl font-bold text-gray-900">{results[key as VoteKey]}</span>
            </CardContent>
          </Card>
        ))}
      </ul>

      <p className="text-lg text-center font-semibold text-gray-500">Número de vots: {totalVotes}</p>
    </main>
  );
}
