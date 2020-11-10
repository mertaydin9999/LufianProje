<template>
    <div class="div1">
        <div class="row div2">
            
                <div class="row div3">
                    <i class="uyegiris ">UYE GIRISI</i>
                    
                </div>
<hr>
                        
                <div class="row div4">
                    
                    <div class="row div5">
                        <v-text-field  v-model="ad" class="row e mail textf" label="E-Mail" name="mail" ></v-text-field>
                                           
                        
                    </div> 

                    <div class="row div6">
                        <v-text-field v-model="sifre" class="row e mail textf" type="password" label="Sifre" name="sifre" ></v-text-field>
                    </div>      

                    
                        <div class="row div8">
                            <button @click="uyeOl" class="uyeol"> UYE OL       </button>
                            
                            <button  @click="girisYap" class="girisyap">
                                GIRIS YAP 
                            </button>
                            <br>
                        </div><button class="sifremiunuttum"> Sifremi unuttum </button>

                </div>
            

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            ad:"",
            sifre:""
        }
    },
    methods:{
        uyeOl: function(){
                alert("Uyelik formu sayfasina yonlendiriliyorsunuz!!")
        },
        girisYap: function(){
                alert("Giris yapiliyor...")
        }
    }
}
</script>

<style scoped>
.uyegiris{
    font-size: 17px;
    line-height:1.2;
    letter-spacing: 1.43px;
    color: #545454;
    

    font-family: "Jost", sans-serif;
    
    font-weight: 600;
    font-stretch: 100%;
    font-style:normal;
    
    display: block;
    width: 100%;
    float: left;
    letter-spacing: 0px;
    padding-left: 40px;
    padding-right: 10px;
    
    
}

.textf{
    font-size: 13px;
    
    
    color: #fff;
    font-family: "Jost", sans-serif;
    letter-spacing: 0px;
    font-weight: 400;
    
}
.uyeol{
    margin-right: 20px;
    text-align: center;
    background:#4d4d4d;
    color: white;
    padding-right: 120px;
    padding-left: 120px;
    padding-top: 10px;
    padding-bottom: 10px;

    font-size: 13px;
    
    
    color: #fff;
    font-family: "Jost", sans-serif;
    letter-spacing: 0px;
    font-weight: 400;
    
    
}
.girisyap{
    
    
    padding-right: 120px;
    padding-left: 120px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 5px;
    text-align: center;
    background-color: rgba(15, 15, 61, 0.973);
    color: white;

    font-size: 13px;
    
    
    color: #fff;
    font-family: "Jost", sans-serif;
    letter-spacing: 0px;
    font-weight: 400;
}
.sifremiunuttum{
    margin-top: 10px;
    margin-left: 410px;
    font-family: "Jost", sans-serif;
    letter-spacing: 0px;
    font-size: 13px;
    font-weight: 500;
    color: #4d4d4d;
    text-decoration: underline;
}
hr{
    width: 100%;
    
    size: 1;
    color: silver;
    margin-bottom: 5px;
}
.email{
    height: 30px;
    
    
}
.div1{
    width: 1335px;
    height: 261px;
    padding-left:343.75px ;
    padding-right: 343.75px;
    margin-left: -10px;
    margin-right: -10px;
    clear: both;
    display: block;
    margin-top: 100px;
    float: left;
}
.row{
    width: 627px;
}
.div2{
    
    height: 215px;
}
.div3{
    
    height: 35px;
    padding-left: 40px;
    padding-right: 10px;
}
.div4{
    padding-left: 30px;
    height: 215px;
}
.div5{
    
    height: 60px;
    
    margin-left: -50px;
    margin-right: -10px;
    
    
}
.div6{
    
    height: 60px;
    margin-left: -10px;
    margin-right: -10px;
    
    padding-right: 10px;
}

.div8{
    
    width: 627px;
    height: 30px;
    margin-top: 50px;
    
}

.row {
    margin-left: -10px;
    margin-right: -10px;
    
    display: block;
}
</style>