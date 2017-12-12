<?xml version="1.0"?>
<xsl:stylesheet version="1.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="xml" />
    <xsl:template match="/">
        <CDoverzicht>
            <xsl:for-each select="items/item">
                <xsl:sort select="omschrijving" data-type="text" order="ascending"/>
                <xsl:if test="categorie='CD'">
                    <CD>
                        <xsl:value-of select="omschrijving"/>
                    </CD>
                    <xsl:text>&#xA;</xsl:text>
                </xsl:if>
            </xsl:for-each>
        </CDoverzicht>
    </xsl:template>
</xsl:stylesheet>