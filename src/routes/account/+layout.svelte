<script>

import Sidebar from "../../components/layout/Sidebar.svelte";
</script>

<div class="notes_page">
    <Sidebar />
    <slot/>
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