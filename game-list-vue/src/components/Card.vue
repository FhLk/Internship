<script setup>
const props = defineProps({
    list: Array
})

const emit=defineEmits(['detail'])

</script>
 
<template>
    <div class="p-10">
        <div class="text-center text-2xl font-bold">
            <h1>Game List</h1> 
        </div>
        <div class="bg-[#c5c7c6] rounded-lg m-10 p-10 grid grid-cols-3 gap-3.5">
            <div class="bg-[#ffffff] rounded-lg p-2 hover:bg-sky-700 " v-for="(game,index) in list" :key="index">
                <router-link :to="{ name: 'DetailPage', params: {id:game.id}}" @click="$emit('detail',game.title)">
                    <div class="my-3 flex justify-center">
                        <img :src="game.thumbnail" class="rounded-lg" />
                    </div>
                    <div class="px-5 my-3">
                        <h1 class="text-2xl font-bold">{{game.title}}</h1>
                        <div>
                            <p class="text-xs">
                                {{game.short_description}}
                            </p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
 
<style scoped>

</style>