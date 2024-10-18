"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ComponentPropsWithoutRef } from "react";
import { useFormState } from "react-dom";
import { Button } from "@/components/ui/button";
import { voteAction } from "./vote-action";
import { useState } from "react";

export type VoteFormProps = ComponentPropsWithoutRef<"form">;

export const VoteForm = (props: VoteFormProps) => {
  const [{ status }, formAction] = useFormState(voteAction, {
    status: "pending",
  });
  const [selected, setSelected] = useState("");

  return (
    <form className="space-y-4 w-full" action={formAction} {...props}>
      <RadioGroup
        name="cwv"
        className="flex justify-between w-full space-x-4"
        onChange={(e) => setSelected(e.target.value)}
      >
        {["lcp", "inp", "cls"].map((item) => (
          <div
            key={item}
            className={`flex items-center justify-center w-full p-5 transition-all duration-200 ease-in-out rounded-lg shadow-sm cursor-pointer ${
              selected === item ? "bg-blue-100 border-blue-500" : "bg-gray-100"
            }`}
          >
            <RadioGroupItem value={item} id={item} />
            <Label htmlFor={item} className="font-semibold text-xl leading-loose ml-2">
              {item.toUpperCase()}
            </Label>
          </div>
        ))}
      </RadioGroup>

      <Button type="submit" disabled={status === "success"} className="w-full text-white bg-blue-600 hover:bg-blue-500">
        {status === "pending" ? "Enviar" : status === "success" ? "🤞 Enviat" : "Enviant..."}
      </Button>
    </form>
  );
};
