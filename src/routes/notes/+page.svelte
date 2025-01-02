<script lang="ts">
    import {notesStore} from "../../stores/notesStore";
    import {isEmpty} from "$lib/utils";
    import NoteUnit from "../../components/NoteUnit.svelte";

</script>

<div class="w-full mb-5">
    <div class="container mx-auto flex flex-wrap gap-4 mt-8">
<!--        <div class="flex flex-wrap gap-4 mt-8 ">-->
            {#if notesStore && !isEmpty($notesStore)}
                {#each $notesStore as note}
                    <a href={`/notes/${note.pk}`} class="grow-0">
                        <NoteUnit {note} />
                    </a>
                {/each}
            {:else}
                <p class="text-center w-full">Notes were not found</p>
            {/if}

<!--        </div>-->
    </div>
</div>



