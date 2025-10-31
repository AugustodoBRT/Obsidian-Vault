---
cssclasses:
  - daily
  - quinta-feira
---
---
### Resumo Diário
---

> [!multi-column]
>
> > [!tip]+ Lucro/Perda Hoje
> > ```dataviewjs
> > // --- 1. CONFIGURAÇÃO ---
> > const hoje = dv.date('today'); // Pega a data atual automaticamente
> > 
> > // --- 2. FUNÇÃO HELPER DE CÁLCULO ---
> > function calcularLucro(p) {
> >     const valor = Number((p.valor_apostado || '0').toString().replace(",", ".")) || 0;
> >     const odd = Number((p.odd || '0').toString().replace(",", ".")) || 0;
> >     const resultado = (p.resultado || "").toLowerCase();
> >     if (resultado == 'green') return (valor * odd) - valor;
> >     if (resultado == 'red') return -valor;
> >     return 0;
> > }
> > 
> > // --- 3. FILTRO (APENAS HOJE) ---
> > const pages = dv.pages('#aposta')
> >     .where(p => {
> >         const dataValida = dv.date(p.data);
> >         const resultado = (p.resultado || "").toLowerCase();
> >         const eResolvida = (resultado === 'green' || resultado === 'red');
> >         return dataValida && eResolvida &&
> >                dataValida.year === hoje.year && 
> >                dataValida.month === hoje.month &&
> >                dataValida.day === hoje.day;
> >     });
> > 
> > // --- 4. CÁLCULO ---
> > const lucroTotal = pages.map(calcularLucro).array().reduce((a, b) => a + b, 0);
> > const cor = lucroTotal > 0 ? '#43cc56' : (lucroTotal < 0 ? '#f04134' : '#a0a0a0');
> > 
> > // --- 5. DISPLAY (Card) ---
> > const card = dv.el('div', '', {
> >     attr: { style: 'padding: 20px; background-color: #1e1e1e; border-radius: 8px; text-align: center; border: 1px solid #333; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;' }
> > });
> > 
> > dv.el('div', `R$ ${lucroTotal.toFixed(2)}`, {
> >     parent: card,
> >     attr: { style: `font-size: 3.5em; font-weight: 700; color: ${cor};` }
> > });
> > ```
>
> > [!example]+ Banca Utilizada
> > ```dataviewjs
> > // --- 1. CONFIGURE AQUI O VALOR DA BANCA ---
> > const bancaUtilizada = 200; // Você pode mudar este valor
> > // --- FIM DA CONFIGURAÇÃO ---
> > 
> > 
> > // --- 2. DISPLAY (Card) ---
> > const card = dv.el('div', '', {
> >     attr: { style: 'padding: 20px; background-color: #1e1e1e; border-radius: 8px; text-align: center; border: 1px solid #333; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;' }
> > });
> > 
> > 
> > dv.el('div', `R$ ${bancaUtilizada.toFixed(2)}`, {
> >     parent: card,
> >     attr: { style: 'font-size: 3.5em; font-weight: 700; color: #ffffff;' }
> > });
> > ```

> [!multi-column]
>
> > [!info]+ Total do Dia
> > ```dataviewjs
> > // --- 1. CONFIGURAÇÃO ---
> > const hoje = dv.date('today'); // Pega a data atual automaticamente
> > 
> > // --- 2. FUNÇÃO HELPER DE CÁLCULO ---
> > function cL(p) {
> >     const valor = Number((p.valor_apostado || '0').toString().replace(",", ".")) || 0;
> >     const odd = Number((p.odd || '0').toString().replace(",", ".")) || 0;
> >     const resultado = (p.resultado || "").toLowerCase();
> >     if (resultado == 'green') return (valor * odd) - valor;
> >     if (resultado == 'red') return -valor;
> >     return 0;
> > }
> > 
> > // --- 3. FILTRO (APENAS HOJE) ---
> > const pages = dv.pages('#aposta')
> >     .where(p => {
> >         const dataValida = dv.date(p.data);
> >         const resultado = (p.resultado || "").toLowerCase();
> >         const eResolvida = (resultado === 'green' || resultado === 'red');
> >         return dataValida && eResolvida &&
> >                dataValida.year === hoje.year && 
> >                dataValida.month === hoje.month &&
> >                dataValida.day === hoje.day;
> >     });
> > 
> > // --- 4. CÁLCULO TOTAL ---
> > const totalApostas = pages.length;
> > const totalInvestido = pages.map(p => Number(p.valor_apostado) || 0).array().reduce((a, b) => a + b, 0);
> > const totalLucro = pages.map(cL).array().reduce((a, b) => a + b, 0);
> > const totalROI = (totalInvestido === 0) ? 0 : (totalLucro / totalInvestido) * 100;
> > 
> > // --- CÁLCULOS (Odd Média e Winrate) ---
> > const greenPages = pages.where(p => (p.resultado || "").toLowerCase() === 'green');
> > const totalGreens = greenPages.length;
> > const winrate = (totalApostas === 0) ? 0 : (totalGreens / totalApostas) * 100;
> > 
> > const somaOdds = pages
> >     .map(p => Number((p.odd || '0').toString().replace(",", ".")) || 0)
> >     .array()
> >     .reduce((a, b) => a + b, 0);
> >     
> > const oddMedia = (totalApostas === 0) ? 0 : (somaOdds / totalApostas);
> > 
> > // --- 5. DISPLAY TOTAL ---
> > const corLucro = totalLucro > 0 ? '#43cc56' : (totalLucro < 0 ? '#f04134' : '#a0a0a0');
> > const corROI = totalROI > 0 ? '#43cc56' : (totalROI < 0 ? '#f04134' : '#a0a0a0');
> > const corWinrate = winrate >= 50 ? '#43cc56' : (winrate < 50 ? '#f04134' : '#a0a0a0');
> > 
> > const tabela = [
> >     ["Apostas", totalApostas],
> >     ["Taxa de Acerto", `<span style="font-weight: 600; color: ${corWinrate};">${winrate.toFixed(2)}%</span>`],
> >     ["Odd Média", oddMedia.toFixed(2)],
> >     ["Investido", `R$ ${totalInvestido.toFixed(2)}`],
> >     ["Lucro/Perda", `<span style="font-weight: 800; color: ${corLucro};">R$ ${totalLucro.toFixed(2)}</span>`],
> >     ["ROI", `<span style="font-weight: 800; color: ${corROI};">${totalROI.toFixed(2)}%</span>`]
> > ];
> > 
> > dv.table(["Métrica", "Valor"], tabela);
> > ```
>
> > [!info]+ Resumos do Dia
> > ### Por Esporte
> > ```dataviewjs
> > // --- 1. CONFIGURAÇÃO ---
> > const hoje = dv.date('today');
> > 
> > // --- 2. FUNÇÃO HELPER DE CÁLCULO ---
> > function cL(p) {
> >     const valor = Number((p.valor_apostado || '0').toString().replace(",", ".")) || 0;
> >     const odd = Number((p.odd || '0').toString().replace(",", ".")) || 0;
> >     const resultado = (p.resultado || "").toLowerCase();
> >     if (resultado == 'green') return (valor * odd) - valor;
> >     if (resultado == 'red') return -valor;
> >     return 0;
> > }
> > 
> > // --- 3. FILTRO (APENAS HOJE) ---
> > const pages = dv.pages('#aposta')
> >     .where(p => {
> >         const dataValida = dv.date(p.data);
> >         const resultado = (p.resultado || "").toLowerCase();
> >         const eResolvida = (resultado === 'green' || resultado === 'red');
> >         return dataValida && eResolvida &&
> >                dataValida.year === hoje.year && 
> >                dataValida.month === hoje.month &&
> >                dataValida.day === hoje.day;
> >     });
> > 
> > // --- 4. CÁLCULO (Agrupamento por Esporte) ---
> > const porEsporte = pages
> >     .groupBy(p => p.esporte || "N/A")
> >     .map(g => {
> >         const investido = g.rows.map(p => Number(p.valor_apostado) || 0).array().reduce((a, b) => a + b, 0);
> >         const lucro = g.rows.map(cL).array().reduce((a, b) => a + b, 0);
> >         const roi = (investido === 0) ? 0 : (lucro / investido) * 100;
> >         return {
> >             esporte: g.key,
> >             apostas: g.rows.length,
> >             investido: `R$ ${investido.toFixed(2)}`,
> >             lucro: lucro,
> >             roi: roi
> >         };
> >     });
> > 
> > // --- 5. DISPLAY (Tabela Esporte) ---
> > const tabela = porEsporte.map(e => {
> >     const corLucro = e.lucro > 0 ? '#43cc56' : (e.lucro < 0 ? '#f04134' : '#a0a0a0');
> >     const corROI = e.roi > 0 ? '#43cc56' : (e.roi < 0 ? '#f04134' : '#a0a0a0');
> >     return [
> >         `<span style="font-weight: 600;">${e.esporte}</span>`,
> >         e.apostas,
> >         e.investido,
> >         `<span style="font-weight: 600; color: ${corLucro};">R$ ${e.lucro.toFixed(2)}</span>`,
> >         `<span style="font-weight: 600; color: ${corROI};">${e.roi.toFixed(2)}%</span>`
> >     ];
> > });
> > dv.table(["Esporte", "Apostas", "Investido", "Lucro/Perda", "ROI"], tabela);
> > ```
> > ### Por Tipster
> > ```dataviewjs
> > // --- 1. CONFIGURAÇÃO ---
> > const hoje = dv.date('today');
> >  
> > // --- 2. FUNÇÃO HELPER DE CÁLCULO ---
> > function cL(p) {
> >     const valor = Number((p.valor_apostado || '0').toString().replace(",", ".")) || 0;
> >     const odd = Number((p.odd || '0').toString().replace(",", ".")) || 0;
> >     const resultado = (p.resultado || "").toLowerCase();
> >     if (resultado == 'green') return (valor * odd) - valor;
> >     if (resultado == 'red') return -valor;
> >     return 0;
> > }
> > 
> > // --- 3. FILTRO (APENAS HOJE) ---
> > const pages = dv.pages('#aposta')
> >     .where(p => {
> >         const dataValida = dv.date(p.data);
> >         const resultado = (p.resultado || "").toLowerCase();
> >         const eResolvida = (resultado === 'green' || resultado === 'red');
> >         return dataValida && eResolvida &&
> >                dataValida.year === hoje.year && 
> >                dataValida.month === hoje.month &&
> >                dataValida.day === hoje.day;
> >     });
> > 
> > // --- 4. CÁLCULO (Agrupamento por Tipster) ---
> > const porTipster = pages
> >     .groupBy(p => p.tipster || "Eu")
> >     .map(g => {
> >         const investido = g.rows.map(p => Number(p.valor_apostado) || 0).array().reduce((a, b) => a + b, 0);
> >         const lucro = g.rows.map(cL).array().reduce((a, b) => a + b, 0);
> >         const roi = (investido === 0) ? 0 : (lucro / investido) * 100;
> >         return {
> >             tipster: g.key,
> >             apostas: g.rows.length,
> >             investido: `R$ ${investido.toFixed(2)}`,
> >             lucro: lucro,
> >             roi: roi
> >         };
> >     });
> > 
> > // --- 5. DISPLAY (Tabela Tipster) ---
> > const tabela = porTipster.map(t => {
> >     const corLucro = t.lucro > 0 ? '#43cc56' : (t.lucro < 0 ? '#f04134' : '#a0a0a0');
> >     const corROI = t.roi > 0 ? '#43cc56' : (t.roi < 0 ? '#f04134' : '#a0a0a0');
> >     return [
> >         `<span style="font-weight: 600;">${t.tipster}</span>`,
> >         t.apostas,
> >         t.investido,
> >         `<span style="font-weight: 600; color: ${corLucro};">R$ ${t.lucro.toFixed(2)}</span>`,
> >         `<span style="font-weight: 600; color: ${corROI};">${t.roi.toFixed(2)}%</span>`
> >     ];
> > });
> > dv.table(["Tipster", "Apostas", "Investido", "Lucro/Perda", "ROI"], tabela);
> > ```

---
### Todas as Apostas de Hoje

```dataviewjs
function createStat(label, value, color = "#ffffff") {
    // ... (função igual) ...
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
    // ... (função igual) ...
    if (!text) return dv.el('span', '');
    return dv.el('span', text, {
        attr: { style: `font-size: 12px; font-weight: 600; padding: 2px 6px; border-radius: 4px; background-color: ${bgColor}; color: ${textColor}; white-space: nowrap; flex-shrink: 0;` }
    });
}

// --- LÓGICA DE COR ---
const assignedCasaColors = {}; 
let nextHue = Math.floor(Math.random() * 360);
const colorSaturation = 75; 
const colorLightness = 45; 
// --- FIM COR ---

// Pega o dia atual
const hoje = dv.date('today');

// Coleta e filtra as notas de HOJE
const pages = dv.pages('#aposta')
    .where(p => {
        const dataValida = dv.date(p.data);
        if (!dataValida) return false;
        return dataValida.year === hoje.year && 
               dataValida.month === hoje.month &&
               dataValida.day === hoje.day;
    })
    .sort(p => p.file.ctime, 'desc'); 

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
    const corOdd = "#e6c07b"; 
    const corValor = "#61afef"; 

    let corLucro = corGrey, corGanho = corGrey;
    if (resultado == 'green') corLucro = corGanho = corGreen;
    if (resultado == 'red') {
        corLucro = corRed;
        corGanho = (ganho > 0) ? corGreen : corRed;
    }
    if (lucro == 0) corLucro = corGrey;

    // --- Lógica de atribuição automática de cor para CASAS ---
    let corCasaObj;
    const casaLower = casa.toLowerCase();

    if (assignedCasaColors[casaLower]) {
        corCasaObj = assignedCasaColors[casaLower];
    } else {
        const bgColor = `hsl(${nextHue}, ${colorSaturation}%, ${colorLightness}%)`;
        const textColor = '#ffffff'; 
        
        corCasaObj = { bg: bgColor, text: textColor };
        assignedCasaColors[casaLower] = corCasaObj;
        nextHue = (nextHue + 37) % 360;
    }
    // --- FIM DA LÓGICA DE COR ---

    // Cores para Esportes
    const coresEsportes = {
        "futebol":  { bg: "#1f78b4", text: "#ffffff" },
        "basquete": { bg: "#401c00", text: "#ffffff" },
        "tenis":    { bg: "#6a3d9a", text: "#ffffff" },
        "esports":  { bg: "#e31a1c", text: "#ffffff" }
    };
    const corEsportePadrao = { bg: "#444", text: "#fff" };
    const corEsporteObj = coresEsportes[esporte.toLowerCase()] || corEsportePadrao;

    // Card
    const card = dv.el('div', '', {
        attr: { style: 'display: flex; flex-direction: row; align-items: center; padding: 14px 16px; background-color: #1e1e1e; border-radius: 8px; margin-bottom: 8px; border: 1px solid #333; list-style: none; overflow-x: auto; white-space: nowrap;' }
    });
    // Badges
    const badges = dv.el('div', [
        createBadge(casa, corCasaObj.bg, corCasaObj.text),
        createBadge(esporte, corEsporteObj.bg, corEsporteObj.text)
    ], { attr: { style: 'display: flex; flex-direction: row; margin: 0; padding: 0; gap: 6px; flex-shrink: 0;' } });
    card.appendChild(badges);
    // Título
    const title = dv.el('div', dv.fileLink(page.file.path, false, page.file.name), {
        attr: { style: 'font-size: 16px; font-weight: 600; color: #fff; margin: 0 0 0 14px; padding: 0; line-height: 1.3; flex-shrink: 0;' } 
    });
    card.appendChild(title);
    
    // Stats
    card.appendChild(createStat("Cotação", odd_num.toFixed(3), corOdd));
    card.appendChild(createStat("Valor", `${valor.toFixed(2)} R$`, corValor));
    card.appendChild(createStat("Lucro", `${lucro.toFixed(2)} R$`, corLucro));
    card.appendChild(createStat("Total", `${ganho.toFixed(2)} R$`, corGanho));
}
```
---
```dataviewjs
function createStat(label, value, color = "#ffffff") {
    // ... (função igual) ...
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
    // ... (função igual) ...
    if (!text) return dv.el('span', '');
    return dv.el('span', text, {
        attr: { style: `font-size: 12px; font-weight: 600; padding: 2px 6px; border-radius: 4px; background-color: ${bgColor}; color: ${textColor}; white-space: nowrap; flex-shrink: 0;` }
    });
}

// --- LÓGICA DE COR ---
const assignedCasaColors = {}; 
let nextHue = Math.floor(Math.random() * 360);
const colorSaturation = 75; 
const colorLightness = 45; 
// --- FIM COR ---

dv.el("h3", "Apostas Pendentes");

// Coleta e filtra as notas PENDENTES
const pages = dv.pages('#aposta')
    .where(p => {
        const resultado = (p.resultado || 'pendente').toLowerCase().trim();
        return resultado === 'pendente';
    })
    .sort(p => p.data || p.file.ctime, 'desc'); // Ordena pela data da aposta

for (let page of pages) {
    const odd_num = Number((page.odd || '0').toString().replace(",", ".")) || 0;
    const valor = Number((page.valor_apostado || '0').toString().replace(",", ".")) || 0;
    
    // Para apostas pendentes, lucro e ganho são 0
    const resultado = 'pendente';
    let lucro = 0;
    let ganho = 0; // O ganho total só é calculado se for 'green'

    const casa = (typeof page.casa === "string" ? page.casa.trim() : "N/A");
    const esporte = (typeof page.esporte === "string" ? page.esporte.trim() : "Aposta");

    // Cores
    const corGrey = "#a0a0a0"; // Cor de PENDENTE
    const corOdd = "#e6c07b"; 
    const corValor = "#61afef"; 

    // Em apostas pendentes, lucro e ganho são cinza
    let corLucro = corGrey;
    let corGanho = corGrey;

    // --- Lógica de atribuição automática de cor para CASAS ---
    let corCasaObj;
    const casaLower = casa.toLowerCase();

    if (assignedCasaColors[casaLower]) {
        corCasaObj = assignedCasaColors[casaLower];
    } else {
        const bgColor = `hsl(${nextHue}, ${colorSaturation}%, ${colorLightness}%)`;
        const textColor = '#ffffff'; 
        
        corCasaObj = { bg: bgColor, text: textColor };
        assignedCasaColors[casaLower] = corCasaObj;
        nextHue = (nextHue + 37) % 360;
    }
    // --- FIM DA LÓGICA DE COR ---

    // Cores para Esportes
    const coresEsportes = {
        "futebol":  { bg: "#1f78b4", text: "#ffffff" },
        "basquete": { bg: "#401c00", text: "#ffffff" },
        "tenis":    { bg: "#6a3d9a", text: "#ffffff" },
        "esports":  { bg: "#e31a1c", text: "#ffffff" }
    };
    const corEsportePadrao = { bg: "#444", text: "#fff" };
    const corEsporteObj = coresEsportes[esporte.toLowerCase()] || corEsportePadrao;

    // Card
    const card = dv.el('div', '', {
        attr: { style: 'display: flex; flex-direction: row; align-items: center; padding: 14px 16px; background-color: #1e1e1e; border-radius: 8px; margin-bottom: 8px; border: 1px solid #333; list-style: none; overflow-x: auto; white-space: nowrap;' }
    });
    // Badges
    const badges = dv.el('div', [
        createBadge(casa, corCasaObj.bg, corCasaObj.text),
        createBadge(esporte, corEsporteObj.bg, corEsporteObj.text)
    ], { attr: { style: 'display: flex; flex-direction: row; margin: 0; padding: 0; gap: 6px; flex-shrink: 0;' } });
    card.appendChild(badges);
    
    // Título
    // Mostra a data da aposta no título para saber de quando é
    const dataAposta = dv.date(page.data) ? `[${dv.date(page.data).toFormat("dd/MM")}] ` : "";
    const title = dv.el('div', dataAposta + dv.fileLink(page.file.path, false, page.file.name), {
        attr: { style: 'font-size: 16px; font-weight: 600; color: #fff; margin: 0 0 0 14px; padding: 0; line-height: 1.3; flex-shrink: 0;' } 
    });
    card.appendChild(title);
    
    // Stats
    card.appendChild(createStat("Cotação", odd_num.toFixed(3), corOdd));
    card.appendChild(createStat("Valor", `${valor.toFixed(2)} R$`, corValor));
    card.appendChild(createStat("Lucro", `${lucro.toFixed(2)} R$`, corLucro));
    card.appendChild(createStat("Total", `${ganho.toFixed(2)} R$`, corGanho));
}
```
---