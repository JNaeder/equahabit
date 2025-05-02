import MyInput from "@/components/my_components/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col justify-center">
        <div className="text-center flex items-center justify-center space-x-4 mb-5">
          <img src="equahabit_logo_1.svg" width={60} />
          <h1 className="text-7xl text-green-1 font-bold">Equahabit</h1>
        </div>
        <div className="bg-off-white-2 w-1/2 mx-auto text-center p-5 rounded-2xl shadow-md">
          <div className="w-3/4 mx-auto space-y-4">
            <MyInput label="E-mail" placeholder="E-mail" type="email" />
            <MyInput label="Password" placeholder="Password" type="password" />
            <Button className="bg-green-1 w-full">Log In</Button>
          </div>
        </div>
      </div>
    </>
  );
}
