"use client";

import { useState } from "react";
import { signInFlow } from "../types";
import { SignInCard } from "./sign-in-card";
import { SignUpCard } from "./sign-up-card";

export const AuthScreen = () => {
  const [state, setState] = useState<signInFlow>("singIn");
  return (
    <div className="h-full flex justify-center items-center bg-[#5C3858]">
      <div className="md:h-auto md:w-[420px]">
        {state === "singIn" ? (
          <SignInCard setState={setState} />
        ) : (
          <SignUpCard setState={setState} />
        )}
      </div>
    </div>
  );
};
