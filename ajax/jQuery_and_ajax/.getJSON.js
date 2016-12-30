// Completes the same employee list task as we did in programming_ajax but with jQuery instead of Javascript => Much shorter & easier

$(document).ready(function () {

  $.getJSON('../data/employees.json', function (response) {
    let statusHTML = '<ul class="bulleted">';

    $.each(response, function (index, employee) {

      if (employee.inoffice) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employee.name + '</li>';
    }) // end $.each

    statusHTML += '</ul>';
    $('#employeeList').html(statusHTML);

  }).fail(function (jqXHR) {
    $('#myDiv').html("<p>Sorry! " + jqXHR.statusText + " error.</p>");
  }); //end getJSON



  $.getJSON('../data/rooms.json', function (data) {
    let statusHTML = '<ul class="rooms">'

    $.each(data, function (index, room) {

      if (room.available) {
        statusHTML += '<li class="empty">'
      } else {
        statusHTML += '<li class="full">'
      }
      statusHTML += room.room + '</li>'
    }); // end $.each

    statusHTML += '</ul>'
    $('#roomList').html(statusHTML);

  }).fail(function (jqXHR) {
    $('#myDiv').html("<p>Sorry! " + jqXHR.statusText + " error.</p>");
  }); //end getJSON

}); // end ready
