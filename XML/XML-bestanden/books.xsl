<<<<<<< HEAD
<?xml version="1.0"?>
<xsl:stylesheet version="1.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method= "html"/>
=======
<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html"/>
>>>>>>> ffb5d90e5bf254e68537a0af13b0c88a9c7ca07e
    <xsl:template match="/bookstore">
        <html>
            <head>
                <title>Overzicht van boeken</title>
            </head>
            <body>
<<<<<<< HEAD
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
=======
                <h1>Beschikbare boeken:</h1>
                <table>
                    <tr><th>titel</th><th>auteur</th><th>ISBN</th><th>prijs</th></tr>
                    <xsl:for-each select="./book">
                        <xsl:sort select="price" data-type="number" order="ascending"/>
                        <tr>
                        <td><xsl:value-of select="./title"/></td>
                        <td><xsl:value-of select="./author"/></td>
                        <td><xsl:value-of select="@ISBN"/></td>
                        <td><xsl:value-of select="./price"/></td></tr>
>>>>>>> ffb5d90e5bf254e68537a0af13b0c88a9c7ca07e
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
<<<<<<< HEAD
</xsl:stylesheet>
=======
</xsl:stylesheet>
>>>>>>> ffb5d90e5bf254e68537a0af13b0c88a9c7ca07e
