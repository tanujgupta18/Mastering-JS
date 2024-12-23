let button = document.querySelector(".btn");
let container = document.querySelector(".container");

function createCard(title, channelName, views, monthsOld, duration, thumbnail) {
  let viewStr;
  if (views < 1000) {
    viewStr = views;
  } else if (views >= 1000000) {
    viewStr = (views / 1000000).toFixed(1) + "M";
  } else {
    viewStr = (views / 1000).toFixed(1) + "K";
  }

  let html = `
    <div class="card">
      <div class="image">
        <img src="${thumbnail}" alt="image" />
        <div class="capsule">${duration}</div>
      </div>
      <div class="text">
        <h4>${title}</h4>
        <p>
          <span>${channelName}</span> . ${viewStr} views . ${monthsOld} months ago
        </p>
      </div>
    </div>`;

  container.innerHTML += html;
}

button.addEventListener("click", () => {
  createCard(
    "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
    "CodeWithHarry",
    3200000,
    7,
    "31:10",
    "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCMQBEG5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLA5x0rcbtKnJz4e0WJDyiuniijfCQ"
  );
});
