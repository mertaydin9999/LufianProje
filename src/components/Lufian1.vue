<template>
<div id="productName scrollableContent" class="div1">

<div id="scrollableContent " class="div2">
<ul >
    <li >                 
                <a >
                    <img class="fotoType" :src="kaynak[0]" alt="Nodo Spor Blazer Ceket Slim Fit Lacivert" title="Nodo Spor Blazer Ceket Slim Fit Lacivert">
                </a>       
    </li>
    <li >        
            <a >
                <img class="fotoType" :src="kaynak[1]" alt="Nodo Spor Blazer Ceket Slim Fit Lacivert" title="Nodo Spor Blazer Ceket Slim Fit Lacivert">
            </a>
    </li>
    <li >   
            <a >
                <img class="fotoType" :src="kaynak[2]" alt="Nodo Spor Blazer Ceket Slim Fit Lacivert" title="Nodo Spor Blazer Ceket Slim Fit Lacivert">
            </a> 
    </li>
    <li >
            <a >
                <img class=" fotoType" :src="kaynak[3]" alt="Nodo Spor Blazer Ceket Slim Fit Lacivert" title="Nodo Spor Blazer Ceket Slim Fit Lacivert">
            </a>   
    </li>
</ul>
</div>

<div id="myDIV" class="div3">
    <div  id="productName">
        <h1  id="productName" >{{ urunList.urunAd }}</h1>
        <h3 >Ürün Kodu : <a >{{urunList.urunKod}}</a>  </h3>
    </div>
    <div id="productName">
        <div >
                <h4  >{{ urunList.urunFiyat }} TL</h4>
                 <h5 >{{urunList.urunTaksitliFiyat}} </h5>
                
        </div>
        <div>
                <p> <strong>Renk :</strong> {{renkler[0]}} </p>
                <button class="renkbox"></button>
                <button class="renkbox1"></button>
        </div>
        <div >
                <p class="p.beden"> <strong>Beden :</strong>  {{ yeniBeden }} </p>
               
                <button @click="yeniBeden=bedenNo[0]" class="bedenno">{{bedenNo[0]}}</button>    
                <button @click="yeniBeden=bedenNo[1]" class="bedenno">{{bedenNo[1]}}</button>   
                <button @click="yeniBeden=bedenNo[2]" class="bedenno">{{bedenNo[2]}}</button>      
                <button @click="yeniBeden=bedenNo[3]" class="bedenno">{{bedenNo[3]}}</button>   
                <button @click="yeniBeden=bedenNo[4]" class="bedenno">{{bedenNo[4]}}</button>     
                <button @click="yeniBeden=bedenNo[5]" class="bedenno">{{bedenNo[5]}}</button>   
        </div>
        <div>
            <button @click="show()" class="sepet"> 
                 SEPETE EKLE    →        
                 </button>
            <a :href="uyelikGiris" class="favori" >♡ Favorilerime <br>
                Ekle
                ></a>
        </div>
        <div >
            
            <ul >
                <li v-for="item in aciklama" :key="item" class="ozellik"><button class="ozellik">{{item}} <hr> </button>   </li> 
                


            </ul>
        </div>
    </div>
</div>
</div>

</template>

<script>
export default {
    data:function(){
        return{
        urunList:{
             urunAd: "Nodo Spor Blazer Ceket Slim Fit Lacivert", 
             urunKod:112140116100200 ,
             urunFiyat:"1.299,99",
             urunTaksitliFiyat:119.71 + "TL'den baslayan taksitlerle"
        },
        renkler:["Lacivert","Sari","Mavi"],
        bedenNo:[46,48,50,52,54,56],
        yeniBeden:46,
        uyelikGiris:"https://www.lufian.com/uye-girisi-sayfasi",
        
        aciklama:['Urun Ozellikleri','Odeme Secenekleri ','Iade Degisim ','Kumas Bakimi ','Yorumlar (0)'],
        kaynak:["https://www.lufian.com/nodo-spor-blazer-ceket-slim-fit-lacivert-ceket-lufian-76962-36-O.jpg",
                "https://www.lufian.com/nodo-spor-blazer-ceket-slim-fit-lacivert-ceket-lufian-76963-36-O.jpg",
                "https://www.lufian.com/nodo-spor-blazer-ceket-slim-fit-lacivert-ceket-lufian-76964-36-O.jpg",
                "https://www.lufian.com/nodo-spor-blazer-ceket-slim-fit-lacivert-ceket-lufian-76965-36-O.jpg"]
        }
      },
      methods:{
          show:function(){
              alert("Urun sepete eklendi!!")
          }
      }
      
   
}
</script>

<style scoped>
button.ozellik{
    text-align: left;
}

ul {
         list-style: none ;
         padding-inline-start: 0px;
}
li{
    display: inline;
}


.fotoType{
    width: 430px;
    height: 647px;
    float: left;
    padding-left: 5px;
    padding-right: 0px;
    box-sizing: border-box;
    margin-bottom: 10px;
    margin-left: 5px;

    
}
div{
    display: block;
    float: left;
    margin-left: 0px;
    text-align: left;
    

    
}
.div1{
    width: 1315px;
    height: 1305px;
    
    float: left;
    margin-left: 0px;
    padding-left: 0px;

}

.div2{
    width: 910px;
    height: 1290px;
    
    
    
}
.div3{
    width: 420px;
    height: 776px;
    text-align: left;
    
    margin-left: 0px;
    padding-left: 0px;
    padding-top: 0px;
    
	display: inline-block;
	
}

   

#productName {
    
    line-height: 1.2;
    letter-spacing: 1.43px;
    color: #303030;
    margin-bottom: 5px;

    font-family: "Jost", sans-serif;
    font-size: 21px;
    font-weight: 400;
    font-stretch: 100%;
    font-style: normal;
    line-height: 21px; 
    display: block;
    width: 100%;
    float: left;
    margin-left: 10px;
    text-align: left;
 
}
h3{
    line-height: 1.2;
    letter-spacing: 1.43px;
    color: #303030;
    margin-bottom: 5px;

    font-family: "Jost", sans-serif;
    font-size: 13px;
    font-weight: 400;
    font-stretch: 100%;
    font-style: normal;
    line-height: 21px;
    display: block;
    width: 100%;
    float: left;
    margin-left: 10px;
    text-align: left;
}
h4{
    line-height: 1.2;
    letter-spacing: 1.43px;
    color: #303030;
    margin-bottom: 5px;
    padding-bottom: 0px;

    font-family: "Jost", sans-serif;
    font-size: 13px;
    font-weight: 700;
    font-stretch: 100%;
    font-style: normal;
    
    display: block;
    width: 100%;
    float: left;
    margin-left: 10px;
    text-align: left;

}
h5{
    line-height: 1.2;
    letter-spacing: 1.43px;
    color: #303030;
    margin-bottom: 5px;

    font-family: "Jost", sans-serif;
    font-size: 10px;
    font-weight: 500;
    font-stretch: 100%;
    font-style: normal;
    line-height: 0px;
    display: block;
    width: 100%;
    float: left;
    margin-left: 10px;
    text-align: left;
}
p{
    line-height: 1.2;
    letter-spacing: 1.43px;
    color: #303030;
    margin-bottom: 0px;
    padding-bottom: 0px;
    padding-top: 20px;
    font-family: "Jost", sans-serif;
    font-size: 13px;
    font-weight: 500;
    font-stretch: 100%;
    font-style: normal;
    
    display: block;
    width: 100%;
    float: left;
    margin-left: 10px;
    text-align: left;
}


.renkbox{
    background:#363257;
    width: 25px;
    height: 25px;
    border-radius: 150px;
    margin-right: 400px;
    margin-left: 20px;
    margin-top: 20px;

}
p.beden{
    line-height: 1.2;
    letter-spacing: 1.43px;
    color: #303030;
    margin-bottom: 0px;
    padding-bottom: 20px;
    padding-top: 20px;
    font-family: "Jost", sans-serif;
    font-size: 13px;
    font-weight: 500;
    font-stretch: 100%;
    font-style: normal;
    
    display: block;
    width: 100%;
    float: left;
    margin-left: 10px;
    text-align: left;
    padding-left: 5px;
}
.bedenno{
    line-height: 1.2;
    letter-spacing: 1.43px;
    color: #303030;
    margin-bottom: 20px;
    
    padding-top: 20px;
    font-family: "Jost", sans-serif;
    font-size: 15px;
    font-weight: 500;
    font-stretch: 100%;
    font-style:initial;
    
    display: block;
    width: 10%;
    float: left;
    margin-left: 10px;
    margin-right: 5px;
    text-align: left;
    padding-left: 5px;
}
.sepet{
    background-color: #101341;
    margin-top: 20px;
    margin-bottom: 20px;
    color: white;
    border-radius: 0px;
    width: 190px;
    height: 54;
    padding-left: 25px;
    padding-right: 0px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-right: 20px;
    margin-left: 10px;
    border: 25px;
    font-size: 13px;
    font-weight: 500;
    float: left;
}
.favori{
    margin-top: 20px;
    width: 103px;
    height:32px;
    float: left;
    font-size: 10px;
    font-weight: 500;
    text-decoration: underline;
}
.ozellik{
    margin-bottom: 10px;
    font-size: 16px;
    letter-spacing: 0px;
    margin-left: 4px;
    float: left;
    padding: 0px;
    

}
hr{
    width: 418px;
    size: 1px;
    margin-left: 0px;
    background-color: #eee;
    color:lightgrey;
}
.arti{
    text-align: right;
}
#scrollableContent {
   
   overflow: scroll;
}
#myDIV {
  
  
  position:absolute;
}
</style>