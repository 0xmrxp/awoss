import { signIn } from "@/auth";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Welcome to AWOSS</h1>
          <p className="mt-2 text-gray-600">Sign in to create and manage collections</p>
        </div>

        <form
          action={async () => {
            "use server";
            await signIn("github", { redirectTo: "/collections" });
          }}
        >
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-lg hover:bg-white transition font-medium"
          >
            <span>Continue with GitHub</span>
          </button>
        </form>
      </div>
    </div>
  );
}