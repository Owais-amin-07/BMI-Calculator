function calculateBMI() {
  const heightInput = document.getElementById('height');
  const weightInput = document.getElementById('weight');
  
  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);

  // Validation
  if (!height || !weight) {
    alert('Please enter both height and weight!');
    return;
  }

  if (height <= 0 || weight <= 0) {
    alert('Please enter valid positive values!');
    return;
  }

  // Calculation: BMI = weight (kg) / height (m)^2
  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

  // Determine Category and Styling
  let category = '';
  let color = '';
  let message = '';
  let emoji = '';
  let bgColor = '';

  if (bmi < 18.5) {
    category = 'Underweight';
    color = 'var(--color-underweight)';
    bgColor = 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)';
    message = 'You are underweight. It\'s important to eat a balanced diet and consult a nutritionist.';
    emoji = '😟';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = 'Normal';
    color = 'var(--color-normal)';
    bgColor = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
    message = 'Great job! You have a healthy body weight. Keep maintaining your lifestyle.';
    emoji = '😊';
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = 'Overweight';
    color = 'var(--color-overweight)';
    bgColor = 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)';
    message = 'You are slightly overweight. Consider a balanced diet and regular exercise.';
    emoji = '😐';
  } else {
    category = 'Danger / Obese';
    color = 'var(--color-obese)';
    bgColor = 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';
    message = 'Your BMI is in the obese range. Please consult a healthcare professional for advice.';
    emoji = '😰';
  }

  // Update UI
  const resultSection = document.getElementById('result-section');
  const bmiValueEl = document.getElementById('bmi-value');
  const bmiCategoryEl = document.getElementById('bmi-category');
  const bmiMessageEl = document.getElementById('bmi-message');
  const bmiEmojiEl = document.getElementById('bmi-emoji');

  bmiValueEl.textContent = bmi;
  bmiValueEl.style.color = color;
  
  bmiCategoryEl.textContent = category;
  bmiCategoryEl.style.color = color;
  
  bmiMessageEl.textContent = message;
  bmiEmojiEl.textContent = emoji;

  // Change Body Background
  document.body.style.background = bgColor;

  // Show Result Section
  resultSection.classList.add('active');
}

function resetForm() {
  document.getElementById('height').value = '';
  document.getElementById('weight').value = '';
  
  const resultSection = document.getElementById('result-section');
  resultSection.classList.remove('active');
  
  // Reset background
  document.body.style.background = 'var(--bg-gradient)';
}
