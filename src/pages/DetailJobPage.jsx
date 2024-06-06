import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function DetailJobPage() {
  const { id } = useParams()
  const [job, setJob] = useState(null)
  const [isLoding, setIsLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`http://localhost:8000/jobs/${id}`)
        const data = await res.json()
        setJob(data)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    getData()
  }, [])


  return (
    isLoding === true ?
      <h1 className="mt-32">
        loading
      </h1>
      :
      <>
        <section className="bg-sky-50 pt-20">
          <div className="w-full bg-neutral-50 p-6">
        <Link to="/jobs" className="text-sky-400 font-medium hover:opacity-80">⬅️ Back to Jobs Page</Link>
          </div>
          <div className="container m-auto mt-5 px-6">
            <div className="grid lg:grid-cols-3 grid-cols-1 w-full gap-6">
              <main className="col-span-2">
                <div
                  className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
                >
                  <div className="text-gray-500 mb-4">{job.type}</div>
                  <h1 className="text-3xl font-bold mb-4">
                    {job.title}
                  </h1>
                  <div
                    className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
                  >
                    <i
                      className="fa-solid fa-location-dot text-lg text-orange-700 mr-2"
                    ></i>
                    <p className="text-orange-700">{job.location}</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                  <h3 className="text-sky-500 text-lg font-bold mb-6">
                    Job Description
                  </h3>

                  <p className="mb-4">
                    {job.description}
                  </p>

                  <h3 className="text-sky-500 text-lg font-bold mb-2">Salary</h3>

                  <p className="mb-4">{job.salary}</p>
                </div>
              </main>

              <aside>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-6">Company Info</h3>

                  <h2 className="text-2xl">{job.company.name}</h2>

                  <p className="my-2">
                    {job.company.description}
                  </p>

                  <hr className="my-4" />

                  <h3 className="text-xl">Contact Email:</h3>

                  <p className="my-2 bg-sky-100 p-2 font-bold">
                    {job.company.contactEmail}
                  </p>

                  <h3 className="text-xl">Contact Phone:</h3>


                  <p className="my-2 bg-sky-100 p-2 font-bold">{job.company.contactPhone}</p>
                </div>

                {/* <!-- Manage --> */}
                <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                  <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                  <a
                    href="/add-job.html"
                    className="bg-sky-500 hover:bg-sky-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                  >Edit Job</a>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                  >
                    Delete Job
                  </button>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </>
  )
}
