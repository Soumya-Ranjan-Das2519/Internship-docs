// Load data from LocalStorage or initialize empty array
let users = JSON.parse(localStorage.getItem("users")) || [];
let editId = null;

// Initial render
renderTable();

// CREATE
function addUser() {
  const nameInput = document.getElementById("name");
  const name = nameInput.value.trim();

  if (name === "") {
    alert("Please enter name");
    return;
  }

  users.push({
    id: Date.now(),
    name: name
  });

  saveData();
  renderTable();

  nameInput.value = "";
}

// READ
function renderTable() {
  const table = document.getElementById("userTable");
  table.innerHTML = "";

  users.forEach(user => {
    table.innerHTML += `
      <tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>
          <button class="edit-btn" onclick="editUser(${user.id})">Edit</button>
          <button class="delete-btn" onclick="deleteUser(${user.id})">Delete</button>
        </td>
      </tr>
    `;
  });
}

// EDIT 
function editUser(id) {
  const user = users.find(u => u.id === id);
  if (!user) return;

  document.getElementById("name").value = user.name;
  editId = id;

  // Toggle buttons
  document.getElementById("addBtn").style.display = "none";
  document.getElementById("updateBtn").style.display = "inline-block";
}

// UPDATE
function updateUser() {
  const nameInput = document.getElementById("name");
  const name = nameInput.value.trim();

  if (name === "") {
    alert("Please enter name");
    return;
  }

  users = users.map(user =>
    user.id === editId ? { ...user, name: name } : user
  );

  editId = null;
  saveData();
  renderTable();

  // Reset form & buttons
  nameInput.value = "";
  document.getElementById("addBtn").style.display = "inline-block";
  document.getElementById("updateBtn").style.display = "none";
}

// DELETE
function deleteUser(id) {
  users = users.filter(user => user.id !== id);
  saveData();
  renderTable();
}

// LOCAL STORAGE
function saveData() {
  localStorage.setItem("users", JSON.stringify(users));
}
