// Just some shortcuts
function byId(id) {
  return document.getElementById(id);
}

function byTag(name) {
  return document.getElementsByTagName(name);
}

// Now for the theme switching

function switchThemes() {
  // Find theme
  let theme = byTag("body").class;
  if (theme == "light") {
    byTag("body").class = "dark";
    byId("theme-switch").innerText = "Light";
  } else if (theme == "dark") {
    byTag("body").class = "light";
    byId("theme-switch").innerText = "Dark";
  }
}
