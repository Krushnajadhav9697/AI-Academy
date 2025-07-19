import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ActivateAccount() {
  const { token } = useParams(); // ✅ Get activation token from URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    job_title: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/activate/${token}/`, // ✅ Updated API endpoint
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        // Try to parse JSON error
        const data = await response.json().catch(() => null);
        const errorMsg =
          data?.error ||
          `Activation failed (status ${response.status}). Please try again.`;
        setMessage(`❌ ${errorMsg}`);
      } else {
        const data = await response.json();
        setMessage(`✅ ${data.message || "Account activated successfully!"}`);
        setTimeout(() => navigate("/signin"), 2000); // Redirect to sign-in
      }
    } catch (error) {
      console.error("Activation error:", error);
      setMessage("❌ Something went wrong. Please try again later.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Complete Registration
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-green-400"
              required
            />
          </div>

          {/* Job Title */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-1">
              Job Title (Optional)
            </label>
            <input
              type="text"
              name="job_title"
              value={formData.job_title}
              onChange={handleChange}
              placeholder="Your job title"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-green-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Set a password"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-green-400"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full mt-2 ${
              loading ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"
            } text-white font-bold py-2 px-4 rounded transition`}
          >
            {loading ? "Submiting..." : "Submit"}
          </button>

          {/* Success/Error Message */}
          {message && (
            <p
              className={`mt-3 text-center font-medium ${
                message.startsWith("✅") ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
