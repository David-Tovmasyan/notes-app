<script lang="ts">
    import type {NoteId} from "./+page";
    import {currentNote} from "../../../stores/notesStore";
    import {onMount} from "svelte";
    import {isEmpty} from "$lib/utils";
    import {getNoteById} from "$lib/notesHttpActions";

    export let data : NoteId;

    const noteId = data.noteId;

    $: noteIdInt = parseInt(noteId);

    const errMsg = `A note with the ${noteId} id was not found`;


    onMount(async ()=>{
        if(isEmpty(noteId)) {
            return;
        }

        if(!noteIdInt){
            return;
        }
        const data = await getNoteById(noteIdInt);
        if(data){
            currentNote.set(data);
        }
    })


</script>

<div>Id of the selected/created Note: {noteId}</div>
