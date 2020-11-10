<template>
    <div class="bg-img ">
  <form  class="container ">
    
    <div   class="content ">
                <h1 class="hzstnl">HIZLI SATIN AL</h1>
                <br><br><p class="bedenno u">{{ urunBeden }}</p><br>
                 <button class=" renkbox "></button>
                <br><br>
                 <button @click="urunBeden=bedenNo[0]" class="bedenno">{{bedenNo[0]}}</button> 
                 <button @click="urunBeden=bedenNo[1]" class="bedenno">{{bedenNo[1]}}</button>  
                 <button @click="urunBeden=bedenNo[2]" class="bedenno">{{bedenNo[2]}}</button>    
                 <button @click="urunBeden=bedenNo[3]" class="bedenno">{{bedenNo[3]}}</button> 
                 <button @click="urunBeden=bedenNo[4]" class="bedenno">{{bedenNo[4]}}</button>  
                 <button @click="urunBeden=bedenNo[5]" class="bedenno">{{bedenNo[5]}}</button> 
                
               <a :href="sepetEkle"> <p  class="sepet">Sepete Ekle</p></a><br><br><br>
                <p class="urunadi">{{urunAdi}} <br><br>{{urunFiyati}} </p><br>
                
    </div>
    
  </form>
       
</div>

</template>

<script>
export default {
    data(){
        return{
            urunAdi:"Tacco Smart Chino Pantolon Slim Fit Lacivert",
            urunFiyati:649.99 + "TL",
            bedenNo:[46,48,50,52,54,56],
            sepetEkle:"https://www.lufian.com/tacco-smart-chino-pantolon-slim-fit-lacivert",
            urunBeden:46


        }
    }
}
</script>


<style scoped>


.urunadi{
    line-height: 1.2;
    letter-spacing: 1.43px;
    color: #303030;
    font-family: "Jost", sans-serif;
    font-size: 17px;
    font-weight: 500;
    font-stretch: 100%;
    font-style:initial;
    margin-top: 20px;
}


.bg-img {
  
  background-image: url("https://www.lufian.com/tacco-smart-chino-pantolon-slim-fit-lacivert-chino-pantolon-lufian-76912-36-K.jpg");

  
  height: 517px;
  width: 345px;
    margin-top: 50px;
    margin-left: 100px;
  
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.bedenno{
    line-height: 1.2;
    letter-spacing: 1.43px;
    color: #303030;
    margin-bottom: 40px;
    
    padding-top: 20px;
    font-family: "Jost", sans-serif;
    font-size: 20px;
    font-weight: 500;
    font-stretch: 100%;
    font-style:initial;
    
    display: block;
    width: 10%;
    float: left;
    margin-left: 5px;
    margin-right: 5px;
    text-align: left;
    padding-left: 5px;
}
.sepet{
    font-family: "Jost", sans-serif;
    font-size: 15px;
    font-weight: 400;
    font-stretch: 100%;
    font-style:initial;
    line-height: 1.2;
    letter-spacing: 0px;
    color: #303030;
    padding-left: 5px;
    text-decoration: underline;
    text-align: center;
}
.hzstnl{
    font-family: "Jost", sans-serif;
    font-size: 15px;
    font-weight: 300;
    font-stretch: 100%;
    font-style:initial;
    line-height: 1.2;
    letter-spacing: 1.43px;
    color: #303030;
    padding-left: 5px;
    text-align: center;
}
.content {
  position: absolute; 
  bottom: 30px; 
  background: rgb(0, 0, 0); 
  background: rgba(255, 255, 255, 0.8); 
  color: #f1f1f1; 
  width: 80%; 
  padding: 20px;
  margin-left: 20px;
  height: 300px;
}
.renkbox{
    background:#363257;
    width: 25px;
    height:25px;
    border-radius: 150px;
    margin-right: 400px;
    margin-left: 100px;
}

.hover {
  background-position: -80px 0;
}

.hide {
  display: none;
}

.myDIV:hover + .hide {
  display: inline;
  color: red;
}
</style>