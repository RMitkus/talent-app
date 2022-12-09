import SignOut from "@/components/sign-out";
import { unstable_getServerSession } from "next-auth";
import Link from "next/link";

export default async function Navigation() {
    const session = await unstable_getServerSession()
    const isLoggedIn = session?.user?.email
    return (
        <nav className="flex h-8 w-screen justify-between items-center bg-black">
            <div className="flex space-x-3 bg-black">
                <Link
                href="/"
                prefetch={false} // workaround until https://github.com/vercel/vercel/pull/8978 is deployed
                className="text-white hover:text-stone-200 transition-all"
                >
                Home
                </Link>
            </div>
            <div className="flex w-48 justify-around">
                {isLoggedIn ? 
                <div className="flex space-x-3 bg-black">
                    <Link
                    href="/profile"
                    prefetch={false} // workaround until https://github.com/vercel/vercel/pull/8978 is deployed
                    className="text-white hover:text-stone-200 transition-all"
                    >
                    Profile
                    </Link>
                </div> 
                : null}
                {isLoggedIn ?
                <SignOut /> :
                <div className="flex items-center space-x-3 bg-black">
                    <Link
                    href="/login"
                    prefetch={false} // workaround until https://github.com/vercel/vercel/pull/8978 is deployed
                    className="text-white hover:text-stone-200 transition-all"
                    >
                    Login
                    </Link>
                </div>
                }
            </div>
        </nav>
    );
  }