import { FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function SignInForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f7fb] p-4">
      <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 w-full max-w-md">
        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300" />
          <span className="mx-3 text-gray-500 text-sm">
            Or, sign in with your email
          </span>
          <div className="flex-grow h-px bg-gray-300" />
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label
              className="block text-sm font-semibold mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#f35f66] hover:bg-[#e94b52] text-white font-semibold py-2 rounded-lg transition"
          >
            Sign in
          </button>
        </form>

        {/* Links */}
        <div className="mt-4 text-sm text-center">
          <a href="#" className="text-black-600 ">
            Forgot password?
          </a>
        </div>
        <div className="mt-2 text-sm text-center">
          Don't have an account?{" "}
          <Link to="/signup">
            <a href="#" className="text-[#f35f66] font-medium hover:underline">
              Create account
            </a>
          </Link>
        </div>

        {/* Terms */}
        <div className="mt-4 text-xs text-center text-gray-500">
          By signing up, you agree to our{" "}
          <a href="#" className="text-blue-600 underline">
            Terms Of Use
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600 underline">
            Privacy Policy
          </a>
          .
        </div>
      </div>
    </div>
  );
}
