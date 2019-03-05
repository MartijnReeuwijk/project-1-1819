export const fakedata = [
  {
    studie: "rechten",
    icon: "rechten"
  },
  {
    studie: "horica",
    icon: "horica"
  },
  {
    studie: "politiek",
    icon: "politiek"
  },
  {
    studie: "design",
    icon: "design"
  },
  {
    studie: "ict",
    icon: "ict"
  },
  {
    studie: "monteur",
    icon: "monteur"
  }
];

export function makestudieElements() {
  var elm = document.getElementsByClassName("iconBlockHolder")[0];
  fakedata.forEach(data => {
    elm.innerHTML += `
    <div class="iconBlock borderRadius colorHover capitalize iconHover">
      <div class="iconBlok-icon">
      <a href="${data.name}">
      <img src="src/image/icons/${data.icon}.svg" alt="${data.icon}" />
      </a>
      </div>
      <p>${data.studie}</p>
    </div>
    `;
  });
  console.log(elm);
}
makestudieElements();
