<script lang="ts">
    import * as Dropdown from "$lib/shadcn/ui/dropdown-menu";
    import {EllipsisVertical} from "lucide-svelte";
    import type {INote} from "../stores/notesStore";
    import {isEmpty} from "$lib/utils";
    import UserIcon from "./UserIcon.svelte";

    export let note:INote;

    note.note_title = isEmpty(note.note_title) ? "Untitled" : note.note_title;
</script>

<div class="bg-white w-72 h-48 flex justify-center rounded-2xl border-gray-300 border-[1px] shadow-sm cursor-pointer transition hover:border-black hover:shadow-md">
    <div class="p-3 w-full h-full flex flex-col gap-1">
        <div class="flex justify-between items-start h-16">
            <div>{note.note_title}</div>
            <!--  Vertical menu with dropdown          -->
            <Dropdown.Root>
                <Dropdown.Trigger>
                    <EllipsisVertical class="w-5 h-5 cursor-pointer" />
                </Dropdown.Trigger>
                <Dropdown.Content class="w-36">
                    <Dropdown.Group>
                        <Dropdown.Item>
                            <a href="/login">Copy</a>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <a href="/login">Cut</a>
                        </Dropdown.Item>
                        <Dropdown.Separator class="w-full max-w-52 h-[1px] ml-1 bg-gray-300 shadow" />
                        <Dropdown.Item>
                            <a href="/login">Delete</a>
                        </Dropdown.Item>
                    </Dropdown.Group>
                </Dropdown.Content>
            </Dropdown.Root>


        </div>


        <!-- maybe width and height resize for notes ??  -->
        <div class="text-sm w-full h-20 line-clamp-3">
            {note.note_text}
        </div>

        <!-- small icons of collaborators (max 3 icons) -->
        <div class="flex justify-end items-center gap-1 w-full h-14 relative top-3">
            {#each note.collaborators.slice(0, 3) as collaborator}
                <UserIcon userId={collaborator.id} size="16" />
            {/each}
            {#if note.collaborators.length > 3}
                <div class="text-slate-600 text-sm">
                    +{note.collaborators.length - 3} more
                </div>
            {/if}
        </div>
    </div>
</div>