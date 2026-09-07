import { cookies } from "next/headers";
import { SessionType } from "../_types/user";

// Set session cookie
export const setSession = async (user: SessionType) => {
    (await cookies()).set("session", JSON.stringify(user), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7,
        path: "/"
    });
};

// Get session cookie
export const getSession = async (): Promise<SessionType | null> => {
    const cookieStore = await cookies();

    const session = cookieStore.get("session")?.value;

    console.log("========== GET SESSION ==========");
    console.log("SESSION COOKIE:", session);

    if (!session) {
        console.log("NO SESSION FOUND");
        return null;
    }

    const user = JSON.parse(session) as SessionType;

    console.log("USER FROM SESSION:", user);

    return user;
};

// Delete session cookie
export const deleteSession = async () => {
    const cookieStore = await cookies();
    cookieStore.delete("session");
};