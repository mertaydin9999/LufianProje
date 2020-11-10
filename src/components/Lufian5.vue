<template>
  <div class="div1">
      <div> 
   
      </div>
      <v-content > 
        <img class="mt50 foto" max-height="36"  max-width="130"  src="https://www.lufian.com/Data/EditorFiles/lufian/logo.svg"> 
                
          
  <v-tabs class="ml200 words" height="60"> 
    
    <v-tab @click="show = !show" class="mt20" v-for="tab in bigTab" :key="tab" > 
        {{ tab }}
      </v-tab>



      <img class="mt50 ml1000"   max-height="100" max-width="14" src="https://www.lufian.com/Data/EditorFiles/lufian/lang/tr.png">
      <a href="https://www.lufian.com/magazalarimiz"  class="mt50 ml1000 yazilar"  max-height="14" max-width="14">MAGAZALAR</a> <p class="mt50 ml1000 yazilar">|</p>
      <a  class="mt50 ml1000 yazilar"  max-height="14" max-width="14">ARA</a> <p class="mt50 ml1000 yazilar">|</p>
      <a  class="mt50 ml1000 yazilar"  max-height="14" max-width="14">HESAP</a> <p class="mt50 ml1000 yazilar"> |</p>
      <a href="https://www.lufian.com/sepet" class="mt50 ml1000 yazilar"  max-height="14" max-width="14">SEPET</a>
  </v-tabs>
      
  </v-content>
  <div v-if="show" class="div2"  style="height:300px;" width="1000px"> <br><br>
    <div class="baslik"><b> KATEGORILER</b>  <b class="popi">POPULER KATEGORILER</b><br>
      
        <button  class="kat">{{kategoriler[0]}}</button>
        <button class="kat ayri">{{kategoriler[1]}}</button><button class="kat pop">MONT</button><br>
        <button class="kat">{{kategoriler[2]}}</button>
        <button class="kat ayri">{{kategoriler[3]}}</button><button class="kat pop1">KABAN</button><br>
        <button class="kat">{{kategoriler[4]}}</button>
        </div> 
        
      

  </div>
  
  </div>
</template>

<script>
export default {
  data(){
    return{
      bigTab:['Dış Giyim','Üst Giyim','Alt Giyim','Ayakkabı','Aksesuar','Kadın'],
      kategoriler :['Mont','Kaban','Palto','Deri Dış Giyim','Tekno Yelek'],
      show:false

    }
  }
  
}
</script>



<style scoped>
.mt20{
  margin-top: 10px;
}

.yazilar{
  font-size: 10px;
    line-height:10px;
    letter-spacing: 0px;
    color: #2c2b2b;
    

    font-family: "Jost", sans-serif;
    
    font-weight: 500;
    font-stretch: 100%;
    font-style:normal;
    margin-left: 10px;
}

.ml1000{
  margin-left: 1500px;
}
.ml200{
    margin-left: 200px;
}
.mt50{
    
    float: left;
    margin-left: 20px;
    margin-top: 20px;
    
}
.words{
    font-size: 10px;
    line-height:1.2px;
    letter-spacing: 1.43px;
    color: #080808;
    

    font-family: "Jost", sans-serif;
    
    font-weight: 900;
    font-stretch: 100%;
    font-style:normal;
}
.div1{
  width: 1425px;
  height: 150px;
}

.div2{
  background-color: rgb(245, 245, 245);
  padding-left: 100px;

}



.kat{
    font-size: 20px;
    line-height:10px;
    letter-spacing: 0px;
    color: #2c2b2b;
    margin-top: 5px;
    

    font-family: "Jost", sans-serif;
    
    font-weight: 300;
    font-stretch: 100%;
    font-style:normal;
    margin-left: 20px;
    
}
.baslik{
  font-size: 20px;
    line-height:50px;
    letter-spacing: 0px;
    color: #2c2b2b;
    margin-top: 0px;
    

    font-family: "Jost", sans-serif;
    
    font-weight: 300;
    font-stretch: 100%;
    font-style:normal;
    margin-left: 10px;
}
.ayri{
  margin-left: 200px;
}
.popi{
  margin-left: 400px;
}
.pop{
  margin-left: 250PX;
}
.pop1{
  margin-left: 180px;
}
.fot{
  margin-top: 20px;
  margin-left: 1000px;
}

</style>


