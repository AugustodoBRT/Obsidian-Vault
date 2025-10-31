module.exports = async (params) => {
  const { quickAddApi, variables } = params;

  // --- 1. CONFIGURAÇÃO ---
  // Defina sua banca inicial aqui
  const bancaInicial = 200;
  // --- FIM DA CONFIGURAÇÃO ---


  // --- 2. Perguntas Comuns (Esporte, Odd, etc) ---
  variables.esporte = await quickAddApi.inputPrompt("Esporte (futebol, etc)");

  // --- MUDANÇA: LÓGICA DA DATA ---
  const hoje = new Date();
  const anoAtual = hoje.getFullYear();
  const dataHojeFormatada = hoje.toISOString().slice(0, 10); // Formato YYYY-MM-DD

  const escolhaData = await quickAddApi.suggester(
      [`Usar data de Hoje (${dataHojeFormatada})`, "Digitar Manualmente (Dia/Mês)"],
      ["hoje", "manual"]
  );

  if (escolhaData === "hoje") {
      variables.data = dataHojeFormatada;
  } else {
      // Usuário escolheu "Manual"
      // Sugere o dia/mês de hoje como placeholder
      const diaPlaceholder = (hoje.getDate()).toString();
      const mesPlaceholder = (hoje.getMonth() + 1).toString(); // getMonth() é 0-indexado

      let diaInput = await quickAddApi.inputPrompt("Dia (dd)", diaPlaceholder);
      let mesInput = await quickAddApi.inputPrompt("Mês (mm)", mesPlaceholder);

      // Caso o usuário cancele o prompt (deixe em branco), usa o placeholder
      if (!diaInput) diaInput = diaPlaceholder;
      if (!mesInput) mesInput = mesPlaceholder;

      // Garante o formato '05' ou '12'
      const diaFormatado = diaInput.padStart(2, '0');
      const mesFormatado = mesInput.padStart(2, '0');

      // Monta a data final com o ano atual
      variables.data = `${anoAtual}-${mesFormatado}-${diaFormatado}`;
  }
  // --- FIM DA MUDANÇA ---

  variables.odd = Number(await quickAddApi.inputPrompt("Odd"));
  variables.casa = await quickAddApi.inputPrompt("Casa de Apostas");
  variables.tipster = await quickAddApi.inputPrompt("Tipster");

  
  // --- 3. CÁLCULO DO STAKE (Valor vs Porcentagem) ---
  const metodoStake = await quickAddApi.suggester(
      ["Por Valor Fixo (R$)", "Por Porcentagem da Banca (%)"],
      ["valor", "porcentagem"]
  );

  if (metodoStake === "valor") {
      // Usuário escolheu "Por Valor Fixo"
      variables.valor = Number(await quickAddApi.inputPrompt("Valor Apostado (R$)"));
      
      // Script calcula a porcentagem
      variables.porcentagem = ((variables.valor / bancaInicial) * 100).toFixed(2) + "%";
  
  } else {
      // Usuário escolheu "Por Porcentagem"
      const inputPorc = Number(await quickAddApi.inputPrompt("% da Banca (ex: 2 para 2%)"));
      
      // Script calcula o valor
      variables.valor = (inputPorc / 100) * bancaInicial;
      
      variables.porcentagem = inputPorc.toString() + "%";
  }


  // --- 4. Resultado e Cálculo do Lucro ---
  variables.resultado = await quickAddApi.suggester(
      ["green", "red", "pendente"],
      ["green", "red", "pendente"]
  );

  // Calcula lucro (agora usa o variables.valor que foi calculado automaticamente)
  if (variables.resultado == "green") {
    variables.lucro = (variables.valor * (variables.odd - 1)).toFixed(2);
  } else if (variables.resultado == "red") {
    variables.lucro = (-variables.valor).toFixed(2);
  } else {
    variables.lucro = "0.00";
  }

  // O QuickAdd vai automaticamente passar todas as 'variables' (valor, porcentagem, lucro)
  // para o seu template, que já está configurado com {{VALUE:valor}}, etc.
}
