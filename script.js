function atualizarData() {
    const diasSemana = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
    const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
  
    const agora = new Date();
    const diaSemana = diasSemana[agora.getDay()];
    const dia = agora.getDate();
    const mes = meses[agora.getMonth()];
    const ano = agora.getFullYear();
  
    document.getElementById("dia-da-semana").textContent = diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1);
    document.getElementById("data-completa").textContent = `${dia} de ${mes}, ${ano}`;
  }
  
  atualizarData();
  