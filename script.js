function continuarUno() {
    document.getElementById("continuarUno").style.display = "block";

  }

function continuarDos() {
    document.getElementById("continuarDos").style.display = "block";

  }

function continuarTres () {
    document.getElementById("continuarTres").style.display = "block";
}

function continuarCuatro () {
    document.getElementById("continuarCuatro").style.display = "block";
}

function continuarCinco () {
    document.getElementById("continuarCinco").style.display = "block";
}

function continuarSeis () {
    document.getElementById("continuarSeis").style.display = "block";
}

function continuarSiete () {
    document.getElementById("continuarSiete").style.display = "block";
}

  function buscarLena() {
    document.getElementById("buscarLena").style.display = "block";

  }

  function reunirRamitas() {
      document.getElementById("ramitas").innerHTML = "[[ Ramitas ]]";
  }

  function recogerRamitas () {
      document.getElementById("ramitas").style.display = "none"
  }

  function avivarFuego () {
    document.getElementById("lenaApagada").src = "https://i.pinimg.com/originals/08/63/a0/0863a09172b315fa8cd3e85a370b9fac.gif";

  }

  function alertaEscab () {
    alert("¡Oh no! ¡Un escarabajo!");
  }

  function guardarEscab () {
    document.getElementById("escab").style.display = "none"
  }

  function ImagetoPrint(source)
  {
      return "<html><head><scri"+"pt>function step1(){\n" +
              "setTimeout('step2()', 10);}\n" +
              "function step2(){window.print();window.close()}\n" +
              "</scri" + "pt></head><body onload='step1()'>\n" +
              "<img src='" + 'https://i.imgur.com/XEc0Y30.png' + "' /></body></html>";
  }
  
  function PrintImage(source)
  {
      var Pagelink = "about:blank";
      var pwa = window.open(Pagelink, "_new");
      pwa.document.open();
      pwa.document.write(ImagetoPrint('https://i.imgur.com/XEc0Y30.png'));
      pwa.document.close();
      console.log('Escarabajo');
  }

function borrarTodo() {
 document.getElementById("TODO").style.display = "none";
 document.getElementById("Carabajo").style.display = "block";

}
