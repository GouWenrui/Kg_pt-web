<template>
  <div>
<!--    <img  :class="isCollapse == false ? 'img1' : 'img2'" src="../assets/trbicon.png"/>-->
    <el-menu
      background-color="#80D1C8"
      text-color="#fff"
      active-text-color="#FFE78F"
      default-active="/Home"
      style="height: 100vh"
      :collapse="isCollapse"
      :collapse-transition="false"
      router
    >
      <el-menu-item index="/Home">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>

<!--      <el-menu-item :index="'/' + item.menuclick" v-for="(item, i) in menu" :key="i">-->
<!--        <i :class="item.menuicon"></i>-->
<!--        <span slot="title">{{item.menuname}}</span>-->
<!--      </el-menu-item>-->

    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Aside",
  data: function () {
    return{

    }
  },
  props:{
    isCollapse: Boolean
  },
  // computed:{
  //   'menu':{
  //     get(){
  //       return this.$store.state.menu
  //     }
  //   }
  // }
}
</script>

<style scoped>
.img1{
  width: 140px;
  height: 140px;
}
.img2{
  width: 64px;
  height: 64px;
}
</style>
