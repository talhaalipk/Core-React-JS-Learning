import Header from "./Components/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  // console.log("App called");
  return (
    <>
      <Header />
      {/* console.log("LayoutComes") */}
      <Outlet />
      {/* console.log("LayoutComes") */}
    </>
  );
}
