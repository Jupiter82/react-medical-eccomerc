import { Routes, Route, BrowserRouter } from "react-router-dom";
import AdminLayout from "./pages/layout/admin.layout"
import HomePageLayout from "./pages/layout/home.layout";
import HomePage from "./pages/home/home.page";
import LoginPage from "./pages/auth/login/login.page"
import RegisterPage from "./pages/auth/register/register.page"
import Error404 from "./pages/errors/404.page";
import DashboardPage from "./pages/cms/dashboard/dashboard.page";
import WellnessDetailPage from "./pages/wellness/wellness-details.page";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePageLayout/>} style={{padding:"1px!important"}}>
                 <Route index element={<HomePage/>}></Route>
                 <Route path="login" element={<LoginPage/>}></Route>
                 <Route path="Register" element={<RegisterPage></RegisterPage>}></Route>
                 <Route path="Wellness" element={<WellnessDetailPage/>}></Route>
                 <Route path="*" element={<Error404 goBackUrl={"/"} name={"Home Page"}/> }></Route>
            </Route>

            <Route path="/admin" element={<AdminLayout/>}>
                  <Route index element={<DashboardPage/>}></Route>
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
