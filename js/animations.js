
export {nextNodeAnimation, newNodeAnimation, setNodeAnimation};

const linkedListContainer = document.getElementById("linked-list-container")

function nextNodeAnimation(nodeContainer) {
  let nodeData = nodeContainer.querySelector(".node-data");
  let nodeArrow = nodeContainer.querySelector(".node-arrow");

  nodeData.classList.remove("next-node-data");
  nodeArrow.classList.remove("next-node-arrow");
  
  setTimeout(() => {
    nodeData.classList.add("next-node-data");
    nodeArrow.classList.add("next-node-arrow");
  }, 100)

}

function newNodeAnimation(nodeContainer) {
  let nodeData = nodeContainer.querySelector(".node-data");
  let nodeArrow = nodeContainer.querySelector(".node-arrow");

  nodeData.classList.add("new-node-data");
  nodeArrow.classList.add("new-node-arrow");
  linkedListContainer.appendChild(nodeContainer);

  setTimeout(() => {
    nodeData.classList.remove("new-node-data");
    nodeArrow.classList.remove("new-node-arrow");
    nodeArrow.style.setProperty("opacity", "1");
  }, 1650)
}

function setNodeAnimation(nodeContainer, data) {
  let newDataSpan= Object.assign(document.createElement("span"), {className: "data show-data", innerText: data});
  let nodeData = nodeContainer.querySelector(".node-data");
  let dataSpan = nodeContainer.querySelector(".data");
  dataSpan.classList.add("remove-data");
  setTimeout(() => {
    dataSpan.remove();
    nodeData.appendChild(newDataSpan);
  }, 1000);
  setTimeout(() => {
    newDataSpan.style.setProperty("transform", "scale(1)");
    newDataSpan.classList.remove("show-data");
  }, 2000);
  
  
}
