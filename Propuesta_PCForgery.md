# PC Forgery

## Enunciado
PC Forgery es una tienda online dedicada a la venta de componentes de computación, periféricos y equipos orientados a usuarios interesados en construir, mejorar o personalizar sus propios computadores.

La tienda está dirigida principalmente a personas adultas entre 20 y 40 años interesadas en tecnología, hardware y armado de computadores, desde usuarios principiantes que desean construir su primer PC hasta usuarios con mayor experiencia que buscan actualizar o crear nuevas configuraciones.

Además de ofrecer una experiencia tradicional de comercio electrónico, PC Forgery contará con la herramienta **"Arma tu PC"**, que permitirá construir un computador seleccionando sus componentes paso a paso, visualizar su precio y recibir información básica sobre la compatibilidad entre las piezas seleccionadas. 

Para complementar la experiencia de compra, la plataforma integrará un ecosistema de **Blogs DIY (Hazlo tú mismo) y Contenido Educativo**. Esta característica busca guiar a los usuarios en su proceso de aprendizaje mediante tutoriales, consejos de ensamblaje y guías técnicas, conectando directamente la teoría con los productos disponibles.

La identidad visual de la tienda estará inspirada en los sitios web y sistemas operativos de finales de los años 90 y comienzos de los 2000, especialmente en la estética de Windows 95/98. El objetivo es relacionar el interés actual por el hardware con la nostalgia de quienes crecieron utilizando computadores y soñando con algún día construir su propio PC.

## Misión
Facilitar el acceso a componentes y equipos computacionales mediante una plataforma de compra simple, educativa y entretenida, ayudando a los usuarios a seleccionar las piezas necesarias para construir o mejorar sus computadores. A su vez, se busca empoderar a los clientes a través de la cultura DIY, brindando las herramientas de conocimiento necesarias para ensamblar su propia tecnología.

## Visión
Ser una tienda online reconocida en Chile por ofrecer una experiencia diferente para comprar hardware y armar computadores personalizados, combinando comercio electrónico, educación tecnológica y una identidad visual inspirada en la nostalgia de la computación personal.

# Alcance del Proyecto
Los requerimientos propuestos deberán ser validados por el docente para determinar el alcance definitivo del proyecto, por lo que no necesariamente todas las funcionalidades descritas deberán implementarse durante el desarrollo del curso.

## Requerimientos Funcionales

### Registro y Autenticación de Usuarios
- Implementar un sistema de registro de usuarios mediante datos personales y correo electrónico.
- Permitir a los usuarios iniciar y cerrar sesión.
- Incorporar validaciones básicas en los formularios de registro e inicio de sesión.
- Permitir al usuario indicar preferencias relacionadas con su experiencia en computación y el uso principal que dará a su computador.

### Gestión de Perfiles de Usuario
- Permitir a los usuarios visualizar y actualizar su información personal.
- Permitir gestionar preferencias como nivel de experiencia y principal uso del computador.
- Permitir consultar las configuraciones de computadores guardadas por el usuario.

### Blogs DIY y Contenido Educativo (PC Forgery Workshop)
- Habilitar una sección educativa con artículos, tutoriales y guías interactivas sobre el armado y mantenimiento de computadores.
- Clasificar los artículos según temas (ej. Refrigeración, Cableado, Mantenimiento) y niveles de dificultad para orientar tanto a principiantes como a expertos.
- Integrar hipervínculos dentro de los blogs que redirijan directamente a la compra de los componentes mencionados en los tutoriales.
- Incorporar accesos directos a contenido educativo relevante desde la herramienta "Arma tu PC", explicando la función de los componentes que el usuario está evaluando.

### Visualización del Catálogo de Productos
- Mostrar productos organizados en categorías de componentes, computadores y periféricos.
- Mostrar información básica de cada producto, incluyendo nombre, imagen, precio, marca y disponibilidad.
- Permitir acceder al detalle de cada producto para visualizar sus características y especificaciones técnicas.

### Búsqueda y Filtrado de Productos
- Permitir buscar productos por nombre o marca.
- Permitir filtrar productos según categoría, fabricante y rango de precio.
- Incorporar filtros técnicos específicos para determinadas categorías de componentes.

### Funcionalidad del Carrito de Compras
- Permitir agregar productos al carrito de compras.
- Permitir eliminar productos y modificar sus cantidades.
- Mostrar un resumen del carrito con los productos seleccionados, precios, subtotales y total de la compra.
- Permitir realizar una simulación del proceso de compra mediante un checkout básico.

### Herramienta "Arma tu PC"
- Permitir al usuario construir un computador personalizado seleccionando sus componentes paso a paso.
- Mostrar una barra lateral con los componentes principales y adicionales de la configuración.
- Comenzar el proceso mediante la selección de un procesador, permitiendo elegir inicialmente entre plataformas AMD e Intel.
- Mostrar los productos disponibles correspondientes a la plataforma seleccionada.
- Guiar al usuario mediante controles para avanzar y retroceder entre las diferentes categorías de componentes.
- Mostrar permanentemente los componentes seleccionados y el precio acumulado de la configuración.
- Permitir reemplazar o eliminar componentes previamente seleccionados.
- Permitir agregar la configuración completa al carrito de compras.

### Compatibilidad Básica de Componentes
- Verificar reglas básicas de compatibilidad entre determinados componentes seleccionados.
- Validar la compatibilidad entre procesador y placa madre mediante el socket correspondiente.
- Validar la compatibilidad entre placa madre y memoria RAM según el tipo de memoria soportado.
- Considerar la compatibilidad entre el formato de la placa madre y los formatos soportados por el gabinete.
- Mostrar visualmente qué productos son compatibles o incompatibles con la configuración actual.
- Permitir mostrar únicamente productos compatibles cuando el usuario lo desee.
- Informar al usuario cuando un cambio realizado en la configuración vuelva incompatible un componente seleccionado anteriormente.

### Gestión de Configuraciones de PC
- Permitir a los usuarios registrados guardar configuraciones creadas mediante "Arma tu PC".
- Permitir asignar un nombre a cada configuración.
- Permitir consultar las configuraciones guardadas desde el perfil del usuario.
- Permitir editar o eliminar una configuración guardada.
- Permitir agregar posteriormente una configuración guardada al carrito de compras.

### Reseñas y Calificaciones
- Permitir a usuarios registrados calificar productos.
- Permitir publicar reseñas sobre los productos.
- Mostrar las reseñas y la calificación promedio asociadas a cada producto.

## Deseos para la Página Web

### Diseño Retro Atractivo e Intuitivo
- Crear una interfaz inspirada en sistemas operativos y sitios web de finales de los años 90 y comienzos de los 2000.
- Utilizar elementos visuales inspirados en Windows 95/98, como ventanas, barras de título, botones con relieve, iconografía pixelada y colores característicos de la época.
- Mantener una navegación clara y fácil de utilizar a pesar de la estética retro.

### Compatibilidad Avanzada
- Ampliar las reglas de compatibilidad entre componentes considerando características técnicas adicionales.
- Mostrar explicaciones sobre las razones por las que determinados componentes son incompatibles.
- Recomendar alternativas compatibles cuando el usuario seleccione un componente incompatible.

### Comparación de Componentes
- Permitir seleccionar productos de una misma categoría para comparar sus características técnicas.
- Mostrar las especificaciones principales y precios en una tabla comparativa.
- Permitir seleccionar un producto comparado para agregarlo al carrito o utilizarlo en "Arma tu PC".

### Estimación de Consumo
- Calcular de forma aproximada el consumo eléctrico de los componentes seleccionados.
- Comparar el consumo estimado con la potencia de la fuente de poder seleccionada.
- Mostrar advertencias cuando la fuente seleccionada pueda resultar insuficiente.

### Recomendaciones Personalizadas
- Sugerir componentes o configuraciones de acuerdo con las preferencias del usuario.
- Considerar factores como presupuesto, nivel de experiencia y uso esperado del computador.

### Compartir Configuraciones
- Permitir compartir una configuración de computador con otras personas.
- Facilitar que otros usuarios puedan visualizar los componentes y el precio de una configuración compartida.

### Servicio de Soporte y Contacto
- Incorporar una página de contacto con información de PC Forgery.
- Incluir un formulario para consultas relacionadas con productos, compras, soporte y armado de computadores.
- Facilitar el acceso a medios adicionales de soporte cuando corresponda.

# Propuesta de Diseño Visual

## Concepto Visual
La identidad de PC Forgery estará inspirada en la computación personal de finales de los años 90 y comienzos de los 2000. La interfaz buscará transmitir nostalgia tecnológica mediante elementos visuales similares a los utilizados por Windows 95/98 y los primeros sitios web, adaptándolos para mantener una experiencia de navegación comprensible.

## Colores

### Color de Fondo Principal
- Gris claro similar al utilizado en las interfaces clásicas de Windows para las principales superficies y ventanas.

### Colores de Acento
- Azul oscuro para barras de título y elementos destacados.
- Blanco y gris para áreas de contenido, botones y paneles.
- Negro para bordes y elementos de alto contraste.

## Tipografía

### Fuente Principal
- Utilizar una tipografía sans-serif simple y legible que recuerde a las interfaces clásicas de escritorio.

### Fuente de Encabezado
- Utilizar una tipografía compatible con la estética retro de PC Forgery, manteniendo una lectura clara en títulos y elementos de navegación.

## Elementos de Interfaz
- Ventanas con barras de título.
- Botones con apariencia elevada o biselada.
- Bordes marcados y paneles grises.
- Iconografía inspirada en interfaces de escritorio clásicas.
- Cuadros de diálogo para advertencias, confirmaciones y mensajes de compatibilidad.

# Información Extra para el Usuario

## Información Técnica de Productos
- Mostrar las principales especificaciones técnicas de cada componente para facilitar la selección de productos.
- Incluir datos relevantes para determinar compatibilidad, como socket, tipo de memoria, factor de forma y otras características cuando corresponda.

## Información de Compatibilidad
- Informar al usuario sobre la compatibilidad básica de los componentes seleccionados en "Arma tu PC".
- Mostrar mensajes explicativos cuando una selección sea incompatible.

## Contenido Educativo y DIY
- Proporcionar acceso a guías visuales y escritas que ayuden a comprender la función y el montaje de cada componente.
- Ofrecer contenido progresivo, orientado desde el armado inicial hasta el mantenimiento preventivo y la actualización de computadores avanzados.

# Categorías y Productos

## Listado de Categorías

### Componentes Principales
- Procesadores
- Placas Madre
- Memorias RAM
- Tarjetas Gráficas
- Almacenamiento
- Fuentes de Poder
- Gabinetes
- Refrigeración

### Componentes Adicionales y Periféricos
- Tarjetas de Red / Wi-Fi
- Tarjetas de Sonido
- Ventiladores
- Monitores
- Teclados
- Mouse
- Audífonos

*(La sección de Detalle de Productos y Descripciones se mantiene sin cambios estructurales)*

# Secciones Generales del Sitio

## Nosotros
La página "Nosotros" presentará información general sobre PC Forgery, incluyendo la historia conceptual de la tienda, su misión, visión y propósito.

## PC Forgery Workshop (Blog DIY)
Sección dedicada íntegramente al aprendizaje. Mostrará un feed de publicaciones educativas enfocadas en la comunidad, categorizadas por tipo de proyecto (ensamblaje, mantenimiento, modding) y enlazadas al inventario de la tienda para facilitar la adquisición de los componentes necesarios.

## Contacto
La página de contacto permitirá a los usuarios enviar consultas mediante un formulario que incluya nombre, correo electrónico, motivo de contacto y mensaje.
Los motivos podrán incluir consultas de productos, ayuda con "Arma tu PC", compras, soporte y otras consultas.

# Flujo General de "Arma tu PC"
1. El usuario inicia una nueva configuración.
2. Selecciona la plataforma del procesador: AMD o Intel.
3. Selecciona un procesador entre los productos disponibles.
4. Avanza a la selección de placa madre.
5. El sistema identifica las placas compatibles e incompatibles según el socket del procesador.
6. El usuario continúa seleccionando memoria RAM, tarjeta gráfica, almacenamiento, fuente de poder, gabinete y refrigeración.
7. La barra lateral muestra permanentemente el progreso, los componentes seleccionados y el precio acumulado.
8. Una vez seleccionados los componentes principales, el usuario puede incorporar componentes adicionales y periféricos.
9. El sistema presenta un resumen final de la configuración y su precio total.
10. El usuario puede guardar la configuración si ha iniciado sesión o agregar sus componentes al carrito de compras.