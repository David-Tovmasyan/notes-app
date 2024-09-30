<script lang="ts">
    import {onMount} from "svelte";
    import axios from "axios";
    import {API_URL} from "$lib/constants";
    import {getCookie} from "$lib/cookies";
    import {getFirstWordsFromString, isEmpty} from "$lib/utils";
    import {currentNote, type INote, notesStore} from "../stores/notesStore";

    const errorState = {
        msg: "Error Happened",
        status: false,
    }

    onMount(async ()=>{
        try{
            let token: string = getCookie("token");
            if (token) {
                const res = await axios.post(API_URL + "notes", {}, { headers: { Authorization: `Token ${token}` } });
                notesStore.set(res.data);
            } else {
                errorState.status = true;
                errorState.msg = "Token not found";
            }
        }catch (e) {
            errorState.status = true;
            errorState.msg = (e as Error).message;
        }
    })

    function setCurrentNote(note: INote) {
        currentNote.set(note);
    }

</script>


<aside id="sidebar" class="absolute top-0 left-0 w-80 h-full transition-transform -translate-x-full sm:translate-x-0 overflow-hidden" aria-label="Sidebar">
    <div class="h-full overflow-y-auto bg-slate-100 dark:bg-gray-800 overflow-hidden">
        <button
                class="flex w-full h-14 items-center justify-center bg-sky-500 font-semibold text-xl leading-6 text-white shadow-sm transition hover:bg-sky-600 active:bg-sky-600 focus:bg-sky-500 "
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


