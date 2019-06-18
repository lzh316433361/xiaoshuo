import Vue from 'vue'
import Router from 'vue-router'

import Search from './components/Search.vue'
import Login from './components/Login.vue'

import Choice from './views/Choice.vue'
import Vip from './views/Vip.vue'
import Classify from './views/Classify.vue'
import Ranking from './views/Ranking.vue'
import ClassifyC from './child/ClassifyC.vue'
import BookDetails from './child/BookDetails.vue'
import Reading from './child/Reading.vue'
import List from './child/List.vue'
import Bookcase from './child/Bookcase.vue'

Vue.use(Router)



export default new Router({
  routes: [
    {path:'/search',name:'search',component:Search,props: true},

    {path:'/login',name:'login',component:Login},

    {path:'/bookcase',name:'bookcase',component:Bookcase},

    {path:'/',name:'choice',component:Choice},

    {path:'/classify',name:'classify',component:Classify},
    
    {path:'/classifyc/:name',name:'classifyc',component:ClassifyC},
    
    {path:'/bookdetails',name:'bookdetails',component:BookDetails},

    {path:'/reading/:id',name:'reading',component:Reading,props: true},
    
    {path:'/vip',name:'vip',component:Vip},

    {path:'/list',name:'list',component:List,props: true},

    {path:'/ranking',name:'ranking',component:Ranking},

  ],

  linkExactActiveClass: 'active',
  
})
