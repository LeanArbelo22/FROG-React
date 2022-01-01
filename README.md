# Leandro Arbelo

Proyecto creado con React, MongoDB, Node.js y Express.

## Deploy

Para ver el proyecto:\
[http://frog-react-pwa.herokuapp.com](FROG-React).

### Estructura y funcionamiento

La pagina esta hecha en base a un supermercado, siguiendo la idea pricipal de mi proyecto\
esta seria una pagina de envios a domicilio.\
Para la ruta '/' utilice un archivo JSON que contiene las sucursales, haciendo un map se van mostrando\
en pantalla; Y con una concidicion switch se muestra cada mapa cuando se toca en las direcciones de cada local.

A su vez, para la misma ruta, se hace un GET de la base de datos usuarios, mostrando por consola el\
correcto funcionamiento de la misma.

Para la ruta '/envios' hice lo mismo que con los locales, traje los productos desde un archivo local JSON\
y un map para mostrarlos.
Cabe aclarar que se me presentaron ciertas dificultades para poder darle algunas funcionalidades secundarias
a esta parte,\
como por ejemplo hacer un subtotal de la compra.

Para la ruta '/login' y '/registro' use un metodo POST en ambas, utilizando la BD Frog/users.\
Ambas funcionan correctamente, pero debido a la falta de informacion, no logre que luego del registro o login pase\
algo mas que mostrar un alert (e informacion en la consola) para validar si funciono o no el registro en la bd o el
logueo en la app. Pero en consola se puede corroborar.

Tambien queria aclarar que utilice Bootstrap lo menos posible porque me desafie a escribir todos los estilos por mi mismo,\
incluyendo todas las media queries para hacerlo completamente responsive.

Por ultimo, intente hacer el deploy en github siguiendo las indicaciones vistas en clases, cambiando build por docs\
y corrigiendo los paths en index.html pero no fue posible. Por eso el deploy esta en Heroku, junto con el backend que tambien se encuentra en heroku. Y en github al backend lo pueden encontrar en [https://github.com/LeanArbelo22/FROG-Backend](aqui).

Mientras siga aprendiendo ire mejorandolo, pero de momento, este es mi proyecto final.