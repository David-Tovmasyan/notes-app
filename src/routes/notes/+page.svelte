<script>
    import {currentNote} from "../../stores/notesStore";
    import Switch from "../../components/Switch.svelte";
    import {goto} from "$app/navigation";
    import {getCookie} from "$lib/cookies.js";
    import {isEmpty} from "$lib/utils";

    if(isEmpty(getCookie("token"))){
        goto("/login")
    }
</script>

<div class="absolute left-80">
    <div class="w-full bg-blue-800">
<!--        <Switch option1="Plain Text" option2="Markdown" />-->
    </div>
    {#if $currentNote}
        <textarea class="w-80 h-80" bind:value={$currentNote.note_text} />
    {/if}
</div>