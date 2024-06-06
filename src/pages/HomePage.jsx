import Hero from "../components/Hero"
import HomeCards from "../components/HomeCards"
import JobListing from "../components/JobListing"

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListing />
      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="/jobs"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</a>
      </section>

    </>
  )
}
