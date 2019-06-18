<template>
    <div class="book-details">
        <div class="nav">
            <div @click="returngo">
            <!-- <router-link to="/classifyC/玄幻"> -->
                <div class="return">
                    <div class="icon">
                        <img class="auto-img" src="../../public/images/icon.png">
                    </div>
                    <span>返回</span>
               </div>
            <!-- </router-link> -->
            </div>
            <div class="title">
                书籍详情
            </div>
            <div class="return-home">
                <router-link to="/">
                    <div class="home">
                        <img class="auto-img" src="../../public/images/home.png">
                    </div>
                </router-link>
             </div>
        </div>

        <div class="details">
            <div class="deta-img">
                <img class="auto-img" :src="'//statics.zhuishushenqi.com' + toDataCom.cover">
            </div>
            <div class="data-text">
                <p class="black">{{toDataCom.title}}</p>
                <p>
                    <span class="red1">{{toDataCom.author}}</span>
                    <i class="ll"></i> {{toDataCom.minorCate}}
                </p>
                <p>{{Math.ceil(toDataCom.latelyFollower/8000)}}小时前更新</p>
            </div>
        </div>

        <div class="add-box">
            <div class="add" ref="bookBox" @click="addBook">{{addActive ? '撤出书架' : '加入书架'}}</div>
            <div class="begin" @click="pushFn">
               <div>开始阅读</div>   
            </div>
        </div>

        <div class="people-box">
            <div>
                <span class="s1">追人气</span>
                <span>{{Math.ceil(toDataCom.latelyFollower/10000)}}万</span>
            </div>
            <div>
                <span class="s1">读者留存率</span>
                <span>{{toDataCom.retentionRatio}}%</span>
            </div>
            <div>
                <span class="s1">日更字数</span>
                <span>{{Math.floor(toDataCom.latelyFollower/10)}}</span>
            </div>
        </div>

        <div class="short">
            {{toDataCom.shortIntro}}
        </div>
        
       
        <div class="list-box"  @click="listPush">
                <span class="list-span1">目录</span>
                <span class="list-span2">[{{Math.ceil(toDataCom.latelyFollower/8000)}}小时前更新] 
                    {{toDataCom.lastChapter}}
                </span>
                <span class="arrow"></span>
        </div>
      
        
       
    </div>
    
</template>

<script>
export default {
    data(){
        return{
            fromPath:'',
            toId:'',
            toName:'',
            dataCC:[],
            reUrl:'',
            addActive:false,
            index:0
        }
    },
    methods:{
        returngo(){
            this.$router.go(-1)
        },
        pushFn(){
            this.$router.push({name:'reading',params:{id:this.toId,title:this.toDataCom.title}})
        },
        listPush(){
            this.$router.push({name:'list',params:{id:this.toId,title:this.toDataCom.title}})
        },  
        addBook(){
            let box = this.$refs.bookBox
            
            this.addActive = !this.addActive
            
                if(this.addActive){
                    box.style.background = '#999'
                    box.style.color = '#fff'
                    box.style.border = 'none'
                    this.$store.state.addBook.push(this.toDataCom)
                    this.index++
                }else{
                    box.style.border = '1px solid #8080d6'
                    box.style.color = '#8080d6'
                    box.style.background = ''
                    this.$store.state.addBook.splice()
                }   
            
        }
    },
    computed:{
        toDataCom(){
            let dataIndex = []
            for(const key in this.dataCC) {

                if(this.dataCC[key]._id == this.toId){
                    dataIndex = this.dataCC[key]      
                }
            }
            return dataIndex
          
        },

        imgUrl(){
          let imgName = `/api/book/by-categories?gender=male&type=hot&major=${this.toName}&minor=&start=0&limit=10`
          return imgName  
         
        }


    }, 
    
    beforeRouteEnter(to,from,next){
        
        
        next(vm => {

            vm.fromPath = from.path
            
            vm.toId = vm.$route.params.id
            vm.toName = vm.$route.params.name
            
            vm.axios.get(vm.imgUrl).then(aa =>{
                vm.dataCC = aa.data.books
            })
   
        })
            

    },
 
   
}
</script>

<style scoped>
   .book-details{
       position: absolute;
       left: 0;
       top: 0;
       right: 0;
       bottom: 0;
       background: #fff;
   }

   .details{
       display: flex;
       padding: 20px;
   }
   .deta-img{
       flex: 0 0 70px;
       margin-right: 20px;
   }
   .data-text{
       flex: 1;
       display: flex;
       line-height: 25px;
       font-size: 13px;
       flex-direction: column;
       color: #999;
   }
   .data-text>p{
       flex:1; 
       height: 25px;
       line-height: 33px;
   }
   .ll{
       display: inline-block;
       position:relative;
       top: 2px;
       left: 2px;
       width: 1px;
       height: 12px;
       background: #999;
      
       margin:0 7px;
   }
   .red1{
       color:rgb(72, 180, 9);
   }
   .black{
       font-size: 17px;
       color: black;
   }
   .add-box{
       display: flex;
       margin: 0 20px;
       text-align: center;
       line-height: 45px;
     
   }
   .add{
       flex: 1;
       margin-right: 10px;
       height:45px;
       color: rgb(1, 5, 4);
       border: 1px solid rgb(50, 54, 53);
   }
   .begin{
       flex: 1;
       height:45px;
       border: 1px solid #000;
       color: #fff;
       background: rgb(74, 97, 173);
   }
   .people-box{
       display: flex;
       border:1px solid #ccc;
       border-right: 0;
       border-left: 0;
       margin-top: 20px;
       padding: 20px 0;
       
   }
   .people-box>div{
       flex: 1;
       height: 50px;
       text-align: center;
     
       
   }
    .people-box>div>span{
        display: block;
        height: 25px;
        line-height: 25px;
    }
    .s1{
        color: #999;
        font-size: 12px;
    }
    .short{
        padding: 20px;
        font-size: 13px;
         letter-spacing:2px;
         line-height: 20px;
    }

    .list-box{
        height: 60px;
        line-height: 60px;
        padding: 0 20px;
        border:1px solid rgb(218, 218, 218);
       border-right: 0;
       border-left: 0;
       position:relative;
       /* overflow: hidden; */
      
       display: flex;
    }
    .list-box .list-span1{
        display: inline-block;
        flex: 0 0 90px;
    }
    .list-box .list-span2{
        color: #999;
        font-size: 13px;
        display: inline-block;
        flex: 1;
        overflow: hidden;
        white-space: nowrap;
       text-overflow: ellipsis;
    }
    .arrow{
        position: absolute;
        right: -20px;
        bottom: 0;
        top: 3px;
        margin: auto 0 ;  
        border-top: 5px solid rgb(119, 118, 118);
        border-bottom: 5px solid transparent;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        transform:rotateZ(-90deg)
    }



    .nav{
        height: 45px;
        background: rgb(55, 69, 129);
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
</style>
