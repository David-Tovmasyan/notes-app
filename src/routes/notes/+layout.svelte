<script>
import Sidebar from "../../ui/Sidebar.svelte";
import {onMount} from "svelte";

$: sidebarOpen = false;

onMount(()=>{
    window.addEventListener(('resize'),()=>{
        sidebarOpen = window.innerWidth >= 768;
    })
})

</script>

<div class="notes_page">
    <Sidebar {sidebarOpen}/>
    <slot />
</div>

<style>
    .notes_page {
        overflow: hidden;
        height: 100%;
        width: 100%;
        display: grid;
        grid-template-columns: clamp(300px,25%,400px) 1fr;
    }
</style>