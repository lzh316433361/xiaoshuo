<template>
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
</template>

<style>
    .bottom-box{
         background: rgb(238, 236, 236);
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