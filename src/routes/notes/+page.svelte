<script lang="ts">
    import {notesStore} from "../../stores/notesStore";
    import {isEmpty} from "$lib/utils";
    import NoteUnit from "../../components/NoteUnit.svelte";

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



