var app1 = new Vue({
    el: "#app1",
    data: {
        message: "文本替换"
    }
})
var app2 = new Vue({
    el: "#app2",
    data: {
        content: "<a href='#'>这是一个链接</a>"
    }
})
var app3 = new Vue({
    el: "#app3",
    data: {
        food: "蛋糕"
    },
    methods: {
        doIt: function () {
            alert("你单击了这个按钮")
        },
        foodchange: function () {
            this.food += '好吃'
        }
    }
})
var app4 = new Vue({
    el: "#app4",
    data: {
        num: 1
    },
    methods: {
        sub: function () {
            if (this.num === 1) {
                alert("至少购买一件产品")
                return
            }
            this.num--
        },
        add: function () {
            if (this.num === 10) {
                alert("最多购买十件产品")
                return
            }
            this.num++
        }
    }
})
var app5 = new Vue({
    el: "#app5",
    data: {
        isShow: true,
        age: 19
    },
    methods: {
        change: function () {
            this.isShow = !this.isShow
        }
    }
})
var app6 = new Vue({
    el: "#app6",
    data: {
        imgSrc: "http://www.itheima.com/images/logo.png",
        isActive: false
    },
    methods: {
        change: function () {
            this.isActive = !this.isActive
        }
    }
})
var app7 = new Vue({
    el: "#app7",
    data: {
        srclist: ["image/ditu.jpg", "image/收款码.jpg", "http://www.itheima.com/images/logo.png"],
        index: 0,
    },
    methods: {
        sub: function () {
            this.index--;
        },
        add: function () {
            this.index++;
        }
    }
})
var app8 = new Vue({
    el: "#app8",
    data: {
        arr: ['a', 'b', 'c', 'd', 'e']
    }
})
var app9 = new Vue({
    el: "#app9",
    methods: {
        say: function () {
            alert("输入完毕")
        }
    }
})
var app10 = new Vue({
    el: "#app10",
    data: {
        message: "",
        list: ["读", "写", "听", "说"],
    },
    methods: {
        push: function () {
            if (this.message == "") {
                alert("不能添加空的记事本")
                return;
            }
            this.list.push(this.message)
            this.message = ""
        },
        remove: function (index) {
            this.list.splice(index, 1);
        },
        clear: function () {
            this.list = []
        }
    }

})
document.querySelector(".get").onclick = function () {
    axios.get("https://autumnfish.cn/api/joke/list?num=6").then(
        function (response) {
            console.log(response);
        },
        function (err) {
            console.log(err);
        }
    )
}
document.querySelector(".post").onclick = function () {
    axios.post("https://autumnfish.cn/api/user/reg", {username: "盐焗西兰花"}).then(
        function (response) {
            console.log(response);
        },
        function (err) {
            console.log(err);
        }
    )
}
var joke = new Vue({
    el: "#app11",
    data: {
        joke: "笑话"
    },
    methods: {
        getjoke: function () {
            var that = this
            axios.get("https://autumnfish.cn/api/joke").then(
                function (response) {

                    that.joke = response.data
                    console.log(response.data)
                }
            )
        }

    }

})
var app12 = new Vue({
    el: "#app12",
    data: {
        message: "",
        weatherList: []
    },
    methods: {
        search: function () {
            var that = this
            axios.get("http://wthrcdn.etouch.cn/weather_mini?city=" + this.message).then(
                function (response) {
                    that.weatherList = response.data.data.forecast
                }
            )
        },
        changeCity: function (city) {
            this.message = city
            this.search()
        }
    }
})