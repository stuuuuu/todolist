let fnc_todo = {
    // created counter for id purposes
    counter: 1,

    // adding list
    add: function () {
        let temp_val = document.getElementById("inp-add").value;
        if (!temp_val == "") {
            this.el_prepend(temp_val);
            document.getElementById("inp-add").value = "";
        } else {
            alert("Please input an item.");
        }
    },

    // editing list
    edit: function (id) {
        new_id = document.getElementById(id);
        new_id.classList.remove("no-pointer-events");
        new_id.focus();

        // add linethrough if it's in completed
        if (new_id.classList.contains("done")) {
            new_id.classList.remove("done");
        }
    },

    //  delete list item
    delete: function (id) {
        if (document.getElementById(id) == null) {
            document.getElementById("completed-" + id).remove();
        } else {
            new_id = document.getElementById(id);
            new_id.remove();
        }
    },

    complete: function (parent_id, check_id) {
        if (document.getElementById(check_id).checked) {
            // cloning the node
            let clone = document.getElementById(parent_id).cloneNode(true);

            // Change the id attribute of the newly created element
            clone.setAttribute("id", "completed-" + parent_id);

            // Append the newly created element to the completed list
            document.querySelector(".completed-todo-list").appendChild(clone);

            // Remove the original elements from todo list after cloning
            document.getElementById(parent_id).remove();

            // adding strikethrough on the text
            document.getElementById("inp-" + parent_id).classList.add("done");
        } else {
            // cloning the node
            let clone = document
                .getElementById("completed-" + parent_id)
                .cloneNode(true);

            // Change the id attribute of the newly created element
            clone.setAttribute("id", parent_id);

            // Append the newly created element to the completed list
            document.querySelector(".todo-list").appendChild(clone);

            // Remove the original elements from todo list after cloning
            document.getElementById("completed-" + parent_id).remove();

            // removing strikethrough on the text
            document
                .getElementById("inp-" + parent_id)
                .classList.remove("done");
        }
    },

    // prepending new list item
    el_prepend: function (val) {
        let new_counter = this.counter++;
        let new_el = document.createElement("div");
        new_el.setAttribute("class", `list`);
        new_el.setAttribute("id", `list-${new_counter}`);

        // create new sets of lists items
        new_el.innerHTML = `
            <div class="list-inp-container">
            <input type="checkbox" id="chk-list-${new_counter}" onclick="fnc_todo.complete('list-${new_counter}', 'chk-list-${new_counter}')"/>
            <input type="text" class="inp no-pointer-events" id="inp-list-${new_counter}" onfocusout="fnc_todo.focus_out('inp-list-${new_counter}')"/>
            </div>
            <div class="btn-container">
                <button class="btn btn-edit" onclick="fnc_todo.edit('inp-list-${new_counter}')">Edit</button>
                <button class="btn btn-delete" onclick="fnc_todo.delete('list-${new_counter}')">Delete</button>
            </div>
            `;

        document.querySelectorAll(".todo-list")[0].prepend(new_el);
        document.getElementById(`inp-list-${new_counter}`).value = val;
    },

    // when done editing and focus is not in the textbox
    focus_out: function (id) {
        if (
            document
                .getElementById(id)
                .parentElement.parentElement.id.includes("completed")
        ) {
            document.getElementById(id).classList.add("done");
            new_id.classList.add("no-pointer-events");
        } else {
            new_id = document.getElementById(id);
            new_id.classList.add("no-pointer-events");
        }
    },
};
