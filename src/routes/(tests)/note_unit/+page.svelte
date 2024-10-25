<script>
    import NoteUnit from "../../../components/NoteUnit.svelte";

    let notes = [1,1,1,1,1];
</script>

<div class="flex gap-4 flex-wrap">
{#each notes as note}
        <NoteUnit />
{/each}

</div>
