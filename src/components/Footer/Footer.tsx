import { DM_Serif_Display, Rosarivo, Space_Grotesk } from "next/font/google";
import styles from "./styles.module.css";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
} from "react-icons/io5";

const dm = DM_Serif_Display({ subsets: ["latin"], weight: "400" });
const sg = Space_Grotesk({ subsets: ["latin"] });
const rs = Rosarivo({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: "400",
});
export default function Footer() {
  const nets = [
    {
      icon: <IoLogoInstagram color="#eee5ac" size={24} />,
      goto: "https://www.instagram.com/mucefigempa/",
    },
    {
      icon: <IoLogoFacebook color="#eee5ac" size={24} />,
      goto: "https://www.facebook.com/Museo-Figempa",
    },
    {
      icon: <IoLogoTwitter color="#eee5ac" size={24} />,
      goto: "https://twitter.com/mucefigempa",
    },
  ];

  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.footerSection}>
          <h2 className={dm.className}>Sobre Nosotros</h2>
          <div className={styles.contactsContainer}>
            <div className={styles.contacts}>
              <h4 className={sg.className}>Misión</h4>
              <p>
                Promover la enseñanza y el conocimiento de las ciencias de la
                tierra a través de una colección de minerales, rocas, fósiles y
                otros materiales geológicos.
              </p>
            </div>
            <div className={styles.contacts}>
              <h4 className={sg.className}>Visión</h4>
              <p>
                Ser un referente nacional e internacional en la divulgación de
                las ciencias de la tierra, con un enfoque educativo e
                interactivo.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.footerSection}>
          <h2 className={dm.className}>Contactos</h2>
          <div className={styles.contactsContainer}>
            <div className={styles.contacts}>
              <h4 className={sg.className}>Emails</h4>
              <a href="mailto:museo.figempa@uce.edu.ec">
                museo.figempa@uce.edu.ec
              </a>
              <a href="mailto:decanato.figempa@uce.edu.ec">
                decanato.figempa@uce.edu.ec
              </a>
            </div>
            <div className={styles.contacts}>
              <h4 className={sg.className}>Teléfonos</h4>
              <p>022566726 ext 126</p>
              <p>0988255370</p>
              <p>0984425103</p>
            </div>
          </div>
        </div>
        <div className={styles.nets}>
          <p>Siguenos</p>
          <div className={styles.netsIcons}>
            {nets.map((net, key) => (
              <a href={net.goto} target="_blank" key={key}>
                {net.icon}
              </a>
            ))}
          </div>
        </div>
        <h1 className={`${dm.className} ${styles.museumName}`}>MCT</h1>
      </div>
      <div className={styles.copy}>
        <p>Universidad Central del Ecuador &copy; - 2024</p>
      </div>
    </div>
  );
}
