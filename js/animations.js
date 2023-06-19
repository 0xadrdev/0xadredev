
export {nextNodeAnimation, newNodeAnimation};

const linkedListContainer = document.getElementById("linked-list-container")

function nextNodeAnimation(nodeContainer) {
  let nodeData = nodeContainer.querySelector(".node-data");
  let nodeArrow = nodeContainer.querySelector(".node-arrow");

  nodeArrow.style.setProperty("opacity", "");
  nodeArrow.style.setProperty("transform", "");
  // nodeData.style.setProperty("animation", "")
  // nodeArrow.style.setProperty("animation", "");
  // nodeArrow.style.setProperty("animation-delay", "");

  nodeData.classList.remove("next-node-data");
  nodeArrow.classList.remove("next-node-arrow");
  
  setTimeout(() => {
    nodeData.classList.add("next-node-data");
    nodeArrow.classList.add("next-node-arrow");
  }, 10)

  // setTimeout(() => {
  //   console.log(window.getComputedStyle(nodeData).getPropertyValue("animation-play-state")); 
  //   nodeData.style.setProperty("animation", "nextNodeAnimation 800ms 1")
  //   nodeArrow.style.setProperty("animation", "nextArrowAnimation 800ms 1 forwards");
  //   nodeArrow.style.setProperty("animation-delay", "850ms");
  // }, 10);
}

function newNodeAnimation(nodeContainer) {
  let nodeData = nodeContainer.querySelector(".node-data");
  let nodeArrow = nodeContainer.querySelector(".node-arrow");
  // nodeData.style.setProperty("animation", "newNodeAnimation 800ms 1")
  // nodeArrow.style.setProperty("animation", "newArrowAnimation 800ms 1 forwards");
  // nodeArrow.style.setProperty("animation-delay", "850ms");
  nodeData.classList.add("new-node-data");
  nodeArrow.classList.add("new-node-arrow");
  // nodeArrow.style.setProperty("opacity", "0");
  nodeArrow.style.setProperty("transform", "translate(-150%)");
  linkedListContainer.appendChild(nodeContainer);
  setTimeout(() => {
    nodeData.classList.remove("new-node-data");
    nodeArrow.classList.remove("new-node-arrow");
    nodeArrow.style.setProperty("transform", "translate(0)");
  }, 1650)
}
