import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

export default function Reserva() {
  return (
    <main>
      <NavBar />
      <section>
        <div style={{ width: "100%", margin: "0 auto" }}>
          <div
            style={{
              position: "relative",
              paddingBottom: "56.25%",
              paddingTop: 0,
              height: 0,
            }}
          >
            <iframe
              title="Museo Ciencias de la Tierra"
              frameBorder="0"
              width="1200px"
              height="100%"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              src="https://forms.office.com/pages/responsepage.aspx?id=Ky6ljCAddEKaE7127MuB0d9MAdIJyGNLozG4vkCk3VRUMldHR1lUOFJRT1ZFWjY5WktQNzQ5S1lFMS4u"
              scrolling="yes"
            ></iframe>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

//https://forms.office.com/pages/responsepage.aspx?id=Ky6ljCAddEKaE7127MuB0d9MAdIJyGNLozG4vkCk3VRUMldHR1lUOFJRT1ZFWjY5WktQNzQ5S1lFMS4u
