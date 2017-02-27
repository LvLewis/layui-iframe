/**
 * menu组件
 */
layui.define(['laytpl', 'element', 'jquery'], function (exports) {

  var tpl, laytpl, $, element, menu, layer;

  tpl = __inline('index.html');
  element = layui.element();
  laytpl = layui.laytpl;
  layer = layui.layer;
  $ = layui.jquery;
  menu = {};


  menu.init = function (params) {
    laytpl(tpl).render(params || {}, function (html) {
      $('lps-menu').append(html);
    });

    //监听导航点击 todo 监听失败
    element.on('nav(menu)', function (elem) {
      layer.msg(elem.text());
    });
  };

  exports('menu', menu);
});
