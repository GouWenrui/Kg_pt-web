<template>
  <div style="">
<!--    <div>-->
<!--      <img class="homeImg" src="../assets/homeheader.png">-->
<!--    </div>-->
    <DateUtils></DateUtils>
    <div style="text-align: center;background-color: #80D1C8;height: 300px;padding: 0px;margin: 0px;">
      <h1 style="font-size: 50px;">{{'欢迎你，'+user.name+' !'}}</h1>
      <el-descriptions  title="个人中心" :column="3" size="40" border>
        <el-descriptions-item label="test" label-class-name="my-label" content-class-name="my-content">value</el-descriptions-item>
        <el-descriptions-item >
          <template slot="label">
            <i class="el-icon-s-custom"></i>
            账号
          </template>
          {{user.no}}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-mobile-phone"></i>
            电话
          </template>
          {{user.phone}}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-location-outline"></i>
            性别
          </template>
          <el-tag
            :type="user.sex === '1' ? 'primary' : 'danger'"
            disable-transitions><i :class="user.sex==1?'el-icon-male':'el-icon-female'"></i>{{user.sex==1?"男":"女"}}</el-tag>
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-tickets"></i>
            角色
          </template>
          <el-tag
            type="success"
            disable-transitions>{{user.roleId == 0? "教师" : "读者"}}</el-tag>

        </el-descriptions-item>
      </el-descriptions>


    </div>
  </div>
</template>

<script>
import DateUtils from "./DateUtils";
export default {
  name: "Home",
  components: {DateUtils},
  data() {

    return {
      user:{
        roleId: 0,
        sex: 1,
        name: 'xiaoming',
        phone: '13792235308',
        no: '123456'
      }
    }
  },
  computed:{

  },
  methods:{
    init(){
      // this.user = JSON.parse(sessionStorage.getItem('CurUser'))
    }
  },
  created(){
    this.init()
  }
}
</script>

