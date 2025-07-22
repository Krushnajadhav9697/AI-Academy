export default function ProfileCard({ name, email, enrolled, completed }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 text-center">
      <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-pink-400 to-purple-400 mx-auto text-2xl flex items-center justify-center text-white">
        {name.charAt(0)}
      </div>
      <h2 className="mt-2 font-semibold">{name}</h2>
      <p className="text-sm text-gray-500">{email}</p>
      <p className="mt-1 text-gray-700">
        {enrolled} Enrolled · {completed} Completed
      </p>
    </div>
  );
}
