"use server";

import { voteService } from "@/services";
import { VoteKey } from "@/services/vote-service";

export interface RegisterActionState {
  status?: string;
}

export const voteAction = async (
  prevState: RegisterActionState,
  formData: FormData
) => {
  "use server";

  const key = formData.get("cwv") as VoteKey;

  voteService.create(key);

  return { status: "success" };
};
