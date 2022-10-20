<script setup>
import { onBeforeMount, ref } from 'vue';
import { getGame } from '../fetch/fetchGameAPI';
const emit=defineEmits(['back'])
const props = defineProps({
    id: Number
})
const detail = ref({})
onBeforeMount(async () => {
    detail.value = await getGame(props.id)
})

</script>
 
<template>
    <div class="bg-[#af9de5] p-10">
        <div class="p-3">
            <router-link to="/" @click="$emit('back')">
                <button class="inline-block px-6 py-2.5 
            bg-blue-600 text-white 
            font-medium text-xs 
            leading-tight uppercase 
            rounded shadow-md hover:bg-blue-700 hover:shadow-lg 
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 
            active:shadow-lg transition duration-150 ease-in-out">
                    Back
                </button>
            </router-link>
        </div>
        <div class="bg-[#c5c7c6] content-center rounded-lg">
            <div class="flex justify-center">
                <img :src="detail.thumbnail" class="w-4/12 my-8 max-w-full h-auto rounded-lg" />
            </div>
            <div class="text-center px-10 p">
                <h2 class="text-2xl font-bold">{{detail.title}}</h2>
                <p>
                    {{detail.short_description}}
                </p>
            </div>
        </div>
    </div>
</template>
 
<style scoped>

</style>