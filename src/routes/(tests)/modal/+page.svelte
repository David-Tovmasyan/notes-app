<script lang="ts">
import NoteModal from "../../../components/NoteModal.svelte";
import {Button} from "$lib/shadcn/ui/button/index";

let modalElement : NoteModal;

</script>

<NoteModal bind:this={modalElement} />
<Button on:click={()=>modalElement.openModal()}>Open</Button>

