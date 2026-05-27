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

Esta parte queda pendiente de completar con los resultados concretos de Lighthouse o WAVE.

A falta de la puntuación exacta, durante la revisión visual se han identificado algunos puntos que conviene comprobar:

| Categoría | Posible problema | Impacto | Recomendación |
|---|---|---|---|
| Perceptible | Textos grisáceos sobre fondo negro | Puede dificultar la lectura en usuarios con baja visión o fatiga visual | Aumentar el contraste de los textos secundarios |
| Operable | Menú superior poco destacado | Puede pasar desapercibido durante la navegación | Aumentar tamaño, peso visual o contraste del menú |
| Comprensible | Algunas acciones podrían reforzarse visualmente | El usuario puede centrarse en la imagen y no detectar tan rápido la acción principal | Destacar más los botones de votar o pedir |
| Robusto | Pendiente de revisar con herramienta automática | Puede afectar a lectores de pantalla si hay problemas de estructura HTML | Revisar con Lighthouse/WAVE y corregir errores detectados |

Cuando se realice la prueba automática, se añadirá aquí la puntuación obtenida y los errores concretos detectados.

---

## 6. Conclusiones y recomendaciones

GoikoMes es una propuesta bastante sólida visualmente. Su mayor fortaleza está en la presentación del producto: la hamburguesa protagonista se identifica rápido y genera impacto desde el primer momento.

La puntuación SUS confirma que la web es usable y aceptada por los usuarios. Además, los mapas de calor apoyan esta conclusión, ya que la atención se dirige a los elementos más importantes de la landing.

Aun así, se recomiendan las siguientes mejoras:

| Prioridad | Hallazgo | Recomendación |
|---|---|---|
| Alta | Algunos textos secundarios tienen poco contraste sobre fondo oscuro | Aumentar contraste y grosor tipográfico para mejorar la lectura |
| Media | El menú superior recibe poca atención en los mapas de calor | Hacerlo algo más visible mediante tamaño, contraste o separación |
| Media | Los botones de acción no siempre concentran la mirada | Reforzar visualmente los CTA principales |
| Baja | Las reseñas aparecen, pero no siempre son revisadas por todos los usuarios | Darles más separación o un título más llamativo |
| Baja | La landing puede resultar algo densa en la zona inferior | Mejorar la separación entre bloques para facilitar el escaneo visual |

En conclusión, GoikoMes funciona bien como experiencia visual y de marca. La interfaz es atractiva, moderna y comprensible, pero podría mejorar en accesibilidad visual y en la visibilidad de algunos elementos secundarios.
