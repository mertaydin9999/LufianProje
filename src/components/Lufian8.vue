<template>
   <div class="gnldiv"> 

       <div>

        <div class="gallery">
            <a :href="link.benzer1" >
                <img  :src="foto.src1" >
            </a>
                <div class="desc">{{aciklama.acik1}}</div><a href="#" class="previous round">&#8249;</a>
        </div>

        <div class="gallery">
            <a :href="link.benzer2" >
                <img  :src="foto.src2" >
            </a>
            <div class="desc">{{aciklama.acik2}}</div>
       </div>

        <div class="gallery">
                    <a :href="link.benzer3" >
                        <img  :src="foto.src3" >
                    </a>
                <div class="desc">{{aciklama.acik3}}

                </div>
        </div>

        <div class="gallery">
            <a :href="link.benzer4">
                <img  :src="foto.src4"  >
            </a>
            <div class="desc">{{aciklama.acik4}}
            </div>
            
                
        </div><a  href="#" class="next round hrr">&#8250;</a>

        </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            aciklama:{
                acik1:"Spey Spor Gömlek Slim Fit Yeşil",
                acik2:"Kinross Spor Gömlek Comfort Slim Fit Mavi",
                acik3:"Agento Smart Gömlek Slim Fit Mavi",
                acik4:"Andrews Smart Gömlek Slim Fit İndigo"
            },

            link:{
                benzer1:"https://www.lufian.com/spey-spor-gomlek-slim-fit-yesil",
                benzer2:"https://www.lufian.com/kinross-spor-gomlek-comfort-slim-fit-mavi",
                benzer3:"https://www.lufian.com/agento-smart-gomlek-slim-fit-mavi",
                benzer4:"https://www.lufian.com/andrews-smart-gomlek-slim-fit-indigo"
            },
            foto:{
                src1:"https://www.lufian.com/spey-spor-gomlek-slim-fit-yesil-gomlek-lufian-69181-26-K.jpg",
                src2:"https://www.lufian.com/kinross-spor-gomlek-comfort-slim-fit-mavi-gomlek-lufian-69155-26-K.jpg",
                src3:"https://www.lufian.com/agento-smart-gomlek-slim-fit-mavi-gomlek-lufian-72168-81-K.jpg",
                src4:"https://www.lufian.com/andrews-smart-gomlek-slim-fit-indigo-gomlek-lufian-72446-87-K.jpg"
            }
            
        }
    }
}
</script>


<style scoped>
.gnldiv{
    width: 1350px;
    padding-left: 50px;
}

div.gallery {
  margin: 5px;
  
  float: left;
  width: 308px;
  height: 463px;
}



div.gallery img {
  width: 100%;
  height: auto;
  
}

div.desc {
  padding: 15px;
  text-align: center;
    font-size: 15px;
    font-family: "Jost", sans-serif;
    
    font-weight: 400;
}
.previous {
  background-color: #232423;
  color: rgb(172, 172, 172);
  
}

.next {
  background-color: #232423;
  color: rgb(172, 172, 172);
}
a {
  text-decoration: none;
  display: inline-block;
  padding: 8px 16px;
}
.hrr{
    text-align: right;
    float: right;
}
</style>
