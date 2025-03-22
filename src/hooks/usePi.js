import { useState, useEffect } from "react";

export function usePi() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (window.Pi) {
            window.Pi.init({ version: "2.0" }); // Инициализируем SDK
            console.log("Pi SDK инициализирован!");
        } else {
            console.error("Pi SDK не найден!");
        }
    }, []);

    const login = async () => {
        try {
            if (!window.Pi) throw new Error("Pi SDK не загружен");

            window.Pi.authenticate(
                ["username"],
                (auth) => {
                    setUser(auth.user.username);
                    console.log("Авторизован:", auth.user.username);
                },
                (err) => console.error("Ошибка авторизации:", err)
            );
        } catch (error) {
            console.error(error);
        }
    };

    const sendTip = async (recipient, amount) => {
        try {
            if (!window.Pi) throw new Error("Pi SDK не загружен");

            await window.Pi.createPayment({
                amount,
                to: recipient,
                memo: "Чаевые 😊",
            });

            alert("Чаевые отправлены!");
        } catch (error) {
            console.error("Ошибка при отправке чаевых:", error);
        }
    };

    return { user, login, sendTip };
}
