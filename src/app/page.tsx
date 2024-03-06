"use client";
import { DM_Serif_Display, Space_Grotesk, Rosarivo } from "next/font/google";
import styles from "./home.module.css";
import NavBar from "@/components/NavBar/NavBar";
import Image from "next/image";
import stone2 from "../resources/images/stone2.png";
import stone0 from "../resources/images/stone0.png";
import Footer from "@/components/Footer/Footer";
import { MapProvider } from "@/components/map-provider";
import { MapComponent } from "@/components/Map";

import stone13 from "../resources/images/stones/ecm-13.png";
import stone7 from "../resources/images/stones/ecm-7.png";
import stone11 from "../resources/images/stones/ecm-11.png";
import stone17 from "../resources/images/stones/ecm-17.png";
import { useState } from "react";

const dm = DM_Serif_Display({ subsets: ["latin"], weight: "400" });
const sg = Space_Grotesk({ subsets: ["latin"] });
const rs = Rosarivo({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: "400",
});

export default function App() {
  const stones = [
    {
      code: "ECM-13",
      name: "Komatita en bandas estratificadas",
      desc: "La komatita es una roca volcánica formada a partir de magma extremadamente caliente, \nfluida y rica en magnesio que deriva del manto terrestre caliente. Su erupción fue particularmente\n común en el Precámbrico, cuando el flujo de calor en la Tierra era mayor. Esta roca fue descubierta\n en Sudáfrica en 1969, pero desde entonces se ha hallado en áreas Precámbricas alrededor del mundo.\nLas komatitas tienen por lo general una textura compuesta de olivinos en forma de cuchillos, que pueden tener de varios milímetros a varios decímetros de largo, rodeados de una matriz de clinopiroxeno esferulítico, cromita dendrítica y vidrio alterado. A esta textura característica se le conoce como spinifex.",
      owner: "Sita Marcos",
      country: "Brasil",
      place: "Corrajes",
      date: "3 de julio del 2000",
      image: stone13,
    },
    {
      code: "ECM-7",
      name: "Arenisca con esfalerita+galena+pirita",
      desc: 'La arenisca es una roca sedimentaria compuesta principalmente de granos de arena unidos por un cemento natural. La esfalerita, la galena y la pirita son minerales comunes que a menudo se encuentran juntos en depósitos minerales.\nLa esfalerita es un mineral de sulfuro de zinc que generalmente tiene un color entre negro y marrón.\nLa galena es un mineral de sulfuro de plomo que puede tener un aspecto plateado y cristalino.\nLa pirita es un mineral de sulfuro de hierro conocido comúnmente como "oro de los tontos" debido a su parecido superficial con el oro.',
      owner: "Sita Marcos",
      country: "Brasil",
      place: "Parana",
      date: "3 de julio del 2000",
      image: stone7,
    },
    {
      code: "ECM-11",
      name: "Gabro (Hornblenda)",
      desc: "El gabro es una roca ígnea intrusiva de color oscuro compuesta principalmente de minerales como el feldespato y la olivina. Tiene una textura gruesa y granular debido a su formación lenta en el interior de la Tierra. La hornblenda es un mineral común en el gabro, que pertenece al grupo de los anfíboles. Tiene un color generalmente oscuro, que puede variar desde negro a verde oscuro, y a menudo se presenta en forma de cristales alargados o fibrilares. La hornblenda contribuye a las propiedades físicas y químicas del gabro, y su presencia puede influir en la resistencia y la densidad de la roca. El gabro es una roca común en la corteza oceánica y en algunas áreas continentales donde han ocurrido intrusiones magmáticas profundas.",
      owner: "Sita Marcos",
      country: "Brasil",
      place: "Goias",
      date: "3 de julio del 2000",
      image: stone11,
    },
    {
      code: "ECM-17",
      name: "Filita Grafitosa-Boudinage de Qz",
      desc: '\nEl filita grafitosa es una roca metamórfica que se forma a partir de la recristalización de esquistos ricos en carbono, como el esquisto grafitoso. Esta roca contiene grafito como un componente principal, lo que le confiere su color oscuro característico y un brillo apagado. La boudinage de cuarzo se refiere a un fenómeno estructural en el que capas o lentes de cuarzo se estiran y se separan en forma de "salchichas" dentro de una matriz deformada, generalmente una roca metamórfica. Esto ocurre como resultado de la deformación y la presión tectónica durante el proceso metamórfico. En conjunto, el filita grafitosa con boudinage de cuarzo es una roca metamórfica que muestra una estructura compleja, con la presencia de grafito y cuarzo estirados y deformados, lo que proporciona información valiosa sobre las condiciones geológicas y los procesos que ocurrieron durante su formación.',
      owner: "Sita Marcos",
      country: "Brasil",
      place: "Minas Gerais",
      date: "3 de julio del 2000",
      image: stone17,
    },
  ];

  return (
    <main className={styles.main}>
      <NavBar />
      <section className={styles.hHeroSection}>
        <div className={styles.heroOverlay}>
          <div>
            <p className={styles.hFaculty}>FIGEMPA</p>
            <h1 className={`${dm.className} ${styles.hMCT}`}>MCT</h1>
            <h1 className={`${dm.className} ${styles.hMuseumName}`}>
              Museo de Ciencias de la Tierra
            </h1>
          </div>
          <div className={styles.info}>
            <p className={`${sg.className} ${styles.discover}`}>DESCUBRE</p>
            <p className={styles.discoverDescription}>
              El Museo de Ciencias de la Tierra, es un espacio en el que es
              posible promover la enseñanza y la discusión de temas relacionados
              a las Ciencias de la Tierra, así como el desarrollo de actividades
              recreativas de aprendizaje lúdico a cualquier de nivel de
              educación formal y no formal a través de actividades
              geoeducativas.
            </p>
            <div className={styles.options}>
              <a href="/reserva" className={styles.optBook}>
                RESERVAR
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.sectionTour}>
        <h2 className={`${rs.className} ${styles.learn}`}>Recorrido Virtual</h2>
        <p className={`${styles.learnDescription}`}>
          La simulación del Museo de Ciencias de la Tierra de la Universidad
          Central del Ecuador es una experiencia interactiva en línea que
          permite a los visitantes explorar y aprender sobre diversos aspectos
          relacionados con las ciencias de la Tierra.
        </p>
        <a href="/tour">
          <div className={styles.tourImage}>
            <div className={styles.tourImageOverlay}>
              <p className={styles.tourVisit}>Visitar Museo</p>
            </div>
          </div>
        </a>
      </section>
      <section className={styles.gameSection} id="games">
        <h2 className={`${rs.className} ${styles.learn}`}>Aprende Jugando</h2>
        <p className={`${styles.learnDescription}`}>
          ¡Diviertete con juegos para desafiar tus conocimientos!
        </p>
        <div className={styles.games}>
          <div className={styles.gameCard}>
            <h4 className={`${sg.className}`}>Juego de Preguntas</h4>
            <a href="/games/juego-preguntas">
              <div id={styles.game0} className={styles.gameImg} />
            </a>
            <small className={styles.gameDescription}>
              Desarrolla tus habilidades y conoce más de los minerales que
              existen en el Museo
            </small>
          </div>
          <div className={styles.gameCard}>
            <h4 className={`${sg.className}`}>Juego completa la palabra</h4>
            <a href="/games/completa-palabra">
              <div id={styles.game1} className={styles.gameImg} />
            </a>

            <small className={styles.gameDescription}>
              Pon a prueba tu habilidad y pensamiento con este juego clásico de
              completar la palabra.
            </small>
          </div>
          <div className={styles.gameCard}>
            <h4 className={`${sg.className}`}>Juego de Estrategia</h4>
            <a href="/games/descubre-al-personaje">
              <div id={styles.game2} className={styles.gameImg} />
            </a>
            <small className={styles.gameDescription}>
              Elige tus movimientos sabiamente y derrota a tus oponentes en este
              emocionante juego de estrategia en descubriendo pistas.
            </small>
          </div>
        </div>
      </section>
      <section className={styles.collectionSection}>
        <Image
          src={stone2}
          width={300}
          height={300}
          alt="stone"
          className={styles.sectionStoneImage}
        />
        <Image
          src={stone0}
          alt="stone"
          className={styles.sectionStoneImageBg}
        />
        <h2 className={`${rs.className} ${styles.learn}`}>Colección</h2>
        <p className={`${styles.learnDescription}`}>
          ¡Conoce la colección que tenemos en exhibición!
        </p>
        <div className={styles.stones}>
          {stones.map((stone, key) => {
            return (
              <div key={key} className={styles.stoneCard}>
                <Image
                  src={stone.image}
                  alt="image"
                  className={styles.stoneCardImage}
                />
                <small className={styles.stoneCardName}>{stone.name}</small>
              </div>
            );
          })}
        </div>
        <a href="/collection" className={styles.optMoreCollection}>
          VER MÁS
        </a>
      </section>
      <div>
        <section className={styles.infoSection}>
          <h2 className={`${rs.className} ${styles.learn}`}>
            Información Adicional
          </h2>
          <p className={`${styles.learnDescription}`}>
            Conoce nuestros horarios y como llegar.
          </p>
          <div className={styles.schedule}>
            <h2 className={dm.className}>Horarios</h2>
            <p className={sg.className}>Lunes a Viernes</p>
            <p className={`${sg.className} ${styles.hours}`}>08:00 a 16:00</p>
          </div>
          <div className={styles.map}>
            <h2 className={dm.className}>Dirección</h2>
            <p className={sg.className} style={{ marginTop: 10 }}>
              Edificio de la Facultad de Ingeniería en Geología, Minas,
              Petróleos y Ambiental de la Universidad Central del Ecuador,
              tercer piso.
            </p>
            <div className={styles.mapContainer}>
              <MapProvider>
                <MapComponent />
              </MapProvider>
            </div>
          </div>
        </section>
      </div>
      <section id="footer">
        <Footer />
      </section>
    </main>
  );
}
