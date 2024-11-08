async function loadFeature(featureName) {
  const module = await import(`./features/${featureName}.js`);
  module.initFeature();
}

function generateScript() {
  const scriptContent = window.generateCiscoScript();
  const newWindow = window.open("", "_blank");
  newWindow.document.write(`<pre>${scriptContent}</pre>`);
}

async function loadFeatureButtons() {
  const featureNames = ["hostname", "password", "interface", "vlan"];  // Liste de noms de fonctionnalités
  const featureButtonsContainer = document.getElementById("feature-buttons");

  featureNames.forEach(featureName => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = `Ajouter ${featureName}`;
    button.onclick = () => loadFeature(featureName);
    featureButtonsContainer.appendChild(button);
  });
}

// Initialise le générateur de script global
window.generateCiscoScript = function() {
  return window.scriptParts.join("\n");
};

// Initialise les parties de script
window.scriptParts = [];
loadFeatureButtons();
