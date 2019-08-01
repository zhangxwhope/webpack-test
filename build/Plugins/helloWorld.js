function HelloWorldPlugin (options) {
  // 使用 options 设置插件实例
}

HelloWorldPlugin.prototype.apply = function (compiler) {
  compiler.plugin('done', function() {
    console.log('hello world')
  })
}

module.exports = HelloWorldPlugin