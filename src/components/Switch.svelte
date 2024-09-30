<script>
    export let option1, option2;
    let isChecked = true;
</script>

<div>
    <label
            for="themeSwitcherTwo"
            class="themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center"
    >
        <input
                type="checkbox"
                name="themeSwitcherTwo"
                id="themeSwitcherTwo"
                class="sr-only"
                checked={isChecked}
                on:change={()=>isChecked = !isChecked}
        />
        <span
                class="label flex items-center text-sm font-medium text-dark "
        >
    {option1}
    </span>
        <span
                class="slider mx-4 flex h-8 w-[60px] items-center rounded-full bg-[#CCCCCE] p-1 duration-200"
        >
    <span
            class="dot h-6 w-6 rounded-full bg-white duration-200"
    ></span>
    </span>
        <span
                class="label flex items-center text-sm font-medium text-dark "
        >
    {option2}
    </span>
    </label>
</div>