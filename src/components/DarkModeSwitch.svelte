<script lang="ts">
    import { Moon, Sun } from "lucide-svelte";
    import {cn} from "$lib/utils";

    $: isDarkMode = localStorage.getItem("color-theme") === "dark" ||
        (!localStorage.getItem("color-theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);

    function toggleDarkMode() {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("color-theme", "light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("color-theme", "dark");
        }
        isDarkMode = !isDarkMode;
    }
</script>

<div class="flex items-center justify-end h-full">
    <button
            class={cn("w-12 h-7 rounded-full bg-slate-200 transition-all duration-500", isDarkMode && "bg-black")}
            on:click={toggleDarkMode}
            aria-label="Toggle Dark Mode"
    >
        <span class={cn("flex justify-center items-center w-7 rounded-full h-full bg-black shadow-inner transform transition-all duration-500", isDarkMode && "bg-slate-200 translate-x-5")}>
            {#if !isDarkMode}
                <Sun size="16" class="text-yellow-500" />
            {:else}
                <Moon size="16" fill="blue" class="text-blue-500"/>
            {/if}
        </span>
    </button>
</div>
