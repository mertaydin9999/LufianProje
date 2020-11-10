<template>
    <div>
        <div id="kategori">
                <button id="btnKategori" > Kategoriler </button> <button @click="show = !show" class="ac">+</button>
                <div id="linkler">
                    <ul v-if="show">
                    <li   ><a :href="kaynaklar[0]" class="kategorili"  >{{urun[0]}}</a></li>
                    <li   ><a :href="kaynaklar[1]" class="kategorili"  >{{urun[1]}}</a></li>
                    <li   ><a :href="kaynaklar[2]" class="kategorili"  >{{urun[2]}}</a></li>
                    <li   ><a :href="kaynaklar[3]" class="kategorili"  >{{urun[3]}}</a></li>
                    <li   ><a :href="kaynaklar[4]" class="kategorili"  >{{urun[4]}}</a></li>
                    <li   ><a :href="kaynaklar[5]" class="kategorili"  >{{urun[5]}}</a></li>
                    <li   ><a :href="kaynaklar[6]" class="kategorili"  >{{urun[6]}}</a></li>
                    <li   ><a :href="kaynaklar[7]" class="kategorili"  >{{urun[7]}}</a></li>
                    <li   ><a :href="kaynaklar[8]" class="kategorili"  >{{urun[8]}}</a></li>
                    
                    
                   </ul> 
                </div>  

        </div>
             <hr width="20%">

             <div  id="renk">
            
                 <div  id="btndiv">
                 <button class="renkbtn">Renk</button>
                 <button  @click="showrenk = !showrenk" class="renkbtn">+</button>

                 </div>


                <ul v-if="showrenk">
                    <li class="colorli"><button id="brown"><a href="https://www.lufian.com/ust-giyim?type1=117&ps=4"></a></button></li>
                    <li class="colorli"><button id="krem"><a href="https://www.lufian.com/ust-giyim?type1=117-46&ps=5"></a></button></li>
                    <li class="colorli"><button id="gray"><a href="https://www.lufian.com/ust-giyim?type1=22-34-1-12-46&ps=5"></a></button></li>
                    <li class="colorli"><button id="siyahimsi"><a href="https://www.lufian.com/ust-giyim?type1=117-23-12-46&ps=5"></a></button></li>
                </ul >

                <ul v-if="showrenk">
                    <li class="colorli"><button id="kirmizi"><a href="https://www.lufian.com/ust-giyim?type1=117-22-23-12-46&ps=5"></a></button></li>
                    <li class="colorli"><button id="acikkahverengi"><a href="https://www.lufian.com/ust-giyim?type1=117-22-23-34-12-46&ps=5"></a></button></li>
                    <li class="colorli"><button id="koyugray"><a href="https://www.lufian.com/ust-giyim?type1=22-23-34-12-46&ps=5"></a></button></li>
                    <li class="colorli"><button id="siyah"><a href="https://www.lufian.com/ust-giyim?type1=22-23-34-1-12-46&ps=5"></a></button></li>
                </ul>


             </div>
    
    
    
    
    
    </div>


</template>>


<script>
export default {
    data(){
        return{
            urun:['Kazak','Ceket','Gomlek','Hirka','Klasik Yelek','Polo Yaka T-Shirt','Sweatshirt','Triko Yelek','T-Shirt'],
            show:true,
            showrenk:true,
            kaynaklar:["https://www.lufian.com/kazak","https://www.lufian.com/ceket","https://www.lufian.com/gomlek",
                       "https://www.lufian.com/hirka","https://www.lufian.com/klasik-yelek","https://www.lufian.com/polo-yaka-t-shirt",
                       "https://www.lufian.com/sweatshirt","https://www.lufian.com/triko-yelek","https://www.lufian.com/t-shirt"]
            

        }
    }
    

    
}
</script>


<style scoped>

    #brown{
        border: 1px solid #734A12;
        border-radius: 100%;
        background-color:  #734A12;
    }
     #krem{
        border: 1px solid #FFFDD0;
        border-radius: 100%;
        background-color:  #FFFDD0;
    }
     #gray{
        border: 1px solid #DDDDDD;
        border-radius: 100%;
        background-color:  #DDDDDD;
    }
     #siyahimsi{
        border: 1px solid #293133;
        border-radius: 100%;
        background-color:  #293133;
    }
     #kirmizi{
        border: 1px solid #800000;
        border-radius: 100%;
        background-color:  #293133;
    }
     #acikkahverengi{
        border: 1px solid #963B00;
        border-radius: 100%;
        background-color:  #963B00;
    }
     #koyugray{
        border: 1px solid #A9A9A9;
        border-radius: 100%;
        background-color:  #A9A9A9;
    }
     #siyah{
        border: 1px solid #000000;
        border-radius: 100%;
        background-color:  #000000;
    }
    li{
        display: block;
        margin: 10px;
        padding: 10px;
        
    }

    #btnKategori{
        margin-left:7px ;
        padding: 10px;
        font-family: 'Jost',sans-serif;
        font-size: 20px;
        
    }

    #linkler{
         width: 200px;
         height: 400px;
         overflow: auto;

    }

    #renk{
        width: 20%;
    }

    .colorli{
        display: inline;
        margin-bottom: 4em;
    }
    #btndiv{
        margin-left:3em;
        margin-bottom: 1em;
        font-family: 'Jost',sans-serif;

    }

    .kategorili{
        text-decoration:none;
        font-family: 'Jost',sans-serif;
        text-align: left;
    }
    #renkbtn{
        display: inline;
        margin-right: 5em ;
    }
    hr{
        width: 200px;
    }
    .ac{
        margin-left: 10px;
    }

</style>