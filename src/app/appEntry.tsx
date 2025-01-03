import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./appRouter";
import { Provider } from "react-redux";
import { store } from "@/app/appStore";
import AuthProvider from "./provider/authContext";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Provider store={store}>
            <AuthProvider>
                <RouterProvider
                    router={appRouter}
                />
            </AuthProvider>
        </Provider>
    </StrictMode>
);
