<template>
  <div style="display: flex; line-height: 60px; font-size: 20px;">
    <div style="cursor: pointer">
      <i :class="collapseIcon" @click="collapse"></i>
    </div>
    <div style="flex: 1; text-align: center; font-size: 30px">
      <span class="title">人类基因(based GO-Database)知识图谱可视化和预训练系统</span>
    </div>
    <el-dropdown>
      <span>
        user.name<i class="el-icon-arrow-down" style="margin-left: 5px"></i>
      </span>

      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="toUser">个人中心</el-dropdown-item>
        <el-dropdown-item divided @click.native="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return{
      // user: JSON.parse(sessionStorage.getItem('CurUser'))
    }
  },
  props:{
    collapseIcon: String
  },
  methods:{
    toUser: function () {
      this.$router.push('/Home')
    },
    logout: function () {
      this.$confirm('您确定退出登录吗？', '提示', {
        confirmButtonText: '确认',
        type: 'warning',
        center: 'true'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '退出登录成功'
        });
        this.$router.push('/')
        // sessionStorage.clear()
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消退出登录'
        })
      })

    },
    collapse: function () {
      this.$emit("doCollapse") // 调用父组件
    }
  },
  created() {
    this.$router.push('/Home')  //登录跳转到个人中心
  }
}
</script>

<style scoped>
.title{
  font-family:"楷体";
  color: #80D1C8;
  font-weight: 700;
}
</style>

