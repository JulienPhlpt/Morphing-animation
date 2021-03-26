const moonPath =
  "M23.5 27.5C23.5 42.6878 27.5 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 23.5 12.3122 23.5 27.5Z";
const sunPath =
  "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";

const darkMode = document.querySelector("#darkMode");
let toggle = false;

// sun click event
darkMode.addEventListener("click", () => {
  // anime JS
  const timeline = anime.timeline({
    duration: 750,
    esaing: "easeOutExpo",
  });
  timeline
    .add({
      targets: ".sun",
      d: [{ value: toggle ? sunPath : moonPath }],
    })
    .add(
      {
        targets: "#darkMode",
        rotate: -150,
      },
      "-=450"
    )
    .add(
      {
        targets: "section",
        backgroundColor: toggle ? "rgb(255, 255, 255)" : "rgb(22, 22, 22)",
        color: toggle ? "rgb(22, 22, 22)" : "rgb(255, 255, 255)",
      },
      "-= 720"
    );

  // Switch toggle
  if (!toggle) {
    toggle = true;
  } else {
    toggle = false;
  }
});
