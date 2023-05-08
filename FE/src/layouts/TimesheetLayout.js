import { Outlet } from "react-router-dom";


export default function TimesheetLayout() {
  return (
    <div className="timesheet-layout">
    <h2>Time Sheet</h2>

    <Outlet />
    </div>
  )
}