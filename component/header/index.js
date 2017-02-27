/**
 * header组件
 */
layui.define(['laytpl', 'jquery'], function (exports) {

  var tpl, laytpl, $, header;

  tpl = __inline('index.html');
  laytpl = layui.laytpl;
  $ = layui.jquery;
  header = {};

  header.init = function (params) {
    laytpl(tpl).render(params || {}, function (html) {
      $('lps-header').html(html);
    });
  };

  exports('header', header);
});
