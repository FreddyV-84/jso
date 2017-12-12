<?xml version="1.0"?>
<<<<<<< HEAD
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
=======
<xsl:stylesheet 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="xml" />
    <xsl:template match="/items">
        <CDoverzicht>
            <xsl:for-each select="item">
                <xsl:sort select="omschrijving"/>
                <xsl:if test="categorie='CD'">
                    <CD><xsl:value-of select="omschrijving" />
                    </CD>
>>>>>>> ffb5d90e5bf254e68537a0af13b0c88a9c7ca07e
                </xsl:if>
            </xsl:for-each>
        </CDoverzicht>
    </xsl:template>
<<<<<<< HEAD
</xsl:stylesheet>
=======
</xsl:stylesheet>
<!-- 
    gegeven: items.xml
    gevraagd: en xml-file met een alfabetisch gesorteerd overzicht van de 
               omschrijvingen van alle CD's uit items.xml
    gewenst formaat: 
        <CDoverzicht><CD> ..... </CD><CD> ..... </CD>
          ...
        </CDoverzicht>
    oplossing: items.xsl
-->
>>>>>>> ffb5d90e5bf254e68537a0af13b0c88a9c7ca07e
