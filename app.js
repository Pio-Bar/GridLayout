const stylesheet = document.getElementsByTagName("link")[0];
const toggler = document.getElementsByTagName("button")[0];
function toggleStylesheet() {
  if (stylesheet.getAttribute("href") == "./grid.css") {
    stylesheet.setAttribute("href","./flex.css")
    toggler.innerText = "Switch to Grid!"
  } else {
    stylesheet.setAttribute("href","./grid.css")
    toggler.innerText = "Switch to Flex!"
  }
}
