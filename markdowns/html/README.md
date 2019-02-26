# [HTML](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element)
---
---
## Main root
* `html`
## 头部标签
* `head`
* `base` -为页面上的所有链接规定默认地址（单标签a/img/link/form）(href/target属性)
* `link` -定义文档与外部资源的关系
* `meta`
* `style`
* `title`
* `script`
---
## `link`
* `integrity` - integrity 要求开启SRI，允许浏览器检查文件源，SRI要求被请求的资源,定义必须匹配的资源，避免加载恶意的资源，即防止加载不匹配的内容
	- `checksum` -	<link rel="stylesheet" href="./css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
* `crossorigin` - 发起跨域请求
## 语义化标签
* `hgroup`
* `h1` -唯一性(可促进关键词排名/提升用户体验 ，但也可能造成优化过度-在logo中添加时)
* `h2-h3` -段落标题/段落小节标题
* `h4-h6` -
* `header` -引导或导航信息，不局限于头部
* `main` -规定文档的主要内容（只能有一个）
* `section` - 一段主题性的内容
* `article` -独立存在(论坛帖子、杂志文章、报纸条目)
* `nav` -导航
* `aside` -(侧边栏、注框)
* `address` -任何类型的联系信息
* `footer`
---
## 序列
* `ul-li` -无序
* `ol-li` -有序
* `dl-dt(标题)-dd`
---
## 文本
* `div`
	- `p` -段落
	- `span` -行内标签-
	- `pre` 准确显示在html中的文本格式-预格式文本
---
## 字体样式(font-style)
* `strong/b` -逻辑标签/实体标签
* `s` -划掉
* `i/em` -斜体（实体标签/逻辑标签）
* `small` -最小文本
* `mark` -突出显示文本
* `q/blockquote` -(嵌入/引用长（段）文本，自动缩进)
* `cite` -引用（作品标题）
* `ins` -插入（与del同用，描述文本的更新与指正）
* `del` -删除
* `u` -实线下划线
* `sub/sup` -下标/上标
* `bdi/bdo` -文字反方向渲染
* `data` -
* `time` -可能带有datatime属性
---
## 语义化
* `samp` -计算机样本
* `dfn` -定义的术语
* `code` -
* `var` -引用变量（斜体）
* `kbd` - 键盘码
* `ruby/rp/rt/rb` 中文注音或字符
* `abbr` - 简称/缩写
* `template` -模板元素
* `slot`
<!-- * `shadow` -->
---
## spread
* `wbr` -断行(单标签)
* `br` -换行
* `hr` -水平线/分割线
---
## 图像
* `figure-figcaption` -定义图文(通常作为单个单元被引用)-figcaption定义标题
* `img` -单标签
* `picture` -根据不同分辨率，让浏览器选择自己需要加载的图片
* `audio` -音频
* `video` -视频
* `source` -带有两个源文件，根据浏览器支持进行不同的选择（单标签）
* `object` -用于包含对象（音频，视频，flash，PDF，图像等）
* `param` -设置属性autoplay为true，音频载入后自动播放
* `track` -音视频的子元素(空元素) text track（提供不同语言的字幕或不同的文本轨道）
* `map` -area必须嵌套在其里边，规定图像区域
* `embed`-插入各种多媒体
* `iframe` -
---

## 绘图
* `canvas` -游戏-基于js的绘图Api(画布) 位图
* `svg` -图形报表 （DOM节点）矢量图
* `path` -定义路径（画笔）
---
## 表格--(应用了thead/tbody/tfoot之后（表格从头到脚显示）)
* `table`
* `colgroup` -列组（格式化，对全部列应用样式）
* `col` -列(单标签,必须在tr内定义td)
* `caption` -表格标题（位于表格之外-表格作用/描述）-（标签需放在表格内）
* `thead` -（表头，表格中数据的类别，字段）
* `tbody` -(优先显示)
* `tfoot` -(表注)
* `/td/tr`
* `th` -(粗体/居中),不只用来表达表头，
---
## 表单
* `form` -(method/action/)
* `fieldset` -对表单进行分组
* `legend` -定义表单标题
* `label` -标题
* `input` -各种类型（button/number/password/checkbox/radio/file/hidden/email/color/image/month/reset/range/search/submit/tel/text/time/url/week/date/datetime-local）
* `textarea` -多行纯文本编辑
* `meter` -度量标签，仅用于已知范围任一标量值或分数值（无后代元素，有警告）
* `progress` -进度条（无后代元素，无警告）
* `output` -滑块（值在0-100之间）显示input的值
* `select` -下拉列表
* `optgroup` -(有很多选项需要组合时-项目组)
* `datalist` -用户可自己输入（input中的list属性值==datalist中的id属性值）-模糊匹配
* `option` -
* `button` -类型（submit/reset/button）
<!-- * `keygen` - -->
---

## 可伸展
* `summary` -摘要(标题)
* `menu` -菜单
* `dialog` -对话框
* `details` -子标签summary
---
---
## 行内元素(1.不独占)
* `span`
* `a`
* `img`
* `em/i`
* `q`
* `textarea`
* `strong`
* `u`
---
## 块级元素(1.独占一行)
* `div`
* `h1-h6`
* `p`
* `nav`
* `ul/ol/li`
* `dl/dt/dd`
* `header/section/aside/footer`
---
## 行内块元素()
* ``
---
## DTD声明方式（HTML4.01基于SGML）
1. `HTML 4.01 Strict DOCTYPE声明	`:<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
2. `XHTML 1.0 Strict DOCTYPE声明`:<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
3. `HTML5声明`:<!DOCTYPE html>(不基于SGML)

## [XHTML 1.0 Strict(严格的)](https://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd)
* `Document Structure`:   html (head, body)
* ` Document Body`:   body %Block;
* `Paragraphs`:   p %Inline;
* ` Headings`:   h1(-h6)  %Inline;
* `lists`:
	*   ul (li)+
	*   ol (li)+
	*   dl (dt|dd)+
	*   dt %Inline;
	*   dd %Inline;
* `address`:   address %Inline;
* ` 分隔线`:   hr (空标签)
* `预格式化文本`：  pre %pre.content;
* `object`:  object ( param | %block; | form | %inline; | %misc;)*
* `Images`:  img (空标签)
* `map`:   map ((%block; | form | %misc;)+ | area+)
* `Forms`:
	*   form %form.content;  - 不能嵌套
	*   label %Inline;      -  不能嵌套
	*   select (optgroup|option)+   
	*   optgroup (option)+   
	*   option     
	*   textarea     
	*   fieldset ( legend | %block; | form | %inline; | %misc;)*
	*   legend %Inline;  
	*   button %button.content;   
* `Tables`:
	*   table
	 (caption?, (col*|colgroup*), thead?, tfoot?, (tbody+|tr+))
	*   caption  %Inline;
	*   thead    (tr)+
	*   tfoot    (tr)+
	*   tbody    (tr)+
	*   colgroup (col)*
	*   col      EMPTY
	*   tr       (th|td)+
	*   th       %Flow;
	*   td       %Flow;

## [HTML 4.01 Strict（严格的)](https://www.w3.org/TR/html4/strict.dtd)
