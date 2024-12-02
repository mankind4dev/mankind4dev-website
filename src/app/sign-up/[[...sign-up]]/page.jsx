import { SignUp } from "@clerk/nextjs";
import React from "react";

export default function SignUpPage() {
  return (
    <>
      <div className="flex justify-center items-center pt-4">
        <SignUp />
      </div>
    </>
  );
}
