import Link from "next/link";
import { Search, ShieldCheck, FolderHeart, Github } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100-64px)]">
      {/* Hero Section */}
      <section className="py-24 px-6 text-center bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-600">
            Discover and Curate the Best Open Source
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            AWOSS helps you find high-quality repositories with a focus on license compliance and community health. Create collections and share them with the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/repos" 
              className="px-8 py-4 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <Search className="w-5 h-5" />
              Explore Repositories
            </Link>
            <Link 
              href="/login" 
              className="px-8 py-4 border-2 border-black text-black rounded-xl font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
            >
              <Github className="w-5 h-5" />
              Sign in with GitHub
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center p-8 rounded-3xl border border-gray-100 hover:border-black transition-colors group">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Advanced Search</h3>
              <p className="text-gray-600">
                Search through GitHub using specific filters for licenses, languages, and quality metrics.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-8 rounded-3xl border border-gray-100 hover:border-black transition-colors group">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors">
                <FolderHeart className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Curated Collections</h3>
              <p className="text-gray-600">
                Organize your findings into thematic collections. Keep them private or share them publicly.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-8 rounded-3xl border border-gray-100 hover:border-black transition-colors group">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">License Focused</h3>
              <p className="text-gray-600">
                Understand the legal implications of the code you use with clear license indicators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-black text-white rounded-[3rem] p-12 text-center overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">Ready to build your awesome hub?</h2>
            <p className="text-gray-400 mb-10 text-lg">
              Join other developers curating the future of open source.
            </p>
            <Link 
              href="/login" 
              className="px-10 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-100 transition-all inline-block"
            >
              Get Started for Free
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t bg-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-bold text-xl">AWOSS</div>
          <div className="text-gray-500 text-sm">
            © 2026 AWOSS. Built for the open source community.
          </div>
          <div className="flex gap-6 text-sm text-gray-600">
            <a href="https://github.com/0xmrxp/awoss" target="_blank" className="hover:text-black">GitHub</a>
            <a href="#" className="hover:text-black">Terms</a>
            <a href="#" className="hover:text-black">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
