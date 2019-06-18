<template>
    <div class="choice">
        <div class="choice-banner">
           
            <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in imgList" :key="index">
                <img class="auto-img" v-lazy="image" />
            </van-swipe-item>
            </van-swipe>
                
        </div>

        <div class="my-books">
            
            <div class="books-item">
                <router-link tag="div" to="/bookcase">
                    <div class="book-img">
                        <img class="auto-img" src="../../public/images/书架.png">
                    </div>
                     <span>书架</span>
                </router-link>
               
            </div>
            <div class="books-item">
                <router-link tag="div" to="./login">
                    <div class="book-img">
                        <img class="auto-img" src="../../public/images/书单.png">
                     </div>
                    <span>书单</span>
                </router-link>
                
            </div>
            <div class="books-item">
                <router-link tag="div" to="./login">
                    <div class="book-img">
                         <img class="auto-img" src="../../public/images/漫画.png">
                  </div>
                  <span>漫画</span>
                </router-link>
                
            </div>
            <div class="books-item">
                <router-link tag="div" to="./login">
                    <div class="book-img">
                    <img class="auto-img" src="../../public/images/我的.png">
                </div>
                <span>我的</span>
                </router-link>
                
            </div>
        </div>

        <BookItem></BookItem>

   </div>
</template>

<script>

import BookItem from '../components/BookItem.vue'
import { setTimeout } from 'timers';

export default {
    name : "Choice",
    data(){
        return{
            imgList:[ 
            require('../../public/images/a1.jpg'),
            require('../../public/images/a2.jpg'),
            require('../../public/images/a3.jpg'),
            require('../../public/images/a4.jpg'),
            require('../../public/images/a3.jpg')
           ],
           show:true,
           imgIndex:1,
           imgLeft:0,
           lr:true
        } 
    },
   components:{
       BookItem
   },
    methods:{

    
    },


    props:['sexShow']

}
</script>

<style scoped>
    .choice-banner{
        width: 100%;
        height: 120px;
        /* overflow: hidden; */
    }
    .swipe{
        width: 100%;
        height: 200px;
    }

   .my-books{
       display: flex;
       text-align: center;
       font-size: 13px;
       margin-bottom: -10px;
       padding-bottom: 8px;
       border-bottom: 10px solid rgb(243, 243, 243);
   }
   .my-books>span{
        color: #ccc;
   }
   
   .my-books>div{
       flex:1
   }
   .book-img{
       width: 45px;
       padding: 10px 0;
       margin: 0 auto;
   }
   .boo{
       margin-top: 20px;
       height: 300px;
   }
</style>