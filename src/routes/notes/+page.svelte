<script lang="ts">
    import {notesStore} from "../../stores/notesStore";
    import {isEmpty} from "$lib/utils";
    import NoteUnit from "../../components/NoteUnit.svelte";

</script>

<div class="w-full ">
    <div class="flex flex-wrap justify-center gap-4 mt-2 sm:mt-8 min-w-10">
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



