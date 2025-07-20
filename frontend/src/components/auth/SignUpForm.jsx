import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // Send signup request
      const response = await fetch("http://127.0.0.1:8000/api/signup/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (response.ok) {
        setMessage("✅ Verification email sent. Please check your inbox!");
        setEmail("");
        setTimeout(() => navigate("/signin"), 1500);
      } else {
        const text = await response.text();
        try {
          const data = JSON.parse(text);
          setMessage(
            `❌ ${data.error || "Failed to send verification email."}`
          );
        } catch {
          setMessage(`❌ Server error: ${response.status}`);
        }
      }
    } catch (error) {
      console.error(error);
      setMessage("❌ Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#f4f7fb] flex flex-col items-center justify-center px-4">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-6 text-center text-gray-800">
        Create Your Account
      </h1>

      <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 w-full max-w-md">
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-1">
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

          {/* Submit */}
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
          <span className="text-blue-600 underline cursor-pointer">
            Terms Of Use
          </span>{" "}
          and{" "}
          <span className="text-blue-600 underline cursor-pointer">
            Privacy Policy
          </span>
          .
        </div>
      </div>

      {/* Link to Sign In */}
      <p className="mt-4 text-sm text-gray-700 text-center">
        Already have an account?{" "}
        <Link to="/signin" className="text-blue-700 font-medium underline">
          Sign in here!
        </Link>
      </p>
    </div>
  );
}
