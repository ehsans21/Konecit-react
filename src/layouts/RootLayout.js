import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

export default function RootLayout() {
    const currentYear = new Date().getFullYear();

    return (
        <div className='root-layout'>
            <header>
                <nav>
                    <h1>KonecIT</h1>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="about">About</NavLink>
                    <NavLink to="help">Help</NavLink>
                    <NavLink to="wiki">Wiki</NavLink>
                    <NavLink to="inventory">Inventory</NavLink>
                    <NavLink to="infrastructure">Infrastructure</NavLink>
                    <NavLink to="todolist">ToDo List</NavLink>
                    <NavLink to="checklist">Checklist</NavLink>
                    <NavLink to="technician">Technician</NavLink>
                    <NavLink to="careers">Careers</NavLink>
                </nav>
                <Breadcrumbs />
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <p>Copyright © Ehsan Shlewett {currentYear}</p>
            </footer>
        </div>
    );
}