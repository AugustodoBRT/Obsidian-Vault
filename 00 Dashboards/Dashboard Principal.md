---
cssclasses:
  - daily
  - quarta-feira
---
##  Desempenho Geral

```chartsview
type: Line
data: |
  dataviewjs:
    // 1. Pega todas as apostas resolvidas (green/red) com data
    const pages = dv.pages('#aposta')
      .where(p => {
        const dataValida = dv.date(p.data);
        const resultado = (p.resultado || "").toLowerCase().trim();
        return dataValida && (resultado === 'green' || resultado === 'red');
      });

    // 2. Função de cálculo (helper)
    function calcularLucro(p) {
        const valor = Number((p.valor_apostado || '0').toString().replace(",", ".")) || 0;
        const odd = Number((p.odd || '0').toString().replace(",", ".")) || 0;
        const resultado = p.resultado.toLowerCase();
        if (resultado == 'green') return (valor * odd) - valor;
        if (resultado == 'red') return -valor;
        return 0;
    }

    // 3. Calcula os pontos diários (necessário para o acumulado)
    const dataPointsDiario = pages
      .groupBy(p => dv.date(p.data).toISODate())
      .map(g => ({
        x: g.key, // Data
        y: g.rows.map(calcularLucro)
                 .array()
                 .reduce((sum, val) => sum + val, 0), // Lucro só daquele dia
      }))
      .sort(p => p.x, 'asc');

    // 4. Calcula os pontos ACUMULADOS
    const dataPointsAcumulado = [];
    let lucroAcumuladoTotal = 0; // Variável para guardar o total

    for (let pontoDiario of dataPointsDiario.array()) {
        lucroAcumuladoTotal += pontoDiario.y; // Soma o lucro do dia ao total
        dataPointsAcumulado.push({
            x: pontoDiario.x,
            y: lucroAcumuladoTotal, // Salva o total acumulado
            group: 'Lucro Acumulado' // Legenda
        });
    }

    // 5. Retorna apenas os dados acumulados
    return dataPointsAcumulado;

options:
  # Título Principal
  title:
    text: 'Desempenho Acumulado'
    style:
      fontSize: 20
      
  legend:
    position: 'top-right'
    
  xField: 'x'
  yField: 'y'
  seriesField: 'group' # O nome aqui será 'Lucro Acumulado'

  # Cor verde
  color: ['#43cc56']
  
  smooth: true
  
  # Voltando a área, já que é uma linha só
  area:
    style:
      fill: 'l(90) 0:#43cc56 1:rgba(67,204,86,0.1)'
      fillOpacity: 0.7

  # Eixo Y (Lucro)
  yAxis:
    title:
      text: 'Lucro (R$)'
    label:
      formatter: |
        function(v) {
          return v + ' R$';
        }

  # Eixo X (Data)
  xAxis:
    title:
      text: 'Data'
  
  tooltip:
    # Mostra o R$ formatado
    formatter: |
      function(datum) {
        return {
          name: datum.group,
          value: datum.y.toFixed(2) + ' R$'
        };
      }
```


---

> [!multi-column]
>
> > [!tip]+ Estatisticas
> > ```dataviewjs
> > // --- Defina sua banca inicial aqui ---
> > const bancaInicial = 1000;
> > 
> > // Query principal (executada uma vez)
> > const pages_col1 = dv.pages('#aposta')
> >   .where(p => p.resultado == "green" || p.resultado == "red");
> > 
> > // --- 1. Card Banca Atual (Fixo) ---
> > const card_banca_ini = dv.el('div', '', {
> >   attr: { style: 'padding: 16px; background-color: #1e1e1e; border-radius: 8px; margin-bottom: 10px; text-align: center; border: 1px solid #333;' }
> > });
> > dv.el('div', 'BANCA ATUAL', {
> >   parent: card_banca_ini,
> >   attr: { style: 'font-size: 0.9em; font-weight: 600; color: #a0a0a0; text-transform: uppercase; margin-bottom: 8px;' }
> > });
> > dv.el('div', `${bancaInicial.toFixed(2)} R$`, {
> >   parent: card_banca_ini,
> >   attr: { style: 'font-size: 2em; font-weight: 700; color: #ffffff;' }
> > });
> > 
> > // --- 2. Card Apostas (Contagem) ---
> > const card_apostas = dv.el('div', '', {
> >   attr: { style: 'padding: 16px; background-color: #1e1e1e; border-radius: 8px; margin-bottom: 10px; text-align: center; border: 1px solid #333;' }
> > });
> > dv.el('div', 'APOSTAS', {
> >   parent: card_apostas,
> >   attr: { style: 'font-size: 0.9em; font-weight: 600; color: #a0a0a0; text-transform: uppercase; margin-bottom: 8px;' }
> > });
> > dv.el('div', pages_col1.length, {
> >   parent: card_apostas,
> >   attr: { style: 'font-size: 2em; font-weight: 700; color: #ffffff;' }
> > });
> > 
> > // --- 3. Card Progressão (% Banca) ---
> > // --- MUDANÇA AQUI: Cálculo de Lucro dinâmico ---
> > const lucroTotal_col1 = pages_col1.map(p => {
> >     const valor = Number((p.valor_apostado || '0').toString().replace(",", ".")) || 0;
> >     const odd = Number((p.odd || '0').toString().replace(",", ".")) || 0;
> >     const resultado = p.resultado.toLowerCase();
> >     
> >     if (resultado == 'green') {
> >         return (valor * odd) - valor;
> >     } else if (resultado == 'red') {
> >         return -valor;
> >     }
> >     return 0;
> > }).array().reduce((sum, val) => sum + val, 0);
> > // --- FIM DA MUDANÇA ---
> > 
> > const progressao = (bancaInicial === 0) ? 0 : (lucroTotal_col1 / bancaInicial) * 100;
> > const corProgressao = (progressao >= 0) ? '#43cc56' : '#f04134';
> > 
> > const card_prog = dv.el('div', '', {
> >   attr: { style: 'padding: 16px; background-color: #1e1e1e; border-radius: 8px; margin-bottom: 10px; text-align: center; border: 1px solid #333;' }
> > });
> > dv.el('div', 'PROGRESSÃO', {
> >   parent: card_prog,
> >   attr: { style: 'font-size: 0.9em; font-weight: 600; color: #a0a0a0; text-transform: uppercase; margin-bottom: 8px;' }
> > });
> > dv.el('div', `${progressao.toFixed(2)}%`, {
> >   parent: card_prog,
> >   attr: { style: 'font-size: 2em; font-weight: 700; color: ' + corProgressao }
> > });
> > ```
>
> > [!example]+ Progresso
> > ```dataviewjs
> > // --- Defina sua banca inicial aqui ---
> > const bancaInicial = 1000;
> > 
> > // Query principal (executada uma vez)
> > const pages_col2 = dv.pages('#aposta')
> >   .where(p => p.resultado == "green" || p.resultado == "red");
> > 
> > // --- Cálculos necessários ---
> > // --- MUDANÇA AQUI: Cálculo de Lucro dinâmico ---
> > const lucroTotal_col2 = pages_col2.map(p => {
> >     const valor = Number((p.valor_apostado || '0').toString().replace(",", ".")) || 0;
> >     const odd = Number((p.odd || '0').toString().replace(",", ".")) || 0;
> >     const resultado = p.resultado.toLowerCase();
> >     
> >     if (resultado == 'green') {
> >         return (valor * odd) - valor;
> >     } else if (resultado == 'red') {
> >         return -valor;
> >     }
> >     return 0;
> > }).array().reduce((sum, val) => sum + val, 0);
> > // --- FIM DA MUDANÇA ---
> > 
> > const investTotal_col2 = pages_col2.map(p => Number(p.valor_apostado) || 0)
> >                                     .array()
> >                                     .reduce((sum, val) => sum + val, 0);
> >                                     
> > const roi_col2 = (investTotal_col2 === 0) ? 0 : (lucroTotal_col2 / investTotal_col2) * 100;
> > const bancaTotal = bancaInicial + lucroTotal_col2;
> > 
> > // --- 1. Card Banca Total (Calculado) ---
> > const corBancaTotal = (bancaTotal >= bancaInicial) ? '#43cc56' : '#f04134';
> > const card_banca_total = dv.el('div', '', {
> >   attr: { style: 'padding: 16px; background-color: #1e1e1e; border-radius: 8px; margin-bottom: 10px; text-align: center; border: 1px solid #333;' }
> > });
> > dv.el('div', 'BANCA TOTAL', {
> >   parent: card_banca_total,
> >   attr: { style: 'font-size: 0.9em; font-weight: 600; color: #a0a0a0; text-transform: uppercase; margin-bottom: 8px;' }
> > });
> > dv.el('div', `${bancaTotal.toFixed(2)} R$`, {
> >   parent: card_banca_total,
> >   attr: { style: 'font-size: 2em; font-weight: 700; color: ' + corBancaTotal }
> > });
> > 
> > // --- 2. Card Lucro Total ---
> > const corLucro = (lucroTotal_col2 >= 0) ? '#43cc56' : '#f04134';
> > const card_lucro = dv.el('div', '', {
> >   attr: { style: 'padding: 16px; background-color: #1e1e1e; border-radius: 8px; margin-bottom: 10px; text-align: center; border: 1px solid #333;' }
> > });
> > dv.el('div', 'LUCRO TOTAL', {
> >   parent: card_lucro,
> >   attr: { style: 'font-size: 0.9em; font-weight: 600; color: #a0a0a0; text-transform: uppercase; margin-bottom: 8px;' }
> > });
> > dv.el('div', `${lucroTotal_col2.toFixed(2)} R$`, {
> >   parent: card_lucro,
> >   attr: { style: 'font-size: 2em; font-weight: 700; color: ' + corLucro }
> > });
> > 
> > // --- 3. Card ROI ---
> > const corROI = (roi_col2 >= 0) ? '#43cc56' : '#f04134';
> > const card_roi = dv.el('div', '', {
> >   attr: { style: 'padding: 16px; background-color: #1e1e1e; border-radius: 8px; margin-bottom: 10px; text-align: center; border: 1px solid #333;' }
> > });
> > dv.el('div', 'ROI', {
> >   parent: card_roi,
> >   attr: { style: 'font-size: 0.9em; font-weight: 600; color: #a0a0a0; text-transform: uppercase; margin-bottom: 8px;' }
> > });
> > dv.el('div', `${roi_col2.toFixed(2)}%`, {
> >   parent: card_roi,
> >   attr: { style: 'font-size: 2em; font-weight: 700; color: ' + corROI }
> > });
> > ```

---
```dataviewjs
// --- 1. DEFINIÇÕES ---
const pages = dv.pages()
    .where(p => p.tipo === 'relatorio-mensal' && p.mes_relatorio)
    .sort(p => p.mes_relatorio, 'asc');

const headers = ["MÊS", "APOSTAS", "INVESTIDO", "% DE ACERTO", "ODD MÉDIA", "LUCRO/PERDA", "ROI"];

// --- 2. FUNÇÕES DE FORMATAÇÃO ---
function formatCurrency(num) {
    const cor = num > 0 ? '#43cc56' : (num < 0 ? '#f04134' : '#a0a0a0');
    return `<span style="font-weight: 600; color: ${cor};">R$ ${num.toFixed(2)}</span>`;
}

// Para ROI (com cor)
function formatPercent(num, bold) {
    const cor = num > 0 ? '#43cc56' : (num < 0 ? '#f04134' : '#a0a0a0');
    const style = bold ? 'font-weight: 800;' : 'font-weight: 600;';
    return `<span style="${style} color: ${cor};">${num.toFixed(3)}%</span>`; 
}

// Para % de Acerto (sem cor, como na imagem)
function formatPercentSimple(num, bold) {
    const style = bold ? 'font-weight: 800;' : 'font-weight: 600;';
    return `<span style="${style}">${num.toFixed(3)}%</span>`;
}

// --- 3. PROCESSAR DADOS DE CADA MÊS ---
let totalApostas = 0;
let totalInvestido = 0;
let totalLucro = 0;
let totalGreens = 0; // Para recalcular a taxa de acerto total
let totalSumOdds = 0; // Para recalcular a odd média total

const reports = pages.map(p => {
    const mes = dv.date(p.mes_relatorio).toFormat("MMMM/yy");
    const apostas = p.resumo_apostas || 0;
    const investido = p.resumo_investido || 0;
    const lucro = p.resumo_lucro || 0;
    const acertos = p.resumo_acertos || 0;
    const oddMedia = p.resumo_odd_media || 0; // Agora funcionando!
    const roi = (investido === 0) ? 0 : (lucro / investido) * 100;
    
    // Para o cálculo total
    const greensMes = apostas * (acertos / 100);
    const sumOddsMes = oddMedia * apostas;

    // Acumula os totais
    totalApostas += apostas;
    totalInvestido += investido;
    totalLucro += lucro;
    totalGreens += greensMes;
    totalSumOdds += sumOddsMes;

    return [
        `<strong>${mes}</strong>`, // Deixa o Mês em negrito
        apostas,
        `R$ ${investido.toFixed(2)}`,
        formatPercentSimple(acertos, false), // Usa a formatação simples
        oddMedia.toFixed(3),
        formatCurrency(lucro),
        formatPercent(roi, false) // Usa a formatação com cor
    ];
}).array(); // Converte para array normal

// --- 4. CALCULAR E ADICIONAR LINHA TOTAL ---

// Recalcula as médias totais
const totalAcertos = (totalApostas === 0) ? 0 : (totalGreens / totalApostas) * 100;
const totalOddMedia = (totalApostas === 0) ? 0 : (totalSumOdds / totalApostas);
const totalROI = (totalInvestido === 0) ? 0 : (totalLucro / totalInvestido) * 100;

// Formata a linha de total com negrito
const totalRow = [
    `<strong>TOTAL</strong>`,
    `<strong>${totalApostas}</strong>`,
    `<strong>R$ ${totalInvestido.toFixed(2)}</strong>`,
    `<strong>${formatPercentSimple(totalAcertos, true)}</strong>`, // Usa a formatação simples
    `<strong>${totalOddMedia.toFixed(3)}</strong>`,
    `<strong>${formatCurrency(totalLucro)}</strong>`,
    `<strong>${formatPercent(totalROI, true)}</strong>` // Usa a formatação com cor
];

reports.push(totalRow);

// --- 5. RENDERIZAR TABELA ---
dv.table(headers, reports);
```
---
