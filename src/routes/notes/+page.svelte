<script lang="ts">
    import {notesStore} from "../../stores/notesStore";
    import {goto} from "$app/navigation";
    import {getCookie} from "$lib/cookies.js";
    import {isEmpty} from "$lib/utils";
    import {onMount} from "svelte";
    import NoteUnit from "../../components/NoteUnit.svelte";
    import {fetchNotes} from "$lib/notesHttpActions";

    let token;
    onMount(()=>{
        // check if user is logged in
       token = getCookie("token");
        if(isEmpty(token)){
            goto("/login")
            return;
        }


        fetchNotes();
    })

</script>

<div>
    <div class="flex gap-4 flex-wrap">
        {#if notesStore && !isEmpty($notesStore)}
            {#each $notesStore as note}
                <a href={`/notes/${note.pk}`}>
                    <NoteUnit {note} />
                </a>
            {/each}
        {:else}
            <p class="text-center w-full">Notes not found</p>
        {/if}

    </div>
</div>



