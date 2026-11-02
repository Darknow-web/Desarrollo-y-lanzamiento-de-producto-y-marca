# Elevator pitch en video · 60 segundos · narrado por Carlos, con su avatar por tramos

Es una historia contada por Carlos con su voz, de principio a fin, en nombre del equipo de cinco. Sigue la estructura del pitch de LumiKids que sirvió de ejemplo: **gancho y problema → el equipo → el problema y la oportunidad → la visión → llamado y cierre**. El avatar de Carlos (hecho en ElevenLabs con HeyGen Avatar IV) aparece solo en tres tramos; el resto del tiempo se ve material real de AndiBite relacionado con lo que se dice. Encima del video no va ningún texto: ni rótulos, ni cifras, ni subtítulos.

Lo que se copia del ejemplo: la apertura en off sobre imágenes, la presentación del equipo por nombres, «nuestra respuesta es…», una cifra grande y el slogan al final. Lo que no: su duración de dos minutos y los nombres en pantalla.

**La historia.** Lucero y su hijo Mateo, de siete años, son una mamá y un niño reales de la investigación. Ella pasó una tarde haciendo nuggets de sangrecita; la lonchera volvió llena; Mateo le dijo «Mamá, olía feo». Esa escena abre el video, el dato de anemia le da peso, el equipo entra como quien la escuchó veinticinco veces, AndiBite es la respuesta, y el cierre invita a vivir la escena al revés: ven con tu hijo y que él decida.

## 1. El guion · 60 a 63 s · 181 palabras

| Bloque | Tiempo | En pantalla | Voz de Carlos |
|---|---|---|---|
| 1. Gancho y problema | 0:00 a 0:18 | Video maestro `campana_maestro.mp4` (la cocina, la lonchera), sin su audio, en off | «Lucero pasó una tarde haciendo nuggets de sangrecita para Mateo, su hijo de siete años. La lonchera volvió llena. Mateo le dijo: "Mamá, olía feo". Si eres papá o mamá, conoces esta escena. Y no es un caso aislado: en el Perú, uno de cada seis niños de cinco a once años tiene anemia.» |
| 2. El equipo | 0:18 a 0:23 | **Avatar a cámara** | «Hola. Somos Carlos, Diana, Patricia, Adela y Angie: el equipo detrás de AndiBite.» |
| 3. Problema y oportunidad | 0:23 a 0:36 | Fotos `entrevista_1.jpg` y `entrevista_2.jpg`, y la lonchera del video maestro | «Esa escena la escuchamos de veinticinco familias de Lima. Papás y mamás que lo intentan todo: esconder la sangrecita, disfrazarla, inventarle un cuento. Y casi siempre gana el niño. Ciento sesenta y ocho mil hogares de Lima viven esa pelea cada mañana.» |
| 4. La visión | 0:36 a 0:52 | **Avatar a cámara** 4 s; luego la bolsa `empaque_frente.jpg`, la app `app_reto.jpg` y la degustación `degustacion_1.jpg` a `degustacion_4.jpg` | «Nuestra respuesta es AndiBite: un mini brownie de veinte gramos con la sangrecita escondida adentro. Casi dos miligramos de hierro y un sabor delicioso. Y una app que les muestra a papá y mamá cuánto hierro comió su hijo hoy. Ocho mamás lo probaron y ninguna notó la sangrecita.» |
| 5. Llamado y cierre | 0:52 a 1:01 | El stand `stand.jpg`; **avatar a cámara** en el slogan; después `cierre.jpg` 2 s | «El dos de enero abrimos en Jockey Plaza. Ven con tu hijo… y que él decida. AndiBite. Dulce para ellos. Tranquilidad para ti.» |

El avatar habla unos 12 segundos en tres tramos (0:18 a 0:23, 0:36 a 0:40 y 0:57 a 1:01). Todo lo demás es material que ya existe en `public/img` y `public/vid`.

**Cómo leerlo.** El bloque 1, lento y bajo, como quien cuenta algo que vio; el dato de anemia sin dramatizar, solo decirlo; «Mamá, olía feo» con la voz de Carlos citando, no imitando a un niño; el bloque 2 con sonrisa; «Nuestra respuesta es AndiBite» firme; «esconder la sangrecita, disfrazarla, inventarle un cuento» con ritmo, una palabra tras otra; «y que él decida» con una pausa antes; el slogan despacio, casi en voz baja.

**Lo que no cambia.** Siempre «papá y mamá» o «papás y mamás» (la degustación sí fueron ocho mamás, es un dato). «Anemia» aparece solo como dato del problema, igual que en la presentación (INS-CENAN 2025, 15.5 % en niños de 5 a 11); nunca como promesa: no se dice «previene» ni «combate». La marca se nombra tres veces, una por bloque clave: al presentar al equipo, en «nuestra respuesta es» y en el slogan.

## 2. La voz · ElevenLabs · un solo archivo

**Qué voz.** La de Carlos, clonada. Instant Voice Clone: graba con el celular, en un cuarto sin eco, de uno a dos minutos leyendo cualquier texto en tono normal (sirve este mismo guion dos veces). Sube el audio, nómbralo «Carlos», y listo. Si no quiere clonarla: una voz masculina latinoamericana de unos 28 a 32 años, cercana, no de locutor; escuchar la muestra con la primera frase del guion antes de elegir.

**Texto para pegar · Eleven v3 (opción principal).** Stability en Natural, Similarity 75. Una sola generación.

```
[softly] Lucero pasó una tarde haciendo nuggets de sangrecita para Mateo, su hijo de siete años. [short pause] La lonchera volvió llena. [short pause] Mateo le dijo: "Mamá, olía feo". [pause]
Si eres papá o mamá, conoces esta escena. [pause] Y no es un caso aislado: en el Perú, uno de cada seis niños de cinco a once años tiene anemia. [long pause]
[warmly] Hola. Somos Carlos, Diana, Patricia, Adela y Angie: el equipo detrás de AndiBite. [pause]
Esa escena la escuchamos de veinticinco familias de Lima. [short pause] Papás y mamás que lo intentan todo: esconder la sangrecita... disfrazarla... inventarle un cuento. [short pause] Y casi siempre gana el niño. [pause] Ciento sesenta y ocho mil hogares de Lima viven esa pelea cada mañana. [long pause]
Nuestra respuesta es AndiBite: un mini brownie de veinte gramos con la sangrecita escondida adentro. [short pause] Casi dos miligramos de hierro... y un sabor delicioso. [short pause] Y una app que les muestra a papá y mamá cuánto hierro comió su hijo hoy. [pause] Ocho mamás lo probaron, y ninguna notó la sangrecita. [long pause]
El dos de enero abrimos en Jockey Plaza. [short pause] Ven con tu hijo... [pause] y que él decida. [long pause]
[softly] AndiBite. [short pause] Dulce para ellos. [short pause] Tranquilidad para ti.
```

**Texto para pegar · Multilingual v2 (respaldo).** Stability 50, Similarity 75, Style 10, Speed 1.0.

```
Lucero pasó una tarde haciendo nuggets de sangrecita para Mateo, su hijo de siete años. <break time="0.4s" /> La lonchera volvió llena. <break time="0.4s" /> Mateo le dijo: "Mamá, olía feo". <break time="0.7s" />
Si eres papá o mamá, conoces esta escena. <break time="0.7s" /> Y no es un caso aislado: en el Perú, uno de cada seis niños de cinco a once años tiene anemia. <break time="1.0s" />
Hola. Somos Carlos, Diana, Patricia, Adela y Angie: el equipo detrás de AndiBite. <break time="0.7s" />
Esa escena la escuchamos de veinticinco familias de Lima. <break time="0.4s" /> Papás y mamás que lo intentan todo: esconder la sangrecita... disfrazarla... inventarle un cuento. <break time="0.4s" /> Y casi siempre gana el niño. <break time="0.7s" /> Ciento sesenta y ocho mil hogares de Lima viven esa pelea cada mañana. <break time="1.0s" />
Nuestra respuesta es AndiBite: un mini brownie de veinte gramos con la sangrecita escondida adentro. <break time="0.4s" /> Casi dos miligramos de hierro... y un sabor delicioso. <break time="0.4s" /> Y una app que les muestra a papá y mamá cuánto hierro comió su hijo hoy. <break time="0.7s" /> Ocho mamás lo probaron, y ninguna notó la sangrecita. <break time="1.0s" />
El dos de enero abrimos en Jockey Plaza. <break time="0.4s" /> Ven con tu hijo... <break time="0.7s" /> y que él decida. <break time="1.0s" />
AndiBite. <break time="0.4s" /> Dulce para ellos. <break time="0.4s" /> Tranquilidad para ti.
```

Tres tomas; quédate con la que suene más a alguien contando una historia, no con la más perfecta. Debe durar entre 58 y 63 s. Si pasa de 63 s: Speed 1.03, o quita «Si eres papá o mamá,» y deja «Conoces esta escena.». Exporta `pitch_voz.mp3`, 44.1 kHz. Si «AndiBite» no suena como lo dicen ustedes, escríbelo como suena solo en este texto («AndiBáit»).

## 3. El avatar · ElevenLabs con HeyGen Avatar IV

**La foto.** Una sola, de Carlos, de frente, con hombros y algo de pecho visibles, mirando a cámara con la boca cerrada y expresión neutra o media sonrisa, luz de ventana de un lado, sin lentes oscuros ni gorra, 1080 px o más. Mejor tomada en la cocina del equipo, con la lonchera terracota y la bolsa kraft sobre la mesa, al fondo y fuera de foco: así el fondo ya es de la marca sin poner nada encima.

**Pasos.**
1. En ElevenLabs, abre la función de avatares (AI Video / Avatars) y crea un avatar nuevo a partir de la foto.
2. Elige formato 16:9 y la mayor resolución del plan (1080p si está).
3. En la voz, elige **«usar mi propio audio»** y sube el audio. Así los labios siguen exactamente la toma elegida y el texto no se vuelve a interpretar. Dos caminos:
   - **Si el plan permite videos de 60 s o más:** sube `pitch_voz.mp3` completo y genera un solo `pitch_avatar.mp4`. En el montaje se tapan con imágenes los tramos en que no debe verse.
   - **Si el plan limita a 30 s (como el plan gratuito de HeyGen):** corta `pitch_voz.mp3` en tres partes con CapCut o Audacity, en los tramos en que Carlos aparece: `voz_equipo.mp3` (0:18 a 0:23), `voz_respuesta.mp3` (0:36 a 0:40) y `voz_slogan.mp3` (0:57 a 1:01). Genera tres videos con la misma foto: `avatar_equipo.mp4`, `avatar_respuesta.mp4`, `avatar_slogan.mp4`. Son 12 s de avatar en total.
4. Descarga y revisa tres cosas: que los labios cierren en las pausas, que las manos no hagan nada raro y que parpadee. Si un tramo se ve extraño, se tapa con una imagen en el montaje; no hace falta regenerar.

## 4. Lo que se ve, segundo a segundo

Nada de texto encima. Las fotos llevan un movimiento lento (zoom del 100 al 105 %) para que respiren. El video maestro va sin su audio.

| Segundo | Qué se ve | Archivo |
|---|---|---|
| 0:00 a 0:16 | La cocina, la lonchera, los trucos (el video maestro completo) | `public/vid/campana_maestro.mp4` |
| 0:16 a 0:18 | La lonchera sobre la mesa (último cuadro del maestro, quieto) | `public/img/campana/campana_4.jpg` |
| 0:18 a 0:23 | **Carlos a cámara** | `pitch_avatar.mp4` o `avatar_equipo.mp4` |
| 0:23 a 0:29 | Entrevistas: una mamá, un papá | `public/img/entrevista_1.jpg`, `entrevista_2.jpg` |
| 0:29 a 0:36 | La cocina y la lonchera otra vez (cuadro del maestro) | `public/img/campana/campana_4.jpg` |
| 0:36 a 0:40 | **Carlos a cámara** («Nuestra respuesta es AndiBite…») | `pitch_avatar.mp4` o `avatar_respuesta.mp4` |
| 0:40 a 0:44 | La bolsa kraft, de frente | `public/img/empaque_frente.jpg` |
| 0:44 a 0:48 | La app, el anillo de «El hierro de hoy» | `public/img/app_reto.jpg` |
| 0:48 a 0:52 | Las mamás probando el prototipo (dos fotos, 2 s cada una) | `public/img/degustacion_1.jpg`, `degustacion_2.jpg` |
| 0:52 a 0:57 | El stand con el mural en Jockey Plaza | `public/img/campana/stand.jpg` |
| 0:57 a 1:01 | **Carlos a cámara** (el slogan) | `pitch_avatar.mp4` o `avatar_slogan.mp4` |
| 1:01 a 1:03 | Pantalla final: logo y slogan (la única pieza con texto, cuando Carlos ya terminó) | `public/img/campana/cierre.jpg` |

Los segundos son de referencia: lo que manda es la voz. Cada cambio de imagen cae donde empieza la frase que la nombra.

## 5. Montaje en CapCut · 4 pasos

1. Proyecto 16:9 (1920 × 1080). Pista de audio: `pitch_voz.mp3`. Si generaste un solo `pitch_avatar.mp4`, impórtalo con su audio y no importes el mp3 aparte (es la misma voz).
2. Pista de video de fondo: el video maestro sin audio (0:00 a 0:16) y las fotos en el orden de la tabla, con el zoom lento. Encima, una pista con los tres tramos del avatar en sus segundos; si usaste un solo avatar de 60 s, ponlo debajo y tapa con las fotos los tramos en que no debe verse.
3. Al final, `cierre.jpg` durante 2 s con un fundido de medio segundo. Música: opcional, muy baja (piano o guitarra sin letra), al 10 % y solo si no pelea con la voz.
4. Exporta `pitch_60s.mp4` a 1080p, 30 fps. Para redes, duplica el proyecto en 9:16 con el recorte centrado en el rostro y exporta `pitch_60s_vertical.mp4`.

Sin subtítulos, sin rótulos, sin cifras en pantalla. Si alguien del jurado necesita leer, el texto está en la presentación.

**Si el jurado pregunta por el precio:** los S/27.90 del pack de 6 se apoyan en la encuesta a 30 papás y mamás (documento 07, 2.7) y en el rango de S/24 a 30 del segmento A, no en la degustación (ahí las mamás hablaron de S/10, que no cubre el costo; nunca se presenta como precio del plan).

## Qué hay que hacer, en orden

1. [ ] Grabar 1 a 2 minutos de voz con el celular y clonarla en ElevenLabs (o elegir una voz).
2. [ ] Generar `pitch_voz.mp3` con el texto v3 (tres tomas, 58 a 63 s).
3. [ ] Tomar la foto de Carlos en la cocina del equipo.
4. [ ] Generar el avatar en ElevenLabs: uno de 60 s, o tres clips cortos si el plan limita a 30 s.
5. [ ] Montar en CapCut con el video maestro, las fotos, los tramos del avatar y la pantalla final; exportar 16:9 y 9:16.
