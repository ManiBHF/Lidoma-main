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




  // const modal = document.getElementById("myModal");

  // const btnModal = document.getElementById("myBtn");

  // const closeBtn = document.getElementsByClassName('.close');

  // closeBtn.onclick = function () {
  //   modal.style.display = "none";
  // };
  // btnModal.onclick = function () {
  //   modal.style.display = "block";
  // };


  // window.onclick = function (event) {
  //   if (event.target == modal) {
  //     modal.style.display = "none";
  //   }
  // };

 
  
  
  
  
  

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


function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "none";
  }
}

const modals = document.querySelectorAll(".modal");
const openButtons = document.querySelectorAll(".open-btn");
const closeButtons = document.querySelectorAll(".close");

openButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const modalId = button.getAttribute("data-modal");
    closeModal(modalId);
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = "block";
    }
  });
});
closeButtons.forEach(function (closeButton) {
  closeButton.addEventListener("click", function () {
    const modalId = closeButton.getAttribute("data-modal");
    closeModal(modalId);
  });
});
document.addEventListener("click", function (event) {
  modals.forEach(function (modal) {
    if (event.target == modal) {
      closeModal(modal.id);
    }
  });
});

const paragraphs = document.querySelectorAll(".readMore");

paragraphs.forEach((paragraph) => {
  const moreTextSpan = paragraph.querySelector(".more-text");
  const toggleButton = paragraph.querySelector(".toggle-btn");
  const hideButton = paragraph.querySelector(".hide-btn");

  toggleButton.addEventListener("click", function () {
    moreTextSpan.style.display = "flex";
    hideButton.style.display = "inline";
    toggleButton.style.display = "none";
  });

  hideButton.addEventListener("click", function () {
    moreTextSpan.style.display = "none";
    toggleButton.style.display = "inline";
    hideButton.style.display = "none";
  });
});




let emea = document.getElementById('emea')

emea.addEventListener('click', function () {
  this.style.backgroundColor = '#003399'
});

let asia = document.getElementById('asia')

asia.addEventListener('click', function () {
  this.style.backgroundColor = '#ffb200'
});

let latam = document.getElementById('latam')

latam.addEventListener('click', function () {
  this.style.backgroundColor = '#19ae47'
});

let turkey = document.getElementById('turkey')
turkey.addEventListener('click', function () {
  this.style.backgroundColor = '#ff0000'
});


