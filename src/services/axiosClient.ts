import axios from "axios";
import { API_URL } from "$lib/constants";
import { getCookie } from "$lib/cookies";

export const axiosClient = axios.create({
    baseURL: API_URL,
});

// Helper to set the Authorization header dynamically
export const getAuthHeaders = () => {
    const token = getCookie("token");
    if (!token) throw new Error("No token found");
    return { Authorization: `Token ${token}` };
};
