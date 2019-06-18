<template>
    <div class="ify">  
        <div class="nav">
            <router-link to="/classify">
                <div class="return">
                <div class="icon">
                    <img class="auto-img" src="../../public/images/icon.png">
                </div>
                <span>返回</span>
            </div>
            </router-link>
            <div class="title">
                {{this.$route.params.name}}
            </div>
            <div class="return-home">
                <router-link to="/">
                    <div class="home">
                        <img class="auto-img" src="../../public/images/home.png">
                    </div>
                </router-link>
             </div>
        </div>

        <div class="top1">
            <span>热门</span>
            <span>新书</span>
            <span>好评</span>
            <span>完结</span>
            <span>包月</span>
        </div>

        
        <div v-show="c" class="top2" v-for="(c,index) in comData" :key="index" >
            <span class="all" v-show="index == 0">全部</span>
            <span>{{c}}</span>
        </div>
      
        <div class="content">
            
            <div v-for="(b,index) in dataCC" :key="index" >
                <div class="list-content" @click="bookGo(b)">
                    <div class="left-img">
                        <img class="auto-img fanshu" :src=" '//statics.zhuishushenqi.com' + b.cover">
                    </div>

                    <div class="right-content">
                        <h4>{{b.title}}</h4>
                        <p>{{b.author}}<span class="line"></span>{{b.majorCate}}</p>
                        <p class="limit">{{b.shortIntro}}</p>
                        <p>
                            <span class="red-span">{{b.latelyFollower/10000}}</span>万人气 
                            <span class="line"></span> 
                            <span class="red-span">{{b.retentionRatio}}%</span>读者存留
                        </p>
                    </div>
               </div>
            </div>
             
        </div>

    </div>
   
</template>



<script>

  const urlc = "/api/cats/lv2"

  const urlcc = "/api/book/by-categories?gender=male&type=hot&major=玄幻&minor=&start=0&limit=10"

export default {
    data() {
        return{
            path:'',
            dataC:[],
            male:[],
            female: [],
            press:[],
            dataCC:[],
        }
    },
     
    props:['data'],
    
    created() {
            this.axios.get(urlc).then(a => {
                let b  = a.data
                this.dataC = b
                this.male = b.male
                this.female = b.female
                this.press = b.press
                
                this.path = this.$route.path
            },err => {
                alert(err)
            })
    
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
            vm.axios.get(vm.imgUrl).then(aa =>{
                // console.log('aa==>',aa.data)
                vm.dataCC = aa.data.books
            })
        })
    },
    computed:{

        comData() {
            let result = []
        
             this.male.map( m=>{
               if(this.$route.params.name === m.major){
                  result = m.mins
               }
            })
            this.female.map( m=>{
               if(this.$route.params.name === m.major){
                  result = m.mins
               }
            })
            this.press.map( m=>{
               if(this.$route.params.name === m.major){              
                  result = m.mins
               }
            })
            
            return result
        },

        imgUrl(){
          let imgName = `/api/book/by-categories?gender=male&type=hot&major=${this.$route.params.name}&minor=&start=0&limit=10`
          
         return imgName  
        
        }
        
    },
    methods:{
        bookGo(b){
          this.$router.push({name:'bookdetails',params:{id:b._id,name:this.$route.params.name}})       
        }
    }

}
</script>

<style scoped>
    .ify{
        position: absolute;;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        background: #000;
    }
    .all{
        font-size: 13px;
        margin-left:15px; 
        color:  rgb(30, 157, 241);
    }
    .nav{
        height: 45px;
        background: rgb(0, 0, 0);
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
        font-size: 16px;
       
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
       margin:0 auto;
    }

    .top1{
        height: 35px;
        line-height: 35px;
        color: rgb(71, 123, 219);
        font-size: 13px;
    }
    .top1 span{
         margin-left: 15px;
    }

    .top2{
        height: 35px;
        line-height: 35px;
         display: inline-block;
        font-size: 13px;
       color: rgb(71, 120, 212);
    }
    .top2 span{
        margin-left: 15px;
       
    }

    .content{
        background: rgb(0, 0, 0);
        font-size: 13px;
        color: rgb(128, 130, 131);
    }
    
    .list-content{
        height: 105px;
        display: flex;
        border-bottom: 1px solid #ccc;
        margin-left: 10px;
        padding: 5px 0; 
    }
    .left-img{
        flex: 0 0 65px;
        margin-right: 15px;
        position: relative;
    }
    .fanshu{
        position:absolute;
        top:0;
        bottom: 0;
        margin: auto 0;
    }
    .right-content{
        flex: 1;
        display: flex;
        margin: 5px 0;
        flex-direction:column ;
        line-height: 22px;
    }
    h4{
        flex: 1;
        font-weight: 700;
        color: #fff;
    }
    .right-content p{
        flex: 1;
    }
    .limit{
        white-space: nowrap;
        max-width: 280px;
        overflow: hidden;
        text-overflow: ellipsis;
        /* padding-right: 10px; */
    }
    .red-span{
        color:rgb(226, 86, 50);
    }
     .line{
        width: 1px;
        height:12px;
        margin: 0 5px;
        transform: translateY(1px);
        display:inline-block;
        background: #000;
    }
</style>