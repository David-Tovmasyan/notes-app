<script lang="ts">
    import { usersStore, accountStore, type IUser } from "../stores/usersStore.js";
    import { onMount } from "svelte";
    import { isEmpty } from "$lib/utils";
    import {fetchAccountData, fetchUsers} from "../services/usersApi";
    import * as Tooltip from "$lib/shadcn/ui/tooltip";

    export let userId: number;
    export let size: number = 24;

    let user: IUser | undefined;
    let imageUrl: string = "";

    // Generate a color based on the username
    const colors = ["red", "green", "blue", "yellow", "pink", "purple", "indigo", "teal", "cyan", "orange"];

    function pickColor(seed: string): string {
        const hash = seed.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
        return colors[hash % colors.length];
    }

    function generateImage(username: string): string {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        const bgColor = pickColor(username);
        const letter = username.charAt(0).toUpperCase();

        // Double the size for higher quality letter rendering (this doesn't change the actual size of the image)
        const drawSize = size * 2;

        canvas.width = drawSize;
        canvas.height = drawSize;

        if (ctx) {
            ctx.fillStyle = bgColor;
            ctx.fillRect(0, 0, drawSize, drawSize);

            ctx.fillStyle = "white";
            ctx.font = `${drawSize / 2}px Arial`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            ctx.fillText(letter, drawSize / 2, drawSize / 2);

            return canvas.toDataURL();
        }

        return "";
    }

    onMount(async () => {
        let users = $usersStore;

        // Fetch users if the store is empty
        if (isEmpty(users)) {
            const result = await fetchUsers();
            if (result.success) {
                users = $usersStore; // Re-fetch the updated store
            } else {
                console.error("Failed to fetch users");
                return;
            }
        }

        // Use the authenticated user's ID if userId is not provided
        if(isEmpty($accountStore)){
            await fetchAccountData();
        }
        const selectedUserId = userId || $accountStore.id;

        // Check if the user exists in the store before assigning
        user = users[selectedUserId] || $accountStore;

        if (user && user.id && user.username) {
            imageUrl = user.image || generateImage(user.username);

            // Synchronize `image` between stores
            if (!user.image) {
                // Update usersStore
                usersStore.update((currentUsers) => {
                    if (!isEmpty(user) && user && user.id) {
                        return {
                            ...currentUsers,
                            [user.id]: { ...user, image: imageUrl },
                        };
                    }
                    return currentUsers;
                });

                // Update accountStore if the user is the authenticated user
                if (!userId && $accountStore.id === user.id) {
                    accountStore.set({ ...$accountStore, image: imageUrl });
                }
            }
        } else {
            console.error("User not found");
        }
    });
</script>


{#if !isEmpty(imageUrl)}
    <Tooltip.Root>
        <Tooltip.Trigger>
            <div style={`max-width: ${size}px; min-width: ${size}px`} class="rounded-full bg-white cursor-pointer">
                <img src={imageUrl} class="w-full h-full rounded-full" alt="">
            </div>
        </Tooltip.Trigger>
        <Tooltip.Content>
            <p>{user.username}</p>
        </Tooltip.Content>
    </Tooltip.Root>


    {:else }
    <div style="max-width: {size}px" class="rounded-full bg-white cursor-pointer">
        <img src={imageUrl} class="w-full h-full rounded-full" alt="">
    </div>

{/if}