import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/user/Register";
import Login from "../pages/user/Login";
import salons from "../pages/salons/salons";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import ManageUsers from "../pages/Dashboard/Admin/users/ManageUsers";
import UpdateUser from "../pages/Dashboard/Admin/users/UpdateUser";
import Classes from "../pages/classes/Classes";
import ErrorPage from "../pages/error/ErrorPage";
import AddClass from "../pages/Dashboard/salons/AddClass";
import MyClasses from "../pages/Dashboard/salons/MyClasses";
import salonCP from "../pages/Dashboard/salons/salonCP";
import AdminHome from "../pages/Dashboard/Admin/AdminHome";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses";
import StudentCP from "../pages/Dashboard/Student/StudentCP";
import SelectedClass from "../pages/Dashboard/Student/SelectedClass";
import Payment from "../pages/Dashboard/Student/Payment/Payment";
import MyPaymentHistory from "../pages/Dashboard/Student/Payment/History/MyPaymentHistory";
import Assalon from "../pages/Dashboard/Student/Apply/Assalon";
import AdminRoute from "./Privet/AdminRoute";
import salonRoute from "./Privet/salonRoute";
import StudentRoute from "./Privet/StudentRoute";
import PrivetRoute from "./Privet/PrivetRoute";
import EnrolledClasses from "../pages/Dashboard/Student/Enroll/EnrolledClasses";
import UpdateClass from "../pages/Dashboard/salons/UpdateClass";
import SingleClass from "../pages/classes/SingleClass";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "salons",
                element: <salons />
            },
            {
                path: "classes",
                element: <Classes />
            },
            {
                path: "class/:id",
                element: <SingleClass/>,
                loader: ({ params }) => fetch(`https://yoga-master-server-3j7o.onrender.com/class/${params.id}`),
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <PrivetRoute><Dashboard /></PrivetRoute>
            },
            // * ADMIN ROUTES
            {
                path: 'manage-users',
                element: <AdminRoute><ManageUsers /></AdminRoute>
            },
            {
                path: 'update-user/:id',
                element: <AdminRoute><UpdateUser /></AdminRoute>,
                loader: ({ params }) => fetch(`https://yoga-master-server-3j7o.onrender.com/users/${params.id}`),
            },
            {
                path: 'admin-home',
                element: <AdminRoute><AdminHome /></AdminRoute>
            },
            {
                path: 'manage-class',
                element: <AdminRoute><ManageClasses /></AdminRoute>
            },
            // * salon ROUTES
            {
                path: 'salon-cp',
                element: <salonRoute><salonCP /></salonRoute>
            },
            {
                path: 'add-class',
                element: <salonRoute><AddClass /></salonRoute>
            },
            {
                path: 'my-classes',
                element: <salonRoute><MyClasses /></salonRoute>
            },
            {
                path: 'update/:id',
                element: <salonRoute><UpdateClass /></salonRoute>,
                loader: ({ params }) => fetch(`https://yoga-master-server-3j7o.onrender.com/class/${params.id}`),
            },
            // * STUDENT ROUTES
            {
                path: 'student-cp',
                element: <StudentRoute><StudentCP /></StudentRoute>
            },
            {
                path: 'my-selected',
                element: <StudentRoute><SelectedClass /></StudentRoute>
            },
            {
                path: 'user/payment',
                element: <StudentRoute><Payment /></StudentRoute>
            },
            {
                path: 'my-payments',
                element: <StudentRoute><MyPaymentHistory /></StudentRoute>
            },
            {
                path: 'apply-salon',
                element: <StudentRoute><Assalon /></StudentRoute>
            },
            {
                path: 'enrolled-class',
                element: <StudentRoute><EnrolledClasses /></StudentRoute>
            }
        ]
    }
])