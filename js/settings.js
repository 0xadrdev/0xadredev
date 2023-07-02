const settingsContainer = document.getElementById("settings");
const showSettingsButton = document.getElementById("btn-menu");
const closeSettingsButton = document.getElementById("btn-settings");
const saveSettingsButton = document.getElementById("btn-settings-save");
const menuMessage = document.getElementById("menu-text");
const bodyElement = document.getElementById("body");
const rootElement = document.querySelector(":root");

let durations; 

showSettingsButton.onclick = () => {
  bodyElement.classList.toggle("show-menu");
}  
  
closeSettingsButton.onclick = () => {
  bodyElement.classList.toggle("show-menu");
}

saveSettingsButton.onclick = () => {
  bodyElement.classList.toggle("show-menu");
  setAnimationsDurations();
}

export function getAnimationsDurations() {
  let nodeAnimationDuration = Number(settingsContainer.querySelector("#node-input").value);
  let pointerAnimationDuration = Number(settingsContainer.querySelector("#pointer-input").value);
  let deleteAnimationDuration = Number(settingsContainer.querySelector("#delete-input").value);
  return {nodeAnimationDuration, pointerAnimationDuration, deleteAnimationDuration};
}

export function setAnimationsDurations() {
  durations = getAnimationsDurations();
  rootElement.style.setProperty("--nodeAnimationDuration", `${durations.nodeAnimationDuration}ms`);
  rootElement.style.setProperty("--pointerAnimationDuration", `${durations.pointerAnimationDuration}ms`);
  rootElement.style.setProperty("--deleteAnimationDuration", `${durations.deleteAnimationDuration}ms`);
  return durations;
}
