<script lang="ts">
    import { ChevronLeft, ChevronRight, Clipboard, Files, Settings, User, LogOut } from "lucide-svelte";
    import UserIcon from "../components/UserIcon.svelte";
    import { type Icon } from "lucide-svelte";
    import { type ComponentType } from "svelte";

    const sidebarOverviewItemList: Array<{ label: string; path: string; icon: ComponentType<Icon> }> = [
        {
            label: 'Notes',
            icon: Clipboard,
            path: "/notes"
        },
        {
            label: 'Files',
            icon: Files,
            path: "/files"
        }
    ];

    const sidebarAccountItemList: Array<{ label: string; path: string; icon: ComponentType<Icon> }> = [
        {
            label: 'Settings',
            icon: Settings,
            path: "/settings"
        },
        {
            label: 'Account',
            icon: User,
            path: "/account"
        },
        {
            label: 'Logout',
            icon: LogOut,
            path: "/logout"
        }
    ];

    export let sidebarOpen:boolean;

    const handleSidebarToggle = () =>{
        sidebarOpen = !sidebarOpen;
    }
</script>

<aside
        id="sidebar"
        class={`h-full transition-transform sm:translate-x-0 overflow-hidden shadow border-r-[1px] border-gray-300 ${
        sidebarOpen ? 'w-64' : 'w-16'
    }`}
        aria-label="Sidebar"
>
    <div class="h-full px-2 overflow-y-auto bg-slate-100 overflow-hidden divide-y">
        <!-- Avatar + username + dropdown open/close button -->
        <div class={`w-full h-14 flex items-center ${sidebarOpen ? "" : "flex-col-reverse gap-2 mt-5 mb-4"}`}>
            <div class={`flex items-center gap-2 ${sidebarOpen ? "w-full justify-start" : "flex-col"}`}>
                <div>
                    <UserIcon userId={1} size={8} />
                </div>
                {#if sidebarOpen}
                    <div>Username</div>
                {/if}
            </div>
            <button
                 class="w-1/2 flex justify-end text-slate-500 transition cursor-pointer hover:text-slate-700"
                 on:click={handleSidebarToggle}
            >
                {#if sidebarOpen }
                    <ChevronLeft />
                {:else }
                    <ChevronRight />
                {/if}
            </button>
        </div>


        <div class="py-4">
            {#if sidebarOpen}
                <div class="text-sm text-slate-500 capitalize mb-4">Overview</div>
            {/if}
            {#each sidebarOverviewItemList as item}
                <div class="h-10">
                    <a href={item.path} class={`flex gap-2 items-center text-md ${sidebarOpen? "justify-start" : "justify-center"}`}>
                        <svelte:component this={item.icon} size="24" />
                        {#if sidebarOpen}
                            {item.label}
                        {/if}
                    </a>
                </div>
            {/each}
        </div>

        <div class="py-4">
            {#if sidebarOpen}
                <div class="text-sm text-slate-500 capitalize mb-4">Account</div>
            {/if}
            {#each sidebarAccountItemList as item}
                <div class="h-10">
                    <a href={item.path}  class={`flex gap-2 items-center text-md ${sidebarOpen? "justify-start" : "justify-center"}`}>
                        <svelte:component this={item.icon} size="24" />
                        {#if sidebarOpen}
                            {item.label}
                        {/if}
                    </a>
                </div>
            {/each}
        </div>
    </div>
</aside>
