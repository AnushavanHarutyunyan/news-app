import { IUserType } from "@/entities/user/model/types";
import { Button } from "@/shared/Button/Button";
import { validateForm } from "@/shared/helpers/formValidator";
import { validateUser } from "@/shared/helpers/userValidator";
import useAuth from "@/shared/hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";

export const Form = () => {
    const [inputValue, setInputValue] = useState<IUserType>({
        userName: "",
        password: "",
    });
    const [errors, setErrors] = useState<{
        userName?: string;
        password?: string;
    }>({});
    const { logIn } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value: inputValue } = e.target;
        setInputValue((prev) => ({
            ...prev,
            [name]: inputValue,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (
            validateForm(inputValue, setErrors) &&
            validateUser(inputValue, setErrors)
        ) {
            logIn();

            navigate("/profile");
        }
    };
    return (
        <div className={styles.form_container}>
            <form onSubmit={handleSubmit} className={styles.form_container}>
                <div className={styles.form_container__head}>
                    <h1>Welcome to Login Page</h1>
                </div>
                <div className={styles.form_container__block}>
                    <input
                        type="text"
                        name="userName"
                        value={inputValue.userName}
                        placeholder="Username"
                        onChange={handleChange}
                        onBlur={() => validateForm}
                        className={styles.form_container_input}
                    />
                    {errors.userName && (
                        <p className={styles.form_container__error}>
                            {errors.userName}
                        </p>
                    )}
                </div>
                <div className={styles.form_container__block}>
                    <input
                        type="password"
                        name="password"
                        value={inputValue.password}
                        placeholder="Password"
                        onChange={handleChange}
                        className={styles.form_container_input}
                        onBlur={() => validateForm}
                    />
                    {errors.password && (
                        <p className={styles.form_container__error}>
                            {errors.password}
                        </p>
                    )}
                </div>
                <div className={styles.form_container__btn}>
                    <Button value="Login" handleClick={handleSubmit} />
                </div>
            </form>
        </div>
    );
};
