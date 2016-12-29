const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200) {
    const employees = JSON.parse(xhr.responseText);
    const employeeList = document.getElementById('employeeList');
    let statusHTML = '<ul class="bulleted">'
    for (let i = 0; i < employees.length; i++) {
      if (employees[i].inoffice) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name + '</li>';
    }
    statusHTML += '</ul>';
    employeeList.innerHTML = statusHTML;
  }
};

xhr.open('GET', 'data/employees.json');
xhr.send();

const xhr2 = new XMLHttpRequest();

xhr2.onreadystatechange = function () {
  if(xhr2.readyState === 4 && xhr2.status === 200) {
    const rooms = JSON.parse(xhr2.responseText);
    const roomList = document.getElementById('roomList');

    let statusHTML = '<ul class="rooms">'
    for (let i = 0; i < rooms.length; i++) {
      if (rooms[i].available) {
        statusHTML += '<li class="empty">'
      } else {
        statusHTML += '<li class="full">'
      }
      statusHTML += rooms[i].room + '</li>'
    }
    statusHTML += '</ul>'
    roomList.innerHTML = statusHTML;
  }
}

xhr2.open('GET', '../data/rooms.json');
xhr2.send();
