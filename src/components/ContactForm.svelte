<script lang="ts">
    import kwesforms from "kwesforms"
    import {onMount} from "svelte"

    onMount(() => {
        kwesforms.init()
    })
</script>

<form
    class="kwes-form grid gap-y-2"
    action="https://kwesforms.com/api/foreign/forms/gyxHlsYWTE0Wjzi1fxOe"
    no-error-message
    redirect="/thankyou"
>
    <label for="comment" class="text-zinc-900 text-2xl mb-2 mt-10">
        What's on your mind?
    </label>

    <textarea
        rows="3"
        name="comment"
        id="comment"
        rules="required|max:255"
        class="border border-teal-900 rounded-lg text-2xl px-6 py-6"
    />
    <button
        type="submit"
        class="text-2xl text-zinc-100 bg-teal-900 px-6 py-5 rounded-xl my-1"
    >
        Send</button
    >
</form>
