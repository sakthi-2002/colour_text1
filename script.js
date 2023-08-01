const colors = ["#4A772F", "#FFDD00", "#FA9E05", "#A7095C", "#334756"];
const text = ["No Money", "No Money", "No Honey", "No Honey","Daaa..."];

//selecting the background and title
const title = document.querySelector(".container_title");
const bg = document.querySelector(".main_container");

let count = 0;

setInterval(() => {
  switch (count) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4: {
      title.innerText = text[count];
      bg.setAttribute("style", `background:${colors[count]}; opacity:0.5;`);
      count++;
      break;
    }

    default: {
      count = 0;
    }
  }
}, 300);
