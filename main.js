let saturate = document.getElementById("saturate");
let contrast = document.getElementById("contrast");
let brightness = document.getElementById("brightness");
let sepia = document.getElementById("sepia");
let grayscale = document.getElementById("grayscale");
let blur = document.getElementById("blur");
let hueRotate = document.getElementById("hue-rotate");

let upload = document.getElementById("upload");
let download = document.getElementById("download");
let img = document.getElementById("img");

let reset = document.querySelector("span");
let imgBox = document.querySelector(".img-box");

function resetValue() {
  img.style.filter = "none";
  saturate.value = "100";
  contrast.value = "100";
  brightness.value = "100";
  sepia.value = "0";
  grayscale.value = "0";
  blur.value = "0";
  hueRotate.value = "0";
}

window.onload = function () {
  download.style.display = "none";
  reset.style.display = "none";
  imgBox.style.display = "none";
};

upload.onchange = function () {
  resetValue();
  download.style.display = "block";
  reset.style.display = "block";
  imgBox.style.display = "block";

  let file = new FileReader(); //fileReader is a class, it is a class to read files
  file.readAsDataURL(upload.files[0]); //there are different ways to read, one of them is using
  //  url, upload is treated as an array
  file.onload = function () {
    img.src = file.result;
  };
};

let filters = document.querySelectorAll("ul li input");
filters.forEach((filter) => {
  filter.addEventListener("input", function () {
    img.style.filter = `
     saturate(${saturate.value}%)
     contrast(${contrast.value}%)
     brightness(${brightness.value}%)
     sepia(${sepia.value}%)
     grayscale(${grayscale.value})
     blur(${blur.value}px)
     hue-rotate(${hueRotate.value}deg) `;
  });
});

// saturate.addEventListener("input", function () {
//   img.style.filter = `saturate(${saturate.value}%)`;
// });

// contrast.addEventListener("input", function () {
//   img.style.filter = `contrast(${contrast.value}%)`;
// });
