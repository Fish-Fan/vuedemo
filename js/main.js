/**
 * Created by yanfeng-mac on 2017/5/7.
 */
var jsonData = [
    {text: "first line"},
    {text: "second line"},
    {text: "third line"}
];

var demoObject = {
    FistName: "Tom",
    LastName: "Smith",
    Age: 29
}

var app = new Vue({
    el: "#app",
    data: {
        message: 'hello'
    }
});

var app2 = new Vue({
    el: "#app2",
    data: {
        todos: jsonData,
        object: demoObject
    }
});

var app3 = new Vue({
    el: "#app3",
    data: {
        message: "Hello vue.js",
        // css: "bg-info"
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
});

var app4 = new Vue({
    el: "#app4",
    data: {
        newToDo: "",
        todos: [
            {text: "add some todo"}
        ]
    },
    methods: {
        addToDo: function () {
            //trim()消除空格
            var text = this.newToDo.trim();
            if(text) {
                this.todos.push({text: text});
                this.newToDo = ""
            }
        },
        removeToDo: function (index) {
            //splice(index,1)从哪一项开始删除，删除的项数为1
            this.todos.splice(index,1);
        }
    }
});

var app5 = new Vue({
    el: "#app5",
    data: {
        greeting: false
    }
});

//vue代理对象
var demoData = {a : 1};
var vm = new Vue({
    el: "#app6",
    data: demoData
});

console.log("vm.a === demoData.a " + (vm.a == demoData.a));
vm.a = 2;
console.log("demoData->" + demoData.a);
demoData.a = 3;
console.log("vm.data->" + vm.a)
//使用$访问原始数据对象
console.log("vm.$data === demoData " + (vm.$data === demoData));
console.log("vm.el === document.getElementById('app6') " + (vm.$el === document.getElementById("app6")));
//监听vm.a的变化
vm.$watch("a",function (newValue, oldValue) {
    console.log(oldValue + " has been changed " + newValue);
});

var app7 = new Vue({
    el: "#app7",
    data: {
        message: "example",
        css: "bg-danger"
    }
});

// Vue.partial("my-partial","<p>This is a partial</p>");

var app8 = new Vue({
    el: "#app8",
    data: {
        a: 1
    },
    //计算属性,相当于getter
    computed: {
        b: function () {
            return this.a + 1;
        }
    }
});

var app9 = new Vue({
    el: "#app9",
    data: {
        classObject: {
            "text-danger": true,
            "text-info": false
        },
        styleObject: {
            "color": 'blue',
            "font-size": '24px'
        }
    }
});

var app10 = new Vue({
    el: "#app10",
    data: {
        name: "Vue.js"
    },
    methods: {
        greet: function (event) {
            alert("Hello," + this.name);
            alert(event.target.tagName);
        },
        say : function (msg) {
            alert(msg);
        },
        said: function (msg, event) {
            //阻止默认事件的响应
            event.preventDefault();

        },
        submit: function () {
            alert("文本已提交");
        }
    }
});

var app11 = new Vue({
    el: "#app11",
    data: {
        message: "",
        checked: false,
        checkedNames: [],
        picked: "",
        select: "",
        select1: "A",
        options: [
            {text: "one",value: "A"},
            {text: "two",value: "B"},
            {text: "three",value: "C"}
        ],
        toggle: "Bvalue",
        a: "Avalue",
        b: "Bvalue",
        lazy: ""
    }
});

var app12 = new Vue({
    el: "#app12",
    data: {
        show: true,
        show1: true,
        transitionName: 'expand',
        ok: false,
        show2: true,
        names: [
            { msg: 'Bruce Lee' },
            { msg: 'Jackie Chan' },
            { msg: 'Chuck Norris' },
            { msg: 'Jet Li' },
            { msg: 'Kung Fury' }
        ],
        name: ""
    },
    methods: {
        toggle: function () {
            this.show = !this.show;
        },
        toggle1: function () {
            this.show1 = !this.show1;
        },
        toggle2: function () {
            this.ok = !this.ok;
        },
        toggle3: function () {
            this.show2 = !this.show2;
        }
    }
});
//vue transition钩子函数
Vue.transition('expand',{
    beforeEnter: function (el) {
        el.textContent = 'beforeEnter';
    },
    enter: function (el) {
        el.textContent = 'enter';
    },
    afterEnter: function (el) {
        el.textContent = 'afterEnter';
    },
    enterCancelled: function (el) {
        //handle something
    },
    beforeLeave: function (el) {
        el.textContent = 'beforeLeave';
    },
    leave: function (el) {
        el.textContent = 'leave';
    },
    afterLeave: function (el) {
        el.textContent = 'afterLeave';
    },
    leaveCancelled: function (el) {
        //handle something
    }
});

Vue.transition('bounce',{
    enterClass: 'bounceInLeft',
    leaveClass: 'bounceOutRight'
});

// var myComponent = Vue.extend({
//     template: '<div>This is a template</div>',
// });
//
// var child = Vue.extend({
//     template: '<p>This is child template</p>'
// });
//
// //全局注册组件
// Vue.component('my-component',myComponent);
//
// var app13 = new Vue({
//     el: "#app13",
//     //局部注册组件
//     components: {
//         'child-component': child
//     }
// });

//注册语法糖
Vue.component('my-component',{
    template: '<div>This is a template</div>'
});

var app13 = new Vue({
    el: "#app13",
    //局部注册组件
    components: {
        'child-component': {
            template: '<p>This is child template</p>'
        }
    }
});

var childComp = Vue.extend({
    template: '<p>This is child-component!!!</p>'
});

var parentComp = Vue.extend({
    template: '<div>I\' a parent div!!!<child-comp></child-comp></child-comp></div>',
    components: {
        'child-comp': childComp
    }
});

var app14 = new Vue({
    el: "#app14",
    data: {
        name: 'Jack',
        age: '29'
    },
    components: {
        'parent-comp': parentComp,
        'my-component1': {
            template: '#myComponent1'
        },
        'my-component2': {
            template: '#myComponent2'
        },
        'my-component3': {
            template: '#myComponent3',
            props: ['myName','myAge']
        }
    }

});

var app15 = new Vue({
    el: '#app15',
    data: {
        name: 'Tom',
        age: 18
    },
    components: {
        'my-component4': {
            template: '#myComponent4',
            props: ['myName','myAge']
        }
    }
});

var app16 = new Vue({
    el: '#app16',
    data: {
        name: 'Tom',
        age: 18
    },
    components: {
        'my-component5': {
            template: '#myComponent5',
            props: ['myName','myAge']
        }
    }
});

var app17 = new Vue({
    el: '#app17',
    data: {
        name: 'Tom',
        age: 20
    },
    components: {
        'my-component6': {
            template: '#myComponent6',
            props: ['myName','myAge']
        }
    }
});

Vue.component('simple-grid',{
    template: '#grid',
    props: {
        data: Array,
        columns: Array,
        filterKey: String
    }
});

var app18 = new Vue({
    el: '#app18',
    data: {
        searchQuery: '',
        gridColumns: ['name','age','sex'],
        gridData: [{
            name: 'Jack',
            age: '20',
            sex: '男'
        },{
            name: 'Tom',
            age: '19',
            sex: '男'
        },{
            name: 'Jenny',
            age: '21',
            sex: '女'
        }]

    }

});

Vue.component('child',{
    template: '#child-template',
    data: function () {
        return {msg: 'hello'}
    },
    methods: {
        notify: function () {
            if(this.msg.trim()) {
                this.$dispatch('child-msg',this.msg);
                this.msg = '';
            }
        }
    }
});

var app19 = new Vue({
    el: '#events-example',
    data: {
        messages: []
    },
    events: {
        'child-msg': function (msg) {
            this.messages.push(msg);
        }
    }
});

var app20 = new Vue({
    el: '#app20',
    components: {
        'my-component7': {
            template: '#myComponent7'
        },
        'my-component8': {
            template: '#myComponent8'
        }
    }
});

var app21 = new Vue({
    el: '#app21',
    data: {
        currentView: 'active-template2'
    },
    components: {
        'active-template1': {
            template: '#activeTemplate1'
        },
        'active-template2': {
            template: '#activeTemplate2'
        },
        'active-template3': {
            template: '#activeTemplate3'
        }
    }

});

