<script lang="ts">
    import {onMount} from "svelte";
    import axios from "axios";
    import {API_URL} from "$lib/constants";
    import {getCookie} from "$lib/cookies";

    const errorState = {
        msg: "Error Happened",
        status: false,
    }

    let data: any = [];

    onMount(async ()=>{
        try{
            let token: string = getCookie("token");
            if (token) {
                const res = await axios.post(API_URL + "notes", { token: token });
                console.log(res);
            } else {
                errorState.status = true;
                errorState.msg = "Token not found";
            }
        }catch (e) {
            errorState.status = true;
            errorState.msg = e.message;
        }
    })
</script>

<div>
    {#if errorState.status}
        <p>{errorState.msg}</p>
    {:else}
        <p>Notes</p>
    {/if}
    <ul>
        {#each data as note}
            <li>{JSON.stringify(data)}</li> 
        {/each}
    </ul>
</div>
