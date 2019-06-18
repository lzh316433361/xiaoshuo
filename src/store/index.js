import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// this.$store.state.addBook  获取方式

const state = {
    active:false,
    addBook:[],
    vueX:'数据'
}



const store = new Vuex.Store({
    state
})

export default store