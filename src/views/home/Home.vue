<template>
    <div id="home">
        <Navbar class="home-nav">
            <template v-slot:title>购物车</template>
        </Navbar>
       <HomeSwiper :banners="banners"/>
        <RecommendView :recommends="recommends"/>
        <featureView/>
        <TabControl class="tab-control" :titles="['流行','新款','精选']" 
        @tabclick="tabclick"/>
        <Goodslist :goods="goodslist"/>
    </div>
</template>

<script>
    import Navbar from '@/components/common/navbar/Navbar.vue'
   
    import HomeSwiper from './childComps/HomeSwiper.vue'
    import RecommendView from './childComps/RecommendView.vue'
    import featureView from './childComps/featureView.vue'
    import TabControl from '@/components/content/tabcontrol/TabControl.vue'
    import Goodslist from '@/components/content/goods/Goodslist.vue'

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
                        ,title:'2022夏季新款女装气质韩版宽松显瘦裙子短袖荷叶边棉麻连衣裙女夏'},
                        {img:'https://img.alicdn.com/imgextra/i2/121066131/O1CN01OADFzv1vA32lN75pp_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'2022夏季新款女装气质韩版宽松显瘦裙子短袖荷叶边棉麻连衣裙女夏'},
                        {img:'https://img.alicdn.com/imgextra/i3/32434828/O1CN01SpOnwh1lXGoFrWe6t_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'2022夏季新款女装气质韩版宽松显瘦裙子短袖荷叶边棉麻连衣裙女夏'},
                        {img:'https://img.alicdn.com/imgextra/i3/32434828/O1CN01SpOnwh1lXGoFrWe6t_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'2022夏季新款女装气质韩版宽松显瘦裙子短袖荷叶边棉麻连衣裙女夏'},
                        {img:'https://img.alicdn.com/imgextra/i3/32434828/O1CN01SpOnwh1lXGoFrWe6t_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'2022夏季新款女装气质韩版宽松显瘦裙子短袖荷叶边棉麻连衣裙女夏'},
                        {img:'https://img.alicdn.com/imgextra/i3/32434828/O1CN01SpOnwh1lXGoFrWe6t_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'2022夏季新款女装气质韩版宽松显瘦裙子短袖荷叶边棉麻连衣裙女夏'},
                        {img:'https://img.alicdn.com/imgextra/i3/32434828/O1CN01SpOnwh1lXGoFrWe6t_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'2022夏季新款女装气质韩版宽松显瘦裙子短袖荷叶边棉麻连衣裙女夏'},
                        {img:'https://img.alicdn.com/imgextra/i3/32434828/O1CN01SpOnwh1lXGoFrWe6t_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'2022夏季新款女装气质韩版宽松显瘦裙子短袖荷叶边棉麻连衣裙女夏'}
                    ]},
                    'new':{page:0,list:[
                         {img:'https://img.alicdn.com/imgextra/i4/1141970038/O1CN01qMqSNf1C9RodzFhqP_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'YUZI鱼子家2022夏季新款大码短袖连衣裙女胖mm宽松显瘦遮肉娃娃领'},
                        {img:'https://img.alicdn.com/imgextra/i4/1141970038/O1CN01qMqSNf1C9RodzFhqP_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'YUZI鱼子家2022夏季新款大码短袖连衣裙女胖mm宽松显瘦遮肉娃娃领'},
                        {img:'https://img.alicdn.com/imgextra/i4/1141970038/O1CN01qMqSNf1C9RodzFhqP_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'YUZI鱼子家2022夏季新款大码短袖连衣裙女胖mm宽松显瘦遮肉娃娃领'},
                        {img:'https://img.alicdn.com/imgextra/i4/1141970038/O1CN01qMqSNf1C9RodzFhqP_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'YUZI鱼子家2022夏季新款大码短袖连衣裙女胖mm宽松显瘦遮肉娃娃领'},
                        {img:'https://img.alicdn.com/imgextra/i4/1141970038/O1CN01qMqSNf1C9RodzFhqP_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'YUZI鱼子家2022夏季新款大码短袖连衣裙女胖mm宽松显瘦遮肉娃娃领'},
                        {img:'https://img.alicdn.com/imgextra/i4/1141970038/O1CN01qMqSNf1C9RodzFhqP_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'YUZI鱼子家2022夏季新款大码短袖连衣裙女胖mm宽松显瘦遮肉娃娃领'},
                        {img:'https://img.alicdn.com/imgextra/i4/1141970038/O1CN01qMqSNf1C9RodzFhqP_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'YUZI鱼子家2022夏季新款大码短袖连衣裙女胖mm宽松显瘦遮肉娃娃领'},
                        {img:'https://img.alicdn.com/imgextra/i4/1141970038/O1CN01qMqSNf1C9RodzFhqP_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'YUZI鱼子家2022夏季新款大码短袖连衣裙女胖mm宽松显瘦遮肉娃娃领'},
                        {img:'https://img.alicdn.com/imgextra/i4/1141970038/O1CN01qMqSNf1C9RodzFhqP_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'YUZI鱼子家2022夏季新款大码短袖连衣裙女胖mm宽松显瘦遮肉娃娃领'},
                        {img:'https://img.alicdn.com/imgextra/i4/1141970038/O1CN01qMqSNf1C9RodzFhqP_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'YUZI鱼子家2022夏季新款大码短袖连衣裙女胖mm宽松显瘦遮肉娃娃领'},
                        {img:'https://img.alicdn.com/imgextra/i4/1141970038/O1CN01qMqSNf1C9RodzFhqP_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'YUZI鱼子家2022夏季新款大码短袖连衣裙女胖mm宽松显瘦遮肉娃娃领'},
                        {img:'https://img.alicdn.com/imgextra/i4/113359832/O1CN01OKm3FH2MV6g7Sp7NP_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'复古文艺亚麻两件套女装2022夏季新款宽松显瘦文艺休闲开衫套装潮'}
                    ]},
                    'sell':{page:0,list:[
                        {img:'https://img.alicdn.com/imgextra/i4/113359832/O1CN01OKm3FH2MV6g7Sp7NP_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'复古文艺亚麻两件套女装2022夏季新款宽松显瘦文艺休闲开衫套装潮'},
                        {img:'https://img.alicdn.com/imgextra/i4/113359832/O1CN01OKm3FH2MV6g7Sp7NP_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'复古文艺亚麻两件套女装2022夏季新款宽松显瘦文艺休闲开衫套装潮'},
                        {img:'https://img.alicdn.com/imgextra/i4/113359832/O1CN01OKm3FH2MV6g7Sp7NP_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'复古文艺亚麻两件套女装2022夏季新款宽松显瘦文艺休闲开衫套装潮'},
                        {img:'https://img.alicdn.com/imgextra/i4/113359832/O1CN01OKm3FH2MV6g7Sp7NP_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'复古文艺亚麻两件套女装2022夏季新款宽松显瘦文艺休闲开衫套装潮'},
                        {img:'https://img.alicdn.com/imgextra/i4/113359832/O1CN01OKm3FH2MV6g7Sp7NP_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'复古文艺亚麻两件套女装2022夏季新款宽松显瘦文艺休闲开衫套装潮'},
                        {img:'https://img.alicdn.com/imgextra/i4/113359832/O1CN01OKm3FH2MV6g7Sp7NP_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'复古文艺亚麻两件套女装2022夏季新款宽松显瘦文艺休闲开衫套装潮'},
                        {img:'https://img.alicdn.com/imgextra/i4/113359832/O1CN01OKm3FH2MV6g7Sp7NP_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'复古文艺亚麻两件套女装2022夏季新款宽松显瘦文艺休闲开衫套装潮'},
                        {img:'https://img.alicdn.com/imgextra/i4/113359832/O1CN01OKm3FH2MV6g7Sp7NP_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
                        ,title:'复古文艺亚麻两件套女装2022夏季新款宽松显瘦文艺休闲开衫套装潮'}
                    ]},
                },
                currentType:'pop'
            }
        },
        components:{
         Navbar,
         HomeSwiper,
         RecommendView,
         featureView,
         TabControl,
         Goodslist
        },
         created(){
            this.getHomeMultidata();
            // 等待接口
            // this.getHomeGoods('pop');
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
         }
    }
</script>

<style scoped>
#home{
    padding-top:44px ;
}
.home-nav {
    background: pink;
    color:white;
    font-size: 20px;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1;
    width: 100%;
}

</style>