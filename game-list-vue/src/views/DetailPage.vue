<script setup>
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';
import Detail from '../components/Detail.vue';
import Breadcrumb from '../components/Breadcrumb.vue';
let { params } = useRoute()
const getParams = ref(0)
defineEmits(['back'])
const props=defineProps({
    title:{
        type:String,
        default: ""
    }
})

console.log(props.title);

onBeforeMount(() => {
    getParams.value = Number(params.id)
})
</script>
 
<template>
    <Breadcrumb :getTitle="title" :id="getParams"/>
    <Detail :id="getParams" @back="$emit('back')" />
</template>
 
<style>

</style>