/*
==================================================
LUME & FRAME
Main Interaction Layer

Luce. Forma. Silenzio.
==================================================
*/

document.addEventListener(
  "DOMContentLoaded",
  () => {

    console.log(
      "LUME & FRAME — Luce. Forma. Silenzio."
    );


    fetch("components/navigation.html")
      .then(response => response.text())
      .then(data => {

        document.getElementById(
          "navigation-container"
        ).innerHTML = data;

      });


  }
);
