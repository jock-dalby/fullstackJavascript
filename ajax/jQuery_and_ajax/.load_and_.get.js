// How to use .get()

const url = '/employees.php'
const data = {
  firstName: "Jock",
  lastName: "Dalby"
};
const callback = function (response) {
  console.log(response);
}

$.get(url, data, callback);

// Below is the way to complete the AJAX requests from ajax concepts using jQuery. It requires 3 lines of code as opposed to 10+

// Using .load()

function sendAJAX() {
   $('#ajax').load('sidebar.html');
   $('#load').hide();
 }

// Using .get()

$.get('sidebar.html', function(response) {
  $('ajax').html(response);
  $('#load').hide();
})
