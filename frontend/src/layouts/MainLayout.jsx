import { Outlet } from "react-router";
import MainNavigation from "../components/MainNavigation";

const MainLayout = () => {
   return <>
      <MainNavigation />
    <main>
      <Outlet />
   </main>
   </>
}

export default MainLayout