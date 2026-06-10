import Link from "next/link";

export function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-bold text-xl tracking-tight">
            AWOSS
          </Link>
          
          <div className="flex items-center gap-6 text-sm">
            <Link href="/repos" className="hover:text-black transition">
              Repositories
            </Link>
            <Link href="/collections" className="hover:text-black transition">
              Collections
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link 
            href="/login" 
            className="text-sm px-4 py-2 hover:bg-gray-100 rounded-lg transition"
          >
            Login with GitHub
          </Link>
        </div>
      </div>
    </nav>
  );
}