<template>
<div>
    <div class="div1 row mr-ml50">
        <div class="row div2" >
            <i class=" row uyegiris">UYE KAYIT/DUZENLEME  </i><br><hr>
  
        </div>
        
        <div class="div2 row">
            
            <div>
                
                <div class="">
                 <p class=" uyeBilgileri">Uyelik Bilgileri  </p>
                <div>
                    
                <v-text-field  v-model="ad" class="textbox e mail uyeBilgileri" label="Ad" name="labelAd"></v-text-field>
                </div>
            <div>
                <v-text-field  v-model="soyad" class="textbox e mail uyeBilgileri" label="Soyad" name="labelSoyad"></v-text-field>
            </div>  
        
                </div>
                
            </div>

        <div class="" >
            <p class=" uyeBilgileri "><br> Sifre Bilgileri  </p>
            <div>
                <v-text-field  v-model="sifre" class="textbox e mail uyeBilgileri" type="password" label="Sifre" name="labelSifre">{{sifre}}</v-text-field>
            </div>
            <div>
                <v-text-field  v-model="sifreYeniden" class="textbox e mail uyeBilgileri" type="password" label="Sifre yeniden" name=""></v-text-field>
            </div>
        </div>

        <div><br>
            
            <div><p class=" uyeBilgileri ">Iletisim Bilgileri  </p>
                <v-text-field  v-model="cepTel" class="textbox e mail uyeBilgileri" placeholder="orn: (536)xxx xx xx" label="Cep Telefonu" name="labelCep"></v-text-field>
            </div>
            <div>
                <v-text-field  v-model="email" class="textbox e mail uyeBilgileri" placeholder="mertaydin9999@hotmail.com" label="E-Mail" name="labelMail"></v-text-field>  
            </div>
        </div>
        
        <div  class="chckboxdiv checkbox"><br>
           <input type="checkbox" name="checkbox1"  id="">
                    <span class="chkbox">  Tarafınızdan gönderilecek bilgilendirme e-postalarını almak istiyorum. <br></span>
            <input type="checkbox" name="checkbox2"  id="">
                    <span class="chkbox"> Tarafınızdan gönderilecek bilgilendirme sms'lerini almak istiyorum. <br></span>
            <input type="checkbox" name="checkbox3"  id="">
                    <span class="chkbox">Üyelik sözleşmesini Okudum, Kabul Ediyorum.<br></span>
            <input type="checkbox" name="checkbox4"  id="">
                    <span class="chkbox">KVKK sözleşmesini Okudum, Kabul Ediyorum.<br><br><br></span>

          <button @click="kayitOl" type="submit" class="kayit" name="btnSubmit">KAYIT</button>

        </div>

       
      </div>
   
    </div>
    <table border="1" >
      <tr>
        
        Firmamız hiçbir şekilde e-mailinizi ve kişisel bilgilerinizi ticari amaç uğruna kullanmaz.                           
         
      </tr>
      
      </table>
      
    </div>
</template>

<script>
export default {
        data(){
            return{
                ad:"",
                soyad:"",
                sifre:"",
                email:"",
                cepTel:"",
                sifreYeniden:""

            }

                },
                methods:{
                    kayitOl:function(){
                        alert("Kayit Olunuyor...")
                    }
                }
    
}
</script>



<style scoped>
table{
  width: 600px;
  margin-left: 80px;
}

.textbox{
  width: 600px;
  height: 50px;
}

.chckboxdiv{
  width: 620px;
  margin-top: 30px;
}

.chkbox{

  font-size: 15px;
    line-height:0px;
    letter-spacing: 0px;
    color: #545454;
    

    font-family: "Jost", sans-serif;
    
    font-weight: 500;
    font-stretch: 100%;
    font-style:normal;
}

.row{
    width: 1345px;
    

}
.kayit{
   font-size: 17px;
    line-height:1.2;
    letter-spacing: 0px;
    color: #f0eaea;
    text-align: center;
    width: 500px;
    height: 40px;
    margin-top: 10px;
    padding-right: 300px;
    padding-left: 300px;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #1e1f44;
    font-family: "Jost", sans-serif;
    
    font-weight: 500;
    font-stretch: 100%;
    font-style:normal;
}

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
.uyeBilgileri{
    font-size: 13px;
    margin-top: 5px;
    padding-left: 0px;
    margin-right: 30px;
    font-weight: 900;
    color: #222121;
    font-family: "Jost", sans-serif;
    letter-spacing: 0px;
    margin-bottom: 10px;
    
    
}



hr{
    width: 1350px;
    
    size: 1;
    color: rgb(19, 17, 17);
    margin-bottom: 5px;
    margin-top: 5px;
}
.email{
    height: 30px;

}
.div1{

    
    display: block;
    margin-top: 0px;
    float: left;
    margin-bottom: 40px;
}
.mr-ml50{
  margin-left: 50px;
    margin-right: 50px;
}
.div2{
    float: left;
    margin-left: 30px;
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





</style>
