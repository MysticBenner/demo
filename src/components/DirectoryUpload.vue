<template>
  <div>
    <uploader
      ref="uploader"
      browse_button="browse_button"
      :url="server_config.url+'/File/'"
      :filters="{prevent_duplicates:true}"
      @inputUploader="inputUploader"></uploader>
    <el-input
      placeholder="请输入上传文件目录"
      v-model="input"
      clearable prefix-icon="el-icon-menu">
    </el-input>
    <br><br><h4>选择上传文件类型<el-tag type="warning">只允许上传以下文件类型</el-tag></h4><br>
    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
    <div style="margin: 50px 0;"></div>
    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
      <el-checkbox v-for="type in types" :label="type" :key="type">{{type}}</el-checkbox>
    </el-checkbox-group>
    <br><br>
    <el-button type="success" @click="up.start()">开始上传</el-button>
  </div>

</template>

<script>
    import Uploader from './Uploader'
    const Options = ['WORD', 'PDF', 'EXCEL', 'PPT', 'RTF'];
    export default {
        name: "DirectoryUpload",
        data() {
            return {
                input: '',
                checkAll: false,
                checkedCities: ['WORD'],
                types: Options,
                isIndeterminate: true,
                server_config: this.global.server_config,
            }
        },
        methods: {
            handleCheckAllChange(val) {
                this.checkedCities = val ? Options : [];
                this.isIndeterminate = false;
            },
            handleCheckedCitiesChange(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.types.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.types.length;
            },
            inputUploader(up) {
                this.up = up;
                this.files = up.files;
            }
        },
        components:{
            uploader: Uploader
        }
    }
</script>

<style scoped>

</style>
