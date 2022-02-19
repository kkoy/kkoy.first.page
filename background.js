const images = ["0.jpg", "1.jpg", "2.png"];

const chosenImage = images[Math.floor(Math.random()*images.length)];
// console.log(chosenImage); //html로부터 뭔가를 가져오는 것
//항상 html을 먼저 작성하고 js를 사용해서 작성한 html을 다뤘다.
//js에서 뭔가를 생성해서 그걸 html에 추가해본 적이 없었다. 그걸 할 것이다.

const bgImage = document.createElement("img"); //img는 elemet. 요소를 생성해서 body에 추가
//console.log(bgImage); -> img
bgImage.src = `${chosenImage}`; //html에 하는 것과 같음

console.log(bgImage);
//마지막으로 할일은 bgImage를 body에 넣어주기

document.body.appendChild(bgImage) //appendChild는 body에 html을 추가할 것이다.

//append 맨뒤에 넣어주는 것 prepend하면 맨위에 넣어주기