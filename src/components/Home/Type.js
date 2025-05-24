import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Bilgisayar Mühendisi",
          "Yazılım Geliştiricisi",
          "Serbest Yazılımcı",
          "MERN Stack Uzmanı",
          "Flutter Uzmanı",
          "Mobil Uygulama Geliştiricisi",
          "Web Geliştiricisi",
          "Full Stack Geliştiricisi"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
