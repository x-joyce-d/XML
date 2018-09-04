# DTD(HTML4.01)

## 1.引用
* <!DOCTYPE html>声明引用DTD,(HTML4.01基于SGML)

## 2.XHTML 1.0 Strict（严格的）
* `https://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd`

* `Document Structure`: <!ELEMENT html (head, body)>
* ` Document Body`: <!ELEMENT body %Block;>
* `Paragraphs`: <!ELEMENT p %Inline;>
* ` Headings`: <!ELEMENT h1(-h6)  %Inline;>
* `lists`:
	* <!ELEMENT ul (li)+>
	* <!ELEMENT ol (li)+>
	* <!ELEMENT dl (dt|dd)+>
	* <!ELEMENT dt %Inline;>
	* <!ELEMENT dd %Inline;>
* `address`: <!ELEMENT address %Inline;>
* ` Horizontal Rule`: <!ELEMENT hr EMPTY>
* `预格式化文本`：<!ELEMENT pre %pre.content;> <!-- content is %Inline; excluding "img|object|big|small|sub|sup" -->
* `object`:<!ELEMENT object (#PCDATA | param | %block; | form | %inline; | %misc;)*>
* `Images`:<!ELEMENT img EMPTY>
* `map`: <!ELEMENT map ((%block; | form | %misc;)+ | area+)>
* `Forms`:
	* <!ELEMENT form %form.content;>   <!-- forms shouldn't be nested -->
	* <!--
  Each label must not contain more than ONE field
  Label elements shouldn't be nested.
--><!ELEMENT label %Inline;>
	* <!ELEMENT select (optgroup|option)+>  <!-- option selector -->
	* <!ELEMENT optgroup (option)+>   <!-- option group -->
	* <!ELEMENT option (#PCDATA)>     <!-- selectable choice -->
	* <!ELEMENT textarea (#PCDATA)>     <!-- multi-line text field -->
	* <!ELEMENT fieldset (#PCDATA | legend | %block; | form | %inline; | %misc;)*>
	* <!ELEMENT legend %Inline;>     <!-- fieldset label -->
	* <!ELEMENT button %button.content;>  <!-- push button -->
* `Tables`:
	* <!ELEMENT table
	 (caption?, (col*|colgroup*), thead?, tfoot?, (tbody+|tr+))>
	* <!ELEMENT caption  %Inline;>
	* <!ELEMENT thead    (tr)+>
	* <!ELEMENT tfoot    (tr)+>
	* <!ELEMENT tbody    (tr)+>
	* <!ELEMENT colgroup (col)*>
	* <!ELEMENT col      EMPTY>
	* <!ELEMENT tr       (th|td)+>
	* <!ELEMENT th       %Flow;>
	* <!ELEMENT td       %Flow;>

## 3.HTML 4.01 Strict（严格的）
* `https://www.w3.org/TR/html4/strict.dtd`
