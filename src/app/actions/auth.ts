"use server";

import axios from "axios";
import { UserType } from "../_types/user";
import { redirect } from "next/navigation";
import { deleteSession, setSession } from "../_lib/session";

const API_URL = "http://localhost:3001";

export const loginAction = async (formData: FormData) => {
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();

    try {
        const response = await axios.get(`${API_URL}/users`);

        const users: UserType[] = response.data;

        const user = users.find(
            (u) =>
                u.email === email &&
                u.password === password
        );

        if (!user) {
            throw new Error("Invalid Credentials");
        }

        await setSession({
            name: user.name,
            email: user.email,
            id: user.id
        });

    } catch (error) {
        console.error("LOGIN ERROR:", error);
        throw error;
    }

    redirect("/contact");
};

export const logoutAction = async () => {
    await deleteSession();
    redirect("/login");
};