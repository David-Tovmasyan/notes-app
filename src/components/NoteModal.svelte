<script lang="ts">
    import * as Dialog from "$lib/shadcn/ui/dialog/index.js";

    let modalOpen : boolean = false;

    export function openModal() {
        modalOpen = true;
    };

</script>

<Dialog.Root bind:open={modalOpen} >
    <Dialog.Content class="h-[800px] max-w-[800px] translate-y-[-60%]">
        <Dialog.Header>
            <Dialog.Description>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
            </Dialog.Description>
        </Dialog.Header>
    </Dialog.Content>
</Dialog.Root>