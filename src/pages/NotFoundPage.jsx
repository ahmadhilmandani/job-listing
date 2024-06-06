import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="w-full min-h-screen bg-gray-50 flex justify-center items-center flex-col">
      <h1 className="text-8xl font-bold mb-5">404 🥲</h1>
      <p className="mb-10">Sorry buddy, but the pages is not found... </p>
      <Link to="/" className="bg-sky-100 text-sky-500 rounded-md px-8 py-3 font-medium border-[0.1px] border-sky-200 hover:opacity-85">{`Let's`} go back</Link>
    </div>
  )
}
