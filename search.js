const user = new URLSearchParams(location.search).get("user");

fetch(`https://periscope-api.vercel.app/api/users/${user}`).then((res) => {
  if(!res.ok) {
    document.getElementById("loading").style.display = "none";
    document.getElementById("error").style.display = "inline";

    throw new Error(`Returned with ${res.status}`)
  }
  return res.json()
}).then((data) => {
  // data received
  let daysOld = Math.floor((new Date().getTime() - new Date(data.history.joined).getTime()) / (1000 * 60 * 60 * 24));
  document.getElementById("pfp").src = data.profile.images['90x90'];
  document.getElementById("username").innerText = data.username;
  document.getElementById("user-id").innerText = "#" + data.id;

  document.getElementById("country").innerText = data.profile.country;
  document.getElementById("join-date").innerText = daysOld + " days ago (" + data.history.joined + ")";
  document.getElementById("messages").innerText = data.messages;

  document.getElementById("about-me").innerText = data.profile.bio || "N/A";
  document.getElementById("wiwo").innerText = data.profile.status || "N/A";

  document.getElementById("scratch-link").href = `https://scratch.mit.edu/users/${user}`;
  document.getElementById("scratchinfo-link").href = `https://scratchinfo.vercel.app/users/${user}`;
  document.getElementById("postpercent-link").href = `https://postpercent.rirurin.com/users/${user}`

  document.getElementById("info").style.display = "inline";
  document.getElementById("loading").style.display = "none";
})
