/**
 * Created by yanfeng-mac on 2018/12/4.
 */
var app = new Vue({
    el: "#app",
    data: {
        message: 'hello'
    }
});


var jsonData = [
    {text: "firstLine"},
    {text: "secondLine"},
    {text: "thirdLine"},
];

var demoObject = {
    FistName: "Tom",
    LastName: "Smith",
    Age: 29
}

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
        message: "hello vue.js"
    },
    methods: {
        reverseMessageFn: function () {
            this.message = this.message.split("").reverse().join("");
        }
    }
});

var app4 = new Vue({
    el: "#app4",
    data: {
        todo: "",
        todoList: [
            "demo1"
        ]
    },
    methods: {
        addToDoFn: function () {
            this.todoList.push(this.todo);
        },
        closeFn: function (index) {
            this.todoList.splice(index,1);
        }
    }
});