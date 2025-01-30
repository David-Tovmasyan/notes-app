<script lang="ts">
    import {accountStore,type IAuthenticatedUser} from "../../stores/usersStore";
    import {onMount} from "svelte";
    import {isEmpty} from "$lib/utils.js";
    import {fetchAccountData} from "../../services/usersApi";
    import ContentWrapper from "../../components/layout/ContentWrapper.svelte";

    let user:IAuthenticatedUser;
    accountStore.subscribe(value => {
        user = value;
    });

    onMount(async () => {
        if(isEmpty($accountStore)){
            await fetchAccountData();
        }
    });

    $: creationDate = new Date(user?.date_joined);
    $: lastLogin = new Date(user?.last_login);



</script>

<ContentWrapper>

    {#if user && !isEmpty(user)}

        <h1 class="text-xl">Hello <span class="text-emerald-700">{user.username}</span> !</h1>
        <div>Here is your data</div>
        <div>Username: {user.username}</div>
        <div>Email: {user.email}</div>
        <div>Created at: {creationDate.toLocaleDateString("pl-PL")}</div>
        <div>Last login: {lastLogin.toLocaleDateString("pl-PL")}</div>
    {/if}
</ContentWrapper>