# Usability Report

## Evaluación de usabilidad del proyecto GoikoMes

**Fecha:** Mayo de 2026  

**Proyecto evaluado:** GoikoMes  
**Repositorio:** https://github.com/Practicas-DIU3-RESCUE/UX_CaseStudy  
**Sitio web en producción:** https://jorge-goikomes.surge.sh  

**Informe realizado por:** Equipo de La Estantería de Sabores.

---

## 1. Resumen ejecutivo

El objetivo de este informe es evaluar la usabilidad del **Caso B: GoikoMes**, una web basada en la votación mensual de hamburguesas creadas por el staff de Goiko. La evaluación se ha realizado dentro de una comparativa A/B frente a nuestra propuesta, **La Estantería de Sabores**.

Para ello se han utilizado varias técnicas: cuestionario SUS, tareas de navegación, A/B Testing y Eye Tracking mediante GazeRecorder. También se plantea una revisión básica de accesibilidad para detectar posibles problemas de contraste, lectura o navegación.

En general, GoikoMes obtiene una valoración positiva. Su diseño oscuro, visual y centrado en el producto consigue captar rápidamente la atención del usuario. La imagen de la hamburguesa y el bloque de la burger líder funcionan bien como elementos principales de la interfaz.

Aun así, se han detectado algunas mejoras posibles. El menú superior y ciertos textos secundarios pasan algo desapercibidos, y algunos usuarios percibieron que la tipografía sobre fondo oscuro podía cansar visualmente. También se recomienda reforzar los botones principales para que la acción de votar o pedir quede todavía más clara.

El resultado medio del cuestionario SUS para GoikoMes fue de **75.5 / 100**, por lo que se considera una interfaz **aceptable y buena**, aunque con margen de mejora frente al Caso A, que obtuvo una puntuación superior.

---

## 2. Metodología y reclutamiento

Para la evaluación se reclutaron **10 usuarios**, divididos en dos grupos:

- 5 usuarios evaluaron el **Caso A: La Estantería de Sabores**.
- 5 usuarios evaluaron el **Caso B: GoikoMes**.

Los participantes tenían perfiles variados en edad, ocupación y nivel de experiencia digital. En el Caso B participaron usuarios con experiencia digital media y alta, incluyendo perfiles como enfermera, programador, estudiante, comercial y periodista.

Las tareas propuestas para GoikoMes fueron:

1. Explorar la landing principal para identificar la burger líder actual.
2. Localizar la sección de ingredientes y el chef creador.
3. Interactuar con los botones de acción para simular el proceso de votación.
4. Encontrar opiniones o reseñas de la comunidad.
5. Navegar libremente por la página para observar el comportamiento natural del usuario.

Las herramientas utilizadas fueron:

- **Tally.so**, para recoger el cuestionario SUS.
- **sus.tools / sus.mixality.de**, para analizar los resultados SUS.
- **GazeRecorder**, para generar mapas de calor mediante Eye Tracking.
- **Lighthouse/WAVE**, previstos para la revisión de accesibilidad.

---

## 3. Resultados del cuestionario SUS

El Caso B, **GoikoMes**, obtuvo una puntuación media de:

**75.5 / 100**

Según la interpretación del SUS, esta puntuación se sitúa dentro de una valoración **buena** y se considera **aceptable**. Esto indica que los usuarios pudieron utilizar la web sin grandes dificultades y que la propuesta funciona correctamente a nivel general.

Comparado con el Caso A, que obtuvo **86 / 100**, GoikoMes queda algo por debajo. La diferencia parece estar relacionada sobre todo con la claridad de algunos textos secundarios y con la adaptación visual al diseño oscuro.

Los puntos más positivos detectados fueron:

- buena primera impresión visual;
- producto principal muy reconocible;
- diseño moderno y profesional;
- flujo general fácil de entender.

Los aspectos con más margen de mejora fueron:

- contraste de textos secundarios;
- visibilidad del menú superior;
- mayor claridad en algunas llamadas a la acción;
- reducción de la densidad visual en zonas inferiores.

---

## 4. Análisis de Eye Tracking

El Eye Tracking se realizó con **GazeRecorder** sobre una captura completa de la landing de GoikoMes. Se eligió una captura general porque la web funciona como una página única, donde las opciones del menú llevan a secciones internas.

Por limitaciones técnicas y temporales, la prueba se realizó con **3 participantes del Caso B**. Cada usuario realizó una calibración previa de la webcam y después observó la página siguiendo tareas básicas: localizar la burger líder, encontrar la zona de votación, revisar ingredientes, identificar al creador y buscar reseñas.

Los mapas de calor muestran que la atención se concentró principalmente en:

- imagen principal de la hamburguesa;
- título de la burger líder;
- bloque central de la propuesta;
- sección de ingredientes;
- algunos botones de acción.

Esto confirma que la jerarquía visual principal funciona bien. El usuario entiende rápidamente que la hamburguesa es el centro de la experiencia.

Sin embargo, también se observó que algunas zonas recibieron menos atención:

- menú superior;
- footer;
- textos legales;
- parte de los textos descriptivos;
- algunas reseñas inferiores.

El hallazgo principal es que GoikoMes tiene mucha fuerza visual en el producto, pero algunos elementos secundarios quedan en segundo plano. Esto no es necesariamente negativo, pero puede afectar si se quiere que el usuario consulte más información antes de votar.

---

## 5. Auditoría de accesibilidad

Para la auditoría de accesibilidad del Caso B se ha utilizado la herramienta **WAVE**, ejecutada sobre el sitio web en producción de GoikoMes. La revisión se ha centrado en detectar problemas automáticos relacionados con contraste, estructura HTML, navegación y compatibilidad con tecnologías de apoyo.

El análisis automático obtuvo una puntuación aproximada de **6.9 / 10**. WAVE detectó los siguientes resultados principales:

- **1 error**.
- **5 errores de contraste**.
- **5 alertas**.
- **3 características positivas**.
- **10 elementos estructurales**.
- **15 elementos ARIA**.

Los resultados muestran que la página tiene una estructura general reconocible, con `header`, `nav`, `main` y `footer`, además de varios encabezados correctamente identificados. Sin embargo, también aparecen algunos problemas que conviene corregir para mejorar la accesibilidad.

| Categoría | Problema detectado | Impacto | Recomendación |
|---|---|---|---|
| Perceptible | WAVE detecta **5 errores de contraste bajo**. | Algunos textos pueden resultar difíciles de leer, especialmente sobre el fondo oscuro o en usuarios con baja visión/fatiga visual. | Aumentar el contraste entre texto y fondo, usando tonos más claros o aumentando el peso de la tipografía. |
| Comprensible | Se detecta **1 formulario sin etiqueta**. | Los usuarios con lector de pantalla pueden no entender correctamente la función del campo, por ejemplo en el buscador. | Añadir una etiqueta `label` asociada al campo o un `aria-label` descriptivo. |
| Robusto | Hay **saltos en la jerarquía de encabezados**, pasando de `h2` a `h4`. | Puede dificultar la navegación estructural para usuarios que usan lectores de pantalla. | Reordenar los encabezados respetando una jerarquía lógica: `h1`, `h2`, `h3`, etc. |
| Operable | Aparece un **enlace interno roto** dentro de la misma página. | Algún elemento del menú puede no llevar correctamente a su sección correspondiente. | Revisar los enlaces con anclas internas y comprobar que todos los `id` existen. |
| Perceptible | WAVE marca **2 textos muy pequeños**. | Puede dificultar la lectura en pantallas pequeñas o para usuarios con baja agudeza visual. | Aumentar ligeramente el tamaño mínimo de fuente en textos secundarios. |

En general, GoikoMes no presenta una estructura inaccesible, pero sí necesita ajustes en aspectos concretos. Los problemas más importantes están relacionados con el contraste visual y con pequeños detalles de etiquetado y estructura HTML.




## 6. Conclusiones y recomendaciones

La evaluación general del Caso B muestra que **GoikoMes** es una propuesta visualmente potente y bastante usable. Su diseño oscuro, la imagen principal de la hamburguesa y la jerarquía de la burger líder consiguen captar rápidamente la atención del usuario.

El resultado SUS de **75.5 / 100** indica que la interfaz es aceptable y se percibe como buena. Además, los mapas de calor confirman que los usuarios dirigen la mirada hacia los elementos principales: imagen del producto, título de la burger, ingredientes y algunos botones de acción.

Sin embargo, tanto el Eye Tracking como la auditoría con WAVE muestran varios puntos mejorables. Algunos textos secundarios pasan desapercibidos, el menú superior recibe poca atención y existen problemas de contraste que pueden afectar a la lectura.

| Prioridad | Hallazgo | Recomendación de mejora |
|---|---|---|
| Alta | WAVE detecta varios errores de contraste bajo. | Revisar los colores de textos secundarios sobre fondo oscuro para cumplir mejor con WCAG. |
| Alta | Existe un campo de formulario sin etiqueta. | Añadir una etiqueta visible o un `aria-label` claro al buscador. |
| Media | Los mapas de calor muestran poca atención al menú superior. | Aumentar contraste, tamaño o separación del menú para hacerlo más visible. |
| Media | Hay saltos en la jerarquía de encabezados. | Corregir la estructura de títulos para mantener un orden lógico. |
| Baja | Algunas reseñas y textos secundarios reciben poca atención. | Mejorar la separación entre bloques y destacar más la validación social. |

Como decisión final, no consideramos necesario rehacer GoikoMes desde cero. La propuesta funciona bien a nivel general: tiene una identidad visual clara, el producto protagonista se entiende rápido y los usuarios han podido completar las tareas principales sin grandes problemas. Por tanto, la base del diseño es válida.

Lo que sí vemos necesario es realizar una iteración de mejora sobre aspectos concretos. Principalmente habría que revisar el contraste de algunos textos, etiquetar correctamente el buscador, ordenar mejor la jerarquía de encabezados y reforzar visualmente el menú y los botones principales. Son cambios importantes, pero no afectan a la estructura completa del proyecto ni obligan a replantear toda la página.

En conclusión, GoikoMes debería mantenerse como propuesta, pero con ajustes de accesibilidad y jerarquía visual antes de considerarla una versión final. Con estas correcciones, la interfaz sería más clara, más inclusiva y más fácil de usar para distintos tipos de usuarios.
