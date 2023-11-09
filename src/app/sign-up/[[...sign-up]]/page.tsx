import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="grid h-screen w-screen place-content-center">
      <SignUp />
    </main>
  );
}
