<script lang="ts">
    import type {NoteId} from "./+page";

    export let data : NoteId;

    const noteId = data.noteId;

</script>

<div>Id of the selected/created Note: {noteId}</div>