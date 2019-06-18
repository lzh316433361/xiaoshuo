<template>
    <div class="list-box">
        <div class="nav">
            <div @click="returngo">
                <div class="return">
                    <div class="icon">
                        <img class="auto-img" src="../../public/images/icon.png">
                    </div>
                    <span>返回</span>
               </div>
            </div>
            <div class="title">
                优质书源
            </div>
            <div class="return-home">
                <router-link to="/">
                    <div class="home">
                        <img class="auto-img" src="../../public/images/home.png">
                    </div>
                </router-link>
             </div>
        </div>

        <div class="mulu">
            <div class="m">
                <span>目录</span>
                <span>共{{550}}章</span>
            </div>
            <div class="down1" @click="downFn">{{down ? '升序' : '倒序'}}</div>
        </div>

         <div class="list-item" v-for="(l,index) in comR" :key="index">
             <div @click="pushRead(index)" class="li">{{down ? l : l.title}}</div>
         </div>
         
    </div>
</template>

<script>
export default {
    data(){
        return{
            listData:{},
            splitData:[],
            down: false,
            
        }
    },
    computed:{
        comR() {
            if(this.down){
                return this.splitData
            }else{
                return this.listData
            }
        }
    },
    methods:{
        returngo(){
            this.$router.go(-1)
        },
        //点击 倒序 升序
        downFn(){
    
            let reverseA = []
            
            for(let key in this.listData){
                
                //字符串切割 转化为数组
                reverseA.push(this.listData[key].title.split(',')[0])

            }

            //数组反转
            this.splitData = reverseA.reverse()
                
            this.down = !this.down         
        },
        //跳转到阅读页面
        pushRead(index){
            this.$router.push({name:'reading',params:{listIndex:index,title:this.$route.params.title}})
           
        }
    }, 
    beforeRouteEnter (to, from, next) {
       
        next(vm=>{
             
             const listUrl = `/api/mix-atoc/${vm.$route.params.id}?view=chapters`
            
             vm.axios.get(listUrl).then( li =>{
              
              vm.listData =  li.data.mixToc.chapters.slice(0,50)
            
         })
        })
    }
    

}
</script>

<style scoped>
    .list-box{
        position: absolute;
        left: 0;
        right: 0;
        top:0;
        bottom: 0;
        background: #fff;
       
    }
    .mulu{
        height: 50px;
        line-height: 50px;
        padding: 0 20px;
    }
    .m{
        display: inline-block;
       
    }
    .m>span:first-child{
        font-size: 16px;
        color: rgb(5, 0, 0);
        font-weight: 700;
    }
    .m>span:last-child{
        font-size: 12px;
        color: rgb(124, 124, 124);
        margin-left: 5px;
    }
    .down1{
      display: inline-block;
      float:right;
    }
    .li{
        height: 50px;
        line-height: 50px;
        padding: 0 20px;
        letter-spacing: 2px;
        font-size: 13px;
        box-sizing: border-box;
        border-top: 1px solid rgb(233, 233, 233);
    }

    .tabbar1{
        height: 30px;
    }

    .nav{
        height: 45px;
        background: rgb(61, 60, 60);
        display: flex;
        line-height: 45px;
        text-align: center;
        font-size: 12px;
        color: #fff;
        border-bottom:1px solid rgb(138, 137, 137);
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
</style>