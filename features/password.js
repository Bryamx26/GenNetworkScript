export function initFeature() {
    const configForm = document.getElementById("configForm");
    const div = document.createElement("div");
    div.classList.add("form-group");
    div.innerHTML = `
      <label for="password">Mot de Passe Privilégié:</label>
      <input type="password" id="password">
    `;
    configForm.appendChild(div);
  
    window.generateCiscoScript = () => {
      const password = document.getElementById("password").value;
      if (password) {
        window.scriptParts.push(`configure terminal\nenable secret ${password}\nexit`);
      }
    };
  }
  