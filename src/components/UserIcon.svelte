<script>
    // parameter
    export let userId;
    export let size;

    if(size === undefined){
        size = 8;
    }


    // This component should get a user id, fetch/get from store username and user's image from the server and display it
</script>



<div class={`w-${size} h-${size} rounded-full bg-white cursor-pointer`}>
    <img src="https://via.placeholder.com/150" class="w-full h-full rounded-full" alt="avatar">
</div>