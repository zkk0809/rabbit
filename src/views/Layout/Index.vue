<template>
    <layout-fixed></layout-fixed>
    <layout-nav></layout-nav>
    <layout-header></layout-header>
    <router-view></router-view>
    <layout-footer></layout-footer>
</template>
<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'
import {usecategory} from '@/stores/category.js'
import {onMounted} from 'vue'
import {useRouter} from "vue-router"
const category=usecategory()


onMounted(()=>{
        category.getcategorylist()
})
</script>