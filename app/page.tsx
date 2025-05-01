import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col justify-center">
        <div className="bg-off-white-2 w-1/2 mx-auto text-center">
          <h1 className="bold">Equahabit</h1>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" placeholder="Password" />
        </div>
      </div>
    </>
  );
}
