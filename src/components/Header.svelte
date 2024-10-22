<script lang="ts">
import * as Dropdown from "$lib/shadcn/ui/dropdown-menu";
import {goto} from "$app/navigation";

</script>

<header class="h-12 bg-teal-700 border-b shadow">

    <div id="logo" class="flex justify-center items-center text-xl text-white font-bold">
        <button on:click={()=>goto("/notes")} >Logo</button>
    </div>

    <div id="avatar" class="flex justify-end items-center pr-2 text-xl text-white font-bold">
        <Dropdown.Root>
            <Dropdown.Trigger>
                <div class="w-10 h-10 rounded-full bg-white cursor-pointer">
                    <img src="https://via.placeholder.com/150" class="w-10 h-10 rounded-full" alt="avatar">
                </div>
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
    }

    #avatar{
        grid-column: 12;
    }
</style>