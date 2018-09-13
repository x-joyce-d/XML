DTD(Document Type Definition)
===

是什么(Document Type Definition)
---

* 标准通用标记语言的文档类型说明，声明文档的解析类型
* 定义了文档中的元素（标记、属性）和实体以及相互关系。
---
作用
---
* 告诉标准通用标记解析器用什么文档标准来定义解析文档
* 帮助你编写合法的代码，让浏览器正确的显示代码

语法规则
---
```
<?xml version="1.0" encoding="UTF_8"?>
<!DOCTYPE books [
<!ELEMENT books (books+)>
<!-- 子元素出现一次或多次 -->
<!ELEMENT book (name author price)>
<!-- 多种类型的子元素混合 -->
<!ELEMENT name (#PCDATA)>
<!ELEMENT author (#PCDATA)>
<!ELEMENT price (#PCDATA)>
<!-- 内容为文本类型 -->
<!ENTITY publisher "Microsoft Press">
		<!-- 实体名称 -->
]>
<books>
	<book>
		<name>恶意</name>
		<author>东野圭吾</author>
		<price>￥50</price>
	</book>
	<book>
		<name>哈利•波特</name>
		<author>JK罗琳</author>
		<price>￥99</price>
	</book>
	<pubinfo>Published by &publisher;</pubinfo>
		<!-- 实体名称引用 -->
</books>
```
```
<?xml version="1.0" encoding="UTF_8"?>
<!DOCTYPE frame [
<!ELEMENT frame EMPTY>
<!-- 空元素 -->
<!ATTLIST frame height CDATA "100">
<!ATTLIST frame height CDATA "80">
]>
<frame width="200" height="100"/>
```
### 元素声明
 <!ELEMENT 元素名称 (元素内容)>或<!ELEMENT 元素名称 类别>
* __空元素__
* __带有子元素__
* __内容为文本类型__
* __带有任何内容__
* __子元素只出现一次__
* __子元素出现零次或一次__
* __子元素出现一次或多次__
* __子元素为多选一__
* __多种类型的子元素混合__

### 属性声明
* **一种值**
 	<!ATTLIST 元素名称 属性名称 属性值 默认值>
* **多种值**
	<!ATTLIST 元素名称 属性名称 (值1|值2|值3...) 默认值>

实体
---
* 实体声明
	- <!ATTLIST 实体名称 “实体的值”>
* 实体引用
	- &实体名称;

引入
---
* **外部引用**
	- <!DOCTYPE 根元素名称 [声明]>
* **内部引用**
	- <!DOCTYPE 根元素名称 SYSTEM "DTD文件的URL">
* **公共引用**
	- <!DOCTYPE 根元素名称 PUBLIC "DTD名称" "DTD文件的URL">
