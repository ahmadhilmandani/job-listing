import HomePage from "./pages/HomePage"
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import JobsPage from "./pages/JobsPage"
import NotFoundPage from "./pages/NotFoundPage"
import DetailJobPage from "./pages/DetailJobPage"
import AddJobPage from "./pages/AddJobPage"

// routerProvider = yang memprovide routernya, atau yang menngimplementasikan route yang udah dibuat ke web kita

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/add-job" element={<AddJobPage />} />
      <Route path="/job/:id" element={<DetailJobPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
)

export default function App() {
  return <RouterProvider router={router} />
}