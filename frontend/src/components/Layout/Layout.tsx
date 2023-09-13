import { Outlet } from "react-router-dom";
import MiniDrawer from "./components/MiniDrawer";

function Layout() {
  return (
    <>
      <MiniDrawer />
      <Outlet />
    </>
  )
}

export default Layout;
