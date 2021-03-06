/*
 * @Date: 2020-01-29 22:48:25
 * @LastEditTime: 2020-01-31 10:10:49
 * @Author: 李芳芳
 * @Github: https://github.com/J-Fan-Fan/
 */
// 导入 Vue
import Vue from 'vue'
// 导入 根组件
import App from './App.vue'
// 导入 路由
import router from './router/index.js'
// 导入全局样式
import "./style/base.css";
// 导入 Element-ui
import ElementUI from 'element-ui';
// 导入 Element-ui的样式
import 'element-ui/lib/theme-chalk/index.css';
// 注册 Element-ui
Vue.use(ElementUI);
//是否显示生产提示
Vue.config.productionTip = false

// 创建Vue示例
new Vue({
        render: h => h(App),
        // 挂载到Vue实例上
        router
    })
    // 挂载到id为app的div上
    .$mount('#app')