<script lang="ts">
    import { ChevronLeft, ChevronRight, Clipboard, Files, Settings, User, LogOut } from "lucide-svelte";
    import UserIcon from "../components/UserIcon.svelte";
    import { type Icon } from "lucide-svelte";
    import { type ComponentType, onMount } from "svelte";
    import { fade } from "svelte/transition";

    const sidebarItems: Array<{ section: string; label: string; path: string; icon: ComponentType<Icon> }> = [
        {
            section: "Overview",
            label: "Notes",
            icon: Clipboard,
            path: "/notes"
        },
        {
            section: "Overview",
            label: "Files",
            icon: Files,
            path: "/files"
        },
        {
            section: "Account",
            label: "Settings",
            icon: Settings,
            path: "/settings"
        },
        {
            section: "Account",
            label: "Account",
            icon: User,
            path: "/account"
        },
        {
            section: "Account",
            label: "Logout",
            icon: LogOut,
            path: "/logout"
        }
    ];

    const handleSidebarToggle = () => {
        sidebarOpen = !sidebarOpen;
    }

    // Animation

    const fadeIn = {
        delay: 100,
        duration: 200
    }

    const fadeOut = {
        delay: 0,
        duration: 100
    }

    $: sidebarOpen = true;

    onMount(() => {
        window.addEventListener('resize', () => {
            sidebarOpen = window.innerWidth >= 768;
        })
    })
</script>

<aside
        id="sidebar"
        style="transition-duration: 600ms"
        class={`h-full relative transition-all overflow-hidden shadow border-r-[1px] border-gray-300 ${
    sidebarOpen ? 'w-64' : 'w-16'
}`}
        aria-label="Sidebar"
>
    <div class="h-full flex flex-col px-2 overflow-y-auto bg-slate-100">
        <!-- Avatar + username -->
        <div class="flex min-h-12">
            <div class="flex items-center gap-2">
                <UserIcon userId={1} size={24} />
                {#if sidebarOpen}
                    <div in:fade={fadeIn} out:fade={fadeOut} class="text-md w-3/4 truncate">UsernameUsernameUsername</div>
                {/if}
            </div>
        </div>

        <!-- Items section -->
        <div class="flex flex-col">
            {#each sidebarItems as item (item.path)}
                <a
                        href={item.path}
                        class="flex items-center h-10 mb-2 gap-2 text-md text-slate-700 transition-colors hover:text-slate-900"
                >
                    <div>
                        <svelte:component this={item.icon}  size="24"></svelte:component>
                    </div>
                    {#if sidebarOpen}
                        <span in:fade={fadeIn} out:fade={fadeOut}>{item.label}</span>
                    {/if}
                </a>
            {/each}
        </div>
    </div>

    <!-- Dropdown open/close button -->
    <div class="absolute right-1 top-3">
        <button
                class="transform text-slate-500 transition-transform rounded-full hover:text-slate-700 hover:bg-slate-300"
                on:click={handleSidebarToggle}
        >
            {#if sidebarOpen}
                <ChevronLeft />
            {:else}
                <ChevronRight />
            {/if}
        </button>
    </div>
</aside>