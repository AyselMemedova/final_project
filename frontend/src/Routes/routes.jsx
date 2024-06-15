
import AdminRoot from "../pages/admin/AdminRoot"
import Dashboard from "../pages/admin/dashboard/dashboard"
import Add from "../pages/admin/add/add"
import Error from "../pages/error/error/error"
import SiteRoot from "../pages/site/SiteRoot"
import Home from "../pages/site/home/home"
import About from "../pages/site/about/About"
import Galery from "../pages/site/galery/Galery"
import Resipes from "../pages/site/resipes/Resipes"
import Contact from "../pages/site/contact/Contact"
import Price from "../pages/site/price&plan/Price"
import Blog from "../pages/site/blog/Blog"
import Faq from "../pages/site/faq/faq"

const ROUTES =[
    {
        path:"/",
        element:<SiteRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"galery",
                element:<Galery/>
            },
            {
                path:"resipes",
                element:<Resipes/>
            },
            {
                path:"contact",
                element:<Contact/>
            },
            {
                path:"price&plan",
                element:<Price/>
            },
            {
                path:"blog",
                element:<Blog/>
            },
            {
                path:"faq",
                element:<Faq/>
            },
          
        ]
    },
    {
        path:"/admin",
        element: <AdminRoot/>,
        children:[
            {
                path:"",
                element:<Dashboard/>
            },
            {
                path:"add",
                element:<Add/>
            }
        ]
    }
    ,    {
        path:"*",
        element:<Error/>,
        
    },
]
export default ROUTES;