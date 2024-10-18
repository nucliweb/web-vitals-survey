import { voteService } from "@/services";

export default function Home() {
  const reset = voteService.reset();

  return <main>{reset && <h1>Reset Values</h1>}</main>;
}
