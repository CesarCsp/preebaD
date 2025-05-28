import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@/contexts/theme-context";

import Layout from "@/routes/layout";
import DashboardPage from "@/routes/dashboard/page";
import Archivospage from "@/routes/dashboard/archivo";

import AuthForm from "@/routes/loginauth/loginauth";

import BuscadorPage from "@/routes/buscador/search";


function App() {
    const router = createBrowserRouter([
        {
            path: "/login",
            element: <AuthForm />,
        },
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <DashboardPage />
                },
                {
                    path: "archivos",
                    element: <Archivospage />,
                },
                {
                    path: "searcher",
                    element: <BuscadorPage />,
                },
                {
                    path: "prestamos",
                    element: <h1 className="title">Prestamos</h1>,
                },

            ],
        },
    ]);

    return (
        <ThemeProvider storageKey="theme">
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
