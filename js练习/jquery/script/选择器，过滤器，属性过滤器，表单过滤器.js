<!--dom转jQuery对象
$(dom)
dom=$(dom)[0]    or  dom=$(dom).get(0)

选择器
1.id选择器
$('#id')

2.标签选择器
$('p')

3.类选择器
$('.cls')

4.标签+类选择器
$('dv.cls')

5.组合选择器
$（'dv','p','span'）

6.层选择器

6.1后代元素选择器  使用 空格 隔开
$('div p')表示层div下面的所有p  包含后代  子  子的子代

6.2子元素选择器  使用 > 隔开
$('div > p')  必须是div下的直接子元素p

6.3相邻元素选择器

$('div + p')  表示div元素的后一个兄弟元素，并且元素必须是p
等同于  $('div').next('p')
        $('div + *')等于$('div').next()

$('div ~ p')  表示div元素的后面所兄弟p元素
等同于$('div').nextAll('p')
      $('div ~ *')等于 $('div').nextAll()

$('div').prev()  表示div元素的上一个兄弟元素
$('div').prevAll()表示div元素的上面的所有兄弟元素
$('div').siblings() 表示出自己之外的所有兄弟元素
 
 7.属性过滤选择器
   $('input[type=text]')选择页面上所有的type是text的input标签
    -->
----------------------------------------------------------------------
-----------------------------过滤器

<!--:first  $('div:first')  选取第一个div
:last   $('div:last')  选取最后一个div
:eq()   $('p:eq(5)')  选择第五个p标签
:lt()   $('p:lt(5)')  选择索引小于5的p标签
:gt()   $('p:gt(5)')  选择索引大于5的p标签
:not    $('p:not(.cls)') 选择p标签中没有应用.cls类样式的标签
:even   $('p:even')    选择索引是偶数的p标签
:odd    $('p:odd')    选择索引是奇数的p标签
:header $(':header')  选择h1-h6的标签
:animated  $('div:animated')  选取正在执行动画的div元素-->

--------------------------------------------------------------------------
------------------------------属性过滤器
1.$('input[name]')         选择input标签中有name属性的
2.$('input[name=user]')    选择input标签中有name属性且值等于user的
3.$('input[name!=user]')   选择input标签中有name属性且值不等于user的
4.$('input[name^=a]')      选择以a开头的
5.$('input[name$=a]')      选择以a结尾的
6.$('input[name*=a]')      选择包含a的
7.$('input[name][id][value]') 选择input标签中同时有name id value 属性的

-------------------------------------------------------------------------
-----------------------------表单过滤器
1.$('#form1 :enabled')       选择表单中所有启用的元素
2.$('#form1 :disabled')      选择表单中所有禁用的元素
3.$('input:checked')         选中所有选中的元素
  $('input[type=checkbox]:checked')        $('input[type=radio]:checked')
4.$('input:not(:checked)')   选中所有未选中的元素
5.$('select :selected')      选中所有选中的元素
6.$('select :not(:selected)')选中所有未选中的元素

--------------------------------------------------------------------------
--------------------------