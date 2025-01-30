import { writable } from "svelte/store";

export interface IUser {
    username: string;
    id: number;
    last_login: string;
    image?: string;
}

export interface IAuthenticatedUser extends IUser {
    first_name: string;
    last_name: string;
    email: string;
    date_joined: string;
    storage_used: number;
    storage_limit: number;
}

// Using an object keyed by user ID
export const usersStore = writable<Record<number, IUser>>({});

export const accountStore = writable<IAuthenticatedUser>();
