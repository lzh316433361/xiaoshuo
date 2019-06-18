<template>
    <div id="app">
        <Header @sexShow="sexShowFn"></Header>

        <keep-alive>
             <router-view :sexShow="sexShow" :data="data"></router-view>
        </keep-alive>
        
        <Tabbar></Tabbar>

    </div>
</template>

<script>

    import Header from './components/Header.vue'
    import Tabbar from './components/Tabbar.vue'    
    const url = "/api/cats/lv2/statistics"

    export default {
        name: 'app',
        data() {
           return{
              data:[],
              sexShow:'',
              aData:"aaa",
              bData:'',
           }
        },
        created() {
            
            this.axios.get(url).then(a => {
             
                let b  = a.data
                this.data = b
             
            },err => {
                alert(err)
            })

         },
         methods:{
             sexShowFn(val){
                 this.sexShow = val
                 
             },
             bFnc(b){
                 this.bData = b
             }
         },

        components: {
            Header,
            Tabbar
        }

    }
</script>

<style>
   
</style>
