import { Outlet } from "react-router-dom";
import { Header } from "@/widgets/header";
import "../styles/globalStyles.css";

export const BaseLayout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <footer></footer>
        </>
    );
};
