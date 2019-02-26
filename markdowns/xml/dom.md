XML DOM
===
是什么
---
* 文档对象模型（XML Document Object Model ）
* 定义了所有XML元素的对象和属性，以及访问他们的方法(接口)
* 是用于增删改查XML元素的标准

DOM节点
---
*
API
---
* `DOM ATTR`
	- baseURL
	- isId
	- nodeType/nodeName/nodeValue
	- value
	- textContent
	- namespaceURL
	- name
	- ownerDocument/ownerElement
	- specified
	- prefix
* `Node`
	- **属性**
		- baseURL
		- childNodes
		- firstChild/lastChild
		- nextSibling/previousSibling/parentNode
		- nodeName/nodeType/nodeValue
		- namespaceURL
		- ownerDocument
		- prefix
		- textContent
		- localName
	- **方法**
		- appendChild()
		- insertBefore()
		- cloneChild()
		- hasAttributes()
		- hasChildNodes()
		- removeChild()
		- replaceChild()
		- isEqualNode()
		- isSameNode()
		- isSupported()
		- compareDocumentPOsition()
		- lookupNamespaceURL()
		- lookupPrefix()
		- normalize()
		- getFeature(feature,version)
		- getUserData(key)
		- isDefaultNamespace(URL)
		- setUserData(key,data,handler)
		-
* `CharacterData`
	- **属性**
		- data
		- length
	- **方法**
		- appendData()
		- deleteData()
		- insertData()
		- replaceData()
		- subStringData()
* ` DOM Text`
	- 继承自`Character`接口
	- replaceWholeText()
* `Comment`:注释节点
	- 继承自`Character`接口和`Node`接口
* `CDATASection`
	- **属性**
		- data
		- length
	- **方法**
		- appendData()
		- deleteData()
		- insertData()
		- replaceData()
		- subStringData()
		- splitText()
* CSSRule
	- CSSText
	- parentRule
	- parentStyleSheet
	- type
* Document
	- **属性**
		- childNodes
		- firstChild/lastChild/
		- nodeName/nodeType/nodeValue
		- doctype
		- documentElement
		- documentURL
		- xmlEncodig/xmlStandalone/xmlVersion
		- implementation
		- inputEncoding
		- strictErrorChecking
	- **方法**
		* createAttribute(name)
		* createAttributeNS(url,name)
		* createElement(name)
		- createElementNS(ns,name)
		* createComment(data)
		* createCDATASection(data)
		* createTextNode(data)
		* renameNode(node,url,name)
		* importNode(importNode,deep)
		* createEvent(eventType)
		* getElementsById(elementId)
		* getElementsByTagName(name)
		* getElementsByTagNameNS(ns,name)
		* createProcessingInstruction(target,data)
		* evaluate(xpathText,contextNode,namespaceURLMapper,resultType,result)
* DOM Exception
	- **常量**
		- `INDEX_SIZE_ERR`
		- `DOMSTRING_SIZE_ERR`
		- `WRONG_DOCUMENT_ERR`
		- `HIERARCHY_REQUEST_ERR`
		- `INVALID_CHARACTER_ERR`
		- `NO_DATA_ALLOWED_ERR`
		- ``
* DOM Event
	- **属性**
		- bubbles
		- currentTarget
		- target
		- cancelable
		- type
	- **方法**
		- event.initEvent(eventType,canBubble,cancelable)
		- preventDefault()
		- stopPropagation
* NodeList
	- length
	- item(index)
