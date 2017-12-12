<?xml version="1.0"?>
<xsl:stylesheet version="1.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method= "text" indent="yes"/>
    <xsl:template match="/opleiding">Overzicht deelnemers van opleiding <xsl:apply-templates select="titel" />
    <xsl:text>&#xA;</xsl:text>
        <xsl:for-each select="deelnemers/deelnemer">
            <xsl:value-of select="."/>
            <xsl:text>&#xA;</xsl:text>
        </xsl:for-each>
    </xsl:template>
    <xsl:template match="titel">
        <xsl:value-of select="."></xsl:value-of>
    </xsl:template>
</xsl:stylesheet>