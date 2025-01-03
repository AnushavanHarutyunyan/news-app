import { IUserType } from "@/entities/user/model/types";

export const validUser = {
    userName: "Admin",
    password: "12345",
};

interface IErrorType {
    userName?: string;
    password?: string;
}

export const validateUser = (user: IUserType, setErrors: (errors: IErrorType) => void) => {
    if (user.userName === validUser.userName && user.password === validUser.password) {
        return true;
    } else {
        setErrors({
            userName: "",
            password: "Invalid username or password.",
        });
    }
};
