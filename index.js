<!DOCTYPE html>
<html>
<head>
    <title>Document</title>
    <style>
        table, th, td {
            border: 1px solid black;
        }
    </style>
</head>
<body>
    <table style="width: 400px; ">
        <thead>
            <tr>
                <th>Producto</th>
                <th>Precio</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td>Hola we</td>
                <td>caro we</td>
            </tr>
            <tr>
                <td>Feliz</td>
                <td>19.99$</td>
            </tr>
            <tr>
                <td>Muy pero muy Feliz</td>
                <td>40$</td>
            </tr>
        </tbody>
        <tfoot >
            <td></td>
            <td>Total 59.99$</td>
        </tfoot>

    </table>
    <!--Ul lista no ordenada-->
    <ul>
        <li> Element 1</li>
        <li> Element 2</li>
        <li> Element 3</li>
    </ul>

    <!--Ol lista ordenada-->
    <ol>
        <li value="6"> Element 1</li>
        <li> Element 2</li>
        <li> Element 3</li>
        <li>
            <ol>
                <li Style="list-style-type:lower-roman;"> sub Element 1</li>
                <li Style="list-style-type:lower-roman;"> sub Element 2</li>
            </ol>
        </li>

    </ol>





    <form action=" /Fomulario" method="post">
        <label for="nombre">Nombre</label>
        <input type="texto" name="nombre" placeholder="Nombre"/>
        <br>
        <label for="apellido">apellido</label>
        <input type="texto" name="apellido" placeholder="apellido"/>
        <br>
        <label for="Comentario">Comentario</label>
        <textarea id="comentario" placeholder="comentario" cols="50" rows="10"></textarea>
        <br>
        <!--<input type="submit" />-->
        <button type="button"><img  src="img/Ruta.png" width="40" height="25"/>Send</button>
        <button type="button">reset</button>
        <button type="button">submit</button>
    </form>
    <h1>Mi primer heading</h1>
    <h2>Segundo H</h2>
    <h3>Tercer H</h3>
    <h4>Cuarto H</h4>
    <p>Chanchito Feliz violento comelon. </p>
    <p>Chanchito lleno no quiere comer</p>
    <hr> <!-- Crea la linea para separar las palabras-->
    <h2>Chanchito felipe</h2>
    <p>Texto de chanchito comelon
        todo es mucho mas largo we :v <span style="color: blue">Mucho mas largo</span> y es para <br><br> mostrar la etiqueta de span
    </p> <!-- el pun to de usar  Span es para poder identificar otras etiquetas dentro de etiquetas :v,  br es para hacer un salto de linea ♥-->
    <a target="_blank" href="https://www.google.com">ir a google</a>
    <!-- target funciona para abrir una pertaña cuando precionamos el link-->
    <img src="img/Ruta.png" width="500" height="20" /> <!-- para poder referenciar una carpeta con una imagen agregamos img/-->

</body>
</html>
