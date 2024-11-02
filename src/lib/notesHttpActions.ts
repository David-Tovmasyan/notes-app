import axios from "axios";
import {API_URL} from "$lib/constants";
import {type INote} from "../stores/notesStore";
import {getCookie} from "$lib/cookies";
import {notesStore} from "../stores/notesStore";
import {isEmpty} from "$lib/utils";

interface INoteResponse extends INote{
    note_id: number;
}

const token = getCookie("token");

// placeholder when creating a new note
const EmptyNotePlaceholder = "Feel free to edit this text.";

export const fetchNotes = async ()=> {
    try{
        let token: string = getCookie("token");
        if (token) {
            const res = await axios.post(API_URL + "notes", {}, { headers: { Authorization: `Token ${token}` } });
            notesStore.set(res.data);
            return {success: true};
        } else {
            return new Error("No token found");
        }
    } catch (error) {
        return new Error("Failed to fetch notes");
    }
}

export const createNote = async (noteText:string="") => {
    if (isEmpty(noteText) || noteText === "") {
        noteText = EmptyNotePlaceholder;
    }

    const requestData = {
        note_text: noteText
    }

    const response = await axios.post(API_URL + "create-note", requestData, {
        headers: {
            Authorization: `Token ${token}`,
        },
    });

    if (response.status === 201) {
        await fetchNotes();
        return response.data;
    }

    return new Error("Failed to create note");
};

export const updateNote = async (note:INoteResponse) => {
    note.note_id = note.pk; // Assuming note.pk contains the note_id
    try {
        const response = await axios.post(
            `${API_URL}edit-note`,
            { note_id: note.note_id, note_text: note.note_text },
            {
                headers: {
                    Authorization: `Token ${token}`,
                },
            }
        );

        if (response.status === 201) {
            // Update notes state with the updated note
            await fetchNotes();
            return {success: true};
        } else {
            return new Error("Failed to update note");
        }
    } catch (error) {
        return new Error("Failed to update note");
    }
};

export const deleteNote = async (pk:number) => {
    try {
        const response = await axios.post(
            `${API_URL}delete-note`,
            {note_id: pk},
            {
                headers: {
                    Authorization: `Token ${token}`,
                },
            }
        );

        if(response.status === 201){
            // Update notes state without the deleted note
            await fetchNotes();
            return {success: true};
        }

        return new Error("Failed to delete note");

    }
    catch (e) {
        return new Error("Failed to delete note");
    }
}

export const getNoteById = async (noteId:number) => {
    try {
        const response = await axios.post(
            `${API_URL}note`,
            {note_id: noteId},
            {
                headers: {Authorization: `Token ${token}`},
            }
        );
    } catch (error) {
        return new Error("Failed to get note");
    }
}
