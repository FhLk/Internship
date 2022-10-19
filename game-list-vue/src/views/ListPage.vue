<script setup>
import List from '../components/List.vue';
import { onBeforeMount, ref } from 'vue';
import { getGameList } from '../fetch/fetchGameAPI.js';

const getList=ref([])
onBeforeMount(async ()=>{
    getList.value=await getGameList();
})
</script>
 
<template>
    <List :list="getList"/>
</template>
 
<style>

</style>