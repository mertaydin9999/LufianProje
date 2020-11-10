<template>
<v-app>
  <v-content>

  <v-carousel>
    <v-carousel-item  :href="ref"
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      
        ></v-carousel-item>
      </v-carousel>
  </v-content>
 </v-app>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: '//www.lufian.com/Data/EditorFiles/banner/banner4.jpeg',
          },
          {
            src: '//www.lufian.com/Data/EditorFiles/banner/Banner1.jpeg',
          },
          {
            src: '//www.lufian.com/Data/EditorFiles/banner/banner2.jpeg',
          },
          {
            src: '//www.lufian.com/Data/EditorFiles/banner/banner3.jpeg',
          },
        ],

        ref:"https://www.lufian.com/tum-urunler"
      }
    },
      


  }
</script>

<style scoped>

</style>