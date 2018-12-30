<template>
  <div class="aside">
    <el-button round>添加仓库</el-button>
    <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" :unique-opened="true" @select="handleSelect">
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-plus icon" style="margin-right:10px;"></i>
          <span>sweb</span>
        </template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      </el-menu>
  </div>
</template>
<style lang="scss">
.aside{
  padding-left: 20px;
  .el-menu {
      border-right: 0px;
  }
  .el-submenu__title{
    text-align: left;
    border-radius: 28px;
    transition: all .35s ease;
  }
  .icon {
    color: #67c23a;
    font-weight: bold;
  }
  .is-opened>.el-submenu__title{
    background: #5485f7;
    color: #fff;
  }
}
</style>

<script>
export default {
    name: 'Aside',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {}
    }
}
</script>
