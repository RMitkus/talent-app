"use client";
import { signOut } from "next-auth/react";

export default function SignOut() {
  return (
    <button
      className="text-white min-w-fit bg-black hover:text-stone-200 transition-all"
      onClick={() => signOut()}
    >
      Log out
    </button>
  );
}
