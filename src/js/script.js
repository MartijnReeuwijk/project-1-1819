const fakedata = [{
    studie: "rechten",
    icon: "rechten",
    etage: "1"
  },
  {
    studie: "horica",
    icon: "horica",
    etage: "1"
  },
  {
    studie: "politiek",
    icon: "politiek",
    etage: "1"
  },
  {
    studie: "design",
    icon: "design",
    etage: "1"
  },
  {
    studie: "ict",
    icon: "ict",
    etage: "1"
  },
  {
    studie: "monteur",
    icon: "monteur",
    etage: "1"
  }
];

function makestudieElements() {
  let elm = document.getElementsByClassName("iconBlockHolder")[0];
  fakedata.forEach(data => {
    elm.innerHTML += `
    <div class="iconBlock borderRadius colorHover capitalize iconHover" id="${
      data.studie
    }" onclick="getMap(this.id)">
      <div class="iconBlok-icon">
      <img src="../src/image/icons/${data.icon}.svg" alt="${data.icon}" />
      </div>
      <p>${data.studie}</p>
    </div>
    `;
  });
}

function getMap(this_id) {
  let mapHolder = document.getElementsByClassName("mapholder")[0];
  let map = document.getElementsByClassName("mapPdf")[0];
  map.innerHTML = `
  <object data="../src/plategrond/etages/${this_id}.pdf" type="application/pdf">
                <embed src="../src/plategrond/etages/${this_id}.pdf" type="application/pdf">&nbsp; </embed>
                    alt :<a href="pdfFiles/interfaces.pdf">
                </object>
  `;
  mapHolder.classList.toggle("topPos");
}

function removeMap() {
  let mapHolder = document.getElementsByClassName("mapholder")[0];
  mapHolder.classList.toggle("topPos");
}

makestudieElements();
