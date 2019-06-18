<template>
    <div class="login">
       <div class="nav">
            <router-link to="/">
                <div class="return">
                    <div class="icon">
                        <img class="auto-img" src="../../public/images/icon.png">
                    </div>
                    <span>返回</span>
               </div>
            </router-link>
            <div class="title">
                登录
            </div>
            <div class="return-home">
                <router-link to="/">
                    <div class="home">
                        <img class="auto-img" src="../../public/images/home.png">
                    </div>
                </router-link>
             </div>
       </div>
    
       <div class="login3">
           <img class="auto-img" src="../../public/images/登陆3.png" alt="">
       </div>
       <div class="lo-box">
           <div class="qq">
                <img class="auto-img" src="../../public/images/qq.png" alt="">
                <span>QQ</span>
           </div>
           <div class="weibo">
                <img class="auto-img" src="../../public/images/weibo.png" alt="">
                <span>微博</span>
           </div>
       </div>

         <div class="bottom-box">
            <div class="tabbar">
                <div class="ipt-box">
                    <span class="icon-search"></span>
                    <input class="ipt" type="text">
                </div>

                <div class="btn">
                   
                    <router-link :to="$route.path+'/'+'ClassifyC'">
                         搜索
                    </router-link>
                </div>
            </div>
            <ul class="list">
                    <li>分类</li>
                    <li>排行</li>
                    <li>书单</li>
                    <li>我的</li>
                    <li>联系我们</li>
            </ul>  
            <p>沪公网安备 31011202006103号</p>
            <div class="pp"><div class="record"><img class="auto-img" src="../../public/images/recordIcon.png"></div>
                <span>上海元聚网络科技有限公司 增值电信业务经营许可证沪B2-20170022网络文化经营许可证沪网文（2016）3206-227号</span>
            </div>
            <p>客服电话：021-54393188-8048</p>
        
        <!-- <button @click="setData">0..0 </button> -->
    </div>
    </div>
</template>

<script>


</script>


<style scoped>
    .login{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: #f4f4f4;
    }
    .login3{
        width: 220px;    
        margin:0 auto;
        margin-top: 100px; 
    }
   .lo-box{
       width: 100%;
       height: 80px;
       margin-top: 50px;
       text-align: center;
       font-size: 12px;
   }

    .qq{
        width: 50px;
        display: inline-block;
        margin-left: 0px;
        
    }
    .qq>span{
        color: #4d99e7;
        display: block;
        padding-top: 15px;
    }
    .weibo{
        width: 50px;
        display: inline-block;
        margin-left: 70px;
        margin-bottom: 10px;
    }
    .weibo>span{
        color: #e34737;
         display: block;
        padding-top: 15px;
    }


    .nav{
        height: 45px;
        background:#b93321;
        display: flex;
        line-height: 45px;
        text-align: center;
        font-size: 12px;
        color: #fff;
        border-bottom:1px solid   rgb(138, 137, 137);
    }

    .return{
        flex: 1;
         color: #fff;
    }

    .title{
        flex: 0 0 260px;
        font-size: 15px;    
        font-weight: 700;
    }
    .return-home{
        flex: 1;
      
    }

    .return span{
        display: inline-block;
       
    }
    .return .icon{
        display: inline-block;
        width: 14px;
        transform:translateY(2px);
        margin:0 5px;
    }

    .home{
       width: 21px;
       position: relative;
       top: 12px;
       left: 5px;
       height: 21px;
       margin: auto;
    }

     .bottom-box{
         background: #f4f4f4;
         position: absolute;
         bottom: 0;
    }
    .tabbar{
        padding: .4rem  .2rem;
        margin-top: .4rem;
        display: flex;
        overflow: hidden;
    }
    .ipt-box{
        flex: 0 0 4.5rem;
        height: .5rem;
         background: #fff;
         display: flex;
    }

    .ipt-box .icon-search{
        color: rgb(154, 156, 156);
        font-size: .28rem;
        line-height: .5rem;
        text-align: center;
        flex: 0 0 .5rem;
      
    }
    .ipt{
        flex: 1;  
        border: none;
        outline: none;
        padding: 0;
    }
    .tabbar .btn{
        flex: 1;
        height: .5rem;
        margin-left: .1rem;
        line-height: .5rem;
        text-align:center;
        font-size: 13px;
        background: #fff;
    }

    .list{
        display: flex;
        height: .5rem;
        line-height: .5rem;
        text-align:center;
    }
    .list>li{
        flex: 1;
        font-size: .2rem;
    }

    .bottom-box p{
        text-align:center;
        font-size: .2rem;
        margin: 0 .2rem;
        margin-top: .3rem;
        color: rgb(133, 122, 122)
    }
    .bottom-box:last-child{
        padding-bottom: 50px;
    }
    .pp{
        text-align: center;
        margin-top:20px; 
    }
    .pp>span{
        font-size: 12px;
        vertical-align: top;
        text-align:center;
        color: rgb(94, 88, 88);
    }   
     .record{
        width: 15px;
        display: inline-block;
    }  
    
</style>