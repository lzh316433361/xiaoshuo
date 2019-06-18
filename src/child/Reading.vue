<template>
  <div class="reading">
    <div class="read-nav" v-show="showBox">
    
    <div class="return" @click="returngo1"> 
    
          <div class="icon">
              <img class="auto-img" src="../../public/images/icon.png">
          </div>
          <span>返回</span>
     
    </div> 
      <div class="title">{{bookTitle}}</div>

      <div class="right-list">
        <div class="duox">
          <img class="auto-img" src="../../public/images/多项.png" alt>
        </div>
      </div>

      <div class="polist">
        <router-link tag="div" to="/">
            <div class="homeone">
              <span class="icon-home2"></span>首页
              <i class="topi"></i>
            </div>
        </router-link>
        <router-link tag="div" to="/bookcase">
          <div>
            <span class="icon-book"></span>书架
          </div>
        </router-link>
        
        <router-link tag="div" to="/bookdetails">
          <div>
             <span class="icon-file-text"></span>详情
          </div>
        </router-link>
       
      </div>
    </div>

    <div class="read-tabbar" v-show="showBox">
      <div class="t1">
        <span @click="sizeDesc">Aa-</span>
        <span></span>
        <span @click="sizeAdd">Aa+</span>
      </div>
      <div class="t2">
        <span @click="default1" class="default">默认</span>
        <span @click="night">夜间</span>
        <span @click="eye">护眼</span>
      </div>
      <div class="t3">
        <span @click="lastFn">上一章</span>
        <span @click="pushList">目录</span>
        <span @click="nextFn">下一章</span>
      </div>
    </div>

    <div ref="content" class="read-content" @click="aa">
       <div class="read-title">{{readTitle}}</div>
       <div v-html="comBody"></div>
    </div>
  </div>
</template>

<script>

export default {
    data(){
       return{
           showBox:false,
           parId:'',
            readLink:'',
             //目录章节
            list:[],
            listStart:0,
            listLast:50,
            reUrl:'',
            //章节内容
            listBody:'',
            //章节标题
            readTitle:'',
            //小说标题
            bookTitle:'',
            listIndex:0,
            listIndex2:0,
            sizeIndex:16

       }
        
    },
    // this.$router.go(0),
  
    beforeRouteEnter(to, from, next) {
        
        next( vm => {
            let self = vm

            self.listIndex2 = vm.$route.params.listIndex
           
            self.parId = to.params.id 
            self.bookTitle = vm.$route.params.title
         
           self.getthem()
           
            
        })
    },
   
   
    computed:{
        comBody(){
           return this.listBody.replace(/\n/g,'<p style="padding: 5px 0">')
        }
    },
    methods:{
      //请求
      getthem(){
        let self = this
        
        const readUrl = `/api/mix-atoc/${self.parId}?view=chapters`

            self.axios.get(readUrl).then(r => {
                
                //目录章节
                self.list =  r.data.mixToc.chapters.slice(self.listStart,self.listLast)
               
                self.readTitle = r.data.mixToc.chapters[self.listIndex2 ? self.listIndex2 : self.listIndex].title
             
                self.readData  = r.data.mixToc.chapters[self.listIndex2
                 ? self.listIndex2 : self.listIndex].link      //00..00 
                 
                self.reUrl = `/chapterup.zhuishushenqi.com/chapter/${escape(self.readData)}` 
               
                let result = []
           
                for(const key in self.reUrl){
                    result.push(self.reUrl[key])   
                }
               
                //阅读书籍link
                self.readLink = result.join('')
             
                let uu = self.readLink.replace('/chapterup.zhuishushenqi.com/chapter/','')
             
                const urlr = '/a/' + uu
                
                self.axios.get(urlr).then( rr => {
                  
                  // //屏幕可工作区域
                  // let height =  window.screen.availHeight   //667 
                  // let bodyheight = document.body.scrollHeight  //394
    
                  self.listBody = rr.data.chapter.body

                })
            }) 
      },
        aa(){
           this.showBox = !this.showBox
        },
        returngo1(){
            this.$router.go(-1)
            // this.$router.push({name:'bookdetails',params:{id:this.$route.params.id,name:this.$route.params.title}})
        },
        lastFn(){
          if(!this.listIndex <= 0){
              this.listIndex--
              this.getthem()
              window.scrollTo(0,0)
          }
         
        },
        nextFn(){
          this.listIndex++
          this.getthem()
          window.scrollTo(0,0)
        },
        night(){
           let con = this.$refs.content;
           con.style.background = 'rgb(23, 23, 24)'
           con.style.color = 'rgb(129, 129, 129)'
          
        },
        eye(){
           let con = this.$refs.content;
           con.style.background = 'rgb(77, 141, 83)'
           con.style.color = 'rgb(12, 12, 12)'
          
        },
        default1(){
           let con = this.$refs.content;
           con.style.background = 'rgb(235, 232, 225)'
           con.style.color = 'rgb(12, 12, 12)'
        },
        sizeAdd(){
           let con = this.$refs.content;
           this.sizeIndex+= 2
           con.style.fontSize = this.sizeIndex + 'px'     
        },
        sizeDesc(){
          let con = this.$refs.content;
          this.sizeIndex-= 2
          con.style.fontSize = this.sizeIndex + 'px'
        },
        pushList(){
          this.$router.push({name:'list',params:{id:this.parId}})
        }



    }
}
</script>

<style scoped>
.reading {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.duox {
  width: 14px;
  margin: auto;
  margin-top: 14px;
}
.p1 {
  padding: 15px 0;
}
.read-content {
  font-size: 16px;
  letter-spacing: 2px;
  line-height: 20px;
  padding-left: 20px;
  padding-right: 10px;
  text-indent: 2em;
  background: rgb(235, 232, 225);
  
}
.polist {
  position: absolute;
  right: 10px;
  top: 50px;
  width: 90px;
  background: rgba(7, 17, 27, 0.85);
  font-size: 12px;
  border-radius: 3px;
  color: rgb(233, 233, 233);
}
.polist span {
  color: rgb(158, 157, 157);
  margin-right: 10px;
}
.polist > div {
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid rgb(104, 104, 104);
}
.homeone {
  position: relative;
}
.icon {
  width: 10px;
  display: inline-block;
  margin-right: 3px;
}
.icon-menu {
  line-height: 12px;
}
.topi {
  position: absolute;
  right: 10px;
  top: -10px;
  border-top: 5px solid transparent;
  border-right: 5px solid transparent;
  border-left: 5px solid transparent;
  border-bottom: 5px solid rgba(11, 15, 19, 0.85);
}
.read-nav {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  height: 45px;
  width: 100%;
  line-height: 45px;
  text-align: center;
  color: #fff;
  background: rgba(7, 17, 27, 0.788);
  font-size: 14px;
}
.return {
  flex: 1;
  font-size: 13px;
}
.title {
  flex: 0 0 230px;
}
.right-list {
  flex: 1;
}

.read-tabbar {
  width: 100%;
  height: 150px;
  background: rgba(7, 17, 27, 0.795);
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  font-size: 13px;
}
.read-tabbar div {
  flex: 1;
  height: 40px;
  line-height: 40px;
}
.t1 {
  display: flex;
  padding: 0 20px;
  text-align: center;
  color: rgb(233, 233, 233);
  height: 50px;
  box-sizing: border-box;
}
.t1 span {
  flex: 1;
  line-height: 50px;
}
.t1 span:nth-child(2) {
  flex: 0 0 200px;
  height: 2px;
  border-radius: 5px;
  margin: auto 0;
  background: rgb(204, 202, 202);
}
.t2 {
  display: flex;
  padding: 0 10px;
  text-align: center;
  color: rgb(233, 233, 233);
  height: 50px;
  box-sizing: border-box;
}
.t2 span {
  flex: 1;
  height: 30px;
  margin: 10px 10px;
  line-height: 30px;
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 0 0 1px 1px rgba(255, 255, 255, 0.2);
}
.t2 .default {
  color: rgba(255, 0, 0, 0.712);
  box-shadow: 0 0 5px 1px rgba(192, 27, 27, 0.959);
}

.t3 {
  display: flex;
  padding: 0 10px;
  text-align: center;
  color: rgb(233, 233, 233);
  height: 50px;
  box-sizing: border-box;
}
.t3 span {
  flex: 1;
  height: 30px;
  margin: 10px 10px;
  line-height: 30px;
  box-sizing: border-box;
  border-radius: 5px;
}
.read-title{
  font-weight: 700;
  font-size: 18px;
  padding: 20px 0;
}
</style>