---
cssclasses:
  - daily
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
// --- 0. CSS CUSTOMIZADO ---
// Injeta um bloco de <style> para formatar nossa tabela
const styles = `
<style>
/* A tabela principal */
.dv-summary-table {
    width: 100%;
    border-collapse: collapse; /* Borda limpa */
    font-size: 0.9em; /* Um pouco menor e mais denso */
    margin-top: 10px;
}
/* Células do Cabeçalho e Corpo */
.dv-summary-table th, .dv-summary-table td {
    padding: 10px 8px; /* Mais espaço vertical */
    text-align: left;
    border-bottom: 1px solid #333; /* Borda escura sutil */
}
/* Cabeçalho */
.dv-summary-table th {
    font-size: 0.8em;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--text-muted); /* Cor mais suave (Obsidian) */
    border-bottom-width: 2px; /* Linha mais grossa no header */
}
/* Alinhamento de células numéricas */
.dv-summary-table td.dv-cell-right,
.dv-summary-table th.dv-cell-right {
    text-align: right;
    font-family: 'Consolas', 'Menlo', monospace; /* Números alinhados */
}
/* Classes de Cor */
.dv-summary-table td.dv-cell-profit {
    color: #43cc56;
    font-weight: 600;
}
.dv-summary-table td.dv-cell-loss {
    color: #f04134;
    font-weight: 600;
}
.dv-summary-table td.dv-cell-neutral {
    color: #a0a0a0;
}
/* Célula do Mês */
.dv-summary-table td.dv-cell-month {
     font-weight: 600;
}
/* Linha de Total */
.dv-summary-table tr.dv-total-row {
    background-color: rgba(128, 128, 128, 0.1); /* Fundo sutil */
    border-top: 2px solid #555;
}
/* Células do Total */
.dv-summary-table tr.dv-total-row td {
    font-weight: 800;
    font-size: 1.05em; /* Ligeiramente maior */
}
</style>
`;
// Renderiza o CSS
dv.el("div", "", { html: styles });

// --- 1. COLETA DE DADOS ---
const pages = dv.pages()
    .where(p => p.tipo === 'relatorio-mensal' && p.mes_relatorio)
    .sort(p => p.mes_relatorio, 'asc');

let totalApostas = 0, totalInvestido = 0, totalLucro = 0, totalGreens = 0, totalSumOdds = 0;

// Processa os dados em objetos
const reports = pages.map(p => {
    const apostas = p.resumo_apostas || 0;
    const investido = p.resumo_investido || 0;
    const lucro = p.resumo_lucro || 0;
    const acertos = p.resumo_acertos || 0;
    const oddMedia = p.resumo_odd_media || 0;
    const roi = (investido === 0) ? 0 : (lucro / investido) * 100;
    
    // Acumula totais
    const greensMes = apostas * (acertos / 100);
    const sumOddsMes = oddMedia * apostas;
    totalApostas += apostas;
    totalInvestido += investido;
    totalLucro += lucro;
    totalGreens += greensMes;
    totalSumOdds += sumOddsMes;

    return {
        mes: dv.date(p.mes_relatorio).toFormat("MMMM/yy"),
        apostas: apostas,
        investido: investido,
        acertos: acertos,
        oddMedia: oddMedia,
        lucro: lucro,
        roi: roi
    };
}).array();

// --- 2. CÁLCULO TOTAL ---
const totalAcertos = (totalApostas === 0) ? 0 : (totalGreens / totalApostas) * 100;
const totalOddMedia = (totalApostas === 0) ? 0 : (totalSumOdds / totalApostas);
const totalROI = (totalInvestido === 0) ? 0 : (totalLucro / totalInvestido) * 100;

// Cria o objeto da linha total
const totalRow = {
    mes: "TOTAL",
    apostas: totalApostas,
    investido: totalInvestido,
    acertos: totalAcertos,
    oddMedia: totalOddMedia,
    lucro: totalLucro,
    roi: totalROI
};
// Adiciona o total à lista
reports.push(totalRow);

// --- 3. RENDERIZAÇÃO HTML ---
const headers = ["MÊS", "APOSTAS", "INVESTIDO", "% DE ACERTO", "ODD MÉDIA", "LUCRO/PERDA", "ROI"];

// Cria o elemento <table>
const table = dv.el("table", "", { cls: "dv-summary-table" });

// Cria o Cabeçalho (<thead>)
const thead = table.createEl("thead");
const hr = thead.createEl("tr");
headers.forEach((h, i) => {
    hr.createEl("th", { 
        text: h, 
        // Alinha à direita todos, menos o primeiro
        cls: (i > 0 ? "dv-cell-right" : "") 
    });
});

// Cria o Corpo (<tbody>)
const tbody = table.createEl("tbody");

// Função helper para classe de cor
function getNumClass(num) {
    return num > 0 ? "dv-cell-profit" : (num < 0 ? "dv-cell-loss" : "dv-cell-neutral");
}

// Itera sobre os dados (meses + total)
reports.forEach(r => {
    const isTotalRow = (r.mes === "TOTAL");
    // Adiciona a classe 'dv-total-row' se for a linha de total
    const rowCls = isTotalRow ? "dv-total-row" : "";
    
    const tr = tbody.createEl("tr", { cls: rowCls });

    // Coluna 1: Mês
    tr.createEl("td", { text: r.mes, cls: "dv-cell-month" });
    
    // Coluna 2: Apostas
    tr.createEl("td", { text: r.apostas, cls: "dv-cell-right" });
    
    // Coluna 3: Investido
    tr.createEl("td", { text: `R$ ${r.investido.toFixed(2)}`, cls: "dv-cell-right" });
    
    // Coluna 4: % de Acerto
    tr.createEl("td", { text: `${r.acertos.toFixed(3)}%`, cls: "dv-cell-right" });
    
    // Coluna 5: Odd Média
    tr.createEl("td", { text: r.oddMedia.toFixed(3), cls: "dv-cell-right" });
    
    // Coluna 6: Lucro/Perda (com cor)
    tr.createEl("td", { 
        text: `R$ ${r.lucro.toFixed(2)}`, 
        cls: `dv-cell-right ${getNumClass(r.lucro)}` 
    });
    
    // Coluna 7: ROI (com cor)
    tr.createEl("td", { 
        text: `${r.roi.toFixed(3)}%`, 
        cls: `dv-cell-right ${getNumClass(r.roi)}`
    });
});
```

---
> [!multi-column]
>
> > [!tip]+  Resultados (Pizza)
> > ```chartsview
> > type: Pie
> > data: |
> >   dataviewjs:
> >     const pages_pie = dv.pages('#aposta');
> >     const counts = { green: 0, red: 0, pendente: 0 };
> >     for (let p of pages_pie) {
> >       
> >       if (p.resultado && typeof p.resultado === 'string') {
> >         
> >         let r = p.resultado.toLowerCase().trim();
> >         
> >         
> >         if (r === 'green') {
> >           counts.green++;
> >         } else if (r === 'red') {
> >           counts.red++;
> >         } else if (r === 'pendente') {
> >           counts.pendente++;
> >         }
> >         
> >       }
> >       
> >     }
> >     return [
> >       { name: "green", value: counts.green },
> >       { name: "red", value: counts.red },
> >       { name: "pendente", value: counts.pendente }
> >     ];
> > options:
> >   angleField: 'value'
> >   colorField: 'name'
> >   color:
> >     - '#43cc56'
> >     - '#ff2626'
> >     - '#b0b0b0'
> >   radius: 0.8
> >   label:
> >     type: 'outer'
> >     style:
> >       fill: '#fff'
> >     content: '{name} {percentage}'
> >   legend:
> >     marker:
> >       symbol: 'circle'
> >       style:
> >         r: 8
> >   interactions:
> >     - type: 'element-active'
> > ```
>
> > [!example]+  Win Rate
> > ```dataviewjs
> > const totalPages_win = dv.pages('#aposta')
> >   .where(p => typeof p.resultado === "string" && (p.resultado.toLowerCase() == "green" || p.resultado.toLowerCase() == "red"));
> > const greenPages_win = totalPages_win.where(p => p.resultado.toLowerCase() == "green");
> > const winRate = (totalPages_win.length === 0) ? 0 : (greenPages_win.length / totalPages_win.length) * 100;
> >
> > 
> > const lucroTotal = totalPages_win.map(p => {
> >     const valor = Number((p.valor_apostado || '0').toString().replace(",", ".")) || 0;
> >     const odd = Number((p.odd || '0').toString().replace(",", ".")) || 0;
> >     const resultado = p.resultado.toLowerCase(); // a query já filtrou green/red
> >     
> >     if (resultado == 'green') {
> >         return (valor * odd) - valor;
> >     } else if (resultado == 'red') {
> >         return -valor;
> >     }
> >     return 0; 
> > }).array().reduce((a, b) => a + b, 0);
> >
> >
> > let corFinal = '#ffffff';
> > if (lucroTotal > 0) corFinal = '#43cc56';
> > else if (lucroTotal < 0) corFinal = '#f04134';
> > 
> > const wrapper = dv.el('div', '', {
> >     attr: {
> >         style: 'height: 100%; min-height: 140px; display: flex; flex-direction: column; align-items: center; justify-content: center;'
> >     }
> > });
> > 
> > dv.el('div', 'WIN RATE', {
> >   parent: wrapper,
> >   attr: {
> >     style: 'font-size: 1.5em; font-weight: 600; color: #a0a0a0; text-transform: uppercase; margin-bottom: 8px; text-align: center;'
> >   }
> > });
> > 
> > dv.el('div', `${winRate.toFixed(2)}%`, {
> >   parent: wrapper,
> >   attr: {
> >     style: `font-size: 6em; font-weight: 700; color: ${corFinal}; line-height: 1.0; text-align: center; letter-spacing: -1px;`
> >   }
> > });
> > ```
---
## Apostas do mês

```dataviewjs
function createStat(label, value, color = "#ffffff") {
    return dv.el('div', [
        dv.el('span', `${label}: `, { 
            attr: { style: 'font-size: 12px; color: #a0a0a0; text-transform: uppercase; margin: 0; padding: 0; font-weight: 600;' }
        }),
        dv.el('span', value, { 
            attr: { style: `font-size: 14px; font-weight: 600; color: ${color}; margin: 0; padding: 0;` }
        })
    ], { 
        attr: { style: 'text-align: left; margin: 0 0 0 16px; padding: 0; white-space: nowrap; flex-shrink: 0' }
    });
}
function createBadge(text, bgColor = "#333", textColor = "#fff") {
    if (!text) return dv.el('span', '');
    return dv.el('span', text, {
        attr: { style: `font-size: 12px; font-weight: 600; padding: 2px 6px; border-radius: 4px; background-color: ${bgColor}; color: ${textColor}; white-space: nowrap; flex-shrink: 0;` }
    });
}

// Coleta e filtra as notas do mês atual com campo de data válido
const pages = dv.pages('#aposta')
    .where(p => {
        const dataValida = dv.date(p.data);
        if (!dataValida) return false;
        return dataValida.month == dv.date("now").month && dataValida.year == dv.date("now").year;
    })
    .sort(p => p.file.ctime, 'desc'); // Última nota criada primeiro

for (let page of pages) {
    const odd_num = Number((page.odd || '0').toString().replace(",", ".")) || 0;
    const valor = Number((page.valor_apostado || '0').toString().replace(",", ".")) || 0;
    
    const resultado = (page.resultado || 'pendente').toLowerCase().trim();
    let lucro = 0;
    if (resultado == 'green') {
        lucro = (valor * odd_num) - valor;
    } else if (resultado == 'red') {
        lucro = -valor;
    }

    const casa = (typeof page.casa === "string" ? page.casa.trim() : "N/A");
    const esporte = (typeof page.esporte === "string" ? page.esporte.trim() : "Aposta");
    const ganho = valor + lucro;

    // Cores
    const corGreen = "#43cc56";
    const corRed = "#f04134";
    const corGrey = "#a0a0a0";
    
    // --- NOVAS CORES ---
    const corOdd = "#e6c07b"; // Amarelo suave
    const corValor = "#61afef"; // Azul claro

    let corLucro = corGrey, corGanho = corGrey;
    if (resultado == 'green') corLucro = corGanho = corGreen;
    if (resultado == 'red') {
        corLucro = corRed;
        corGanho = (ganho > 0) ? corGreen : corRed; // <--- LINHA CORRIGIDA
    }
    if (lucro == 0) corLucro = corGrey;

    const coresCasas = {
        "stake":         { bg: "#000000", text: "#ffffff" },
        "betano":        { bg: "#d45c00", text: "#ffffff" },
        "superbet":      { bg: "#E60000", text: "#ffffff" },
        "bet365":        { bg: "#04a367", text: "#ffffff" },
        "betpix365":     { bg: "#FBC02D", text: "#000000" },
        "betnacional":   { bg: "#007bff", text: "#ffffff" },
        "esportes da sorte": { bg: "#003B73", text: "#ffffff" }
    };
    const coresEsportes = {
        "futebol":    { bg: "#1f78b4", text: "#ffffff" },
        "basquete":   { bg: "#401c00", text: "#ffffff" },
        "tenis":      { bg: "#6a3d9a", text: "#ffffff" },
        "esports":    { bg: "#e31a1c", text: "#ffffff" }
    };
    const corCasaPadrao = { bg: "#333", text: "#fff" };
    const corEsportePadrao = { bg: "#444", text: "#fff" };

    const corCasaObj = coresCasas[casa.toLowerCase()] || corCasaPadrao;
    const corEsporteObj = coresEsportes[esporte.toLowerCase()] || corEsportePadrao;

    // Card
    const card = dv.el('div', '', {
        attr: { 
            style: 'display: flex; flex-direction: row; align-items: center; padding: 14px 16px; background-color: #1e1e1e; border-radius: 8px; margin-bottom: 8px; border: 1px solid #333; list-style: none; overflow-x: auto; white-space: nowrap;'
        }
    });
    // Badges
    const badges = dv.el('div', [
        createBadge(casa, corCasaObj.bg, corCasaObj.text),
        createBadge(esporte, corEsporteObj.bg, corEsporteObj.text)
    ], { attr: { style: 'display: flex; flex-direction: row; margin: 0; padding: 0; gap: 6px; flex-shrink: 0;' } });
    card.appendChild(badges);
    // Título (clique abre a nota)
    const title = dv.el('div', dv.fileLink(page.file.path, false, page.file.name), {
        attr: { style: 'font-size: 16px; font-weight: 600; color: #fff; margin: 0 0 0 14px; padding: 0; line-height: 1.3; flex-shrink: 0;' } 
    });
    card.appendChild(title);
    
    // --- STATS COM AS NOVAS CORES ---
    card.appendChild(createStat("Cotação", odd_num.toFixed(3), corOdd));
    card.appendChild(createStat("Valor", `${valor.toFixed(2)} R$`, corValor));
    card.appendChild(createStat("Lucro", `${lucro.toFixed(2)} R$`, corLucro));
    card.appendChild(createStat("Total", `${ganho.toFixed(2)} R$`, corGanho));
}
```

---
