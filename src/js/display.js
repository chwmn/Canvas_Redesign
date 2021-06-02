//if arrow is clicked, will change content from hidden to block
//if arrow is clicked again, will change content from block to hidden

let show = new Boolean(false);
function display(event) {
  let arrow = event.target;
  let itemInfo =
    event.target.parentElement.previousElementSibling.querySelector("div");
  if (show == false) {
    itemInfo.classList.remove("hidden");
    show = true;
    arrow.classList.add("arrowUp");
  } else if (show == true) {
    itemInfo.classList.add("hidden");
    show = false;
    arrow.classList.remove("arrowUp");
  }
}
