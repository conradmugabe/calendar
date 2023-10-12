import { getServerSession } from "next-auth";

export default async function MainPage() {
  const session = await getServerSession();

  return null;
}
