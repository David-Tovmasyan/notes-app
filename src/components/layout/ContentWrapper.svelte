<script lang="ts">
    import X from "lucide-svelte/icons/x";
</script>

<div class="h-full w-full flex justify-center items-center">
    <div class="relative w-11/12 h-full mt-5 p-3 rounded-lg shadow-lg bg-white border-[1px] border-gray-300">

        <!--    Close/Back button-->
        <div class="absolute top-3 right-3">
            <a href="/notes">
                <button class="text-slate-500 p-1 transition-all rounded-full hover:text-slate-700 hover:bg-slate-300">
                    <X />
                </button>
            </a>
        </div>

        <slot/>
    </div>
</div>