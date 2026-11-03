// Las historias de Andi: cinco episodios de seis viñetas para el modo niños.
// Reglas (Ley 30021, art. 8): sin marca, sin producto, sin precios ni compras. Solo Andi, Killa, lugares del Perú y comida de verdad.
// `texto` es lo que se lee (y se dice en voz alta); `escena` describe el dibujo (sirve de respaldo mientras no hay imagen y de guía para ilustrarla).
import type { Look } from './ninos';

export interface Vineta { texto: string; escena: string }
export interface Episodio {
  id: string;
  n: number;
  titulo: string;
  lugar: string;
  ingrediente: string;
  emoji: string;
  color: string;
  /** Estrellas para abrirlo, o nivel total con el que se regala. El primero es gratis. */
  estrellas: number;
  nivel: number;
  /** Traje de Killa que se regala al terminar de leerlo. */
  regalo: Look;
  frase: string;
  vinetas: Vineta[];
}

export const EPISODIOS: Episodio[] = [
  {
    id: 'e1', n: 1, titulo: 'La abuela y el secreto de la puna', lugar: 'Puno', ingrediente: 'Sangrecita', emoji: '🏔️', color: '#BA4036',
    estrellas: 0, nivel: 0, regalo: 'chullo', frase: 'Lo que te hace bien también puede ser rico.',
    vinetas: [
      { texto: 'Andi vive en la puna, donde el cielo está cerquita. Killa, su llamita, lo sigue a todos lados.', escena: 'Andi y Killa caminan por la puna; cerros verdes y pardos, cielo azul enorme, una casita de adobe a lo lejos.' },
      { texto: 'Un día la abuela sirvió sangrecita. Andi arrugó la nariz: «¡No quiero! Huele raro».', escena: 'Cocina de adobe con fogón. La abuela, con sombrero y trenzas, le acerca un plato a Andi; Andi cruza los brazos y arruga la nariz. Killa mira desde la puerta.' },
      { texto: '«Sin hierro te cansas rápido y no puedes correr con Killa», dijo la abuela.', escena: 'La abuela señala por la ventana: Killa corre feliz por el pasto. Andi la mira con cara de duda.' },
      { texto: 'La abuela sonrió y escondió la sangrecita en un quequito de cacao. Nadie vio cómo.', escena: 'La abuela bate una masa oscura en un tazón de barro; Andi espía detrás de la mesa, de puntitas.' },
      { texto: 'Andi lo probó. «¡Mmm! ¿Qué tiene adentro?» «Un secreto», dijo la abuela.', escena: 'Andi muerde un quequito de cacao con los ojos muy abiertos; la abuela sonríe con un dedo en los labios; Killa aplaude con las patas.' },
      { texto: 'Esa tarde Andi corrió hasta la cima con Killa. Y al día siguiente pidió otro quequito.', escena: 'Andi y Killa en la cima de un cerro, brazos arriba, atardecer naranja sobre la puna.' },
    ],
  },
  {
    id: 'e2', n: 2, titulo: 'El valle de la lúcuma', lugar: 'Huaral, Lima', ingrediente: 'Lúcuma', emoji: '🌳', color: '#E3A33B',
    estrellas: 2, nivel: 3, regalo: 'chalina', frase: 'Lo nuestro sabe mejor cuando se comparte.',
    vinetas: [
      { texto: 'Andi y Killa bajaron de la puna al valle de Huaral, cerca de Lima. ¡Qué calor!', escena: 'Un valle verde con chacras y árboles; sol fuerte; Andi se abanica con la mano y Killa saca la lengua.' },
      { texto: 'Don Lucho cuidaba un árbol con frutas verdes y redondas. «Es lúcuma», dijo.', escena: 'Un agricultor con sombrero de paja junto a un lúcumo cargado de frutas verdes; Andi mira hacia arriba.' },
      { texto: 'Andi abrió una: por dentro era naranja como el sol y dulce como un caramelo.', escena: 'Primer plano de una lúcuma partida con la pulpa naranja; Andi con ojos de asombro.' },
      { texto: 'Pero un viento fuerte botó las frutas al suelo. ¡Don Lucho no podía recogerlas solo!', escena: 'Ráfaga de viento, hojas volando, lúcumas por el suelo; don Lucho con las manos en la cabeza.' },
      { texto: 'Andi las juntó y Killa las cargó en su lomo. En un ratito, el valle quedó limpio.', escena: 'Andi con los brazos llenos de lúcumas; Killa con dos alforjas de colores llenas de frutas.' },
      { texto: 'Don Lucho les regaló un helado de lúcuma. «Lo nuestro sabe mejor cuando se comparte», dijo.', escena: 'Los tres sentados bajo el árbol comiendo helado de lúcuma en barquillo; Killa con bigote de helado.' },
    ],
  },
  {
    id: 'e3', n: 3, titulo: 'Las terrazas de cañihua', lugar: 'Puno', ingrediente: 'Cañihua', emoji: '🌾', color: '#7C8A3A',
    estrellas: 3, nivel: 8, regalo: 'poncho', frase: 'Lo pequeño también tiene mucha fuerza.',
    vinetas: [
      { texto: 'De vuelta en Puno, Andi vio terrazas de colores en el cerro: rojo, amarillo, morado.', escena: 'Terrazas andinas escalonadas con plantas de cañihua en rojo, amarillo y morado; el lago Titicaca azul al fondo.' },
      { texto: '«Es cañihua», dijo la tía Rosa. «Un grano chiquito que crece donde nada más crece».', escena: 'La tía Rosa, con manta de colores, sostiene un manojo de cañihua; en su palma, granos diminutos.' },
      { texto: 'Andi quiso ayudar en la cosecha, pero las plantas eran tan pequeñas que se le escapaban.', escena: 'Andi agachado entre las plantas, con cara de esfuerzo; Killa olfatea las flores.' },
      { texto: 'Killa tuvo una idea: sopló suavecito y las semillas cayeron en la manta.', escena: 'Killa sopla con los cachetes inflados; una lluvia de semillas cae sobre una manta tejida de colores.' },
      { texto: 'Tostaron la cañihua y la molieron. ¡Olía a pan recién hecho!', escena: 'Una olla de barro sobre el fuego con granos tostándose; humo suave; Andi huele feliz con los ojos cerrados.' },
      { texto: 'La tía Rosa guardó un poquito en la mochila de Andi. «Para que la fuerza del cerro vaya contigo».', escena: 'La tía Rosa cierra la mochila de Andi; detrás, el cerro y el lago; Killa con una flor de cañihua en la oreja.' },
    ],
  },
  {
    id: 'e4', n: 4, titulo: 'El cacao de la selva', lugar: 'San Martín', ingrediente: 'Cacao', emoji: '🍫', color: '#6B3A2A',
    estrellas: 4, nivel: 15, regalo: 'sombrero', frase: 'Las cosas ricas necesitan paciencia.',
    vinetas: [
      { texto: 'Andi y Killa viajaron a San Martín. La selva era verde, verde, verde, y llena de sonidos.', escena: 'Selva espesa con un río marrón, guacamayos rojos y azules; Andi y Killa en una canoa.' },
      { texto: 'Doña Lili les mostró una fruta amarilla con pepas blancas. «De aquí sale el chocolate», dijo.', escena: 'Doña Lili abre una mazorca de cacao amarilla; adentro, pepas blancas y brillantes; Andi se asoma.' },
      { texto: 'Andi mordió una pepa cruda. «¡Amarga!» Killa escupió la suya.', escena: 'Andi con la cara arrugada y la lengua afuera; Killa igual, con una pepa saltando de su boca.' },
      { texto: '«Primero se seca al sol, después se tuesta», explicó doña Lili. Andi ayudó a mover las pepas.', escena: 'Pepas de cacao secándose sobre mantas al sol; Andi las remueve con un rastrillo de madera.' },
      { texto: 'Cuando las tostaron, la selva entera olió a chocolate.', escena: 'Olla de tostado con humo cálido; monitos curiosos asomándose entre las hojas; Killa con los ojos cerrados oliendo.' },
      { texto: 'Andi entendió: las cosas ricas también necesitan paciencia.', escena: 'Andi y Killa con tazas de chocolate caliente junto al río, atardecer rosado.' },
    ],
  },
  {
    id: 'e5', n: 5, titulo: 'El plátano del norte', lugar: 'Piura', ingrediente: 'Plátano', emoji: '🍌', color: '#3E7C8A',
    estrellas: 5, nivel: 25, regalo: 'marinera', frase: 'Juntos llegamos más alto.',
    vinetas: [
      { texto: 'El último viaje fue a Piura, donde hace calor casi todo el año y los plátanos crecen altos.', escena: 'Un platanal con hojas enormes, sol brillante, cielo celeste; Andi y Killa con sombra bajo una hoja.' },
      { texto: 'Un racimo enorme colgaba muy arriba. Andi saltó y saltó, pero no llegaba.', escena: 'Andi saltando con los brazos estirados bajo un racimo alto; Killa lo mira pensativa.' },
      { texto: 'Killa se agachó: «Súbete». Andi se trepó a su lomo y alcanzó el racimo.', escena: 'Andi parado sobre el lomo de Killa, agarrando el racimo; los dos con cara de triunfo.' },
      { texto: 'Los plátanos verdes no se comen todavía. Hay que esperar a que se pongan amarillos con puntitos.', escena: 'Dos manos de plátanos lado a lado: una verde y una amarilla con puntitos; Andi las compara.' },
      { texto: 'Mientras esperaban, Andi y Killa jugaron con los niños del pueblo en la plaza.', escena: 'Plaza de un pueblo piurano con casas de colores; niños jugando a la pelota con Andi; Killa de arquera.' },
      { texto: 'Al final del viaje, la mochila de Andi estaba llena: sangrecita, lúcuma, cañihua, cacao y plátano. Todo del Perú.', escena: 'Mochila abierta con los cinco tesoros dibujados; al fondo, un mapa del Perú pintado en una pared; Andi y Killa orgullosos.' },
    ],
  },
];

export const episodioPorId = (id: string) => EPISODIOS.find(e => e.id === id);
