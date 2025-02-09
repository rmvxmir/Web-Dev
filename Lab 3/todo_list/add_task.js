function add_task(event) {
    event.preventDefault();

    let task_text = document.getElementById("task_input").value.trim();
    if (task_text == "") return;

    let task_list = document.getElementById("task_list");

    let task_div = document.createElement("div");
    task_div.className = "d-flex align-items-center justify-content-between p-2 border rounded";

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "form-check-input ms-2 mb-1";
    checkbox.onclick = function () {
        task_text_element.classList.toggle("text-decoration-line-through");
    };

    let task_text_element = document.createElement("span");
    task_text_element.className = "ms-4 flex-grow-1";
    task_text_element.textContent = task_text;

    let delete_button = document.createElement("button");
    delete_button.className = "btn btn-sm me-2 mb-1";
    delete_button.innerHTML = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgy6cH4pk8uBtQ-_MBHx5MtDO8ms62KxR0UQ&s" width="15" height="20" alt="delete">';
    delete_button.onclick = function () {
        task_div.remove();
    };

    task_div.appendChild(checkbox);
    task_div.appendChild(task_text_element);
    task_div.appendChild(delete_button);

    task_list.appendChild(task_div);

    document.getElementById("task_input").value = "";
}
