<<<<<<< HEAD
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
=======
<?xml version="1.0" encoding="UTF-8" ?>

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method= "text" indent="yes"/>
    <xsl:template match="/opleiding">Overzicht deelnemers opleiding <xsl:value-of select="./titel" /><xsl:text>&#xA;</xsl:text>
        <xsl:for-each select="./deelnemers/deelnemer">
            <xsl:value-of select = "."  /><xsl:text>&#xA;</xsl:text>
        </xsl:for-each>
    </xsl:template>

</xsl:stylesheet>

>>>>>>> ffb5d90e5bf254e68537a0af13b0c88a9c7ca07e
