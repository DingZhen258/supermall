<template>
        <div id="home">
        <Navbar class="home-nav">
        <template v-slot:title>购物车</template>
        </Navbar>
          <TabControl class="tab-control" :titles="['流行','新款','精选']" 
            @tabclick="tabclick" 
            ref="tabControl2" v-show="istabfixed"
           />
        <Scroll class="content" ref="scroll" 
                :probeType="2"
                :pullUpLoad="true" 
                @scroll="contentScroll">
            <HomeSwiper :banners="banners" @SwiperLoad="SwiperLoad"/>
            <RecommendView :recommends="recommends"/>
            <featureView/>
            <TabControl :titles="['流行','新款','精选']" 
            @tabclick="tabclick" 
            ref="tabControl1"
           />
            <Goodslist :goods="goodslist"/>
        </Scroll>
        <BackTop @click="BackClick" v-show="isshow"/>
       </div>
    
</template>

<script>
    import Navbar from '@/components/common/navbar/Navbar.vue'
    import Scroll from '@/components/common/bscroll/Scroll.vue'
   
    import HomeSwiper from './childComps/HomeSwiper.vue'
    import RecommendView from './childComps/RecommendView.vue'
    import featureView from './childComps/featureView.vue'
    import TabControl from '@/components/content/tabcontrol/TabControl.vue'
    import Goodslist from '@/components/content/goods/Goodslist.vue'
    import BackTop from '@/components/content/backTop/BackTop.vue'

    import {getHomeMultidata,getHomeGoods} from '@/network/home.js'
    export default {
        name:'home',
        data(){
            return{
                banners:[],
                recommends:[],
                goods:{
                    'pop':{page:0,list:[
                        {img:'https://img.alicdn.com/imgextra/i3/32434828/O1CN01SpOnwh1lXGoFrWe6t_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'2022夏季新款女装气质韩版宽松显瘦裙子短袖荷叶边棉麻连衣裙女夏',
                        id:1},
                         {img:'https://img.alicdn.com/imgextra/i3/32434828/O1CN01SpOnwh1lXGoFrWe6t_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'2022夏季新款女装气质韩版宽松显瘦裙子短袖荷叶边棉麻连衣裙女夏',
                        id:1}, {img:'https://img.alicdn.com/imgextra/i3/32434828/O1CN01SpOnwh1lXGoFrWe6t_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'2022夏季新款女装气质韩版宽松显瘦裙子短袖荷叶边棉麻连衣裙女夏',
                        id:1}, {img:'https://img.alicdn.com/imgextra/i3/32434828/O1CN01SpOnwh1lXGoFrWe6t_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'2022夏季新款女装气质韩版宽松显瘦裙子短袖荷叶边棉麻连衣裙女夏',
                        id:1}, {img:'https://img.alicdn.com/imgextra/i3/32434828/O1CN01SpOnwh1lXGoFrWe6t_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'2022夏季新款女装气质韩版宽松显瘦裙子短袖荷叶边棉麻连衣裙女夏',
                        id:1}, {img:'https://img.alicdn.com/imgextra/i3/32434828/O1CN01SpOnwh1lXGoFrWe6t_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'2022夏季新款女装气质韩版宽松显瘦裙子短袖荷叶边棉麻连衣裙女夏',
                        id:1}, {img:'https://img.alicdn.com/imgextra/i3/32434828/O1CN01SpOnwh1lXGoFrWe6t_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'2022夏季新款女装气质韩版宽松显瘦裙子短袖荷叶边棉麻连衣裙女夏',
                        id:1}, {img:'https://img.alicdn.com/imgextra/i3/32434828/O1CN01SpOnwh1lXGoFrWe6t_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'2022夏季新款女装气质韩版宽松显瘦裙子短袖荷叶边棉麻连衣裙女夏',
                        id:1}, {img:'https://img.alicdn.com/imgextra/i3/32434828/O1CN01SpOnwh1lXGoFrWe6t_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'2022夏季新款女装气质韩版宽松显瘦裙子短袖荷叶边棉麻连衣裙女夏',
                        id:1}, {img:'https://img.alicdn.com/imgextra/i3/32434828/O1CN01SpOnwh1lXGoFrWe6t_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'2022夏季新款女装气质韩版宽松显瘦裙子短袖荷叶边棉麻连衣裙女夏',
                        id:1}, {img:'https://img.alicdn.com/imgextra/i3/32434828/O1CN01SpOnwh1lXGoFrWe6t_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'2022夏季新款女装气质韩版宽松显瘦裙子短袖荷叶边棉麻连衣裙女夏',
                        id:1}, {img:'https://img.alicdn.com/imgextra/i3/32434828/O1CN01SpOnwh1lXGoFrWe6t_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'2022夏季新款女装气质韩版宽松显瘦裙子短袖荷叶边棉麻连衣裙女夏',
                        id:1}, {img:'https://img.alicdn.com/imgextra/i3/32434828/O1CN01SpOnwh1lXGoFrWe6t_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'2022夏季新款女装气质韩版宽松显瘦裙子短袖荷叶边棉麻连衣裙女夏',
                        id:1}, {img:'https://img.alicdn.com/imgextra/i3/32434828/O1CN01SpOnwh1lXGoFrWe6t_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'YUZI鱼子家2022夏季新款大码短袖连衣裙女胖mm宽松显瘦遮肉娃娃领',
                        id:1},
                    ]},
                    'new':{page:0,list:[
                      {img:'https://img.alicdn.com/imgextra/i3/32434828/O1CN01SpOnwh1lXGoFrWe6t_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'YUZI鱼子家2022夏季新款大码短袖连衣裙女胖mm宽松显瘦遮肉娃娃领',
                        id:2},{img:'https://img.alicdn.com/imgextra/i3/32434828/O1CN01SpOnwh1lXGoFrWe6t_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'YUZI鱼子家2022夏季新款大码短袖连衣裙女胖mm宽松显瘦遮肉娃娃领',
                        id:2},{img:'https://img.alicdn.com/imgextra/i3/32434828/O1CN01SpOnwh1lXGoFrWe6t_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'YUZI鱼子家2022夏季新款大码短袖连衣裙女胖mm宽松显瘦遮肉娃娃领',
                        id:2},{img:'https://img.alicdn.com/imgextra/i3/32434828/O1CN01SpOnwh1lXGoFrWe6t_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'YUZI鱼子家2022夏季新款大码短袖连衣裙女胖mm宽松显瘦遮肉娃娃领',
                        id:2},{img:'https://img.alicdn.com/imgextra/i3/32434828/O1CN01SpOnwh1lXGoFrWe6t_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'YUZI鱼子家2022夏季新款大码短袖连衣裙女胖mm宽松显瘦遮肉娃娃领',
                        id:2},{img:'https://img.alicdn.com/imgextra/i3/32434828/O1CN01SpOnwh1lXGoFrWe6t_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'YUZI鱼子家2022夏季新款大码短袖连衣裙女胖mm宽松显瘦遮肉娃娃领',
                        id:2},{img:'https://img.alicdn.com/imgextra/i3/32434828/O1CN01SpOnwh1lXGoFrWe6t_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'YUZI鱼子家2022夏季新款大码短袖连衣裙女胖mm宽松显瘦遮肉娃娃领',
                        id:2},{img:'https://img.alicdn.com/imgextra/i3/32434828/O1CN01SpOnwh1lXGoFrWe6t_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'YUZI鱼子家2022夏季新款大码短袖连衣裙女胖mm宽松显瘦遮肉娃娃领',
                        id:2},{img:'https://img.alicdn.com/imgextra/i3/32434828/O1CN01SpOnwh1lXGoFrWe6t_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'YUZI鱼子家2022夏季新款大码短袖连衣裙女胖mm宽松显瘦遮肉娃娃领',
                        id:2},
                    ]},
                    'sell':{page:0,list:[
                        {img:'https://img.alicdn.com/imgextra/i4/113359832/O1CN01OKm3FH2MV6g7Sp7NP_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'复古文艺亚麻两件套女装2022夏季新款宽松显瘦文艺休闲开衫套装潮',id:3},
                        {img:'https://img.alicdn.com/imgextra/i4/113359832/O1CN01OKm3FH2MV6g7Sp7NP_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'复古文艺亚麻两件套女装2022夏季新款宽松显瘦文艺休闲开衫套装潮',id:3},
                        {img:'https://img.alicdn.com/imgextra/i4/113359832/O1CN01OKm3FH2MV6g7Sp7NP_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'复古文艺亚麻两件套女装2022夏季新款宽松显瘦文艺休闲开衫套装潮',id:3},
                        {img:'https://img.alicdn.com/imgextra/i4/113359832/O1CN01OKm3FH2MV6g7Sp7NP_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'复古文艺亚麻两件套女装2022夏季新款宽松显瘦文艺休闲开衫套装潮',id:3},
                        {img:'https://img.alicdn.com/imgextra/i4/113359832/O1CN01OKm3FH2MV6g7Sp7NP_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'复古文艺亚麻两件套女装2022夏季新款宽松显瘦文艺休闲开衫套装潮',id:3},
                        {img:'https://img.alicdn.com/imgextra/i4/113359832/O1CN01OKm3FH2MV6g7Sp7NP_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'复古文艺亚麻两件套女装2022夏季新款宽松显瘦文艺休闲开衫套装潮',id:3},
                        {img:'https://img.alicdn.com/imgextra/i4/113359832/O1CN01OKm3FH2MV6g7Sp7NP_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'复古文艺亚麻两件套女装2022夏季新款宽松显瘦文艺休闲开衫套装潮',id:3},
                        
                    ]},
                },
                currentType:'pop',
                isshow:false,
                taboffsetTop:0,
                istabfixed:false,
                saveY:0
            }
        },
        components:{
         Navbar,
         HomeSwiper,
         RecommendView,
         featureView,
         TabControl,
         Goodslist,
         Scroll,
         BackTop
        },
        
         methods:{
            // 事件方法
            tabclick(index){
               switch(index){
                case 0 : this.currentType="pop";break;
                case 1 : this.currentType="new";break;
                case 2 : this.currentType="sell";break;
               }
            },
            // 回到顶部功能
            BackClick(){
               this.$refs.scroll.scroll.scrollTo(0,0,300)
            },
            // 判断滚动位置控制图标
            contentScroll(position){
                this.isshow=(-position.y) > 1000

                this.istabfixed=(-position.y) > this.taboffsetTop
            },
            SwiperLoad(){
                this.taboffsetTop=this.$refs.tabControl1.$el.offsetTop;
            },


            // 网络请求方法
            getHomeMultidata(){
                 getHomeMultidata().then(res=>{
                 this.banners=res.data.data.banner.list;
                 this.recommends=res.data.data.recommend.list;
                 }) 
            },
            // 等待接口
            // getHomeGoods(type){
            //     const page = this.goods[type].page+1;
            //       getHomeGoods(type,page).then(res=>{
            //         console.log(res);
            //         this.goods[type].list.push(...res.data.list)
            //         this.goods[type].page+=1
            // })
            // }

         },
         computed:{
            goodslist(){
                return this.goods[this.currentType].list
                
            }
         },
          created(){
             this.getHomeMultidata();
            
            // 等待接口
            // this.getHomeGoods('pop');
            },
           activated(){
            this.$refs.scroll.scroll.scrollTo(0,this.saveY)
            this.$refs.scroll.scroll.refresh()
           },
           deactivated(){
            this.saveY=this.$refs.scroll.scroll.y
             console.log(this.saveY)
           } 
    }
</script>

<style scoped>
#home{
    height: 100vh;
    
}
.home-nav {
    background: pink;
    color:white;
    font-size: 20px;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
}

.content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
}
.tabfied{
    background-color: red;
}
.tab-control{
    position: relative;
    z-index: 3;
    margin-top: 43px;
}
</style>