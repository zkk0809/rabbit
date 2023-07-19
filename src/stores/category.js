import { defineStore } from 'pinia'
import { getcategory } from '@/apis/layout.js'
import { ref } from 'vue'
export const usecategory = defineStore('category', () => {
    const categorylist = ref([])
    const getcategorylist = () => {
        if (categorylist.value.length === 0) {
            getcategory().then(res => {
                categorylist.value = res.result
            })
        }

    }
    return {
        categorylist,
        getcategorylist
    }
})