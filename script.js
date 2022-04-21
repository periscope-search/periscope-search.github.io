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
  if (theme == "Light") {
    byTag("body").class = "Dark";
    byId("theme-switch").innerText = "Light";
  } else if (theme == "Dark") {
    byTag("body").class = "Light";
    byId("theme-switch").innerText = "Dark";
  }
}
