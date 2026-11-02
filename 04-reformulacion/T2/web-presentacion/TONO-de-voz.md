# Tono de voz de AndiBite para video · cómo se escribe y cómo se graba

Esta es la guía para que cualquier voz en off de la marca (el pitch, el video maestro, la convocatoria, los anuncios, las historias) suene a una persona hablándole a otra, no a un locutor ni a una máquina. Vale para quien escribe el guion y para quien lo graba en ElevenLabs.

## De dónde sale

- **Escribir para el oído, no para el ojo.** Un guion se lee en voz alta mientras se escribe; si no se puede decir de una respiración, se corta. Frases cortas, de distinta longitud, con pausas para respirar (Narakeet, Voices.com).
- **Conversación, no conferencia.** Sin jerga de marketing ni frases que nadie diría en una cocina (Autonolab, "conversational copywriting").
- **Dos registros, no uno.** La locución publicitaria pasa de cercana y conversacional a firme solo en el cierre; el resto del tiempo acompaña (Platzi, técnicas de locución).
- **La emoción se dirige, no se adjetiva.** En ElevenLabs v3 la expresión se controla con etiquetas de audio como `[warmly]`, `[soft laugh]`, `[pause]`, `[long pause]`, con puntos suspensivos y con MAYÚSCULAS para énfasis; la estabilidad en «Natural» o «Creative» responde mejor a esas etiquetas, y los textos muy cortos salen inconsistentes (ElevenLabs, "Prompting Eleven v3").
- **Reconocer, no vender.** Gloria «Lo estás haciendo bien» (Fahrenheit DDB, 2024) habla en segunda persona, reconoce el esfuerzo del padre y deja una frase que la gente repite. Es nuestra referencia de tono: la marca aparece al final, cuando ya le dio la razón a quien escucha.

## Las diez reglas (con el antes y el después)

| # | Regla | Suena a máquina | Suena a persona |
|---|---|---|---|
| 1 | **Háblale a una persona, en presente y de tú.** | «Los padres de Lima enfrentan cada mañana el reto de la lonchera.» | «Son las seis y cuarenta y ya estás inventando algo para que coma.» |
| 2 | **Una idea por frase. Frases cortas y largas mezcladas.** | «AndiBite es un mini brownie de 20 g con sangrecita liofilizada que aporta 1.9 mg de hierro y no lleva octógonos.» | «Es un brownie. Chiquito. Adentro va la sangrecita… y no se nota.» |
| 3 | **Palabras de casa, no de oficina.** Depa, lonchera, pasillo, sopa, mochila, «ya», «bueno», «en serio». | «Implementamos una solución nutricional.» | «Hicimos uno que ya no necesita cuento.» |
| 4 | **Las cifras se dicen como se dicen.** La cifra exacta va escrita en pantalla. | «Uno punto nueve miligramos de hierro por unidad.» | «Casi dos miligramos de hierro en cada brownie.» (en pantalla: 1.9 mg) |
| 5 | **Una imperfección humana por video.** Una risita, un «bueno», un «sí, otra vez», una frase que se corta. Solo una. | «Mi hijo rechazaba sistemáticamente los alimentos saludables.» | «Todo lo que le hace bien… lo deja. [soft laugh] Todo.» |
| 6 | **Respira.** Pausa corta entre ideas; una pausa larga antes del giro. | Texto seguido, sin puntos. | «Tú también tienes el tuyo. [pause] Y nadie los aplaude… [long pause] porque nadie los ve.» |
| 7 | **El giro se dice más lento y más bajo, no más alto.** | Subir la voz en «¡porque nadie los ve!» | Bajar la voz, casi como un secreto. |
| 8 | **La marca y el slogan, solo al final y despacio.** | Nombrar AndiBite tres veces. | Una vez en el cuerpo (cuando aparece el brownie) y una al cerrar. |
| 9 | **Nunca tono de locutor ni de vendedor.** Nada de «¡descúbrelo ya!», «la mejor opción», «increíble». | «¡Descubre el snack que revoluciona la lonchera!» | «Pruébalo en el stand. O pídelo por WhatsApp.» |
| 10 | **Prueba final: en voz alta y con cronómetro.** Si una palabra se traba, se cambia. Tres tomas y se queda la más natural, no la más perfecta. | — | — |

Reglas que no se negocian, además: siempre «papá y mamá»; el niño nunca habla ni aparece; nunca «combate» ni «previene la anemia»; «superhéroe», no «Hulk», en pauta pagada; el concurso es por votos, nunca «sorteo».

## Las cinco voces

| Voz | Quién es | Cómo suena | Para qué video |
|---|---|---|---|
| **Marca** | Una mamá limeña de unos 35 que ya pasó por esto y te lo cuenta sin drama | Cálida, segura, con una sonrisa que se oye; nunca locutora | Video maestro, convocatoria, historias |
| **Carlos** | El fundador, narrando por el equipo de cinco («somos Carlos, Diana, Patricia, Adela y Angie») | Cuenta una historia real (Lucero y Mateo), claro y directo, frase por frase, sin coloquialismos de relleno ni tono de locutor; el dato duro sin dramatizar; «nuestra respuesta es» firme; el slogan casi en voz baja. Referencia: el pitch de LumiKids del grupo anterior | Elevator pitch (en off y a cámara por tramos, con su avatar en ElevenLabs/HeyGen Avatar IV) |
| **Claudia** | 38, abogada, San Borja | Íntima, un poco cansada, con humor seco; confiesa | Anuncio de Claudia |
| **Rodrigo** | 40, jefe de logística, San Miguel | Rápido, cómplice, como quien habla en el semáforo; remata lento | Anuncio de Rodrigo |
| **Papá del testimonio** | Un papá real que ganó el concurso | Natural, con risa contenida, se traba un poco | Testimonio (solo como referencia; el real se graba con su voz) |

Al elegir voces en ElevenLabs: acento latinoamericano neutro o peruano, nunca de España; escucha la muestra con una frase del guion antes de guardarla. La de Carlos, mejor clonada de su propia voz (`PITCH-video.md`, sección 2).

## Ajustes de ElevenLabs

**Opción principal · Eleven v3.** Es la que entiende las etiquetas de emoción. Stability en **Natural** (si la voz se descontrola, Robust; si suena plana, Creative). Similarity 75. Pega el texto completo del video en una sola generación (los textos cortos salen peor). Etiquetas que funcionan en español, con moderación (máximo dos por frase): `[warmly]`, `[softly]`, `[soft laugh]`, `[sighs]`, `[pause]`, `[short pause]`, `[long pause]`, `[whispers]`, `[excited]`. Los puntos suspensivos alargan; las MAYÚSCULAS enfatizan una palabra.

**Respaldo · Eleven Multilingual v2.** Si v3 no está disponible o la voz elegida no está en v3: Stability 50, Similarity 75, Style 10 a 15, Speed 1.0. Las pausas van con `<break time="0.6s" />` (entre 0.4 y 1.0 s). Las emociones no se etiquetan: se escriben con la puntuación y con la dirección.

**Siempre:** tres tomas por texto, MP3 a 44.1 kHz, escuchar con cronómetro y ajustar Speed entre 0.95 y 1.03 si no entra en el tiempo. Si «AndiBite» o «WhatsApp» no suenan como los dicen ustedes, escríbelos como suenan solo en el texto de ElevenLabs («AndiBáit», «wasap»).

## Cómo se revisa un guion antes de grabar

1. Léelo en voz alta a otra persona del grupo sin mostrarle el papel. Si tiene que preguntarte algo, falta claridad.
2. Marca dónde respiras. Si en una frase no respiraste, es muy larga.
3. Busca palabras que no dirías en tu cocina. Cámbialas.
4. Cuenta cuántas veces aparece la marca. Más de dos, sobra.
5. Cronómetro: pitch 60 s, maestro 16 s, convocatoria 15 s, anuncios 8 s.
