/**
 * Created by yanfeng-mac on 2017/5/24.
 */
// import Vue from 'vue';
// import VueRouter from 'vue-router'
// Vue.use(VueRouter);

var Home = Vue.extend({
    template: '<h1>This is the home page</h1>',
    route: {
        //在组建创建之前被调用，验证组件是否可被创建
        canActivate: function (transition) {
            console.log('canActivate');
            //transition.to要切换到路径的路由对象
            console.log(transition.to);
            //transition.from当前路径的路由对象
            console.log(transition.from);
            transition.next();
        },
        //在组件创建且将要被加载时调用
        activate: function (transition) {
            console.log('active');
            transition.next();
        },
        //在activate之后被调用，用于加载和设置当前组件的数据
        data: function (transition) {
            console.log('data');
            transition.next();
        },
        //在组件移除之前被调用，验证是否可被移除
        canDeactivate: function (transition) {
            console.log('canDeactivate');
            transition.next();
        },
        //在组件移除时被调用
        deactivate: function (transition) {
            console.log('deactivate');
            transition.next();
        },
        //决定组件是否可被重用
        canReuse: function (tansition) {
            console.log('canReuse');
            return true;
        }
    }
});

//创建根组件
var App = Vue.extend({

});

//创建biz组件
var Biz = Vue.extend({
    template: '#biz'
});

//创建list组件
var list = Vue.extend({
    template: '<h1>This is the No.{{$route.params.page}} page</h1>',
    route: {
        //在组建创建之前被调用，验证组件是否可被创建
        canActivate: function (transition) {
            console.log('canActivate');
            transition.next();

        },
        //在组件创建且将要被加载时调用
        activate: function (transition) {
            console.log('active');
            transition.next();
        },
        //在activate之后被调用，用于加载和设置当前组件的数据
        data: function (transition) {
            console.log('data');
            transition.next();
        },
        //在组件移除之前被调用，验证是否可被移除
        canDeactivate: function (transition) {
            console.log('canDeactivate');
            transition.next();
        },
        //在组件移除时被调用
        deactivate: function (transition) {
            console.log('deactivate');
            transition.next();
        },
        //决定组件是否可被重用
        canReuse: function (tansition) {
            console.log('canReuse');
            return true;
        }
    }
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
            },
            '/list/:page': {
                component: list,
                name: 'list'
            }
        }
    }
});

router.start(App,'#app');