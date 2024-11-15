<script lang="ts">
    import {currentNote} from "../../stores/notesStore";
    import {goto} from "$app/navigation";
    import {getCookie} from "$lib/cookies.js";
    import {isEmpty} from "$lib/utils";
    import {updateNote,deleteNote} from "$lib/notesHttpActions";
    import {onMount} from "svelte";


    const token = getCookie("token");

    onMount(()=>{
        if(isEmpty(token)){
            goto("/login")
        }
    })

    $: textareaValue = $currentNote?.note_text;

    const saveNote = async () =>{
        const res = await updateNote({note_id:$currentNote.pk, ...$currentNote,note_text: textareaValue});

        if("success" in res && res.success) {
            alert("Note updated successfully");
        }
        else{
            alert("Error updating note");
        }

    }

    const removeNote = async () =>{
        const res = await deleteNote($currentNote.pk);

        if("success" in res && res.success) {
            alert("Note deleted successfully");
        }
        else{
            alert("Error deleting note");
        }
    }

    const handleValueChange = (e : any) => {
        textareaValue = e.target.value;
    }

</script>

<div class="h-full flex flex-col items-center justify-center gap-4">
    {#if $currentNote}
        <textarea class="w-11/12 h-3/4 resize-none border-2 border-black bg-gray-100 shadow rounded p-4" value={textareaValue} on:change={handleValueChange}/>
        <div class="w-11/12 h-15 flex justify-end items-center gap-4">
            <button on:click={saveNote} class="py-2 px-4 border-black border-2 bg-green-600 rounded text-white shadow-sm transition hover:bg-green-700 active:bg-green-700 focus:bg-green-600 ">Save</button>
            <button on:click={removeNote} class="py-2 px-4 border-black border-2 bg-red-600 rounded text-white shadow-sm transition hover:bg-red-700 active:bg-red-700 focus:bg-red-600 ">Delete</button>
        </div>

    {/if}

</div>

