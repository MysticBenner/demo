<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
<!--    <HelloWorld/>-->
<!--&lt;!&ndash;    <SingleFileUpload/>&ndash;&gt;-->
    <el-container class="my-container">
      <el-header class="my-header">
        <span style="color: aliceblue;font-size: x-large">文件上传页面</span>
      </el-header>
      <el-container>
        <el-aside>
          <el-menu :default-active="defaultActive" style="height: 100%">
            <el-menu-item index="singleFileUpload" @click="redirectUrl('/singleFileUpload')">
              <i class="el-icon-document"></i>
              <span slot="title">单文件上传</span>
            </el-menu-item>
            <el-menu-item index="multiFileUpload" @click="redirectUrl('/multiFileUpload')">
              <i class="el-icon-document-copy"></i>
              <span slot="title">多文件上传</span>
            </el-menu-item>
            <el-menu-item index="bigFileUpload" @click="redirectUrl('/directoryUpload')">
              <i class="el-icon-folder"></i>
              <span slot="title">指定目录上传</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main class="my-main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
    data () {
        return {
            defaultActive: this.$route.name
        }
    },
    methods: {
        redirectUrl(val){
            this.$router.push(val);
        }
    }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
  }
  .my-container {
    margin: 0 auto;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .my-header {
    background-color: cadetblue;
    height: 20px;
    font-size: large;
    display: flex;
    justify-content:center;
    align-items:center;
  }
  .my-main {
    margin: 1em 1em;
  }
</style>
