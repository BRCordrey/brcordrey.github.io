var car_modal = document.getElementById("SelfDrivingCarModal");
var robot_modal = document.getElementById("RobotWithGrabberModal");
var chess_modal = document.getElementById("ChessRobotModal");


var car_btn = document.getElementById("SelfDrivingCarBtn");
var robot_btn = document.getElementById("RobotWithGrabberBtn");
var chess_btn = document.getElementById("ChessRobotBtn");

// When the user clicks on the button, open the modal
car_btn.onclick = function() {
  car_modal.style.display = "block";
}

robot_btn.onclick = function() {
  robot_modal.style.display = "block";
}

chess_btn.onclick = function() {
  chess_modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == car_modal || event.target == robot_modal || event.target == chess_modal) {
    event.target.style.display = "none";
  }
}
