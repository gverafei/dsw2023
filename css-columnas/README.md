# Práctica en clase `CSS` con columnas con media queries

A partir de un boceto propuesto, implementar la aplicación web usando únicamente HTML y CSS.

## Instrucciones

1. Crear el archivo HTML mostrado más abajo en Visual Studio Code.
2. Utilizando únicamente reglas CSS (sin flex o grid), añade una hoja de estilos CSS que le aplique el diseño del boceto inicial. El container tiene un ancho de 80%, el content un min-height de 500px y ancho de 70%. El header tiene un height de 80px y el footer un height de 50px.
3. Subir la aplicación web en GitHub en un proyecto público y colocar la URL de GitHub en la Actividad de Eminus.
4. Publicar la solución en producción en GitHub Pages o una aplicación web de Azure o en el servicio de hosting de su preferencia e incluir la URL en la Actividad de Eminus.

## Código de HTML

Visual Code
```
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Columnas con media queries - CSS</title>
    <link rel="stylesheet" href="estilos.css">
</head>

<body>
    <div id="container">
        <div class="header">
            <h1>CSS con columnas mediante media queries</h1>
        </div>
        <!-- Menú superior -->
        <div class="nav">
            <ul>
                <li>
                    <a href="index.html">Inicio</a>
                </li>
                <li>
                    <a href="index.html">Unidad 1</a>
                </li>
                <li>
                    <a href="index.html">Unidad 2</a>
                </li>
                <li>
                    <a href="index.html">Eminus</a>
                </li>
                <li>
                    <a href="index.html">Contacto</a>
                </li>
            </ul>
        </div>
        <div class="clearfix"></div>
        <!-- Contenido -->
        <div class="content">
            <div class="article">
                <h2>Título del artículo</h2>
                <p>Solo el primero tiene border top</p>
            </div>
            <div class="article">
                <h2>Título del artículo</h2>
                <p>Texto del artículo</p>
            </div>
            <div class="article">
                <h2>Título del artículo</h2>
                <p>Texto del artículo</p>
            </div>
            <div class="article">
                <h2>Título del artículo</h2>
                <p>Texto del artículo</p>
            </div>
        </div>
        <!-- Barra lateral -->
        <div class="aside">
            <h2>Barra lateral</h2>
            <form action="">
                <input type="text" name="busqueda" id="busqueda">
                <input type="submit" value="Buscar">
            </form>
        </div>
        <div class="clearfix"></div>
        <!-- Pie -->
        <div class="footer">
            Desarrollo de Sistemas Web &copy; 2023
        </div>
    </div>
</body>

</html>
```


## Autor

Desarrollo de Sistemas Web  
Universidad Veracruzana