import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="grid h-screen w-screen place-content-center">
      <SignIn />
    </main>
  );
}
