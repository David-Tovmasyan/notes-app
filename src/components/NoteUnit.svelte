<script>
    import * as Dropdown from "$lib/shadcn/ui/dropdown-menu";
    import {EllipsisVertical} from "lucide-svelte";


    let note = {
        id: 1,
        title: 'Note title',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. A voluptate, quos, quas, quod, quidem quae quibusdam quia doloribus voluptatum doloremque. Quisquam, quos. A voluptate, quos, quas, quod, quidem quae quibusdam quia doloribus voluptatum doloremque.',
        createDate: '2021-09-01',
        updateDate: '2021-09-01',
    }


</script>

<div class="bg-emerald-50 max-w-72 w-72 h-36 flex justify-center rounded-2xl border-gray-300 border-[1px] shadow-sm">
    <div class="p-3 w-full h-full flex flex-col gap-1">
        <div class="flex justify-between items-start h-16">
            <div>{note.title}</div>
            <!--  Vertical menu with dropdown          -->
            <Dropdown.Root>
                <Dropdown.Trigger>
                    <EllipsisVertical class="w-5 h-5 cursor-pointer" />
                </Dropdown.Trigger>
                <Dropdown.Content class="w-36">
                    <Dropdown.Group>
                        <Dropdown.Item>
                            <a href="/login">Copy Note</a>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <a href="/login">Cut Note</a>
                        </Dropdown.Item>
                        <Dropdown.Separator class="w-full max-w-52 h-[1px] ml-1 bg-gray-300 shadow" />
                        <Dropdown.Item>
                            <a href="/login">Delete Note</a>
                        </Dropdown.Item>
                    </Dropdown.Group>
                </Dropdown.Content>
            </Dropdown.Root>
        </div>


        <!-- maybe width and height resize for notes ??  -->
        <div class="text-sm w-full h-20 line-clamp-3">
            {note.content}
        </div>
    </div>
</div>