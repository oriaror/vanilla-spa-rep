import timer from "./views/time.js";
import home from "./views/home.js";
import map from "./views/map.js";

const routes = {
  "/": { title: "Home", render: home },
  "/map": { title: "Map", render: map },
  "/time": { title: "Time", render: timer },
};

function router() {
  let view = routes[location.pathname];

  if (view) {
    document.title = view.title;
    app.innerHTML = view.render();
  } else {
    history.replaceState("", "", "/");
    router();
  }
}

window.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    history.pushState("", "", e.target.href);
    router();
  }
});

window.addEventListener("popstate", router);
window.addEventListener("DOMContentLoaded", router);

