<script lang="ts">
    import type {NoteId} from "./+page";
    import {currentNote, type INote, notesStore} from "../../../stores/notesStore";
    import {onMount} from "svelte";
    import {isEmpty} from "$lib/utils";
    import {getNoteById} from "$lib/notesHttpActions";
    import {Button} from "$lib/shadcn/ui/button";
    import {goto} from "$app/navigation";
    import X from "lucide-svelte/icons/x";

    export let data : NoteId;

    const noteId = data.noteId;

    $: noteIdInt = parseInt(noteId);

    const errMsg = `A note with the ${noteId} id was not found`;

    let note:INote;

    currentNote.subscribe(value => note = value);

    // version with a request to the server to get the note by id
    // More preferable

    onMount(async ()=>{
        if(isEmpty(noteId)) {
            return;
        }

        if(!noteIdInt){
            return;
        }
        const data = await getNoteById(noteIdInt);
        if(data && data[0]){
            currentNote.set(data[0]);
            return;
        }

    })

    // Version with taking note from the store
    // onMount(async ()=>{
    //     if(isEmpty(noteId)) {
    //         return;
    //     }
    //
    //     if(!noteIdInt){
    //         return;
    //     }
    //
    //     if(isEmpty($notesStore)){
    //         await fetchNotes();
    //     }
    //
    //     if(!isEmpty($notesStore)) {
    //         for(let i=0; i < $notesStore.length; i++){
    //             if($notesStore[i].pk === noteIdInt){
    //                 currentNote.set($notesStore[i]);
    //                 return;
    //             }
    //         }
    //     }
    // })

</script>

<div>
    <div class="h-full w-full flex justify-center items-center">
        <div class="relative w-11/12 h-full mt-5 py-4 px-8 rounded-lg shadow-lg bg-white border-[1px] border-gray-300">

            <!--    Close/Back button-->
            <div class="absolute top-3 right-3">
                <a href="/notes">
                    <button class="text-slate-500 p-1 transition-all rounded-full hover:text-slate-700 hover:bg-slate-300">
                        <X />
                    </button>
                </a>
            </div>

            {#if !isEmpty($currentNote)}


                        <div>Id of the selected/created Note: {noteId}</div>
                        <div>MVP</div>
                        <ul class="list-disc list-outside">
                            <li class="line-through">Close Button (top right corner)</li>
                            <li>Change note title</li>
                            <li>Change note text</li>
                            <li>Add/Remove/ files</li>
                            <li>Image files preview and download files</li>
                            <li>Add/Remove collaborators</li>
                        </ul>

                        <br>
                        <div>Optional</div>
                        <ul class="list-disc list-outside">
                            <li>Enable/Disable live collaboration (optional)</li>
                            <li>Saving changes on component onmount (onDestroy)</li>
                            <li>Outside modal click = close (optional)</li>
                            <li>Option to write markdown in note text</li>
                        </ul>




            {:else}
                <p>{errMsg}</p>
            {/if}
        </div>
    </div>
</div>


