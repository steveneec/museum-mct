"use client";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import { useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function Tour() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "build/final.loader.js",
    dataUrl: "build/final.data",
    frameworkUrl: "build/final.framework.js",
    codeUrl: "build/final.wasm",
  });

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200) {
        setWindowWidth(1200);
      } else {
        setWindowWidth(window.innerWidth);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <main>
        <NavBar />
        <div
          style={{
            position: "relative",
            margin: "100px auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Unity
            unityProvider={unityProvider}
            style={{ width: windowWidth, height: (windowWidth / 16) * 9 }}
          />
          <div
            style={{
              position: "absolute",
              width: 24,
              height: 24,
              opacity: 0.75,
              backgroundSize: "cover",
              left: "calc(50% - 12px)",
              top: "calc(50% - 12px)",
              backgroundImage: "url('cursor.png')",
            }}
          />
        </div>
        <Footer />
      </main>
    </>
  );
}
