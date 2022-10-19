<script setup>
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';
import Detail from '../components/Detail.vue';
let {params} = useRoute()
const getParams=ref(0)
onBeforeMount(()=>{
    getParams.value=Number(params.id)
})
</script>
 
<template>
    <Detail :id="getParams"/>
</template>
 
<style>

</style>