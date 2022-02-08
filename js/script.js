let fnc_todo = {
    // created counter for id purposes
    counter: 1,

    // adding list
    add: function () {
        let temp_val = document.getElementById("inp-add").value;
        this.el_prepend(temp_val);
    },

    // editing list
    edit: function (id) {
        new_id = document.getElementById(id);
        let el_val = new_id.value;
        console.log(id);
        new_id.classList.remove("no-pointer-events");
        new_id.focus();
    },

    //  delete list item
    delete: function (id) {
        new_id = document.querySelectorAll("." + id)[0];
        new_id.remove();
    },

    complete: function (parent_id, check_id) {
        parent_id = document.querySelectorAll("." + parent_id)[0];
        if (document.getElementById(check_id).checked) {
            // cloning the node
            let clone = parent_id.cloneNode(true);

            // Change the id attribute of the newly created element
            clone.setAttribute( 'id', "completed-"+parent_id );

            // Append the newly created element to the completed list
            document.querySelectorAll(".completed-todo-list")[0].appendChild(clone);
        } else {

        }
    },

    // prepending new list item
    el_prepend: function (val) {
        let new_counter = this.counter++;
        let new_el = document.createElement("div");
        new_el.setAttribute("class", `list list-${new_counter}`);

        // create new sets of lists items
        new_el.innerHTML = `
            <div class="list-inp-container">
            <input type="checkbox" id="chk-list-${new_counter}" onclick="fnc_todo.complete('list-${new_counter}', 'chk-list-${new_counter}')"/>
            <input type="text" class="inp no-pointer-events" id="list-inp-${new_counter}" onfocusout="fnc_todo.focus_out('list-inp-${new_counter}')"/>
            </div>
            <div class="btn-container">
                <button class="btn btn-edit" onclick="fnc_todo.edit('list-inp-${new_counter}')">Edit</button>
                <button class="btn btn-delete" onclick="fnc_todo.delete('list-${new_counter}')">Delete</button>
            </div>
            `;

        document.querySelectorAll(".todo-list")[0].prepend(new_el);
        document.getElementById(`list-inp-${new_counter}`).value = val;
        console.log(val + "tits");
    },

    // when done editing and focus is not in the textbox
    focus_out: function (id) {
        new_id = document.getElementById(id);
        new_id.classList.add("no-pointer-events");
    },
};





/*  

things to do

1. clean up complete function
    - onchange inside todo remove the element
    - upon cloning make sure to change all class and id for the buttons to still use the functionalities of edit and remove
2. once check box unchecked from completed make sure to clone the element and append it to the todo


*/