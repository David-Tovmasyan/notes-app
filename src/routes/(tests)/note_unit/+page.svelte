<script lang="ts">
    import NoteUnit from "../../../components/NoteUnit.svelte";
    import {notesStore} from "../../../stores/notesStore";
    import {isEmpty} from "$lib/utils";
    import {onMount} from "svelte";
    import {fetchNotes} from "$lib/notesHttpActions";

    onMount(() => {
        fetchNotes();
    });
</script>

<div class="flex gap-4 flex-wrap">
        {#if notesStore && !isEmpty($notesStore)}
            {#each $notesStore as note}
                <NoteUnit {note} />
            {/each}
        {:else}
            <p class="text-center w-full">No notes found</p>
        {/if}

</div>
