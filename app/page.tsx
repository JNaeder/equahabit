"use client";

import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

import { signOut } from "next-auth/react";

export default function Home() {
  const { data, status } = useSession();

  return (
    <>
      <div className=" h-screen flex flex-col justify-center items-center gap-4">
        <div className="text-center flex items-center justify-center space-x-4 mb-5">
          <img src="equahabit_logo_1.svg" className="select-none" width={60} />
          <h1 className="text-7xl text-green-1 font-bold select-none">
            Equahabit
          </h1>
        </div>
        <h1>
          {status == "authenticated"
            ? `Current User: ${data?.user?.email}`
            : "No User Logged In"}
        </h1>
        <div className="flex flex-col w-100 p-3 gap-2">
          {status == "authenticated" ? (
            <Button
              className="bg-green-1 w-full text-xl hover:bg-green-800"
              onClick={() => signOut()}
            >
              Log out
            </Button>
          ) : (
            <Button
              className="bg-green-1 w-full text-xl hover:bg-green-800"
              onClick={() => (window.location.href = "/login")}
            >
              Log In
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
