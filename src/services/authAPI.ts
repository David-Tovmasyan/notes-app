import {axiosClient} from './axiosClient';
import {setCookie} from "$lib/cookies";

// login and store the token in a cookie
export async function login(loginData:{login: string, password: string}) {
    try {
        const response = await axiosClient.post("handle-user-connection", loginData);

        // Check if authentication was successful
        if (response.status === 200 && response.data.token) {
            // Store the token in a cookie
            setCookie("token", response.data.token);
        }
        return { success: true};
    } catch (error) {
        console.error("Failed to log in:", (error as Error).message);
        return { success: false};
    }
}