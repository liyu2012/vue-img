<template>
<div class="wrap">

<span v-for="(item,index) in pixels" :style="{background:myrgb(index)}"
 class="output">

</span>
 
 

</div>

 
</template>

<script>

export default {
 props:{
   pixels:{
     type:Array
   }
  
 },
 methods:{
    myrgb(i){ 
    return 'rgb('+this.pixels[i].r+','+
    +this.pixels[i].g+','+
    +this.pixels[i].b+')';

  }
   }
   
 
}
</script>

<style scoped>
.wrap{
  width:100%;
  height:100%;
 
}
ul{
  display:block;
  margin:0;
  padding:0;
}
.output{
  width:10px;
  list-style:none;
  display:block;
  margin:0 1px 1px 0;
  padding:0;
  overflow:hidden;
  font-size:10px;
  float:left;
  line-height:0px;
  height:10px;
  color:white;
}
.br{

}

</style>
