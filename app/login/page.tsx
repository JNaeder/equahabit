import MyInput from "@/components/my_components/input";
import { Button } from "@/components/ui/button";
import Form from "next/form";
import { signIn } from "@/auth";

async function handleSubmit(formData: FormData) {
  "use server";
  try {
    const userData = Object.fromEntries(formData);
    await signIn("credentials", {
      ...userData,
      redirect: false,
    });
  } catch (error) {
    console.error(error);
  }
}

export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col justify-center">
        <div className="text-center flex items-center justify-center space-x-4 mb-5">
          <img src="equahabit_logo_1.svg" width={60} />
          <h1 className="text-7xl text-green-1 font-bold">Equahabit</h1>
        </div>
        <div className="bg-off-white-2 w-1/2 mx-auto text-center p-5 rounded-2xl shadow-md">
          <div>
            <Form action={handleSubmit} className="w-3/4 mx-auto space-y-4">
              <MyInput label="email" placeholder="E-mail" type="email" />
              <MyInput
                label="password"
                placeholder="Password"
                type="password"
              />
              <Button className="bg-green-1 w-full text-xl hover:bg-green-800">
                Log In
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
