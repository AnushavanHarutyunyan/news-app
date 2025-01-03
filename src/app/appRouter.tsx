import { createBrowserRouter } from "react-router-dom";
import { BaseLayout } from "./layout/BaseLayout";
import { LoginPage, MainPage, NewsPage, ProfilePage } from "@/pages";
import ProtectedRoute from "./provider/protectedRoute";

export const appRouter = createBrowserRouter(
    [
        {
            element: <BaseLayout />,
            errorElement: <div>Error link</div>,
            children: [
                {
                    path: "/",
                    element: (
                        
                            <MainPage />
                        
                    ),
                },
                {
                    path: "/news",
                    element: (
                        <ProtectedRoute>
                            <NewsPage />
                        </ProtectedRoute>
                    ),
                },
                {
                    path: "/profile",
                    element: (
                        <ProtectedRoute>
                            <ProfilePage />
                        </ProtectedRoute>
                    ),
                },
            ],
        },
        {
            path: "/login",
            element: <LoginPage />,
        },
    ],
    {
        future: {
            v7_normalizeFormMethod: true,
            v7_fetcherPersist: true,
            v7_partialHydration: true,
            v7_relativeSplatPath: true,
            v7_skipActionErrorRevalidation: true,
        },
    }
);
