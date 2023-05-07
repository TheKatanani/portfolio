import { lazy, Suspense } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import Loading from "../components/common/Loading"

const About = lazy(()=>import("../pages/About"))
const Resume = lazy(()=>import("../pages/Resume"))
const Projects = lazy(()=>import("../pages/Projects"))
const Contact = lazy(()=>import("../pages/Contact"))
const Portfolio = lazy(()=>import("../pages/Portfolio"))
const PageNotFound = lazy(()=>import("../pages/PageNotFound"))
const MyRoutes = ()=>{
    return (
      <Suspense fallback={<Loading/>}>
        <Routes>
            <Route index element={<Navigate to="/About"/>}  />
            <Route path="About" element={<About/>} />
            <Route path="resume" element={<Resume/>} />
            <Route path="Projects" element={<Projects/>} />
            <Route path="contact" element={<Contact/>} />
            <Route path="Portfolio" element={<Portfolio/>} />
            <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </Suspense>
    )
  }
export default MyRoutes;