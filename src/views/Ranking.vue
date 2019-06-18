<template>
    <div class="ranking">
        
        <div v-for="r in cDataR" :key="r.id">
            <div class="imgr" >
                <img class="auto-img" :src=" '//statics.zhuishushenqi.com' + r.cover">
            </div>
            <div class="rtext">{{r.title}}</div>
        </div>
    </div>
</template>

<script>

const urlr = "/api/ranking/gender"

export default {
    data() {
        return{
            dataR : [],
            imgr:[]
        }
    },
    computed:{
        cDataR() {
            return this.dataR.male
        },
        cImg() {
            return 
        }
    },
       created(){
            this.axios.get(urlr).then(r => {
            
            this.dataR = r.data
            console.log(this.dataR)
        })
    }
}
</script>

<style>
    .ranking{
        margin-top: 5px;
    }
    .rtext{
        display: inline-block;
        height: 60px;
        line-height: 60px;
       font-size: 14px;
    }
    .imgr{
        width: 30px;
        display: inline-block;
         margin: 0 10px;
        position: relative;
        top: 8px;
    }
</style>