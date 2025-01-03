import { createContext, ReactNode, useState } from "react";

interface AuthContextType {
    isAuthenticated: boolean;
    logIn: () => void;
    logOut: () => void;
}

interface AuthProvider {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider: React.FC<AuthProvider> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const logIn = () => setIsAuthenticated(true);
    const logOut = () => setIsAuthenticated(false);

    return <AuthContext.Provider value={{ isAuthenticated, logIn, logOut }}>{children}</AuthContext.Provider>;
};


export default AuthProvider;
export { AuthContext };