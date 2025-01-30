import { axiosClient, getAuthHeaders } from "./axiosClient";
import {accountStore, usersStore, type IUser} from "../stores/usersStore";
import { isEmpty } from "$lib/utils";

export async function fetchUsers() {
    try {
        const response = await axiosClient.post("users", {}, { headers: getAuthHeaders() });

        // Transform the array of users into an object keyed by user IDs
        const usersObject = response.data.reduce((acc: Record<number, IUser>, user: IUser) => {
            acc[user.id] = user;
            return acc;
        }, {});

        // Update the store with the transformed object
        usersStore.set(usersObject);

        return { success: true };
    } catch (error) {
        console.error("Failed to fetch users:", (error as Error).message);
        return { success: false, error };
    }
}


export async function fetchAccountData(){
    try {
        const response = await axiosClient.post("user-info", {}, { headers: getAuthHeaders() });
        accountStore.set(response.data);
        return { success: true };
    } catch (error) {
        console.error("Failed to fetch authenticated user's data: ", (error as Error).message);
        return error;
    }
}
