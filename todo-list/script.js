const dateInput = document.getElementById("dueDate");
const today = new Date().toISOString().slice(0, 10);
dateInput.value = today;
dateInput.min = today;
