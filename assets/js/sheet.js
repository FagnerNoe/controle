document.addEventListener("DOMContentLoaded", () => {
  const inputData = document.getElementById("data-selecionada");
  const diaDaSemana = document.getElementById("dia-da-semana");
  const form = document.getElementById("controle-equipamentos");
  const dataAtual = new Date();
  let macValues = [];
  let macValuesRet = [];
  const numeroAtividade = document.getElementById("atividade");
  const macField = document.createElement("input");
  const macFieldRet = document.createElement("input");
  const ano = dataAtual.getFullYear();
  const mes = String(dataAtual.getMonth() + 1).padStart(2, "0");
  const dia = String(dataAtual.getDate()).padStart(2, "0");

  inputData.value = `${ano}-${mes}-${dia}`;
  let diasDaSemana = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];
  const diaDaSemanaAtual = dataAtual.getDay();
  diaDaSemana.textContent = diasDaSemana[diaDaSemanaAtual];

  inputData.addEventListener("change", () => {
    const data = new Date(inputData.value);
    const dia = data.getUTCDay();

    diaDaSemana.textContent = diasDaSemana[dia];
    console.log(data);
    console.log(dia);
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (numeroAtividade.value.length < 9) {
      alert("O número da atividade deve ter 9 dígitos.");
      return;
    }

    const inputs = document.querySelectorAll(".add");
    const macValues = Array.from(inputs).map((input) =>
      input.value.toUpperCase()
    );

    //criar um input oculto pra enviar todos Macs concatenados

    macField.setAttribute("type", "hidden");
    macField.setAttribute("name", "data[INSTALADO]");
    macField.setAttribute("value", macValues.join(","));
    form.appendChild(macField);

    const inputsRet = document.querySelectorAll(".remove");
    const macValuesRet = Array.from(inputsRet).map((input) =>
      input.value.toUpperCase()
    );

    macFieldRet.setAttribute("type", "hidden");
    macFieldRet.setAttribute("name", "data[RETIRADO]");
    macFieldRet.setAttribute("value", macValuesRet.join(","));
    form.appendChild(macFieldRet);

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
    })
      .then((response) => {
        //se dados forem enviados corretamente
        alert("Dados enviados com Sucesso!!", response);

        form.reset();
        window.location.reload();
      })
      .catch((err) => {
        console.error("Erro no envio dos dados!!", err);
      });
  });
  numeroAtividade.addEventListener("input", function (e) {
    let value = e.target.value;

    if (value.length < 9) {
      this.classList.add("border-error");
    } else {
      this.classList.remove("border-error");
    }
    //limita o tamanho do input
    e.target.value = value.slice(0, 9);
  });

  document.getElementById("terminal").addEventListener("input", function (e) {
    let value = e.target.value;
    //limita o tamanho do input
    e.target.value = value.slice(0, 10);
  });

  document.getElementById("endereco").addEventListener("input", function (e) {
    let value = e.target.value;
    e.target.value = value.toUpperCase();
  });

  document
    .getElementById("btn-adicionar")
    .addEventListener("click", function () {
      let container = document.querySelector(".instalado");
      let box = document.createElement("input");
      box.type = "text";
      box.classList.add("form-control", "add");
      box.name = "data[INSTALADO]";
      box.id = "instalado";

      box.addEventListener("change", function () {
        // Adiciona o valor ao array macValues e faz o join
        macValues.push(box.value);
        console.log(macValues);
        macField.value = macValues.join(",");
      });

      container.appendChild(box);
    });

  document.getElementById("btn-retirar").addEventListener("click", function () {
    let container = document.querySelector(".retirada");
    let box = document.createElement("input");
    box.type = "text";
    box.classList.add("form-control", "remove");
    box.name = "data[RETIRADO]";
    box.id = "retirado";

    box.addEventListener("change", function () {
      // Adiciona o valor ao array macValuesRet e faz o join
      macValuesRet.push(box.value);
      console.log(macValuesRet);
      macFieldRet.value = macValuesRet.join(",");
    });

    container.appendChild(box);
  });
});
