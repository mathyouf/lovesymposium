// Get the modal and close button
var modal = document.getElementById("gallery-modal");
var closeButton = document.getElementsByClassName("close")[0];

// Next & previous buttons in the modal
var nextButton = document.getElementById("next-button");
var prevButton = document.getElementById("prev-button");

// Get all the image links in the gallery
var imageLinks = Array.from(document.getElementsByClassName("photo-gallery-image"))

// Variables to track the currently displayed image and total number of images
var currentImageIndex = 0;
var totalImages = imageLinks.length;

// Function to display the current image
function displayImage(index) {
  // Get the larger image URL from the data attribute
  var imageURL = imageLinks[index].getAttribute("src");

  // Update the modal image source
  var modalImage = document.getElementById("modal-image");
  modalImage.src = imageURL;
}

function openModal() {
  modal.style.display = "block";
  displayImage(currentImageIndex);
}

function closeModal() {
  modal.style.display = "none";
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % totalImages;
  displayImage(currentImageIndex);
}

function previousImage() {
  currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
  displayImage(currentImageIndex);
}

// Add click event listeners to each image link
imageLinks.forEach(function (link, index) {
  link.addEventListener("click", function () {
    currentImageIndex = index;
    openModal();
  });
});

// Close the modal when the close button is clicked
closeButton.addEventListener("click", closeModal);

// Close the modal when the user clicks outside of it
modal.addEventListener("click", function (event) {
  if ("className" in event.target && event.target.className === "modal-content") {
    closeModal();
  }
});

// Add keydown event listener for arrow keys for modal navigation, and escape for closing it
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    previousImage();
  } else if (event.key === "ArrowRight") {
    nextImage();
  } else if (event.key === "Escape") {
    closeModal();
  }
});

// Also add modal navigation via button cick
nextButton.addEventListener("click", function () {
  currentImageIndex = (currentImageIndex + 1) % totalImages;
  displayImage(currentImageIndex);
});

prevButton.addEventListener("click", function () {
  currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
  displayImage(currentImageIndex);
});