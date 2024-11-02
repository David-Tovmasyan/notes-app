import {writable} from "svelte/store";
import {fetchNotes} from "$lib/notesHttpActions";

export interface INote {
    pk: number;
    note_title: string;
    note_text: string;
    pub_date: string;
    edit_date: string;
    owner: string;
    collaborators: { username: string; id: number }[];
    files: {
        id: number;
        file: string;
        owner: number;
        date: string;
        size: number;
        public: boolean;
    }[];
    protected: boolean;
}


export const notesStore = writable<Array<INote>>();

export const currentNote = writable<INote>();

