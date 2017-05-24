/**
 * Created by yanfeng-mac on 2017/5/24.
 */
// import Vue from 'vue';
// import VueRouter from 'vue-router'
// Vue.use(VueRouter);

var Home = Vue.extend({
    template: '<h1>This is the home page</h1>'
});

//创建根组件
var App = Vue.extend({

});

//创建biz组件
var Biz = Vue.extend({
    template: '#biz'
});

//创建路由器组件
var router = new VueRouter();

//通过路由器实例定义路由规则（需要在启动应用前定义好）
//每条路由会映射到一个组件。这个值可以是由Vue.extend创建的组件构造函数(如Home)
//也可以直接使用组件选项对象(如'/list'中的component对应的值)

router.map({
    '/home': {
        component: Home
    },
    '/biz': {
        component: Biz,
        subRoutes: {
            '/list': {
                component: {
                    template: '<h1>This is the list page</h1>'
                }
            },
            '/detail': {
                component: {
                    template: '<h1>This is the detail page</h1>'
                }
            }
        }
    }
});

router.start(App,'#app');