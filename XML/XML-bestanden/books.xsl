<?xml version="1.0"?>
<xsl:stylesheet version="1.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method= "html"/>
    <xsl:template match="/bookstore">
        <html>
            <head>
                <title>Overzicht van boeken</title>
            </head>
            <body>
                <h2>Beschikbare boeken:</h2>
                <table>
                    <tr>
                        <td>titel</td>
                        <td>auteur</td>
                        <td>ISBN</td>
                        <td>prijs</td>
                    </tr>
                    <xsl:for-each select="book">
                    <xsl:sort select="price" data-type="number" order="ascending" />
                        <tr>
                            <td>
                                <xsl:value-of select="title"/>
                            </td>
                            <td>
                                <xsl:value-of select="author/first-name"/>
                                <xsl:text>&#xA0;</xsl:text>
                                <xsl:value-of select="author/last-name"/>
                            </td>
                            <td>
                                <xsl:value-of select="@ISBN"/>
                            </td>
                            <td>
                                <xsl:value-of select="price"/>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>