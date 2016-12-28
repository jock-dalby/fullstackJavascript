// Example 1

// Javascript
// document.getElementByTagName('li').addEventListener("click", function() {
// 	this.nodeValue = "Clicked!";
// });

// jQuery with addition of delay and fadeOut

$('.list li').on('click', function() {
  $(this).text("Clicked!").delay(800).fadeOut(4000);
});

// Example 2

// .attr()

console.log("Before =>", $('a').attr('href'));

$('button').on('click', function () {
  $('a').attr('href', 'https://github.com/');
  console.log("After =>", $('a').attr('href'));
})
// Note: .removeAttr() - Sets the value of the specified attribute to default

// Example 3

$('body').click(function() {
  console.log("Clicked!");
})

// Click method acts on jQuery object and triggers the anonymous callback function which element is clicked.

// Example 4

//In HTML is not practical becasue a) Hard to find b) not suitable for large amounts of code. This is why we instead keep the functionality in the JS as below

$('#myButton').on('click', function() {
  console.log("Example 4 JS => Better way to rock");
})

// Example 5 .hover()

$('.loc').hover(
  function(){
    $(this).html("<strong>Location:</strong> Parliament Street!");
  },
  function() {
    $(this).html("<strong>Location:</strong> Wellington, New Zealand");
  }
)
