# Versión de 60 segundos, sin cortes forzados — un solo video nuevo de HeyGen

21 de septiembre de 2026. Reemplaza al **Camino A** del archivo `13-version-60s-video-andibite.md` (ese camino cortaba el audio de HeyGen a mitad de frase y se notaba). Aquí no se corta ni una sola frase.

**Punto de partida real de Carlos:** los clips de Flow ya están generados y rehacerlos es difícil; las voces se pueden regenerar sin costo; en HeyGen queda **un video disponible** del mes.

**La idea que resuelve el problema:** el nuevo video de HeyGen se coloca en la línea de tiempo **entero, sin cortarlo nunca**. Su audio corre de principio a fin. El B-roll de Flow no reemplaza tramos de Carlos: se **superpone encima** de la imagen durante unos segundos mientras su voz sigue sonando. Eso en edición se llama *cutaway* y es lo que hace la televisión: no hay salto de audio, no hay frase partida, y el avatar nunca "brinca" porque el tiempo nunca se interrumpe.

---

## 1. Orden de trabajo (importante: las voces primero)

1. Generar las voces nuevas (sección 2). Son 4 archivos y toman 15 minutos.
2. Crear el único video de HeyGen con el audio de Carlos ya generado (sección 3).
3. Armar en CapCut con los clips de Flow que ya existen (sección 4).

---

## 2. Voces nuevas (Google AI Studio, misma voz masculina de siempre)

Instrucción de estilo para el **narrador** (pegar en el campo de estilo antes del texto):
```
Habla en español latinoamericano con acento peruano de Lima, voz masculina de unos 28 años, cálida y cercana, como un narrador de documental que le habla a padres de familia. Ritmo pausado, con un silencio breve después de cada cifra. Sin tono de vendedor.
```

| Archivo | Texto exacto | Duración objetivo |
|---|---|---|
| `N1.wav` | En el Perú, cuatro de cada diez niños menores de tres años tienen anemia. Y en Lima Metropolitana, uno de cada tres. | 8 s |
| `N2.wav` | Las familias leen etiquetas y mandan fruta. Y la lonchera regresa intacta. Lo que le hace bien casi nunca es lo que quiere comer. | 8 s |
| `N3.wav` | AndiBite: mini brownie con hierro, cañihua y cacao peruano. Lo bueno también puede ser delicioso. | 6 s |

Instrucción de estilo para **Carlos** (el mismo modelo y la misma voz, cambia solo la actitud):
```
Misma voz, ahora hablando a cámara con confianza y una sonrisa, ritmo un poco más rápido, como quien presenta su proyecto ante un jurado y cree en él. Respeta un silencio de un segundo donde el texto indica [pausa]. Energía alta en la última pregunta.
```

**`CARLOS-60.wav`** — texto exacto a generar (98 palabras, unos 37 segundos con las pausas):

> Hola, soy Carlos Inga. Con Diana, Angie, Patricia y Adela creamos AndiBite. [pausa] Entrevistamos a diez familias y todas dijeron lo mismo: el problema no es la información, es que el niño no se lo come. Por eso hicimos esto: un mini brownie de veinte gramos con cacao peruano, avena, cañihua y hierro de sangrecita liofilizada. Micronizada, no se ve, no se siente, no huele. Para tu hijo es un brownie; para ti, hierro y concentración. [pausa] Viene en pack de seis, uno por día de clases, y aguanta la mochila sin refrigeradora. ¿Listos para que la lonchera regrese vacía? Escríbenos.

Al terminar, **medir la duración real** de `CARLOS-60.wav`. Debe quedar entre 35 y 40 segundos, y nunca pasar de 58 (el límite del plan gratuito de HeyGen). Si sale más largo de 40, quitar la frase "y aguanta la mochila sin refrigeradora" y volver a generar.

---

## 3. El único video de HeyGen

1. Avatar: **"Carlos pack"** (la foto donde sostienes el pack con las dos manos). Es el que sirve, porque el producto se ve durante todo el video sin necesidad de otro plano.
2. Create video → Landscape 16:9 → avatar "Carlos pack" → tipo Avatar IV.
3. Voz: **Audio → Upload audio → `CARLOS-60.wav`**. No escribir el texto en HeyGen: así la voz de Carlos y la del narrador son exactamente la misma.
4. Sin fondo extra, sin subtítulos, sin música.
5. Generar y descargar en 1080p como `HEYGEN-60.mp4`.

Si tu mes de HeyGen ya se reinició y tienes los 3 videos otra vez, igual con **uno** basta: este guion está armado para eso.

Si el avatar sale con las manos raras o el pack ilegible, no gastes otro video: se tapa ese tramo con un *cutaway* (sección 4) y listo.

---

## 4. Armado en CapCut: la línea de tiempo

Proyecto 1920x1080, 30 fps. `HEYGEN-60.mp4` va en la **pista 1** y **no se corta nunca**. Los clips de Flow van en la **pista 2**, encima, y se les **silencia el audio** (volumen 0) para que solo se oiga a Carlos.

Suponiendo que `CARLOS-60.wav` duró 38 segundos (lo que dan estas 99 palabras a ritmo normal):

| Tiempo | Pista 1 (video base) | Pista 2 (encima) | Audio que se oye | Texto en pantalla |
|---|---|---|---|---|
| 0:00-0:08 | — | **F01** (patio de colegio) | N1 + música 30 % | "43 % · ENDES 2025" |
| 0:08-0:16 | — | **F04** (niño aparta el plato, luego muerde el brownie) | N2 + música 30 % | — |
| 0:16-0:24 | **HEYGEN-60** empieza aquí (su segundo 0) | — se ve a Carlos | Carlos + música 10 % | "CARLOS" y, debajo, los cinco nombres del equipo |
| 0:24-0:30 | HEYGEN-60 sigue corriendo | **F04 o F02** encima, 6 s, mudo | Carlos (sigue hablando) | — |
| 0:30-0:38 | HEYGEN-60 sigue, se ve a Carlos con el pack | — | Carlos | Logo AndiBite en la esquina, desde aquí hasta el final |
| 0:38-0:45 | HEYGEN-60 sigue corriendo | **F06** (brownie partido, niño en el recreo) encima, 7 s, mudo | Carlos | "29.5 mg de hierro / 100 g de sangrecita · INS-CENAN" |
| 0:45-0:54 | HEYGEN-60 hasta su final (segundo 38) | — se ve a Carlos, cierra con la pregunta | Carlos | — |
| 0:54-1:00 | — | **F08** (mamá e hijo) + placa final | N3 + música 35 %, fundido a blanco | Logo grande, eslogan y contacto |

Cómo se lee esta tabla: Carlos entra en el segundo 16 y termina en el 54; en ese tramo su voz **nunca se interrumpe**. Lo único que cambia es qué ve el espectador: dos veces se va a una imagen de apoyo mientras él sigue hablando, y las dos veces regresa a él sin salto porque el clip nunca se detuvo.

Detalles que hacen que se vea profesional:
1. Cada entrada y salida de un *cutaway* con **disolución de 6 cuadros** (0.2 s), nunca corte seco.
2. Los clips de Flow superpuestos van **mudos**. Si quieres ambiente, déjalos en 8 %.
3. Música: 30-35 % en el gancho y la placa, 10 % debajo de Carlos, fundido de salida de 1.5 s.
4. Rótulo "CARLOS" en Fredoka One, blanco con borde negro; datos en pantalla en Nunito, 3 s cada uno.
5. Color: el mismo ajuste a todo (saturación -10, temperatura +5) para que HeyGen y Flow se vean del mismo mundo.

**Si la duración de Carlos no fue 37 segundos:** se ajusta solo el cierre. Placa final = 60 − 16 − (duración de Carlos). Con 35 s de Carlos la placa dura 9; con 42 s dura solo 2, así que ahí se acorta el gancho a 7 s por clip. Nunca se toca el clip de Carlos.

**Si te falta alguno de los clips de Flow**, sustituye por función, no por nombre:
- Gancho 1: cualquier plano de niños entrando al colegio o de la lonchera armándose.
- Gancho 2 y *cutaway* 1: cualquier plano del niño rechazando comida o de la lonchera que regresa intacta.
- *Cutaway* 2: el brownie en primer plano, o los 10 segundos del pack real filmado con celular (P01).
- Cierre: la toma desenfocada de mamá e hijo, o el pack sobre la mesa.

---

## 5. Control de calidad
- [ ] Duración final 1:00 o menos.
- [ ] La voz de Carlos no se corta en ninguna frase ni cambia de tono al volver de un *cutaway*.
- [ ] Los clips superpuestos están mudos.
- [ ] Se entiende quién es Carlos y qué es AndiBite antes del segundo 35.
- [ ] "Anemia" se dice una sola vez, en el gancho.
- [ ] Los dos datos en pantalla coinciden con lo que dice la voz y llevan su fuente.
- [ ] Logo desde el segundo 30 hasta el final; rótulo "CARLOS" solo en su entrada.
- [ ] No se afirma "sin octógonos" en ninguna línea.
