<template>
    <div class="classify">
        <div class="man">男生</div>
        <div class="type">
             <div class="type-item" v-for="(d,index) in male" :key="index">
                <router-link tag="div" :to="'/classifyc/'+d.name">
                    <span class="name">{{d.name}}</span>
                    <span class="bookCount">{{d.bookCount}}</span>
                 </router-link>
            </div>
           
        </div>
        <div class="man">女生</div>
        <div class="type">
            <div  class="type-item"  v-for="(d,index) in female" :key="index">
                <router-link tag="div" :to="'/classifyc/'+d.name">
                    <span class="name">{{d.name}}</span>
                    <span class="bookCount">{{d.bookCount}}</span>
                 </router-link>
            </div>
        </div>

        <div class="man">出版</div>
        <div class="type">
            <div class="type-item" v-for="(d,index) in press" :key="index">
                <router-link tag="div" :to="'/classifyc/'+d.name">
                    <span class="name">{{d.name}}</span>
                    <span class="bookCount">{{d.bookCount}}</span>
                 </router-link>
            </div>
        </div>

    </div>
</template>

<script>

export default {
    props: ['data'],
    computed: {
        female() {
            return this.data.female
        }, 
        male() {
            return this.data.male
        },
        press() {
            return this.data.press
        }

    },
    methods: {
       
    },
}
</script>

<style>
    .man{
        display: block;
        margin: .4rem;
        font-size: .23rem;
    }
    .type{
        overflow: hidden;
        border-top: 1px solid #ccc;
        
    }    
     .type-item{
        width: 124px;
        height: 1rem;
        text-align: center;
        line-height: .7rem;
        float: left;
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        box-sizing: border-box;
        color: rgb(0, 0, 0);
    }
    .type div:nth-child(3n) {
        border-right: 0
    }
    
    .type-item span{
        display: block;
    }
    .name{
        font-weight: 700;

    }
    .bookCount{
        margin-top: -20px;
        font-size: .18rem;
        color: rgb(138, 128, 128);
    }
</style>