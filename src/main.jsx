import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NotFound from './page/Error';
import MainLayout from './Mainlayout/MainLayout';
import Login from './page/LogInPage';
import RegisterForm from './page/Register';
import { Toaster } from 'sonner';
import Home from './page/Home';
import PrivatePage from './Private/PrivatePage';
import SendMoney from './components/service/SendMoney';
import CashOut from './components/service/CashOut';
import CashIn from './components/service/Cashin';
import MainDashBoard from './DashBoard/MainDashBoard';
import AllHistory from './DUserComp/AllHistory';
import ManageProfile from './DUserComp/ManageProfile';
import CashRequest from './DUserComp/CashRequest';
import CashRequestAgent from './agent/CashIn';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <NotFound></NotFound>,
    children: [{
      path: "/",
      element: <PrivatePage><Home></Home></PrivatePage>
    },
    {
      path: "register",
      element: <RegisterForm></RegisterForm>
    },
    {
      path: "send-money",
      element: <SendMoney></SendMoney>
    },
    {
      path: "cash-out",
      element: <CashOut></CashOut>
    },
    {
      path: "cash-in",
      element: <CashIn></CashIn>
    }

    ]
  },
  {
    path: "/login",
    element: <Login></Login>
  }, {
    path: "/dashboard",
    element: <PrivatePage><MainDashBoard></MainDashBoard></PrivatePage>,
    children: [
      {
        path: "payment-history",
        element: <AllHistory></AllHistory>

      },
      {
        path: "manage-profile",
        element: <ManageProfile></ManageProfile>

      },
      {
        path: "cash-request-user",
        element: <CashRequest></CashRequest>

      },
      {
        path: "cash-request-agent",
        element: <CashRequestAgent></CashRequestAgent>

      },
      
    ]
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster position="top-center"></Toaster>
  </StrictMode>,
)
