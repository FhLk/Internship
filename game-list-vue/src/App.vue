<script setup>
import Header from './components/Header.vue';
import Breadcrumb from './components/Breadcrumb.vue';
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';
const title = ref("")

const getTitle = (t) => {
    console.log(t);
    title.value=t
}
</script>
 
<template>
    <Header />
    <router-view @test="getTitle" @back="title=''" :title="title"></router-view>
</template>
 
<style scoped>

</style>