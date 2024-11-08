export function initFeature() {
    const configForm = document.getElementById("configForm");
    const div = document.createElement("div");
    div.classList.add("form-group");
    div.innerHTML = `
      <label for="hostname">Nom d'Hôte:</label>
      <input type="text" id="hostname" placeholder="Nom du périphérique">
    `;
    configForm.appendChild(div);
  
    window.generateCiscoScript = () => {
      const hostname = document.getElementById("hostname").value;
      if (hostname) {
        window.scriptParts.push(`configure terminal\nhostname ${hostname}\nexit`);
      }
    };
  }
  