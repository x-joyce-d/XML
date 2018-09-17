<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
			<body>
				<xsl:value-of select="title"/>
				<xsl:for-each select="chapter/para">
					<xsl:value-of select="para"/>
					<!-- <xsl:value-of select="para/emphasis/emphasis"/> -->
				</xsl:for-each>
				<xsl:for-each select="chapter/mediaobject">
					<xsl:value-of select="imageobject/imagedata"/>				</xsl:for-each>
			</body>
		</html>
	</xsl:template>

</xsl:stylesheet>
