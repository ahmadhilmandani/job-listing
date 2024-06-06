import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export default function JobListing({isHome = true}) {
  const [jobs, setJobs] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [showFullDesc, setShowFullDesc] = useState([false, false, false])

  useEffect(() => {
    const getJobsData = async () => {
      try {
        const res = await fetch('http://localhost:8000/jobs')
        const data = await res.json()
        isHome ? setJobs(data.slice(0, 3)) : setJobs(data)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    getJobsData()
  }, [])

  return (
    isLoading ? <h1>Loading</h1> :
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-sky-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((item, index) => {
            return (
              <div key={index} className="bg-white rounded-xl shadow-md relative">
                <div className="p-4">
                  <div className="mb-6">
                    <div className="text-gray-600 my-2">{item.type}</div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>

                  <div className="mb-2">
                    {
                      showFullDesc[index] ?
                      item.description : item.description.substring(0, 90) + '.....'
                    }
                  </div>

                  <button id={`desc-`+index} className="mb-5 text-sky-500 border-b border-sky-500 text-sm" onClick={(e) => {
                    setShowFullDesc(showFullDesc.map((val,index) => {
                      if (`desc-` + index == e.target.id) {
                        return !val
                      }
                      else {
                        return val
                      }
                    })
                    )
                  }}>
                    show more
                  </button>

                  <h3 className="text-sky-500 mb-2">{item.salary}</h3>

                  <div className="border border-gray-100 mb-5"></div>

                  <div className="flex flex-col lg:flex-row justify-between mb-4">
                    <div className="text-orange-700 mb-3">
                      <i className="fa-solid fa-location-dot text-lg"></i>
                      {item.location}
                    </div>
                    <Link
                      to={`/job/${item.id}`}
                      className="h-[36px] bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
