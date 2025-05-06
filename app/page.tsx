import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className=" h-screen flex flex-col justify-center items-center gap-4">
        <div className="text-center flex items-center justify-center space-x-4 mb-5">
          <img src="equahabit_logo_1.svg" width={60} />
          <h1 className="text-7xl text-green-1 font-bold">Equahabit</h1>
        </div>
        <p>You Are Currently Not Logged In</p>
        <a href="/login" className="w-50">
          <Button className="bg-green-1 w-full text-xl hover:bg-green-800">
            Log In
          </Button>
        </a>
      </div>
    </>
  );
}
