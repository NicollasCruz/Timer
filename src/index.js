function TimerConfig() {
  var n1 = document.getElementById("1");
  var n2 = document.getElementById("2");
  var n3 = document.getElementById("3");
  var n4 = document.getElementById("4");
  var n5 = document.getElementById("5");
  var n6 = document.getElementById("6");
  var n7 = document.getElementById("7");
  var n8 = document.getElementById("8");
  var n9 = document.getElementById("9");
  var n0 = document.getElementById("0");
  var clear = document.getElementById("clear");
  var start = document.getElementById("start");
  var timer = document.getElementById("timer");

  var tempo = [0, 0, 0, 0, 0, 0];

  n1.addEventListener("click", () => {
    tempo.push(1);
    tempo.shift();
    DefinirTexto(tempo);
  });

  n2.addEventListener("click", () => {
    tempo.push(2);
    tempo.shift();
    DefinirTexto(tempo);
  });

  n3.addEventListener("click", () => {
    tempo.push(3);
    tempo.shift();
    DefinirTexto(tempo);
  });

  n4.addEventListener("click", () => {
    tempo.push(4);
    tempo.shift();
    DefinirTexto(tempo);
  });

  n5.addEventListener("click", () => {
    tempo.push(5);
    tempo.shift();
    DefinirTexto(tempo);
  });

  n6.addEventListener("click", () => {
    tempo.push(6);
    tempo.shift();
    DefinirTexto(tempo);
  });

  n7.addEventListener("click", () => {
    tempo.push(7);
    tempo.shift();
    DefinirTexto(tempo);
  });

  n8.addEventListener("click", () => {
    tempo.push(8);
    tempo.shift();
    DefinirTexto(tempo);
  });

  n9.addEventListener("click", () => {
    tempo.push(9);
    tempo.shift();
    DefinirTexto(tempo);
  });

  n0.addEventListener("click", () => {
    tempo.push(0);
    tempo.shift();
    DefinirTexto(tempo);
  });

  clear.addEventListener("click", () => {
    tempo = [0, 0, 0, 0, 0, 0];
    DefinirTexto(tempo);
  });

  start.addEventListener("click", () => {
    RodarTimer(tempo);
  });
}

function DefinirTexto(tempo) {
  var timer = document.getElementById("timer");

  timer.innerHTML =
    tempo[0] +
    " " +
    tempo[1] +
    " : " +
    tempo[2] +
    " " +
    tempo[3] +
    " : " +
    tempo[4] +
    " " +
    tempo[5];
}

function RodarTimer(tempo) {
  var timer = document.getElementById("timer").innerHTML;

  var intervalo = setInterval(() =>{
    if (tempo[5] == 0) {
      tempo[5] = 9;

      if (tempo[4] == 0) {
        tempo[4] = 5;

        if (tempo[3] == 0) {
          tempo[3] = 9;

          if (tempo[2] == 0) {
            tempo[2] = 5;

            if (tempo[1] == 0) {
              tempo[0]--;
              tempo[1] = 9;
            } else tempo[1]--;
          } else tempo[2]--;
        } else tempo[3]--;
      } else tempo[4]--;
    } else tempo[5]--;
    DefinirTexto(tempo);
    timer = document.getElementById("timer").innerHTML;

    if(timer == "0 0 : 0 0 : 0 0")
    clearInterval(intervalo);

  }, 1000);  
}

TimerConfig();
