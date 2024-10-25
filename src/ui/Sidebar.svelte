<script lang="ts">
    import {onMount} from "svelte";
    import {getFirstWordsFromString, isEmpty} from "$lib/utils";
    import {currentNote, type INote, notesStore} from "../stores/notesStore";
    import {fetchNotes, createNote} from "$lib/notesHttpActions";

    const errorState = {
        msg: "Error Happened",
        status: false,
    }

    onMount(async ()=>{
        const res = await fetchNotes();

        if ('success' in res && res.success) {
            // alert("Notes fetched successfully");
        } else {
            const error = res as Error;
            errorState.msg = error.message;
            errorState.status = true;
        }
    })

    function setCurrentNote(note: INote) {
        currentNote.set(note);
    }

    const handleCreateNote = async () =>{
        let res = await createNote();
        if(res.hasOwnProperty("success") && res.success){
            // alert("Note created successfully");
            console.log("Created");
            await fetchNotes();
        }else{
            const error = res as Error;
            errorState.msg = error.message;
            errorState.status = true;
        }
    }

</script>


<aside id="sidebar" class="h-full transition-transform -translate-x-full sm:translate-x-0 overflow-hidden border-r-2 border-black" aria-label="Sidebar">
    <div class="h-full overflow-y-auto bg-teal-600 overflow-hidden">
        <button
                class="flex w-full h-14 items-center justify-center bg-sky-500 font-semibold text-xl leading-6 text-white shadow-sm transition hover:bg-sky-600 active:bg-sky-600 focus:bg-sky-500 "
                on:click={handleCreateNote}
        >
            Create Note
        </button>
        <div class="w-full h-10 flex justify-end items-center overflow-hidden">
            <div class="flex items-center gap-2 mr-2">
                <img src="/sort-down.svg" alt="sort down" class="w-6 h-6 cursor-pointer" />
                <img src="/reload.svg" alt="reload" class="w-5 h-5 cursor-pointer" />
            </div>
        </div>

        {#if $notesStore && !isEmpty($notesStore)}
            <div class="flex flex-col gap-2 overflow-hidden">
                {#each $notesStore as note}
                    <button class=" h-14 bg-zinc-200 cursor-pointer truncate p-2 text-start" on:click={() => setCurrentNote(note)}>
                        {getFirstWordsFromString(note.note_text, 10)}
                    </button>
                {/each}
            </div>
        {/if}

    </div>
</aside>


