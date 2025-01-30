<script lang="ts">

    interface ICollaborator {
        id: number;
        username: string;
    }
    export let collaborators:Array<ICollaborator> = [];

</script>

<div>
    {#each collaborators as collaborator}
        <div>{collaborator.username}</div>
    {/each}
</div>