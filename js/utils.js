function printMat(mat, selector) {
  var strHTML = '<table border="0"><tbody>';
  for (var i = 0; i < mat.length; i++) {
    strHTML += '<tr>';
    for (var j = 0; j < mat[0].length; j++) {
      var cell = mat[i][j];
      var className = 'cell cell' + i + '-' + j;
      strHTML += '<td class="' + className + '"> ' + cell + ' </td>'

    }
    strHTML += '</tr>'
  }
  strHTML += '</tbody></table>';
  var elContainer = document.querySelector(selector);
  elContainer.innerHTML = strHTML;
}


// location such as: {i: 2, j: 7}
function renderCell(location, value) {
  // Select the elCell and set the value
  var elCell = document.querySelector(`.cell${location.i}-${location.j}`);
  elCell.innerHTML = value;

  if (gSoperFood) {

    if (value.includes('&#9781')) {

      elCell.style.color = 'blue';

    } else if (value.includes('.')) {
      elCell.style.color = '#ffffff';
    }


  } else {


    if (value.includes('&#9781')) {

      elCell.style.color = get_random_color();

    } else if (value.includes('.')) {
      elCell.style.color = '#ffffff';

    }

  }



}



function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function get_random_color() {
  var color = "";
  for (var i = 0; i < 3; i++) {
    var sub = Math.floor(Math.random() * 256).toString(16);
    color += (sub.length == 1 ? "0" + sub : sub);
  }
  return "#" + color;
}

//chack the cells
function noMoreFood(bord) {
  for (var i = 0; i < bord.length; i++) {
    for (var j = 0; j < bord[0].length; j++) {
      if(bord[i][j]==='.'){
        return;
      }
      if(bord[i][j]===''){
      }
    }
  }
  return true;

}

