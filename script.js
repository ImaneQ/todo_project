window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks');

    // action here is 'submit' , preventDefault() empeche que l'action ne se produise
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // on récupère la valeure de l'input
        const task = input.value;
        // si il n'y a pas de tâches, alert
        if (!task) {
            alert('Please fill out the task');
            return;
        }
        // créer une div
        const task_el = document.createElement("div");
        // on ajoute une classe à cette nouvelle "div"
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");
        // la méthode appendChild ajoute un noeud (élément) en tant que dernier enfant d'un élément 
        task_el.appendChild(task_content_el);

        // On créer un input
        const task_input_el = document.createElement("input");
        // on lui ajoute une classe
        task_input_el.classList.add("text");
        // on précise le type de l'input
        task_input_el.type = "text";
        // on nomme la valeure insérée dans l'input 'task'
        task_input_el.value = task;
        // Ajouter un nouvel attribut avec la fonction setAttribute()
        task_input_el.setAttribute("readonly", "readonly")

        task_content_el.appendChild(task_input_el);

        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerHTML = "Edit";

        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        // définit la syntaxe HTML InnerHtml
        task_delete_el.innerHTML = "Delete";

        const task_actions_el = document.createElement("div");
        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el);

        // On récupère la valeur de l'input
        input.value="";

        task_edit_el.addEventListener('click', () =>{
            if (task_edit_el.innerText.toLowerCase() == "edit"){
                // Auclick on supprime l'attribut readonly avec removeAttribute
                task_input_el.removeAttribute("readonly");
                // focus() place le focus sur l'élément indiqué, il recevra par défaut les événements analogues
                task_input_el.focus();
                task_edit_el.innerText = "Save";

            }else{
                task_input_el.setAttribute("readonly",
                "readonly");
                task_edit_el.innerText="Edit";
            }
        })


        task_delete_el.addEventListener('click', () => {
            list_el.removeChild(task_el);
        })
    })
})