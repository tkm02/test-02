function ajouterTache() {
    const tacheInput = document.getElementById('tacheInput');
    const taskList = document.getElementById('liste');
  
    const tacheValue = tacheInput.value.trim();
  
    if (tacheValue !== '') {
      // Créer un nouvel élément li
      const li = document.createElement('li');
  
      // Contenu de l'élément li
      li.innerHTML = `
        <h4>${tacheValue}</h4>
        <button onclick="deleteTache(this)">Supprimer</button>
        <input type="checkbox" onchange="toggleTaskCompletion(this)" />
      `;
  
      // Ajouter l'élément li à la liste des tâches
      taskList.appendChild(li);
  
      // Effacer le champ de saisie
      taskInput.value = '';
    }
  }
  function deleteTache(btn){
    const li = btn.parentElement;
    const taskList = document.getElementById('liste');
    taskList.removeChild(li);

  }
  const btnAdd = document.getElementById("btnAdd")
  btnAdd.addEventListener('click',ajouterTache)

 

