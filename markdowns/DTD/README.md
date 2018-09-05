# DTD(HTML4.01)

## 1.引用
* <!DOCTYPE html 声明引用DTD,(HTML4.01基于SGML)

## 2.XHTML 1.0 Strict（严格的）
* `https://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd`

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
* ` Horizontal Rule`:   hr EMPTY
* `预格式化文本`：  pre %pre.content;  <!-- content is %Inline; excluding "img|object|big|small|sub|sup" -- 
* `object`:  object (#PCDATA | param | %block; | form | %inline; | %misc;)*
* `Images`:  img EMPTY
* `map`:   map ((%block; | form | %misc;)+ | area+)
* `Forms`:
	*   form %form.content;    <!-- forms shouldn't be nested --
	* <!--
  Each label must not contain more than ONE field
  Label elements shouldn't be nested.
--   label %Inline;
	*   select (optgroup|option)+   <!-- option selector --
	*   optgroup (option)+    <!-- option group --
	*   option (#PCDATA)      <!-- selectable choice --
	*   textarea (#PCDATA)      <!-- multi-line text field --
	*   fieldset (#PCDATA | legend | %block; | form | %inline; | %misc;)*
	*   legend %Inline;      <!-- fieldset label --
	*   button %button.content;   <!-- push button --
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

## 3.HTML 4.01 Strict（严格的）
* `https://www.w3.org/TR/html4/strict.dtd`
