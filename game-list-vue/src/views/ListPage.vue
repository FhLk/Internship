<script setup>
import Card from '../components/Card.vue';
import { onBeforeMount, ref } from 'vue';
import { getGameList } from '../fetch/fetchGameAPI.js';

const emits=defineEmits(['test'])
const getList=ref([])
onBeforeMount(async ()=>{
    getList.value=await getGameList();
})

const title=ref("Title")
const getTitle=(t)=>{
    title.value=t
    emits('test',title.value)
}
</script>
 
<template>
    <Card :list="getList" @detail="getTitle"/>
</template>
 
<style>

</style>