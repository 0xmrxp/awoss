import Link from "next/link";
import { auth, signOut } from "@/auth";

export async function Navbar() {
  const session = await auth();

  return (
    <nav className="border-b bg-white sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-bold text-2xl tracking-tighter flex items-center gap-2">
            <span className="bg-black text-white px-2 py-0.5 rounded">A</span>
            AWOSS
          </Link>
          
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link href="/repos" className="hover:text-black transition-colors">
              Discover
            </Link>
            <Link href="/collections" className="hover:text-black transition-colors">
              My Collections
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {session ? (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                {session.user?.image && (
                  <img 
                    src={session.user.image} 
                    alt={session.user.name || "User"} 
                    className="w-8 h-8 rounded-full border"
                  />
                )}
                <span className="text-sm font-medium hidden sm:inline-block">
                  {session.user?.name}
                </span>
              </div>
              <form
                action={async () => {
                  "use server";
                  await signOut();
                }}
              >
                <button className="text-sm text-gray-500 hover:text-black transition-colors">
                  Sign Out
                </button>
              </form>
            </div>
          ) : (
            <Link 
              href="/login" 
              className="text-sm font-semibold px-5 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-all"
            >
              Get Started
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
