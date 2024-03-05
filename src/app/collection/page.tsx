import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import dataStones from "../../resources/data/data.json";
import Image from "next/image";
import styles from "./styles.module.css";
import { DM_Serif_Display, Space_Grotesk } from "next/font/google";
import { NextPage } from "next";

const dm = DM_Serif_Display({ subsets: ["latin"], weight: "400" });
const sg = Space_Grotesk({ subsets: ["latin"] });

const Home:NextPage = () => {
  return (
    <main>
      <NavBar />
      <div className={styles.content}>
        <div>
          <h1 className={dm.className}>Colección</h1>
          <p className={sg.className}>Explora nuestra colección de Minerales</p>
        </div>
        <div className={styles.stones}>
          {dataStones.minerales.map(async (stone, key) => {
            const _image = await import(
              `../../resources/images/stones/${stone.code.toLowerCase()}.png`
            );
            return (
              <div key={key} className={styles.stoneCard}>
                <small className={styles.code}>{stone.code}</small>
                <Image
                  src={_image}
                  alt="image"
                  className={styles.stoneCardImage}
                />
                <small className={styles.stoneCardName}>{stone.name}</small>
                <small className={`${styles.country} ${dm.className}`}>{stone.country}</small>
                <small className={`${styles.country} ${sg.className}`}>{stone.date}</small>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Home;
