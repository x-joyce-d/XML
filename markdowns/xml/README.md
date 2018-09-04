# XML（Extensible Markup Language）
##  1.是什么
* 1.扩展性标识语言，文件后缀为 .xml
* 2.是用来传输和存储数据的;
* 3.纯文本，有能力处理纯文本的软件都可以处理XML

## 2.作用（不同应用，不同平台间的共享和通信）
* `数据分离`，数据能够独立存储在单独的XML文件中，（通过JavaScript，读取外部XML文件，更新数据内容）
* `简化数据共享`，可作为一种简单的数据库，存储和检索数据（`以纯文本格式进行存储`)
* `简化数据传输`，传输约定格式的文件（可通过各种不兼容的应用程序来读取数据）

## 3.节点类型（XML DOM 是用于获取、更改、添加或删除 XML 元素的标准）
* `声明节点`：XML声明放在XML的第一行（` <?xml version="1.0" encoding="UTF-8" ?>`）
* `文档节点`：整个文档
* `元素节点`：每个XML标签
	* 从（且包括）开始标签直到（且包括）结束标签的部分
* `属性节点`:属性
* `文本节点`：元素或属性中的文本内容
* `实体/实体引用`
* `注释节点`：注释
* `处理指令`:专门针对应用程序的信息
	- eg:要执行的代码或关于从何处寻找样式表的信息
* `文档片段`：有时在使用XML时，必须临时创建多组元素
	- 充当临时的容器，可避免多次直接向DOM添加元素时，浏览器多次渲染
* `CDATA`（character data-字符数据）
	* 特殊节点，包含不应被解析器分析的信息

## 4.语法规则
* 可自定义标签/文档结构
* 必有根元素
* 必有关闭标签
* 大小写敏感
* 正确的嵌套
* 属性必加引号
* 实体引用（`&lt;` >,`&gt;`< ,`&amp`&,`apos`'',`quot`“”）
* 注释
* 命名空间
	* 1.`命名冲突`：两个不同的文档使用相同的元素名时，会发生冲突
	* 2.`使用前缀避免冲突`，eg:(<table> 元素中<h:table><f:table>
	* 3.`使用命名空间`：xmlns:namespace-prefix="namespaceURI"
	* 4.`默认的命名空间`：xmlns="namespaceURI"

## 5.思维导图
* 解析器(DOM/SAX)
 	- DOM解析会把XML文档加载到内存中，生成DOM树的元素都以`对象`的形式存在，操作这些对象就能够操作XML文档了（`可对XML文档进行增删改`）。

 	- SAX解析涉及 `解析器和事件处理器`，按照顺序对文档进行解析，当读到特定标签时，`自动调用相应的方法进行操作`（`处理大型文件`）
	> 	public static void main(String[] args) throws Exception {
	        //1.创建解析工厂
					SAXParserFactoryfactory=SAXParserFactory.newInstance();
	        //2.得到解析器
	        SAXParser sp=factory.newSAXParser();
	        //3得到解读器
	        XMLReader reader=sp.getXMLReader();
	        //设置内容处理器
	        reader.setContentHandler(new ListHandler());
	        //读取xml的文档内容
	        reader.parse("src/Book.xml");
	    	}
			}
* 语法
  * 树形 /实体引用
* 整理修饰
  * CSS /XSLT
* 验证
  * DTD （定义XML文档的合法构建模块）/schema
  	* 文档类型定义,可被成行地声明与XML文档中，也可作为一个外部引用
  	* 基于XML的DTD替代者

## 6.SGML,XML,XHTML,HTML,HTML5的关系
* 1.SGML(Standard Generalized Markup Language)标准通用标记语言
* 2.HTML是SGML的一个应用，XML是SGML的一个子集
* 3.XHTML是基于XML格式编写的HTML，兼容性更好，语法上更加严格
* 4.HTMl5 是HTML的第五代版本
* 5.XML，HTML是基于SGML,HTML不基于SGML,体现在不再需要DTD验证

## 7.XML,HTML的区别
* 1.`语法要求不同`
	-
* 2.`标记不同`
	- HTML标签是预定义的，XML标签是自定义的
* 3.`作用不同`
	- XML是用于存储和传输数据，HTML是用来显示数据
