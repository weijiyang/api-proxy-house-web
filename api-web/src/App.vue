<template>
  <div id="app">
    <el-container>
      <el-aside width="220px" class="appAside">
        <api-aside></api-aside>
      </el-aside>
      <el-container>
        <el-header class="appHead">
          <api-header></api-header>
        </el-header>
        <el-main class="appMain">
          <router-view></router-view>
        </el-main>
        <el-footer>
          <api-footer></api-footer>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<style>
#app {
  background: rgb(238, 245, 247)
}
.appAside {
  position: fixed;
  top: 80px;
  left: 0;
  overflow-y: auto;
  height: 100%;
  /* border-right: solid 1px #00142a; */
  /* box-shadow: 2px 0 6px rgba(0,21,41,.35); */
  /* background: #00142a; */
}
.appHead {
  position:fixed;
  width:100%;
  top: 0;
  left: 0;
  z-index: 1001;
  background: #fff;
  border-bottom: 1px solid #e6e6e6;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
}
.appMain {
  height: 100%;
  margin:80px 0 0 240px;
  box-shadow: 0 0 5px #eee;
  padding: 40px;
}
</style>

<script>
import apiHeader from '@/components/Header'
import apiAside from '@/components/Aside'
import apiFooter from '@/components/Footer'
export default {
  name: 'app',
  components: {
    apiHeader, apiAside, apiFooter
  }
}
</script>
