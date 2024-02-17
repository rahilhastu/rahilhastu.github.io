let container = document.querySelector(".container");
let jar = document.querySelector(".jar img");
var totalMemories = 0;
const URL = "https://memory-jar-production.up.railway.app/";
const LOCALHOST = "http://localhost:8000/";

document.addEventListener("DOMContentLoaded", function () {
  fetch(URL + "memory")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      var totalMemoriesinDB = data.total;
      totalMemories = totalMemoriesinDB;
      console.log(totalMemoriesinDB);
      for (let i = 0; i < totalMemoriesinDB; i++) {
        var submitCardContainer = document.getElementById(
          "submit-card-container"
        );

        var submitCard = document.createElement("div");
        submitCard.setAttribute("id", "memory" + i);
        submitCard.classList.add("card", "submit-card");

        var heart = document.createElement("div");
        heart.setAttribute("class", "heart");

        submitCard.appendChild(heart);

        submitCardContainer.appendChild(submitCard);

        Draggable.create(".submit-card", {
          bounds: window,
          cursor: "pointer",
          throwProps: true,
          autoScroll: 1,
          onDrag: dragCookie,
          onRelease: releaseCookie,
          zIndexBoost: true,
        });

        // FInd the X, y coordinate of the < div class="container">
        var container = document.querySelector(".container");
        var rect = container.getBoundingClientRect();
        var x = rect.left + window.scrollX + 200;
        var y = rect.top + window.scrollY + 200;

        // Now move the submitCard to the x, y coordinate of the < div class="container">
        var submitCardi = document.getElementById("memory" + i);

        submitCardi.style.left = x + "px";
        submitCardi.style.top = y + "px";
        // totalMemories += 1;
        if (isColliding(submitCardi, jar)) {
          let jarBottom =
            $(window).height() - $(".jar").offset().top - $(".jar").height();
          let cookieBottom =
            $(window).height() -
            $(submitCardi).offset().top -
            $(submitCardi).height();
          let distance =
            cookieBottom -
            jarBottom +
            submitCardi.y +
            $(submitCardi).height() * 10.5 -
            100;
          TweenMax.to(submitCardi, 1, {
            skewX: 0,
            x: x - 200,
            y: distance, // Adjust as needed
            ease: Bounce.easeOut,
          });
          TweenMax.to(submitCardi, 0.3, {
            scale: 0.7,
            filter: "brightness(80%)",
          });
        }

        document.querySelector(".total-memories").textContent =
          "Total Memories: " + totalMemories;
      }
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
});

Draggable.create(".submit-card", {
  bounds: window,
  cursor: "pointer",
  throwProps: true,
  autoScroll: 1,
  onDrag: dragCookie,
  onRelease: releaseCookie,
  zIndexBoost: true,
});

function isColliding(element1, element2) {
  const rect1 = element1.getBoundingClientRect();
  const rect2 = element2.getBoundingClientRect();

  return !(
    rect1.top > rect2.bottom ||
    rect1.right < rect2.left ||
    rect1.bottom < rect2.top ||
    rect1.left > rect2.right
  );
}

function dragCookie() {
  let dragDirection = this.getDirection("velocity");
  let skew;
  dragDirection === "right"
    ? (skew = 9)
    : dragDirection === "left"
    ? (skew = -9)
    : 0;
  if (this.hitTest(jar, "40%")) {
    shakeJarAnimation().play();
    TweenMax.to(this.target, 0.3, { scale: 0.7, filter: "brightness(80%)" });
  } else {
    shakeJarAnimation().kill(0);
    TweenMax.to(this.target, 0.3, {
      skewX: skew,
      scale: 1,
      filter: "brightness(100%)",
    });
  }
}

function releaseCookie() {
  shakeJarAnimation().kill(0);
  let jarBottom =
    $(window).height() - $(".jar").offset().top - $(".jar").height();
  let cookieBottom =
    $(window).height() - $(this.target).offset().top - $(this.target).height();
  let distance =
    cookieBottom - jarBottom + this.y + $(this.target).height() * 10.5 - 100;
  console.log(jarBottom, cookieBottom, distance);
  if (this.hitTest(jar, "80%")) {
    TweenMax.to(this.target, 1, {
      skewX: 0,
      x: this.x,
      y: distance,
      ease: Bounce.easeOut,
    });
  }
}

function shakeJarAnimation() {
  return TweenMax.fromTo(
    jar,
    0.3,
    { x: -1, y: -1 },
    {
      x: 1,
      y: 1,
      repeat: -1,
      ease: RoughEase.ease.config({
        strength: 7,
        points: 7,
        template: Linear.easeNone,
        randomize: false,
      }),
      clearProps: "x",
    },
    0
  );
}

function handleAddMessage() {
  let memory = document.querySelector("#message-input").value;
  // const imageInput = document.getElementById("image-input");
  // const imageData = imageInput.files[0];
  // console.log(imageData);
  if (memory === "") {
    return;
  }
  console.log(memory);
  // var submitCard = document.getElementById("submit-card");
  // submitCard.classList.remove("hidden");
  // submitCard.classList.add("show");
  var submitCardContainer = document.getElementById("submit-card-container");

  var submitCard = document.createElement("div");
  submitCard.setAttribute("id", "memory" + totalMemories);
  submitCard.classList.add("card", "submit-card");

  var heart = document.createElement("div");
  heart.setAttribute("class", "heart");

  submitCard.appendChild(heart);

  submitCardContainer.appendChild(submitCard);

  Draggable.create(".submit-card", {
    bounds: window,
    cursor: "pointer",
    throwProps: true,
    autoScroll: 1,
    onDrag: dragCookie,
    onRelease: releaseCookie,
    zIndexBoost: true,
  });
  totalMemories += 1;

  // ========================
  // Creating Data
  // Sepeate the  Humne ye kiya tha, R like [ 'Humne ye kiya tha', 'R']
  var mem_writtenBy = memory.split("~");
  console.log(mem_writtenBy[1], mem_writtenBy[0]);

  const data = {
    user: mem_writtenBy[1],
    mem_text: mem_writtenBy[0],
    mem_img: "imageData",
  };

  // Configuration for the fetch request
  const requestOptions = {
    method: "POST", // HTTP request method
    headers: {
      "Content-Type": "application/json", // Content-Type header for JSON data
    },
    body: JSON.stringify(data), // Convert data to JSON string
  };

  // ========================
  // Fetching Data
  fetch(URL + "memory", requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // Parse JSON response
    })
    .then((data) => {
      // Handle response data
      console.log("Response:", data);
    })
    .catch((error) => {
      // Handle errors
      console.error("There was a problem with the fetch operation:", error);
    });
  document.querySelector("#message-input").value = "";
}

function handleRandomGenerate() {
  // Set random generator to 0 - totalMemories only integer
  var randomMemory = Math.floor(Math.random() * totalMemories);
  const rightSideArea = document.querySelector(".right-side-area");
  rightSideArea.innerHTML = "";
  // Get the memory from the database
  fetch(URL + "memory/" + randomMemory)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if (data && data.length > 0) {
        const memory = data[0];
        const memText = memory.mem_text;
        // const memImg = memory.mem_img;
        // console.log(memImg);

        // Display memText
        const memTextElement = document.createElement("div");
        memTextElement.classList.add("mem-text");

        const textPara = document.createElement("p");
        textPara.classList.add("text-para");
        textPara.textContent = memText;
        memTextElement.appendChild(textPara);

        // memTextElement.textContent = memText;
        // memTextElement.classList.add("mem-text");
        document.querySelector(".right-side-area").appendChild(memTextElement);

        // Display memImg
        // const memImgElement = document.createElement("img");
        // memImgElement.src = memImg;
        // memImgElement.classList.add("mem-img");
        // document.querySelector(".right-side-area").appendChild(memImgElement);
      } else {
        console.error("No memory found in the response");
      }
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}
