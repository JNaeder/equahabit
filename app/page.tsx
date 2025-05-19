"use client";

import { Button } from "@/components/ui/button";
import LoginTest from "./LoginTest";
import { signOut } from "@/auth";

export default function Home() {
  return (
    <>
      <div className=" h-screen flex flex-col justify-center items-center gap-4">
        <div className="text-center flex items-center justify-center space-x-4 mb-5">
          <img src="equahabit_logo_1.svg" width={60} />
          <h1 className="text-7xl text-green-1 font-bold">Equahabit</h1>
        </div>
        <LoginTest />
        <a href="/login" className="w-50">
          <Button className="bg-green-1 w-full text-xl hover:bg-green-800">
            Log In
          </Button>
        </a>
        <Button
          className="bg-green-1 w-full text-xl hover:bg-green-800"
          onClick={() => signOut()}
        >
          Log out
        </Button>
      </div>
    </>
  );
}
