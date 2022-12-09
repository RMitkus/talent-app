import { unstable_getServerSession } from "next-auth";

export default async function Home() {
const session  = await unstable_getServerSession()
  return (
    <div className="flex h-screen bg-black text-white">
        Profile page
        Signed in as {session?.user?.email || 'not signed in'}
    </div>
  );
}
