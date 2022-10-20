<script setup>
import { computed } from '@vue/reactivity';
import { onBeforeMount, onBeforeUpdate, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getGame } from '../fetch/fetchGameAPI';
const props = defineProps({
    getTitle: {
        type: String
    },
    id: Number
})

console.log(props.getTitle);
const game=ref({})
onBeforeMount(async ()=>{
    if(props.getTitle===""){
        game.value=await getGame(props.id)
    }
})
</script>
 
<template>
    <div class="flex px-10 py-3">
        <router-link to="/">
            <h1 class="underline hover:underline-offset-4">Home</h1>
        </router-link>
        <h1 class="font-bold">{{`/${getTitle===''? game.title:getTitle}`}}</h1>
    </div>
</template>
 
<style>

</style>