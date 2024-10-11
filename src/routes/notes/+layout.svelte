<script>
import Sidebar from "../../components/Sidebar.svelte";
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
        grid-template-columns: clamp(300px,25%,400px) 1fr;
    }
</style>