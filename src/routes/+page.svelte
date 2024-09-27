<script>

import {goto} from "$app/navigation";
</script>

<div class="relative isolate h-full grid place-content-center lg:px-8">
    <div class="mx-auto max-w-2xl">
        <div class="text-center">
            <h1 class="text-4xl font-bold tracking-tight text-slate-700 sm:text-6xl">
                Notes
            </h1>
            <p class="mt-6 text-lg leading-8 text-slate-700">
                Create notes and share with your friends
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
                <a on:click={()=>goto("/notes")} href="/notes" class="cursor-pointer rounded-md bg-slate-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-slate-600">
                    Get started
                </a>
            </div>
        </div>
    </div>
</div>

       


