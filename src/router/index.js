import Vue from 'vue'
import Router from 'vue-router'
import SingleFileUpload from '../components/SingleFileUpload'
import MultiFileUpload from '../components/MultiFileUpload'
import DirectoryUpload from '../components/DirectoryUpload'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/singleFileUpload',component:SingleFileUpload,name:'singleFileUpload'},
    {path:'/multiFileUpload',component:MultiFileUpload,name:'multiFileUpload'},
    {path:'/directoryUpload',component:DirectoryUpload,name:'directoryUpload'}
  ]
})
