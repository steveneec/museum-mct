import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar"

export default function Game() {
  return (
    <main>
      <NavBar/>
      <section style={{marginTop: 100, marginBottom: 60}}>
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
              height="675px"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              src="https://view.genial.ly/65db59aa6ea5b60014866b67"
              scrolling="yes"
            ></iframe>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
}
