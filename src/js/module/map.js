// oke get this clicked element en pak dan de Id er uit dit is easy
//       document.querySelector('#hello').addEventListener('click', hello)

export function addClickMap() {
  // So you need to slice this code
  var sliders = [].slice.call(document.getElementsByClassName("iconBlock"));
  sliders.forEach(function(element, index) {
    element.addEventListener("click", function() {
      getMap(this.id);
    });
  });
}

export function removeClickMap() {
  var sliders = [].slice.call(document.getElementsByClassName("mapIcon"));
  sliders.forEach(function(element, index) {
    element.addEventListener("click", function() {
      removeMap();
    });
  });
}

export function getMap(this_id) {
  console.log("toggle");
  let mapHolder = document.getElementsByClassName("mapholder")[0];
  let map = document.getElementsByClassName("mapPdf")[0];
  map.innerHTML = `
  <img src="../src/plategrond/etages/${this_id}.png">
  `;
  mapHolder.classList.toggle("rightPos");
}

export function removeMap() {
  console.log("remove");
  let mapHolder = document.getElementsByClassName("mapholder")[0];
  mapHolder.classList.toggle("rightPos");
}

export function makeIndex() {
  let index = document.getElementsByClassName("mapindex")[0];
  index.innerHTML += `
    <div class="indexCard">
      <p>${data.studie}</p>
      <span>${data.color}</span>
    </div>
    `;
}
