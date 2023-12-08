// Function to compare areas and update the result
function compareAreas() {
    // Get the diameter and quantity input values for both pizzas
    const diameter1 = parseFloat(document.getElementById("diameterInput1").value);
    const quantity1 = parseInt(document.getElementById("quantityInput1").value, 10);
    
    const diameter2 = parseFloat(document.getElementById("diameterInput2").value);
    const quantity2 = parseInt(document.getElementById("quantityInput2").value, 10);

    // Check if the inputs are valid numbers and quantities
    if (!isNaN(diameter1) && !isNaN(quantity1) && !isNaN(diameter2) && !isNaN(quantity2) && quantity1 > 0 && quantity2 > 0 && diameter1 > 0 && diameter2 > 0) {
        // Calculate the total areas of the pizzas
        const area1 = Math.PI * Math.pow(diameter1 / 2, 2) * quantity1;
        const area2 = Math.PI * Math.pow(diameter2 / 2, 2) * quantity2;

        // Determine which pizza is bigger
        let biggerPizza = "";
        if (area1 > area2) {
            biggerPizza = "The first pizza is bigger";
        } else if (area1 < area2) {
            biggerPizza = "The second pizza is bigger";
        } else {
            biggerPizza = "Both pizzas have the same total area";
        }

        // Calculate the percentage difference
        const percentageDifference = ((area1 - area2) / area2) * 100;

        // Display the result with both areas, quantities, and friendlier percentage difference
        let resultMessage = `<strong>${biggerPizza}.</strong><br>Total area of Pizza A: ${area1.toFixed(0)} square inches (Quantity: ${quantity1}).<br>Total area of Pizza B: ${area2.toFixed(0)} square inches (Quantity: ${quantity2}).<br>`;
        
        if (percentageDifference > 0) {
            resultMessage += `Pizza A is <strong>${percentageDifference.toFixed(0)}% bigger</strong> than Pizza B.`;
        } else if (percentageDifference < 0) {
            resultMessage += `Pizza A is <strong>${Math.abs(percentageDifference).toFixed(0)}% smaller</strong> than Pizza B.`;
        } else {
            resultMessage += "Pizzas A and B have the same total area.";
        }

        document.getElementById("result").innerHTML = resultMessage;
    } else {
        // Display an error message if the inputs are not valid numbers or quantities
        document.getElementById("result").innerHTML = "<strong>Please enter valid numbers and quantities for the pizzas.</strong>";
    }
}

// Add event listener to update the result on input change
document.querySelector('.container').addEventListener('input', compareAreas);

// Initial comparison on page load
compareAreas();