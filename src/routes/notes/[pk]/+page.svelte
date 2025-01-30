<script lang="ts">
    import type {NoteId} from "./+page";
    import {currentNote, type INote} from "../../../stores/notesStore";
    import {onMount} from "svelte";
    import {isEmpty} from "$lib/utils";
    import {getNoteById} from "../../../services/notesApi";
    import X from "lucide-svelte/icons/x";
    import {Input} from "$lib/shadcn/ui/input";
    import {Label} from "$lib/shadcn/ui/label";
    import {MarkdownEditor, Carta} from "carta-md";
    import { math } from '@cartamd/plugin-math';
    import { emoji } from '@cartamd/plugin-emoji';
    import 'carta-md/default.css';
    import 'katex/dist/katex.css';
    import '@cartamd/plugin-code/default.css';
    import DOMPurify from 'isomorphic-dompurify';
    import CollaboratorList from "../../../components/CollaboratorList.svelte";
    import ContentWrapper from "../../../components/layout/ContentWrapper.svelte";

    const carta = new Carta({
        sanitizer: DOMPurify.sanitize,
        extensions: [emoji(), math()]
    });

    const errMsg = `The Note was not found`;

    export let data : NoteId;
    const noteId = data.noteId;
    $: noteIdInt = parseInt(noteId);

    let note:INote;
    currentNote.subscribe(value => note = value);

    // request to the server to get the note by id

    onMount(async ()=>{
        if(isEmpty(noteId)) {
            return;
        }

        if(!noteIdInt){
            return;
        }
        const data = await getNoteById(noteIdInt);
        if(data && data[0]){
            currentNote.set(data[0]);
            return;
        }
    })

    console.log(note);

</script>

<div>
    <ContentWrapper>
        <!--    Close/Back button-->
        <div class="absolute top-3 right-3">
            <a href="/notes">
                <button class="text-slate-500 p-1 transition-all rounded-full hover:text-slate-700 hover:bg-slate-300">
                    <X />
                </button>
            </a>
        </div>

        {#if !isEmpty($currentNote)}

            <div class="w-full">

                <div class="w-full max-w-80">
                    <h4 class="scroll-m-20 text-xl font-semibold tracking-tight">
                        Title
                    </h4>

                    <Input type="text" id="title" bind:value={note.note_title} />

                </div>

                <div class="grid w-full gap-1.5">
                    <h4 class="scroll-m-20 text-xl font-semibold tracking-tight">
                        Text
                    </h4>

                    <div>
                        <MarkdownEditor {carta} />
                    </div>
                </div>
            </div>

            <!--            Collaborators-->
            <h4 class="scroll-m-20 text-xl font-semibold tracking-tight">
                Collaborators
            </h4>

            <CollaboratorList collaborators={note.collaborators} />


            <!--            Files manager-->
            <h4 class="scroll-m-20 text-xl font-semibold tracking-tight">
                File Manager
            </h4>
            <div class="grid w-full max-w-sm items-center gap-1.5">
                <Label for="file_upload">Add Files</Label>
                <Input id="file_upload" type="file" />
            </div>

        {:else}
            <p>{errMsg}</p>
        {/if}
    </ContentWrapper>
</div>

<style>
    /* Set your monospace font (Required to have the editor working correctly!) */
    :global(.carta-font-code) {
        font-family: '...', monospace;
        font-size: 1.1rem;
    }
</style>

