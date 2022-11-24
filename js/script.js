const { event } = require("jquery");

class Aluno {

    nome;
    matricula;
    nota1;
    nota2;
    nota3;

     constructor(nome, matricula, n1, n2, n3) {
       this.nome = nome;
       this.matricula = matricula;
       this.nota1 = n1;
       this.nota2 = n2;
       this.nota3 = n3;

    }

  };

  function calcularMedia(event){
    event.preventDefault();
    
  var nome = document.getElementById("nomeAluno").value;
  var matricula = document.getElementById("matriculaAluno").value;
  var nota1 = parseFloat(document.getElementById("notaPrimeiroTri").value);
  var nota2 = parseFloat(document.getElementById("notaSegundoTri").value);
  var nota3 = parseFloat(document.getElementById("notaTerceiroTri").value);
  var  resultado = parseFloat((nota1 + nota2 + nota3) / 3);

  document.getElementById('resultadoAluno').innerText += `${nome}\n`;
  document.getElementById('resultadoMatricula').innerText += `${matricula}\n`;
  document.getElementById('resultadoMedia').innerText += `${resultado}\n`
  
  };