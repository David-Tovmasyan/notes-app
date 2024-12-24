<script>
import Sidebar from "../../ui/Sidebar.svelte";
import {onMount} from "svelte";
import {getCookie} from "$lib/cookies.js";
import {isEmpty} from "$lib/utils";
import {goto} from "$app/navigation";
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

<div class="notes_page">
    <Sidebar />
    <slot />
</div>

<style>
    .notes_page {
        overflow: hidden;
        height: 100%;
        width: 100%;
        display: grid;
        /*grid-template-columns: clamp(300px,25%,400px) 1fr;*/
        grid-template-columns: auto 1fr;
    }
</style>