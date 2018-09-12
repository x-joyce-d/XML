待处理内容
---

// XXX: 以下内容需重新整理

## 思维导图
* 解析器(DOM/SAX)
 	- DOM解析
		1.把XML文档加载到内存中;
		2.生成DOM树的元素都以`对象`的形式存;
		3.操作这些对象就能够操作XML文档了;
		4.可对XML文档进行`增删改`。

 	- SAX解析涉及 `解析器和事件处理器`;
		1.按照顺序对文档进行解析;;
		2 当读到特定标签时，`自动调用相应的方法进行操作`
		3 `处理大型文件`;
	 	  public static void main(String[] args) throws Exception {
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
  * 树形(DOM) /实体引用
* 整理修饰
  * CSS /XSLT
* 验证
  * DTD （定义XML文档的合法构建模块）/schema
  	* 文档类型定义,可被成行地声明与XML文档中，也可作为一个外部引用
  	* 基于XML的DTD替代者
