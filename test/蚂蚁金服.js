/**
 * 题目一
 *
 * 业务需求中，经常有 只需要最后一次请求的结果（比如搜索）编写一个高阶函数，
 传递旧请求方法（执行后返回 promise），返回一个新方法。
 * 连续触发时，若上一次 promise 执行未结束则直接废弃，
 只有最后一次 promise 会触发then/reject。
 */

/**
* 只有最后一次promise会then与reject
* @param {function} promiseFunction
* promiseFunction 示例： () => fetch('data')
*/
function lastPromise(promiseFunction) {
  let count = 0;
  return function () {
    count++;
    return new Promise((resolve, reject) => {
      const temp = count;
      return promiseFunction.apply(promiseFunction, arguments)
        .then((data) => {
          if（count === curIndex) {

      }

    })
  })
}
  //todo
}


// 示例
let count = 1;
let promiseFunction = () =>
  new Promise(rs =>
    window.setTimeout(() => {
      rs(count++);
    })
  );

let lastFn = lastPromise(promiseFunction);

lastFn().then(console.log); // 无输出
lastFn().then(console.log); // 无输出
lastFn().then(console.log); // 3





/**
 * 题目二
 *
 *
 */

var tpl = template('<p>hey there {{ name }}</p>');
var div = document.createElement('div');
div.innerHTML = tpl({ name: 'Neo' });
document.body.appendChild(div);

function template(str) {
  return function (config) {
    for (let key in config) {
      str = str.replace(new RegExp(`{{\\W*${key}\\W*}}`, 'g'), config[key])
    }
    return str;
  }
}


< !DOCTYPE html >
  <html lang="en">
    <head>
      <title>DOM-JS数据绑定方案</title>
    </head>
    <body>
      <div id="app">
        <h1 v-text="title"></h1>
        <p>当前时间：<span v-text="time"></span></p>
      </div>
      <script>
        function ViewBind({el = 'body', data = {}} = {}) {
          // TODO，请在此书写代码
        }

    /**
     * step: 1
     * 调用方式类似 Vue 初始化，
     * el 代表根元素，data 中的字段会自动和 DOM 中 v-text 属性对应元素内容绑定
     **/
    const app = new ViewBind({
          el: '#app',
      data: {
          title: '这是标题',
        time: +new Date()
      }
    })
    /**
     * step: 2
     * 初始化之后页面#app显示效果如下：
      <div id="app">
          <h1 v-text="title">这是标题</h1>
          <p>当前时间戳：<span v-text="time">1522070099060</span></p>
        </div>
     * 类似于 Vue，初始化之后 app 内部有一个 data 对象，
     * 通过修改 data 对象的属性来间接修改 DOM 中挂载了对应 v-text 属性的元素内容
     **/
    setInterval(() => {
          // 定时修改页面上<span v-text="time">元素中的内容
          app.data.time = +new Date()
        }, 1000)

    /**
     * step3: 请实现上述 ViewBind 方法
     * 提示：可参考 Vue 中响应式数据绑定和指令的实现原理
     **/
  </script>
    </body>
  </html>



