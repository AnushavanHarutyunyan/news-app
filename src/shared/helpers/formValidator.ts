import { IUserType } from "@/entities/user/types";

interface IErrorType {
    userName?: string;
    password?: string;
}

export const validateForm = (inputValue: IUserType, setErrors: (errors: IErrorType) => void): boolean => {
    const newErrors: { userName?: string; password?: string } = {};

    if (!inputValue.userName.trim()) {
        newErrors.userName = "Username is required.";
    }

    if (!inputValue.password.trim()) {
        newErrors.password = "Password is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Возвращает `true`, если ошибок нет
};
