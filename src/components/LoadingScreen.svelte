<script lang="ts">

const quotes:Array<string> = [
    "Fetching notes from the server... 📝",
    "You can share your notes with your friends",
    "You can write your notes with the markdown editor",
    "Our markdown editor allows to use emojis, code blocks, and math equations",
    "You can add images and other files to your notes",
];

</script>

<!-- spinner-->
<!--<div class="w-5 h-5 border-black border-2 border-t-2px2 border-t-white rounded-full animate-spin">-->

<div class="w-full h-full flex justify-center items-center">
    <div class="w-1/12 h-1"></div>
    <div class="w-10/12 h-10 flex items-center flex-col gap-5">
        <div class="flex gap-5">
            <div class="w-2 h-2 bg-black rounded-full animate-ping"></div>
            <div class="w-2 h-2 bg-black rounded-full animate-ping "></div>
            <div class="w-2 h-2 bg-black rounded-full animate-ping"></div>
            <div class="w-2 h-2 bg-black rounded-full animate-ping"></div>
            <div class="w-2 h-2 bg-black rounded-full animate-ping"></div>

        </div>

        <div class="text-md sm:text-xl">{quotes[0]}</div>

    </div>
    <div class="1-12 h-1"></div>
</div>

<style>

</style>