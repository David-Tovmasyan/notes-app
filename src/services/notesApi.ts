import { axiosClient, getAuthHeaders } from "./axiosClient";
import { notesStore } from "../stores/notesStore";
import { isEmpty } from "$lib/utils";

const EmptyNotePlaceholder = "Feel free to edit this text.";

// Fetch all notes
export const fetchNotes = async () => {
    try {
        const response = await axiosClient.post("notes", {}, { headers: getAuthHeaders() });
        notesStore.set(response.data);
        return { success: true };
    } catch (error) {
        console.error("Failed to fetch notes:", (error as Error).message);
        return error;
    }
};

// Create a new note
export const createNote = async (noteText: string) => {
    try {
        const response = await axiosClient.post(
            "create-note",
            { note_text: isEmpty(noteText) ? EmptyNotePlaceholder : noteText },
            { headers: getAuthHeaders() }
        );
        await fetchNotes();
        return response.data;
    } catch (error) {
        console.error("Failed to create note:", (error as Error).message);
        return error;
    }
};

// Update a note
export const updateNote = async (noteId: number, noteText: string) => {
    try {
        const response = await axiosClient.post(
            "edit-note",
            { note_id: noteId, note_text: noteText },
            { headers: getAuthHeaders() }
        );
        await fetchNotes();
        return { success: true };
    } catch (error) {
        console.error("Failed to update note:", (error as Error).message);
        return error;
    }
};

// Delete a note
export const deleteNote = async (noteId: number) => {
    try {
        const response = await axiosClient.post(
            "delete-note",
            { note_id: noteId },
            { headers: getAuthHeaders() }
        );
        await fetchNotes();
        return { success: true };
    } catch (error) {
        console.error("Failed to delete note:", (error as Error).message);
        return error;
    }
};

// Get a note by ID
export const getNoteById = async (noteId: number) => {
    try {
        const response = await axiosClient.post(
            "note-id",
            { note_id: noteId },
            { headers: getAuthHeaders() }
        );
        return response.data;
    } catch (error) {
        console.error("Failed to get note:", (error as Error).message);
        return error;
    }
};
