import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import RespoNav from "../components/navbar";

export default function RootLayout() {
    const currentYear = new Date().getFullYear();

    return (
        <div className='root-layout'>
            <header>
 
                <RespoNav />
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