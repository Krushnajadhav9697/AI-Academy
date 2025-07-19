import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch("http://localhost:8000/api/signup/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setMessage("✅ Registration email sent. Please check your inbox!");
        setEmail(""); // clear the form
      } else {
        const data = await response.json();
        setMessage(`❌ ${data.error || "Failed to send email."}`);
      }
    } catch (error) {
      console.error(error);
      setMessage("❌ Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#f4f7fb] flex flex-col items-center justify-center px-4">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-semibold mb-6 text-center text-gray-800">
        Create Your Account
      </h1>

      {/* Form Card */}
      <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 w-full max-w-md">
        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300" />
          <span className="mx-3 text-gray-500 text-sm">
            Or, sign up with your email
          </span>
          <div className="flex-grow h-px bg-gray-300" />
        </div>

        {/* Email Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="email">
              Email Address
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
          <button
            type="submit"
            disabled={loading}
            className={`w-full ${
              loading ? "bg-gray-400" : "bg-[#f35f66] hover:bg-[#e94b52]"
            } text-white font-semibold py-2 rounded-lg transition`}
          >
            {loading ? "Sending..." : "Sign up"}
          </button>
        </form>

        {/* Success/Error Message */}
        {message && (
          <div className="mt-4 text-center text-sm text-gray-700">
            {message}
          </div>
        )}

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

      {/* Redirect to Sign In */}
      <p className="mt-4 text-sm text-gray-700 text-center">
        Already have an account?{" "}
        <Link to="/signin" className="text-blue-700 font-medium underline">
          Sign in here!
        </Link>
      </p>
    </div>
  );
}
