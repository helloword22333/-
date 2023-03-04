<template>
    <div class="bc">
  <div class="jz">
    <h1>我的爱好</h1>
    <h2 id="fitpx">MyHobby</h2>
        <p> 我不害怕计算机，我害怕没有计算机。</p>
        <p>I'm not afraid of computers. I'm afraid of not having computers.</p>
          <p>每个人应该寻找适合自己的东西，做自己喜欢做的事情;做自己擅长做的事情。</p>
        <p>Everyone should find the right thing for themselves, do what they like to do; Do what you're good at.</p>
        <p>达代者为人,递归者为神。</p>
        <p>lterator is human, recursion is god.</p>
        <p>我愿在计算机的道路上，越走越远。</p>
        <p>l would like to go further and further on the road of computer.</p>
  </div>
  <div class="tp">
    <img id="t1" src="./image/a1.jpg" alt="">
    <img id="t2" src="./image/b11.jpg" alt="">
  </div>
</div>
</template>

<script>
export default {
name:"about",
}
</script>

<style lang="css" scoped>
  .jz{
    text-align: center;
    color: #979793;
  }
  #fitpx{
    margin-bottom: 50px;
  }
  .jz h2{
    margin-top: 10px;
  }
  .jz p{
    margin-top: 10px;
  }
  .bc{
    background-color: #32353a;
  }
  .tp{
    position: relative;
    height: 310px;
  }
  .tp #t1{
    position: absolute;
   width: 42%;
   left: 7%;
   margin-top: 19px;
  }
  .tp #t2{
   width: 42%;
   right: 7%;
   position: absolute;
   margin-top: 19px;
  
  }
  /* .tp::after{
content:".";
display:block;
clear:both;
height:0;
overflow:hidden;
visibility:hidden;
} */
</style>

