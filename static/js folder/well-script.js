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

function calculateOvulation() {
    var lastPeriod = document.getElementById("lastPeriod").value;

    // Calculate ovulation period based on the last menstrual period (LMP)
    // Add your ovulation calculation logic here

    // Example calculation using a fixed ovulation period of 14 days
    var ovulationDate = new Date(lastPeriod);
    ovulationDate.setDate(ovulationDate.getDate() + 14);

    // Calculate the range of ovulation period (usually a few days before and after the calculated ovulation date)
    var ovulationPeriodStart = new Date(ovulationDate);
    ovulationPeriodStart.setDate(ovulationPeriodStart.getDate() - 3);

    var ovulationPeriodEnd = new Date(ovulationDate);
    ovulationPeriodEnd.setDate(ovulationPeriodEnd.getDate() + 3);

    // Display the result
    var ovulationResult = "Your estimated ovulation period is from " + ovulationPeriodStart.toDateString() + " to " + ovulationPeriodEnd.toDateString();
    document.getElementById("ovulationResult").innerHTML = ovulationResult;
}

function calculateChildrenHealth() {
    var age = document.querySelector('input[name="age"]:checked').value;
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    if (age >= 5 && age < 13) {
        // Calculate health based on age, weight, and height for ages above 5 and less than 13
        // Add your health calculation logic here

        // Example assessment based on BMI calculation
        var bmi = weight / ((height / 100) * (height / 100));
        var healthStatus = "";

        if (bmi < 18.5) {
            healthStatus = "Underweight";
        } else if (bmi >= 18.5 && bmi < 25) {
            healthStatus = "Normal weight";
        } else if (bmi >= 25 && bmi < 30) {
            healthStatus = "Overweight";
        } else {
            healthStatus = "Obese";
        }

        // Display the result and advice
        document.getElementById("childrenHealthResult").innerHTML = "Based on the BMI calculation, the child's health status is: " + healthStatus;
        document.getElementById("childrenHealthAdvice").innerHTML = "Advice: Provide a balanced diet and encourage regular physical activity.";
    } else if (age >= 13 && age < 18) {
        // Calculate health based on age, weight, and height for ages above 13 and less than 18
        // Add your health calculation logic here

        // Example assessment based on weight and height percentiles
        var weightPercentile = calculateWeightPercentile(weight);
        var heightPercentile = calculateHeightPercentile(height);
        var healthStatus = "";

        if (weightPercentile >= 10 && weightPercentile <= 90 && heightPercentile >= 10 && heightPercentile <= 90) {
            healthStatus = "Healthy";
        } else {
            healthStatus = "Concerning";
        }

        // Display the result and advice
        document.getElementById("childrenHealthResult").innerHTML = "Based on weight and height percentiles, the child's health status is: " + healthStatus;
        document.getElementById("childrenHealthAdvice").innerHTML = "Advice: Consult with a healthcare professional for a thorough evaluation.";
    }
}

function calculateWeightPercentile(weight) {
    // Example calculation logic for weight percentile
    // Replace this with actual calculations or consult a medical reference

    // Example weight percentiles for age group 13-18
    var weightPercentiles = {
        10: 50,
        25: 55,
        50: 60,
        75: 65,
        90: 70
    };

    // Find the closest weight percentile based on the provided weight
    var closestPercentile = null;
    var closestDiff = Infinity;
    for (var percentile in weightPercentiles) {
        var diff = Math.abs(weight - weightPercentiles[percentile]);
        if (diff < closestDiff) {
            closestPercentile = percentile;
            closestDiff = diff;
        }
    }

    return closestPercentile;
}

function calculateHeightPercentile(height) {
    // Example calculation logic for height percentile
    // Replace this with actual calculations or consult a medical reference

    // Example height percentiles for age group 13-18
    var heightPercentiles = {
        10: 150,
        25: 155,
        50: 160,
        75: 165,
        90: 170
    };
    // Find the closest height percentile based on the provided height
    var closestPercentile = null;
    var closestDiff = Infinity;
    for (var percentile in heightPercentiles) {
        var diff = Math.abs(height - heightPercentiles[percentile]);
        if (diff < closestDiff) {
            closestPercentile = percentile;
            closestDiff = diff;
        }
    }

    return closestPercentile;
}


function calculateBabyHealth() {
    var babyWeight = document.getElementById("babyWeight").value;

    // Example calculation based on weight
    var weightPercentile = calculateWeightPercentile1(babyWeight);

    // Display the result
    document.getElementById("babyHealthResult").innerHTML = "The baby's weight percentile is: " + weightPercentile;
}

function calculateWeightPercentile1(weight) {
    // Example calculation logic for weight percentile
    // You can replace this with your own calculation method or consult a medical reference

    // Assume you have a set of weight percentiles and their corresponding values
    var weightPercentiles = {
        3: 2.5,
        10: 3.1,
        25: 3.8,
        50: 4.5,
        75: 5.2,
        90: 6.0,
        97: 6.8
    };

    // Find the closest weight percentile based on the provided weight
    var closestPercentile = null;
    var closestDiff = Infinity;
    for (var percentile in weightPercentiles) {
        var diff = Math.abs(weight - weightPercentiles[percentile]);
        if (diff < closestDiff) {
            closestPercentile = percentile;
            closestDiff = diff;
        }
    }

    return closestPercentile;
}


// Sample nutrient requirement values (in mg/g)
var MINIMUM_PROTEIN_REQUIREMENT = 0.8; // Minimum protein requirement per kg of body weight
var MINIMUM_VITAMIN_C_REQUIREMENT = 75; // Minimum daily requirement of Vitamin C (in mg)
var MINIMUM_CALCIUM_REQUIREMENT = 1000; // Minimum daily requirement of Calcium (in mg)

function calculateNutrition() {
    var protein = document.getElementById("protein").value;
    var vitaminC = document.getElementById("vitaminC").value;
    var calcium = document.getElementById("calcium").value;
    var weight = document.getElementById("weight").value;

    // Calculate nutrient requirements based on user input and minimum requirements
    var proteinRequirement = MINIMUM_PROTEIN_REQUIREMENT * weight;
    var vitaminCRequirement = MINIMUM_VITAMIN_C_REQUIREMENT;
    var calciumRequirement = MINIMUM_CALCIUM_REQUIREMENT;

    // Calculate the deficit or excess of each nutrient
    var proteinStatus = protein - proteinRequirement;
    var vitaminCStatus = vitaminC - vitaminCRequirement;
    var calciumStatus = calcium - calciumRequirement;

    // Determine the recommendation message for each nutrient
    var proteinMessage = "You should consume at least " + proteinRequirement + " g of protein per day.";
    if (proteinStatus < 0) {
        proteinMessage += " You are not meeting the minimum protein requirement.";
    } else {
        proteinMessage += " You are meeting the minimum protein requirement.";
    }

    var vitaminCMessage = "You should consume at least " + vitaminCRequirement + " mg of Vitamin C per day.";
    if (vitaminCStatus < 0) {
        vitaminCMessage += " You are not meeting the minimum Vitamin C requirement.";
    } else {
        vitaminCMessage += " You are meeting the minimum Vitamin C requirement.";
    }

    var calciumMessage = "You should consume at least " + calciumRequirement + " mg of Calcium per day.";
    if (calciumStatus < 0) {
        calciumMessage += " You are not meeting the minimum Calcium requirement.";
    } else {
        calciumMessage += " You are meeting the minimum Calcium requirement.";
    }

    // Display the results
    document.getElementById("proteinRequirement").innerHTML = proteinMessage;
    document.getElementById("vitaminCRequirement").innerHTML = vitaminCMessage;
    document.getElementById("calciumRequirement").innerHTML = calciumMessage;
}

// Example usage: calculateNutrition() can be called when a button is clicked or when the input values change.

function checkHeartRate() {
    var heartRate = document.getElementById("heartRate").value;

    // Heart rate checking logic
    if (heartRate < 60) {
        document.getElementById("heartRateResult").innerHTML = "Your heart rate is below the normal range.";
    } else if (heartRate >= 60 && heartRate <= 100) {
        document.getElementById("heartRateResult").innerHTML = "Your heart rate is within the normal range.";
    } else {
        document.getElementById("heartRateResult").innerHTML = "Your heart rate is above the normal range.";
    }
}

function checkBloodPressure() {
    var systolic = document.getElementById("systolic").value;
    var diastolic = document.getElementById("diastolic").value;

    // Blood pressure checking logic
    if (systolic < 90 || diastolic < 60) {
        document.getElementById("bloodPressureResult").innerHTML = "Your blood pressure is below the normal range.";
    } else if ((systolic >= 90 && systolic <= 120) && (diastolic >= 60 && diastolic <= 80)) {
        document.getElementById("bloodPressureResult").innerHTML = "Your blood pressure is within the normal range.";
    } else if ((systolic > 120 && systolic <= 140) || (diastolic > 80 && diastolic <= 90)) {
        document.getElementById("bloodPressureResult").innerHTML = "Your blood pressure is in the prehypertension range.";
    } else {
        document.getElementById("bloodPressureResult").innerHTML = "Your blood pressure is above the normal range.";
    }
}

function assessSleepQuality() {
    var hoursOfSleep = document.getElementById("hoursOfSleep").value;
    var resultElement = document.getElementById("sleepQualityResult");

    if (hoursOfSleep < 7) {
        resultElement.innerHTML = "You may not be getting enough sleep. Aim for at least 7 hours of sleep per night for optimal sleep quality.";
    } else {
        resultElement.innerHTML = "Your sleep duration seems to be adequate. Keep maintaining a consistent sleep schedule and good sleep hygiene practices.";
    }
}

function assessStressLevels() {
    var stressLevel = document.getElementById("stressLevel").value;
    var resultElement = document.getElementById("stressLevelsResult");

    if (stressLevel >= 7) {
        resultElement.innerHTML = "Your stress levels seem to be high. Consider incorporating stress management techniques such as relaxation exercises, meditation, or seeking support from a therapist.";
    } else {
        resultElement.innerHTML = "Your stress levels are relatively low. Continue practicing stress reduction techniques and maintaining a healthy work-life balance.";
    }
}

function assessMentalWellbeing() {
    var anxietyLevel = document.getElementById("anxietyLevel").value;
    var depressionLevel = document.getElementById("depressionLevel").value;
    var resultElement = document.getElementById("mentalWellbeingResult");

    if (anxietyLevel >= 5 || depressionLevel >= 5) {
        resultElement.innerHTML = "You may be experiencing elevated levels of anxiety or depression. It is advisable to seek support from a mental health professional for further evaluation and assistance.";
    } else {
        resultElement.innerHTML = "Your mental well-being appears to be stable. Continue practicing self-care activities and maintaining a positive mindset.";
    }
}

function assessPhysicalFitness() {
    var cardioFitness = document.getElementById("cardioFitness").value;
    var strengthFitness = document.getElementById("strengthFitness").value;
    var resultElement = document.getElementById("physicalFitnessResult");

    if (cardioFitness < 3 || strengthFitness < 3) {
        resultElement.innerHTML = "You may need to focus more on improving your cardiovascular fitness and muscular strength. Consider incorporating regular exercise and strength training into your routine.";
    } else {
        resultElement.innerHTML = "Your physical fitness levels are good. Continue with your current exercise regimen and strive for consistency.";
    }
}

function assessHydration() {
    var dailyWaterIntake = document.getElementById("dailyWaterIntake").value;
    var resultElement = document.getElementById("hydrationResult");

    if (dailyWaterIntake < 8) {
        resultElement.innerHTML = "Your daily water intake seems to be below the recommended amount. Aim for at least 8 cups (2 liters) of water per day to maintain proper hydration.";
    } else {
        resultElement.innerHTML = "You are meeting the recommended daily water intake. Keep up the good work in staying adequately hydrated.";
    }
}

function assessSocialConnections() {
    var socialInteractions = document.getElementById("socialInteractions").value;
    var resultElement = document.getElementById("socialConnectionsResult");


    if (socialInteractions < 3) {
        resultElement.innerHTML = "Your social interactions may be limited. It is important to foster meaningful connections with others. Consider engaging in social activities, joining clubs or groups, or reaching out to friends and family.";
    } else {
        resultElement.innerHTML = "You have a healthy level of social connections. Keep nurturing your relationships and engaging in social activities for overall well-being.";
    }
}

function assessEmotionalIntelligence() {
    var selfAwareness = document.getElementById("selfAwareness").value;
    var selfRegulation = document.getElementById("selfRegulation").value;
    var resultElement = document.getElementById("emotionalIntelligenceResult");

    if (selfAwareness < 4 || selfRegulation < 4) {
        resultElement.innerHTML = "You may benefit from further developing your emotional intelligence skills. Consider practices such as self-reflection, mindfulness, and seeking resources on emotional intelligence to enhance your abilities.";
    } else {
        resultElement.innerHTML = "You have good emotional intelligence skills. Keep practicing self-awareness, self-regulation, empathy, and effective relationship management.";
    }
}

function assessCognitiveFunction() {
    var memoryFunction = document.getElementById("memoryFunction").value;
    var attentionSpan = document.getElementById("attentionSpan").value;
    var resultElement = document.getElementById("cognitiveFunctionResult");

    if (memoryFunction < 3 || attentionSpan < 3) {
        resultElement.innerHTML = "Your cognitive function may need improvement. Consider engaging in brain-stimulating activities such as puzzles, reading, or learning new skills to enhance memory and attention.";
    } else {
        resultElement.innerHTML = "Your cognitive function is at a good level. Keep challenging your brain with various activities to maintain and enhance cognitive abilities.";
    }
}

function assessEnvironmentalFactors() {
    var pollutionExposure = document.getElementById("pollutionExposure").value;
    var accessToGreenSpaces = document.getElementById("accessToGreenSpaces").value;
    var resultElement = document.getElementById("environmentalFactorsResult");

    if (pollutionExposure >= 4 || accessToGreenSpaces < 3) {
        resultElement.innerHTML = "Your environmental factors may impact your wellness. Consider minimizing exposure to pollution and spending more time in green spaces to promote a healthier environment.";
    } else {
        resultElement.innerHTML = "Your environmental factors seem to be favorable for wellness. Continue to make conscious choices that support a healthy and clean environment.";
    }
}

function assessLifestyleHabits() {
    var nutritionScore = document.getElementById("nutritionScore").value;
    var physicalActivityLevel = document.getElementById("physicalActivityLevel").value;
    var resultElement = document.getElementById("lifestyleHabitsResult");

    if (nutritionScore < 3 || physicalActivityLevel < 3) {
        resultElement.innerHTML = "Your lifestyle habits may need improvement. Consider focusing on a balanced and nutritious diet, as well as increasing your level of physical activity for overall well-being.";
    } else {
        resultElement.innerHTML = "Your lifestyle habits are good. Continue maintaining a balanced diet and engaging in regular physical activity for a healthy lifestyle.";
    }
}      

const items = document.querySelectorAll(".accordion button");

        function toggleAccordion() {
            const itemToggle = this.getAttribute('aria-expanded');

            for (i = 0; i < items.length; i++) {
                items[i].setAttribute('aria-expanded', 'false');
            }

            if (itemToggle == 'false') {
                this.setAttribute('aria-expanded', 'true');
            }
        }

        items.forEach(item => item.addEventListener('click', toggleAccordion));