<template>
  <el-container style="height: 100%; border: 1px solid #eee">
    <el-aside :width="aside_width" style="background-color: rgb(238, 241, 246); height: 100%; margin-left: -1px">
      <Aside :isCollapse="isCollapse"></Aside>
    </el-aside>

    <el-container style="height: 100%">
      <el-header style="text-align: right; font-size: 12px; height: 100%; border-bottom: rgba(128,128,128,0.3) solid 1px">
        <Header @doCollapse="doCollapse" :collapseIcon="collapseIcon"></Header>
      </el-header>

      <el-main style="height: 100%">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aside from "./Aside";
import Header from "./Header";
export default {
  name: "Index",
  components: {Header, Aside},
  data: function () {
    return{
      isCollapse: false,
      aside_width: '140px',
      collapseIcon: 'el-icon-s-fold'
    }
  },
  methods:{
    doCollapse: function () {
      this.isCollapse = !this.isCollapse
      if(this.isCollapse){
        this.aside_width = '64px'
        this.collapseIcon = 'el-icon-s-unfold'
      } else {
        this.aside_width = '140px'
        this.collapseIcon = 'el-icon-s-fold'
      }
    }
  }

}
</script>

<style scoped>
.el-header {
  /*background-color: #B3C0D1;*/
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
