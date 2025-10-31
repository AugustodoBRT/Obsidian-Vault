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
