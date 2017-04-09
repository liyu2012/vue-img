<template>
<div class="panel">
 <div class="img-wrap"> 
 <canvas width=500 height=500>
 </canvas>
 </div>
 <div class="output" :style="{width:500/pixelsNum*11+'px'}">
 <output-img  :pixels="mypixels">
 </output-img>
 </div>
</div>
</template>
<script>
import Output from './output'
export default {
  mounted(){
    //加载图片并绘制到canvas
    var  c=document.getElementsByTagName('canvas')[0];
    var data
    var ctx=c.getContext('2d')
    var img=new Image()
    img.src=require('../assets/13.jpg');
    img.onload=()=>{
      ctx.drawImage(img,0,0);
      //图片加载后得到每个像素颜色值rgb
     //获取图片像素以及每次采样的大小
     var w=c.width,h=c.height,pixelsNum=this.pixelsNum; 
     for(var y=0;y<c.height/pixelsNum;y++)
       for(var x=0;x<c.width/pixelsNum;x++)
        {
           data=ctx.getImageData(x*pixelsNum,y*pixelsNum,pixelsNum,pixelsNum).data
       
           for(var i=0;i<pixelsNum*pixelsNum*4;i+=4 )
       {  
         
          this.pixels.push({r:data[i],g:data[i+1],b:data[i+2]})
         

      }  
       data=null;
    //console.log('初次采样数组',this.pixels)
       var sumr=0,sumg=0,sumb=0;
       //console.log(this.pixels[10].r)
       for(var i=0;i<pixelsNum*pixelsNum;i++)
       {
         
         sumb+=this.pixels[i].b;
          sumg+=this.pixels[i].g;
          sumr+=this.pixels[i].r;
       }
     this.pixels=[];
     this.mypixels.push({
        r:Math.round(sumr/pixelsNum/pixelsNum),
        g:Math.round(sumg/pixelsNum/pixelsNum),
        b:Math.round(sumb/pixelsNum/pixelsNum)
      }) 

        }
    }
    

  } ,
  data(){
    return{
      num:[],
      pixelsNum:10,
      pixels:[],
      mypixels:[]
    }
  },
 components:{
outputImg:Output
 }, 
}
</script>

<style scoped>

.panel{
  width:100%;
  

}
.img-wrap{
 
  width:auto;
  height:auto;
}
 canvas{
  border:2px solid green;
}
.output{
 
  height:1000px;
  clear:both;
  
}
</style>
