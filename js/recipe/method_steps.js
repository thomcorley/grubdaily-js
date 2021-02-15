export function displayMethodSteps(recipe) {
  // Method steps list
  const instructionsList = document.querySelector("ol");

   recipe.recipeInstructions.forEach(function(instruction) {
    let instructionElement = document.createElement("li");
    instructionElement.innerHTML = instruction;
    instructionsList.appendChild(instructionElement);
    instructionsList.appendChild(document.createElement("br"))
   });
};
