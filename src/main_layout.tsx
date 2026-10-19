import { NavLink, Outlet } from "react-router-dom";

const linkClass = ({ isActive }: { isActive: boolean }): string => {
    if (isActive) {
        return "p-2 mr-2 bg-blue-500 text-white font-bold";
    }

    return "p-2 mr-2 hover:bg-gray-200";
}

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="border-b-2 border-black p-4">
                <NavLink to="/" end className={linkClass}>Home</NavLink>
                <NavLink to="/products" className={linkClass}>Catalog</NavLink>
            </header>

            <main className="grow p-4">
                <Outlet />
            </main>

            <footer className="border-t-2 border-black p-4">
                <p>Study project, 2026</p>
            </footer>
        </div>
    )
}

export default MainLayout;
