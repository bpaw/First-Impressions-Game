dev_pics_dir = '/dev_pictures/'

column1 = ["11950606_467872873394400_1083900564_n.jpg",
           "11875502_891061280981357_1840497034_n.jpg",
           "11950606_467872873394400_1083900564_n.jpg",
           "12145047_422167591321617_1874313211_n.jpg"];

column2 = ["13722173_688226341331205_1180925104_n.jpg",
           "26357313_166361353997869_340684090183254016_n.jpg",
           "26153470_1850646375227629_1498156520662106112_n.jpg",
           "29404311_166216350744908_7804569916069117952_n.jpg"];

var main = function() {
  console.log("hello from the js directory!");

  LEFT_PIC = 0;
  RIGHT_PIC = 1;

  col1_count = 0;
  col2_count = 0;

  var nextImg = function(picture_array, index) {
    console.log("nextImg called")
    return dev_pics_dir + picture_array[index];
  }

  var clickedRight = function() {
    loadNextPicture(RIGHT_PIC)
  }

  var clickedLeft = function() {
    loadNextPicture(LEFT_PIC)
  }

  var loadNextPicture = function(decision) {
    let msg = (decision == LEFT_PIC) ? "left picture" : "right picture";
    alert(msg);
    document.getElementById("image1").src = nextImg(column1, col1_count);
    document.getElementById("image2").src = nextImg(column2, col2_count);
    col2_count++;
    col1_count++;
  }

  document.getElementById("image2").onclick = clickedRight;
  document.getElementById("image1").onclick = clickedLeft;
}



$(document).ready(main);
