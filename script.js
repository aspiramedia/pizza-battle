// Function to calculate the area. Note that diameter, not radius, is used.
function calcCircleArea(diameter, quantity) {
    return Math.PI * Math.pow(diameter / 2, 2) * quantity;
}

function calcPercentDiff(area1, area2) {
    return ((area1 - area2) / area2) * 100;
}

// Function to compare areas and update the result
function compareAreas() {
    // Get the diameter and quantity input values for both pizzas
    let diameter1 = parseFloat(document.getElementById("diameterInput1").value);
    const quantity1 = parseInt(document.getElementById("quantityInput1").value, 10);
    
    let diameter2 = parseFloat(document.getElementById("diameterInput2").value);
    const quantity2 = parseInt(document.getElementById("quantityInput2").value, 10);
    
    // Extra options
    const excludeCrust = document.getElementById("excludeCrust").checked;

    // Check if the inputs are valid numbers and quantities
    if (!isNaN(diameter1) && !isNaN(quantity1) && !isNaN(diameter2) && !isNaN(quantity2) && quantity1 > 0 && quantity2 > 0 && diameter1 > 0 && diameter2 > 0) {
        // Reduce the diameter if the "Exclude crust" option is checked
        if (excludeCrust) {
            diameter1 = diameter1 - 2;
            diameter2 = diameter2 - 2;
        }

        // Calculate the total areas of the pizzas
        const area1 = calcCircleArea(diameter1, quantity1);
        const area2 = calcCircleArea(diameter2, quantity2);

        // Determine which pizza is bigger
        let biggerPizza = "";
        if (area1 > area2) {
            biggerPizza = "Pizza A is bigger";
        } else if (area1 < area2) {
            biggerPizza = "Pizza B is bigger";
        } else {
            biggerPizza = "Both pizzas have the same total area";
        }

        // Calculate the percentage difference
        const percentageDifference = calcPercentDiff(area1, area2);

        // Display the result with both areas, quantities, and friendlier percentage difference
        let resultMessage = `<h3>${biggerPizza}.</h3><p>Total area of Pizza A: ${area1.toFixed(0)} square inches (Quantity: ${quantity1}).<br>Total area of Pizza B: ${area2.toFixed(0)} square inches (Quantity: ${quantity2}).<br>`;
        
        if (percentageDifference > 0) {
            resultMessage += `Pizza A is <strong>${percentageDifference.toFixed(0)}% bigger</strong> than Pizza B.</p>`;
        } else if (percentageDifference < 0) {
            resultMessage += `Pizza A is <strong>${Math.abs(percentageDifference).toFixed(0)}% smaller</strong> than Pizza B.</p>`;
        }

        document.getElementById("result").innerHTML = resultMessage;
    } else {
        // Display an error message if the inputs are not valid numbers or quantities
        document.getElementById("result").innerHTML = "<strong>Please enter valid numbers and quantities for the pizzas.</strong>";
    }
}

// Add event listener to update the result on input change
document.querySelector('body').addEventListener('input', compareAreas);

// Initial comparison on page load
compareAreas();