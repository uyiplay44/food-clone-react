import { Outlet } from "react-router-dom";
import DashboardHome from "../component/Home/DashboardHome";

function Dashboard() {
  return (
    <div>
      <DashboardHome />
      <Outlet />
    </div>
  );
}

export default Dashboard;
