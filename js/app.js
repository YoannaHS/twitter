window.addEventListener('load', function() {
  var insertTwit = document.getElementById('insertTwt');
  var boton = document.getElementById('add');
  var container = document.getElementById('containerTwit');
  var newContainer = document.createElement('p');
  var divTwit = document.getElementsByTagName('p')[0];

  //   console.log(insertTwit);
  //   console.log(boton);
  //   console.log(container);
  //   console.log(newContainer);

  function addTwit(text) {
    newContainer.textContent = text;
    container.insertBefore(newContainer, container.childNodes[0]);
  }
  boton.addEventListener('click', function() {
    addTwit(insertTwit.value);
  });

});