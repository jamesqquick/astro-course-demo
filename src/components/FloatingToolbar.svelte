<script lang="ts">
    import Fa from "svelte-fa"
    import {
        faShareFromSquare,
        faComment,
        faList,
    } from "@fortawesome/free-solid-svg-icons"
</script>

<div class="fixed flex bottom-10 mx-auto justify-center left-4 right-4 z-10">
    <div
        class="flex gap-x-4 p-4 rounded-xl bg-white drop-shadow-[0_0px_6px_rgba(0,0,0,0.25)] items-center"
    >
        <Fa
            class="cursor-pointer hover:scale-110 transition-transform text-gray-700"
            icon={faShareFromSquare}
        />
        <div class="h-6 bg-gray-200 w-[1px]" />

        <Fa
            class="cursor-pointer hover:scale-110 transition-transform text-gray-700"
            icon={faList}
        />
    </div>
</div>
