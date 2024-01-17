// เมื่อหน้า HTML ถูกโหลดเสร็จ
document.addEventListener("DOMContentLoaded", function () {

    // นำเข้า element ที่จำเป็น
    const todoList = document.getElementById("todo-list");
    const todoInput = document.getElementById("todo-input");
    const addButton = document.getElementById("add-button");

    // อาร์เรย์สำหรับเก็บรายการ Todo
    let todos = [];

    // เพิ่มรายการ Todo
    function addTodo() {

    // เมื่อผู้ใช้คลิกที่ปุ่ม "เพิ่ม", ฟังก์ชัน addTodo จะถูกเรียกเพื่อเพิ่มรายการ Todo ใหม่ลงในอาร์เรย์.
    const todoText = todoInput.value.trim();
    if (todoText !== "") {
    const todoItem = {
    
    text: todoText,
    completed: false,
    };
    todos.push(todoItem);
    renderTodoList();
    todoInput.value = "";
    }
    }

    // ลบรายการ Todo
    // ฟังก์ชัน deleteTodo ถูกใช้เพื่อลบรายการ Todo ที่ถูกเลือก
    function deleteTodo(index) {
     todos.splice(index, 1);
     renderTodoList();
     }

    // ตรวจสอบ/ยกเลิกการเสร็จสิ้นรายการ Todo
    // ฟังก์ชัน toggleComplete ใช้เพื่อเปลี่ยนสถานะการเสร็จสิ้นของรายการ Todo
    function toggleComplete(index) {
     todos[index].completed = !todos[index].completed;
     renderTodoList();
     }

    // แสดงรายการ Todo บนหน้าเว็บ
    // ใช้สร้างและแสดงรายการ Todo ทั้งหมดในหน้าเว็บ
    function renderTodoList() {
    console.log(todos);
    todoList.innerHTML = "";
    for (let i = 0; i < todos.length; i++) {
    const todoItem = todos[i];
    const listItem = document.createElement("li");
    listItem.textContent = todoItem.text;
    if (todoItem.completed) {
    listItem.classList.add("completed");
    }

    // ปุ่มลบรายการ
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "ลบ";
    deleteButton.addEventListener("click", () => deleteTodo(i));

    // ปุ่มเสร็จ/ยกเลิก
    const completeButton = document.createElement("button");
    completeButton.textContent = todoItem.completed ? "ยกเลิก" : "เสร็จ";
    completeButton.addEventListener("click", () => toggleComplete(i));
    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);
    }
    }
    // การกดปุ่ม "เพิ่ม"
    // เพิ่มการฟังก์ชันเพิ่ม Todo เมื่อผู้ใช้กดที่ปุ่ม "เพิ่ม" หรือกดปุ่ม Enter ใน input
    addButton.addEventListener("click", addTodo);

    // การกด Enter ใน input
    todoInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
    addTodo();
    }
    });
    
    // แสดงรายการ Todo คร้ังแรก
    // เพื่อแสดงรายการ Todo ครั้งแรกเมื่อหน้าเว็บถูกโหลด
    renderTodoList();
    });