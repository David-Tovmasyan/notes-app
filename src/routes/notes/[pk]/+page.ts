import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
    return {
        noteId: params.pk
    }
}

export interface NoteId{
    noteId: string
}