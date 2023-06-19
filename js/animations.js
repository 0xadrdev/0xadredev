
export {nextNodeAnimation, newNodeAnimation};

const linkedListContainer = document.getElementById("linked-list-container")

function nextNodeAnimation(nodeContainer) {
  let nodeData = nodeContainer.querySelector(".node-data");
  let nodeArrow = nodeContainer.querySelector(".node-arrow");
  nodeArrow.style.setProperty("opacity", "");
  nodeArrow.style.setProperty("transform", "");
  nodeData.style.setProperty("animation", "")
  nodeArrow.style.setProperty("animation", "");
  nodeArrow.style.setProperty("animation-delay", "");
  setTimeout(() => {
    console.log(window.getComputedStyle(nodeData).getPropertyValue("animation-play-state")); 
    nodeData.style.setProperty("animation", "nextNodeAnimation 800ms 1")
    nodeArrow.style.setProperty("animation", "nextArrowAnimation 800ms 1 forwards");
    nodeArrow.style.setProperty("animation-delay", "850ms");
  }, 10);
}

function newNodeAnimation(nodeContainer) {
  let nodeData = nodeContainer.querySelector(".node-data");
  let nodeArrow = nodeContainer.querySelector(".node-arrow");
  nodeData.style.setProperty("animation", "newNodeAnimation 800ms 1")
  nodeArrow.style.setProperty("animation", "newArrowAnimation 800ms 1 forwards");
  nodeArrow.style.setProperty("animation-delay", "850ms");
  nodeArrow.style.setProperty("opacity", "0");
  nodeArrow.style.setProperty("transform", "translate(-150%)");
  linkedListContainer.appendChild(nodeContainer);
}
