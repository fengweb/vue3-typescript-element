import { createApp } from 'vue'
//引入element-plus插件与样式,配置element-plus国际化
import ElementPlus from 'element-plus'
//@ts-expect-error 忽略zh-ch.mjs的类型检查
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/dist/index.css'
//svg插件需要配置代码
import 'virtual:svg-icons-register'
import './style.css'
import App from '@/App.vue'
//引入自定义插件对象:注册整个项目全局组件
import gloalComponent from '@/components'

//引入全局样式
import '@/styles/index.scss'
//获取应用实例对象
const app = createApp(App)
//安装自定义插件
app.use(gloalComponent)
//安装element-plus插件
app.use(ElementPlus, {
  locale: zhCn, //element-plus国际化配置
})
app.mount('#app')
