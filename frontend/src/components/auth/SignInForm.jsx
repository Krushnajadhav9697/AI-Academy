import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:8000/api/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email, // ✅ Use "email" instead of "username"
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token); // Save token in localStorage
        setMessage("✅ Login successful! Redirecting...");
        setTimeout(() => navigate("/"), 1500); // Redirect to dashboard
      } else {
        const data = await response.json();
        setMessage(`❌ ${data.error || "Invalid email or password"}`);
      }
    } catch (error) {
      console.error(error);
      setMessage("❌ Failed to connect. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f7fb] p-4">
      <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Sign In to Your Account
        </h1>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300" />
          <span className="mx-3 text-gray-500 text-sm">
            Or, sign in with your email
          </span>
          <div className="flex-grow h-px bg-gray-300" />
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full ${
              loading ? "bg-gray-400" : "bg-[#f35f66] hover:bg-[#e94b52]"
            } text-white font-semibold py-2 rounded-lg transition`}
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        {/* Success/Error Message */}
        {message && (
          <div className="mt-4 text-center text-sm text-gray-700">
            {message}
          </div>
        )}

        {/* Links */}
        <div className="mt-4 text-sm text-center">
          <a href="#" className="text-gray-600 hover:underline">
            Forgot password?
          </a>
        </div>
        <div className="mt-2 text-sm text-center">
          Don&apos;t have an account?{" "}
          <Link
            to="/signup"
            className="text-[#f35f66] font-medium hover:underline"
          >
            Create account
          </Link>
        </div>

        {/* Terms */}
        <div className="mt-4 text-xs text-center text-gray-500">
          By signing in, you agree to our{" "}
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
