<template>
    <div class="book-item">
        <router-link to="/login">
            <div class="login">
               <img class="auto-img" src="../../public/images/login.png">
           </div>
        </router-link>
        
        <div class="book-content">
            
            <ul class="book-list">
                <h4 class="book-h4"><i class="shu"></i>男生热门</h4>
                <li class="li-item" v-for="b in dataCC" :key="b.name" @click="bookGo(b)">
                    <div class="book-img">
                        <img class="auto-img" :src="'//statics.zhuishushenqi.com' + b.cover">
                    </div>
                    <div class="book-text">
                        <p class="bp1">{{b.title}} <span class="over">完结</span> </p>
                        <p class="limit">{{b.shortIntro}}</p>
                         <p class="bp2">{{b.majorCate}}<i class="linear1"></i>{{Math.floor(b.latelyFollower/10000)}}万人气
                            <span class="tag">古代玄幻</span>
                        </p>
                    </div>
                </li>

                <div class="border-line">查看更多></div>
                

                 <h4 class="book-h4"><i class="shu"></i>畅销作品</h4>
                 <div class="girl-box">
                     <div class="newy">科幻</div>
                     <div class="girlz">游戏</div>
                     <div class="oldy">古言</div>
                     <div class="school">星际</div>
                 </div>

                <li class="li-item" v-for="b in dataBB" :key="b.name" @click="bookGo2(b)">
                    <div class="book-img1">
                        <img class="auto-img" :src="'//statics.zhuishushenqi.com' + b.cover">
                    </div>
                    <div class="book-text">
                        <p class="bp1">{{b.title}} <span class="over">完结</span> </p>
                        <p class="limit">{{b.shortIntro}}</p>
                         <p class="bp2">{{b.majorCate}}<i class="linear1"></i>2万人气
                            <span class="tag">现代游戏</span>
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

const imgName1 = "/api/book/by-categories?gender=male&type=hot&major=玄幻&minor=&start=0&limit=3"
const imgName2 = "/api/book/by-categories?gender=male&type=hot&major=游戏&minor=&start=0&limit=3"

export default {
    data(){
        return{
            dataCC:[],
            dataBB:[],
            male:[],
            female:[],
            press:[],
            
        }
    },
    props:[],
    methods:{
        bookGo(b){
          this.$router.push({name:'bookdetails',params:{id:b._id,name:'玄幻'}})   
        },
        bookGo2(b){
          this.$router.push({name:'bookdetails',params:{id:b._id,name:'游戏'}})    
        }
    },
    computed:{
        sexActive(){
           
        }
    },
    
    created(){
        
            this.axios.get(imgName1).then(aa =>{
              
               this.dataCC = aa.data.books
             
            })
            this.axios.get(imgName2).then(bb =>{
              
               this.dataBB = bb.data.books
                
            })
    },
}
</script>

<style scoped>
    .book-list{  
         padding: 20px;
    }
    .login{
        width: 60px;
        position: fixed;
        right: 15px;
        bottom: 25px;
    }
    .book-h4{
        display: block;
        height: 30px;
        line-height: 30px;
        margin-bottom: 10px;
        font-weight: 700; 
        position: relative;
        
    }
    .linear1{
        width: 1px;
        height: 12px;
        transform: translateY(2px);
        background: rgb(89, 151, 167);
        margin: 0 5px;
        display: inline-block;
    }
    .border-line{
        width: 100%;
        height: 45px;
        border-top: 1px solid rgb(196, 196, 196);
        border-bottom:10px solid rgb(243, 243, 243); 
        text-align: center;
        line-height: 45px;
        font-size: 13px;
        color: rgb(182, 59, 79);
       margin-bottom: 10px;
    }
    .shu{
        width: 3px;
        height: 16px;
        background: rgb(192, 75, 75);
        position: absolute;
        left: -19px ;
        top: 0;
        bottom: 0;
        margin: auto 0;
    }
    .li-item{
        display: flex;
        margin-bottom: 10px;
    }
    .book-img{
        flex: 0 0 60px;
       
    }
    .book-text{
        flex: 1;
        padding-left: 15px;
        display: flex;
        flex-direction:column ;
        
    }
    .over{
        color: #fff;
        font-size: 6px;
        padding:0 2px;
        height: 12px;
        line-height: 12px;
        margin: -0 0 0 5px;
        display: inline-block;
        background: rgb(57, 136, 41);
    }
    .bp1{
        flex: 1;
         line-height: 20px;
        font-size: 14px;
        color: rgb(68, 141, 209);
    }
    .bp2{
        flex: 1;
        line-height: 30px;
        font-size: 12px;
        color:rgb(207, 81, 81);
        position: relative;
    }
    .tag{
        position: absolute;
        right: 0;
        top: 3px;
        bottom: 0;
        margin: auto 0;
        padding:0 5px;
        height: 12px;
        line-height: 12px;
        border: 1px solid #00b7ff;
        color: #00a2ff;
        font-style: normal;
        font-size: 10px;
        border-radius: 2px;
    }
    .book-text .limit{
      text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 13px;
        line-height: 20px;
        color: #999;    
    }
    .book-img1{
        width:70px;
    }
    .girl-box{
        display: flex;
         margin-bottom: 20px;
        padding:0 15px;
    }
    .girl-box>div{
        height: 30px;
        line-height: 30px;
        flex: 1;
        margin: 0 10px;
        color: #fff;
        text-align: center;
    }
    .newy{
        background: #90c5f0;
    }
    .girlz{
        background: #f6bc7e;
    }
    .oldy{
        background: #67ccb7;
    }
    .school{
        background: #e78f8f;
    }
</style>