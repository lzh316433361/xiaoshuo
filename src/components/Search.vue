<template>
    <div class="search-view">
         <div class="nav">
            <router-link to="/classify">
                <div class="return">
                <div class="icon">
                    <img class="auto-img" src="../../public/images/icon.png">
                </div>
                <span>返回</span>
            </div>
            </router-link>
            <div class="title">搜索</div>
            <div class="return-home">
                <router-link to="/">
                    <div class="home">
                        <img class="auto-img" src="../../public/images/home.png">
                    </div>
                </router-link>
             </div>
        </div>

        <div class="search-box">
            <div class="search-ipt">
                <div class="icon-search"></div>
                <input type="text" placeholder="请输入搜索内容">
            </div>
            <div class="sure">确定</div>
        </div>

       <div class="search-center">
           <div class="search-top">
               <span class="search-word">搜索热词</span>
               <div class="replace">换一批</div>
           </div>
           <div class="search-content">
               <span>阿瓦达</span>
               <span>圣墟</span>
               <span>圆锥梦</span>
               <span>八亿少女的梦</span>
               <span>快乐星球</span>
               <span>可口可乐</span>
           </div>
           
       </div>

    </div>
</template>

<style scoped>
.search-view{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #fff;
}
.nav{
        height: 45px;
        background-color: #90C5F0;
        display: flex;
        line-height: 45px;
        text-align: center;
        font-size: 12px;
        color: #fff;
    }

    .return{
        flex: 1;
         color: #fff;
    }

    .title{
        flex: 0 0 260px;
        font-size: 15px;
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
       top: 10px;
       margin:0 auto;
    }

    .search-box{
        display: flex;
        padding: 20px;
         text-align: center;
         line-height: 35px;
    }

    .search-ipt{
        flex: 0 0 280px;
        height: 35px;
        border: 1px solid #ccc;
        border-radius: 20px;
        display: flex;
    }

    .search-ipt .icon-search{
        flex: 0 0 20px;
        font-size: 13px;
        line-height: 35px;
        margin-left: 5px;
        color: rgb(194, 188, 188);
    }
    .search-ipt input{
        flex: 1;
        margin-right: 15px;
        border: none; 
        outline: none;  
        padding-left: 5px;
    }

    .sure{
        flex: 1;
       
    }

    .search-center{
        padding: 0 20px;
    }

    .search-top{
        height: 30px;
        line-height: 30px;
    }
    .search-word{
       float: left;
       font-size: 20px;
        display: inline-block;
    }
    .replace{
        float: right;
        font-size: 13px;
        color: rgb(156, 155, 155);
        display: inline-block;
    }

    .search-content{
        margin: 10px 0;
    }
    .search-content span{
        padding: 8px;
        margin:5px 8px 5px 0;
        font-size: 13px;
        border-radius: 20px;
        color: rgb(80, 116, 170);
        background: rgb(245, 245, 245);
        float: left;
    }
</style>