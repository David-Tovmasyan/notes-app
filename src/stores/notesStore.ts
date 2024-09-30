import {writable} from "svelte/store";

export interface INote {
    pk: number;
    note_text: string;
    pub_date: string;
    edit_date: string;
    owner: string;
    collaborators: Array<{username:string, id:number}>;
    protected: boolean;
}

export const notesStore = writable<Array<INote>>();

export const currentNote = writable<INote>();
