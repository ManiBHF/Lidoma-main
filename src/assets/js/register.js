document.addEventListener("DOMContentLoaded", function() {
    const importantForms = document.querySelectorAll(".important-form");
    const submitButton = document.getElementById("submitButton");
    const activationCheckbox1 = document.getElementById("activationCheckbox1"); 

    function checkImportantForms() {
        return Array.from(importantForms).every(form => {
            const emailInput = form.querySelector("input[type='email']");
            const textInputs = form.querySelectorAll("input[type='text']");
            const isEmailValid = isValidEmail(emailInput.value.trim());
            const areAllTextInputsFilled = Array.from(textInputs).every(input => input.value.trim() !== "");
            return isEmailValid && areAllTextInputsFilled;
        });
    }

    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    }

    function applyGrayscaleFilter() {
        submitButton.style.filter = "grayscale(100%)";
    }

    function checkActivationStatus() {
        const areImportantFormsValid = checkImportantForms();
        const isCheckbox1Checked = activationCheckbox1.checked;
        submitButton.disabled = !areImportantFormsValid || !(isCheckbox1Checked );
        if (areImportantFormsValid && isCheckbox1Checked ) {
            submitButton.style.filter = "none";
        } else {
            applyGrayscaleFilter();
        }
    }


    importantForms.forEach(form => {
        const emailInput = form.querySelector("input[type='email']");
        const textInputs = form.querySelectorAll("input[type='text']");
        
        emailInput.addEventListener("input", checkActivationStatus);
        textInputs.forEach(input => {
            input.addEventListener("input", checkActivationStatus);
        });
    });

    activationCheckbox1.addEventListener("change", checkActivationStatus);


    submitButton.addEventListener("click", function(event) {
        if (submitButton.disabled) {
            event.preventDefault();
            alert("لطفاً ایمیل را با فرمت صحیح وارد کنید و تمام متن‌ها را در فرم‌های اصلی پر کنید.");
        }
    });
});


function removeSwiperSlideClass() {
    const resolution = 768; // رزولوشن مورد نظر شما
    const swiperSlides = document.querySelectorAll('.swiper-slide');
  
    swiperSlides.forEach((element) => {
      if (window.innerWidth > resolution) {
        // حذف کلاس swiper-slide از هر عنصر div اگر رزولوشن بیشتر از 768px است
        element.classList.remove('swiper-slide');
      } else {
        // اضافه کردن کلاس swiper-slide به هر عنصر div اگر رزولوشن به 768px یا کمتر باشد
        element.classList.add('swiper-slide');
      }
    });
  }
  
  // اجرای تابع برای ابتدا
  removeSwiperSlideClass();
  
  // گوش دادن به تغییر اندازه صفحه و اجرای تابع به طور مستمر
  window.addEventListener('resize', removeSwiperSlideClass);
  