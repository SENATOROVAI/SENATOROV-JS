let clickHandler = function (event) {
  alert("click" + event.pageX + " " + event.pageY);  
};
$("#main").click(clickHandler);