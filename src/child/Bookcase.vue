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
                我的书架
            </div>
            <div class="return-home">
                <router-link to="/">
                    <div class="home">
                        <img class="auto-img" src="../../public/images/home.png">
                    </div>
                </router-link>
             </div>
       </div>

        <!-- <div>    
            <div class="ku">
                <img class="auto-img" src="../../public/images/ku.png" alt="">
            </div>

            <p class="bbook">书架空空如也，快去逛逛找书</p>
        </div> -->

        <div class="book">
            <div class="top">
                <span>共{{str.length}}本</span>
                <span v-if="editActive" @click="editFn">编辑</span>
                <div class="edit" v-else>
                    <span @click="editFn">取消</span>
                    <span @click="remove">删除</span>
                </div>
            </div>

            <div class="content2">
                <div ref="li" class="li" v-for="(d,index) in data" :key="index">
                    <div class="li-box">
                        <img class="auto-img1" :src="'//statics.zhuishushenqi.com' + data[index].cover">
                    </div>
                    <div class="text">
                        <p>{{data[index].title}}</p>
                        <p>阅读到第一章</p>
                    </div>
                    <div ref="to" :class="editActive ?  'to' : 'to1' " @click="check">
                        
                    </div>
                </div>
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
        
        <button @click="bookData">0..0 </button>
    </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                str:[],
                editActive:true,
                checka:true,
                checkShow:[],
                
            }
        },
        computed:{
            data(){
                this.str = this.$store.state.addBook   
                return this.$store.state.addBook
            }
        },
        methods:{
            bookData(){
                console.log(this.$store.state.addBook)
            },
            editFn(){
                this.editActive = !this.editActive 
                this.checka = false      
            },
            check(){
                 this.checka = !this.checka
                let tos = this.$refs.to

                let result = []

                let self = this
                
                for(let i = 0;i < tos.length; i++){
                    
                    tos[i].ontouchstart = function(){

                        if(self.checka){
                            this.className = 'to2'  
                            // result.push(this.parentNode)
                        }else{
                            this.className = 'to1'
                            
                        }
                    }
                }
                self.checkShow = result
                // console.log(result)
            },
            remove(){
                
                let to = document.querySelectorAll('.to2')
                console.log(this.checkShow)
                //  to[0].parentNode.remove()
                
                // this.$store.state.addBook =  this.$store.state.addBook.splice()
               
            }
        }
    }
</script>


<style scoped>
    .content2{
        padding: 20px;
        background:#fff; 
    }
    .top{
        height: 50px;
        line-height: 50px;
        font-size: 12px;
        color: #888;
    }
    .li{
        display: flex;
        margin-bottom: 20px;
    }
    .li-box{
        flex: 0 0 60px;
        height: 77px;
    }   
    .auto-img1{
        display: block;
        height: 100%;
        width: 100%;
    }
    .text{
        flex: 0 0 250px;
    }
    .text>p:first-child{
        font-weight: 600;
        margin-bottom: 10px;
        margin-left: 20px;
    }
    .text>p:last-child{
        margin-left: 20px;
        font-size: 12px;
        color: rgb(146, 145, 145);
    }
    .to{
        flex:1;
        background: url('../../public/images/toBookDetail.png') center no-repeat;  
        background-size: 25px; 
    }
    .to1{
        flex:1;
        background: url('../../public/images/gou1.png') center no-repeat;  
        background-size: 16px; 
    }
     .to2{
        flex:1;
        background: url('../../public/images/gou.png') center no-repeat;  
        background-size: 16px; 
    }
    .top>span:first-child{
        float: left;
        margin-left: 20px;
    }
    .top>span:last-child{
        float: right;
        margin-right: 20px;
    }
    .edit{
        float: right;
        margin-right: 20px;
    }
    .edit>span:first-child{
        margin-right: 20px;
    }
    .login{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: #f4f4f4;
    }
    .ku{
        width: 100px;
        margin: 100px auto;
        margin-bottom: 30px;
    }
    .bbook{
        font-size: 13px;
        text-align: center;
        color: rgb(116, 115, 115);
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
         position: relative;
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