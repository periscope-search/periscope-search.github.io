function $id(id) {
  return document.getElementById(id)
}

var r = document.querySelector(':root');

function getValueOfVar(variable) {
  let rs = getComputedStyle(r);
  let theme = rs.getPropertyValue(variable);
}

function setTo(variable, value) {
  r.style.setProperty(variable, value);
}

function toggleTheme() {
  getValueOfVar("--theme")
  if (theme == "--light-theme") {
    setTo("--theme", "--dark-theme");
    $id("color-change").color = white;
  } else {
    setTo("theme", "--light-theme");
    $id("color-switch").color = black;
  };
}
