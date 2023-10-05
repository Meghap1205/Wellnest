function calculateBMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    var bmi = weight / ((height / 100) * (height / 100));
    bmi = bmi.toFixed(2);

    var bmiResult = "Your BMI is: " + bmi;

    var bmiCategory = "";
    var requirements = "";

    if (bmi < 18.5) {
        bmiCategory = "Underweight";
        requirements = "Minimum requirement: Increase calorie intake and consider consulting a healthcare professional.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiCategory = "Normal weight";
        requirements = "Minimum requirement: Maintain a balanced diet and regular physical activity.";
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiCategory = "Overweight";
        requirements = "Minimum requirement: Adopt a healthier lifestyle by incorporating exercise and managing calorie intake.";
    } else {
        bmiCategory = "Obese";
        requirements = "Minimum requirement: Seek guidance from a healthcare professional for weight management.";
    }

    document.getElementById("bmiResult").innerHTML = bmiResult;
    document.getElementById("bmiCategory").innerHTML = "Category: " + bmiCategory;
    document.getElementById("requirements").innerHTML = requirements;
}