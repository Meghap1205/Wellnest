function toggleContent(sectionId) {
  const contentSection = document.getElementById(sectionId);
  const content = contentSection.querySelector('.expandable-content');
  const readMoreLink = contentSection.querySelector('.read-more-link');

  if (content.classList.contains('open')) {
    content.classList.remove('open');
    readMoreLink.innerText = 'Read more';
  } else {
    content.classList.add('open');
    readMoreLink.innerText = 'Read less';
  }
}

function calculateBMI() {
  const weightInput = document.getElementById('weight-input');
  const heightInput = document.getElementById('height-input');
  const bmiResult = document.getElementById('bmi-result');

  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);

  if (!isNaN(weight) && !isNaN(height)) {
    const bmi = weight / ((height * height) / 10000);
    bmiResult.innerText = 'Your BMI: ' + bmi.toFixed(2);
  } else {
    bmiResult.innerText = 'Please enter valid weight and height.';
  }
}
