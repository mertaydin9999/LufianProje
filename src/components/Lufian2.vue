<template>


<div>
		
	<h4 class="margin">Ürün Sepetinize Eklendi.</h4>

	<table class="padding" border="1px solid gray" width="100%">
		<thead>
		<tr>
			<th>ÜRÜN</th>
			<th>ÜRÜN ADI</th>
			<th>MİKTAR</th>
			<th>BİRİM FİYAT</th>
			<th>TOPLAM TUTAR</th>
			<th>SİL</th>
		</tr>
		</thead>

		<tbody>
		<tr>
			<td >
					<img v-if="show" width="80" :src="urunFoto">	</td>
			<td > <p v-if="show"> {{ urunAd }}  {{ urunBeden }}</p></td>
			<td>
				<button  v-if="urunMiktari > 1" v-on:click="urunMiktari--"> - </button>
				<a v-if="show" class="pMiktar">{{ urunMiktari }}</a>
                
				<button  v-on:click="urunMiktari++"> + </button>
			</td>
			<td v-if="show" > {{ urunBFiyat }} TL</td>
			<td><p v-if="show"> {{ topTutar() }} TL</p> </td>
			<td>
				<button  @click="show= !show" >x</button>
			</td>
		</tr>
		</tbody>


	</table> 

		<p class="float-right font">Sepet Toplam: {{topTutar()}}  TL</p>
		<br><br>
        
        
        <p>
		<button class="btnleft font girisyap" >ALIŞVERİŞE DEVAM</button>
		<button class="btnright font girisyap">SEPETE GİT</button>
		</p>

</div>

		

</template>





<script>
export default {
    data(){
        return{
            urunAd: "Nodo Spor Blazer Ceket Slim fit Lacivert Lacivert",
            urunFoto:"https://www.lufian.com/nodo-spor-blazer-ceket-slim-fit-lacivert-ceket-lufian-76962-36-K.jpg",
            urunBFiyat:1299,
            sepetToplam:1299,
            toplamTutar:1299,
            urunBeden:46,
            urunMiktari:1,
            show:true

        }
    },
    methods:{
        topTutar:function () {
            return this.urunMiktari * this.urunBFiyat
                
        
        },
		
        
        }
    
   
    
    
    
}
</script>

<style scope>
	

	.float-right{
		float:right;
	}

	td{
		height: auto;
		
	}

	table{
		font-family: 'Jost', sans-serif;
		border-spacing: 0px;
        
	}
    .font{
        font-family: 'Jost', sans-serif;
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

	div{
		margin-top: 15px;
	}
	button{
		padding: 5px;

	}
	.btnright{
		float: right;
		
        
	}
	.btnleft{
		float: left;
		background-color: rgba(86, 86, 88, 0.973);
	}
    .pMiktar{
        padding: 5px;
        margin-left: 5px;
        margin-right: 5px;
    }

</style>