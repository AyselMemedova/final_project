
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
import Basket from "../pages/site/basket/Basket"
import BlogDetail from "../pages/site/blogDetail/blogDetail"
import Login from "../pages/site/login/Login"
import Register from "../pages/site/register/Register"
import User from "../pages/site/user/User"
import AddBlog from "../pages/site/addBlog/addBlog"

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
           
            {
                path:"basket",
                element:<Basket/>
            },
            {
                path:"blog/:id",
                element:<BlogDetail/>
            },
            {
                path:"login",
                element:<Login/>
            },
            {
                path:"register",
                element:<Register/>
            },
            {
                path:"user",
                element:<User/>
            },
            {
                path:"addBlog",
                element:<AddBlog/>
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