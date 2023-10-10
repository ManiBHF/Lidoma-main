let tabs = document.querySelectorAll(".tabs button");
let tabContents = document.querySelectorAll(".tab-content section");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabContents.forEach((content) => {
      content.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tabContents[index].classList.add("active");
    tabs[index].classList.add("active");
  });
});


function myFunction() {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more");
  let btnText = document.getElementById("myBtn-h");


if (dots.style.display === "none") {
  dots.style.display = "inline";
  btnText.innerHTML = "Read more";
  moreText.style.display = "none";
} else {
  // dots.style.display = "none";
  btnText.style.display = "none"
  // btnText.innerHTML = "Read less";
  moreText.style.display = "inline";
}
}



var modal = document.getElementById("myModal");


// Get the button that opens the modal
var btn1 = document.getElementById("myBtn");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks the button, open the modal
btn1.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


// const buttonLabels = ["دکمه ۱", "دکمه ۲", "دکمه ۳", "دکمه ۴", "دکمه ۵", "دکمه ۶", "دکمه ۷", "دکمه ۸"];

// const buttonsContainer = document.getElementById('buttons');
// const modal = document.getElementById('modal');
// const modalText = document.getElementById('modalText');
// const closeModal = document.getElementById('closeModal');

// buttonLabels.forEach((label, index) => {
//     const button = document.createElement('button');
//     button.textContent = label;
//     buttonsContainer.appendChild(button);

//     button.addEventListener('click', () => {
//         modal.style.display = 'block';
//         modalText.textContent = ${index + 1} ;
//     });
// });

// closeModal.addEventListener('click', () => {
//     modal.style.display = 'none';
// });

// window.addEventListener('click', (event) => {
//     if (event.target === modal) {
//         modal.style.display = 'none';
//     }
// });



