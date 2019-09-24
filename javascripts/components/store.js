const printToDom = (divId, toPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = toPrint;
};


const makeStore = () => {
  const domString = "hi  new store";
  printToDom("store-container", domString)
};



export default { makeStore };