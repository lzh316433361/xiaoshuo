<template>
    <div class="header">
        <div class="nav">
            <div class="sex">
                <!--<transition name="sex">
                    <div class="sex-box" @click="activeFnc">
                        <span :class="{'span-active':!$store.state.active}">男</span>
                        <span :class="{'span-active':$store.state.active}">女</span>
                    </div>  
                </transition>-->
                
            </div>
            <div class="logo">
                <div class="imglog">
                      <img src="../../public/images/read.png" class="auto-img">
                </div>
            </div>
            <div class="search">
                <router-link to="/search">
                    <!--<div class="icon-search"></div>-->
                </router-link>
            </div>
        </div>
        <div class="banner">
                <div class="banner-item">
                    <router-link to="/">精选</router-link> 
                </div>
                <div class="banner-item">
                    <router-link to="/vip">VIP</router-link>     
                </div>
                <div class="banner-item">
                    <router-link to="/classify">分类</router-link>     
                </div>
                <!--<div class="banner-item">
                    <router-link to="/ranking">排行</router-link>     
                </div>-->
        </div>
        
    </div>
</template>

<script>
export default {
    name:'Header',
    data(){
        return{
            
        }
    },
    methods:{
        activeFnc(){
           this.$store.state.active = !this.$store.state.active
           this.$emit('sexShow',this.$store.state.active)
        }
    }
}
</script>

<style>
    a{
        text-decoration: none;
        color: rgb(128, 141, 201);
    }
    .active{
        color: #fff;
        position:absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0 auto; 
    }
    .nav{
        height: 1.1rem;
        display: flex;
        line-height: 1.1rem;
        text-align: center;
        color: rgb(7, 0, 0);
        position: relative;
    }
    
    .sex{
        flex: 1;
        height: 1.1rem;
        position: relative;
    }
    
    .sex-box{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        font-size: 13px;
        margin: auto;
    }
     .sex span:nth-child(1){
        display: inline-block;
        padding:0 5px;
        border-radius:20px 1px 1px 20px;
        line-height: .5rem; 
    }
    .sex span:nth-child(2){
        display: inline-block;
        padding:0 5px;
        border-radius:1px 20px 20px 1px;
        line-height: .5rem;
    }
    .span-active{
          background: rgb(1, 1, 17);
          color: rgb(255, 255, 255);
    }

    .logo{
        flex: 0 0 4rem;
        font-size: .38rem;
        font-weight: 700px;
        /*color: rgb(57, 37, 148);*/
       color: #90C5F0;
    }
    
    .search{
        flex: 1;
    }
    .icon-search{
        line-height: 1.1rem;
         /*color: rgb(57, 37, 148);*/
        color: #90C5F0;
         font-size: .3rem;
    }

    .banner{
        width: 100%;
        height: .7rem;
        display: flex;
        line-height: .7rem;
        text-align: center;
        /*background: rgb(0, 0, 0);*/
       background-color: #90C5F0;
    }
    .banner>.banner-item{
        position: relative;
        flex: 1;
        color: #ccc;    
    }
    .imglog{
        width: 1.76rem;
        margin: auto;
        margin-top: 20px;
    }
   
    
</style>