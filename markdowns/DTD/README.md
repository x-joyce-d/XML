# DTD(HTML4.01)

## 是什么(Document Type Definition)
* 标准通用标记语言的文档类型说明，声明文档的解析类型
* 定义了文档中的元素（标记、属性）和实体以及相互关系。

## 作用
* 告诉标准通用标记解析器用什么文档标准来定义解析文档

## 声明方式（HTML4.01基于SGML）
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
* `object`:  object (#PCDATA | param | %block; | form | %inline; | %misc;)*
* `Images`:  img (空标签)
* `map`:   map ((%block; | form | %misc;)+ | area+)
* `Forms`:
	*   form %form.content;  - 不能嵌套
	*   label %Inline;      -  不能嵌套
	*   select (optgroup|option)+   
	*   optgroup (option)+   
	*   option     
	*   textarea     
	*   fieldset (#PCDATA | legend | %block; | form | %inline; | %misc;)*
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
