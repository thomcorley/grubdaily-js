export function displayMethodSteps(recipe) {
  // Method steps list
  const instructionsDiv = document.getElementById("method-steps");
  const instructionsList = document.createElement("ol");
  instructionsDiv.appendChild(instructionsList);

   recipe.recipeInstructions.forEach(function(instruction) {
    let instructionElement = document.createElement("li");
    instructionElement.innerHTML = instruction;
    instructionsList.appendChild(instructionElement);
    instructionsList.appendChild(document.createElement("br"))
   });
};
