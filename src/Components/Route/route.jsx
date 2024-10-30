import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../Pages/Home/Home";
import JobDetails from "../Pages/JobDetails/JobDetails";

export const route = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children:[
            {
                path: "/",
                element:<Home></Home>
            },
            {
                path:"/job/:id",
                element: <JobDetails></JobDetails>,
                loader: () => fetch('/data/jobs.json')
            }
        ]
    }
])
