<script lang="ts">
import * as Dropdown from "$lib/shadcn/ui/dropdown-menu";
import {goto} from "$app/navigation";
import UserIcon from "../components/UserIcon.svelte";

</script>

<header class="h-12 bg-teal-700 shadow">

    <div id="logo" class="flex justify-center items-center text-xl text-white font-bold">
        <button on:click={()=>goto("/")} >Logo</button>
    </div>

    <div id="avatar" class="flex justify-end items-center pr-2 text-xl text-white font-bold">
        <Dropdown.Root>
            <Dropdown.Trigger>
                <UserIcon userId="1" size=8 />
            </Dropdown.Trigger>
            <Dropdown.Content class="w-56">
                <Dropdown.Group>
                    <Dropdown.Item>
                        <a href="/login">Account</a>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <a href="/login">Settings</a>
                    </Dropdown.Item>
                    <Dropdown.Separator class="w-full max-w-52 h-[1px] ml-1 bg-gray-300 shadow" />
                    <Dropdown.Item>
                        <a href="/login">Log Out</a>
                    </Dropdown.Item>
                </Dropdown.Group>
            </Dropdown.Content>
        </Dropdown.Root>
    </div>

</header>

<style>
    header{
        display: grid;
        grid-template-columns: repeat(12, 1fr);
    }

    #logo{
        grid-column: 1;
        padding-left: 8px;
    }

    /*@media (max-width: 768px) {*/
    /*    #logo {*/
    /*        grid-column: 2;*/
    /*    }*/
    /*}*/

    #avatar{
        grid-column: 12;
    }
</style>