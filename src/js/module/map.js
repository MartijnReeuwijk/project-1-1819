// oke get this clicked element en pak dan de Id er uit dit is easy
//       document.querySelector('#hello').addEventListener('click', hello)
import { kasten } from "../data.js";
console.log(kasten);

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
  let mapHolder = document.getElementsByClassName("mapholder")[0];
  let map = document.getElementsByClassName("mapPdf")[0];
  map.innerHTML = `
  <img src="../src/plategrond/etages/${this_id}.png">
  `;
  mapHolder.classList.toggle("rightPos");
  makeIndex(this_id);
}

export function removeMap() {
  let mapHolder = document.getElementsByClassName("mapholder")[0];
  mapHolder.classList.toggle("rightPos");
}

export function makeIndex(this_id) {
  // So this works, but since i got incomplete maps it doesnt work
  let index = document.getElementsByClassName("mapindex")[0];
  index.innerHTML = ``;
  console.log(this_id);
  let filterKast = kasten.filter(data => data.name === this_id);
  console.log(filterKast);

  filterKast.forEach(data => {
    index.innerHTML += `
      <div class="indexCard">
        <p>${data.name}</p>
        <span>Etage: ${data.etage}</span>
      </div>
      `;
    data.subjects.forEach(subject => {
      index.innerHTML += `
      <div class="indexCard">
            <p>${subject.name}:</p>
            <span>${subject.color}</span>
            <span>Kast:${subject.value}</span>
</div>
          `;
    });
  });
}
