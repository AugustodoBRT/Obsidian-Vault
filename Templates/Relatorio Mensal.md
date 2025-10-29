---
# PREENCHA O CAMPO ABAIXO COM O MÊS DESEJADO (ex: 2025-10)
mes_relatorio: 
---

### 💰 Lucro/Perda no Mês

```dataviewjs
// --- 1. CONFIGURAÇÃO ---
const mesAlvoString = dv.current().mes_relatorio;
if (!mesAlvoString) { 
    dv.el("h2", "ERRO: Defina 'mes_relatorio: YYYY-MM' no frontmatter (no topo desta nota)."); 
    return;
}
const mesAlvo = dv.date(mesAlvoString);

// --- 2. FUNÇÃO HELPER DE CÁLCULO ---
function calcularLucro(p) {
    const valor = Number((p.valor_apostado || '0').toString().replace(",", ".")) || 0;
    const odd = Number((p.odd || '0').toString().replace(",", ".")) || 0;
    const resultado = (p.resultado || "").toLowerCase();
    if (resultado == 'green') return (valor * odd) - valor;
    if (resultado == 'red') return -valor;
    return 0;
}

// --- 3. FILTRO ---
// Puxa apenas as páginas resolvidas do mês alvo
const pages = dv.pages('#aposta')
    .where(p => {
        const dataValida = dv.date(p.data);
        const resultado = (p.resultado || "").toLowerCase();
        const eResolvida = (resultado === 'green' || resultado === 'red');
        return dataValida && eResolvida &&
               dataValida.year === mesAlvo.year && 
               dataValida.month === mesAlvo.month;
    });

// --- 4. CÁLCULO ---
const lucroTotal = pages.map(calcularLucro).array().reduce((a, b) => a + b, 0);
const cor = lucroTotal > 0 ? '#43cc56' : (lucroTotal < 0 ? '#f04134' : '#a0a0a0');

// --- 5. DISPLAY (Card) ---
const card = dv.el('div', '', {
    attr: { style: 'padding: 20px; background-color: #1e1e1e; border-radius: 8px; text-align: center; border: 1px solid #333;' }
});
dv.el('div', `LUCRO/PERDA EM ${mesAlvo.toFormat("MMMM yyyy").toUpperCase()}`, {
    parent: card,
    attr: { style: 'font-size: 1.2em; font-weight: 600; color: #a0a0a0; text-transform: uppercase; margin-bottom: 12px;' }
});
dv.el('div', `R$ ${lucroTotal.toFixed(2)}`, {
    parent: card,
    attr: { style: `font-size: 3.5em; font-weight: 700; color: ${cor};` }
});
```

> [!multi-column]
>
> > [!info]+ Desempenho Diário
> > ```dataviewjs
> > // --- 1. CONFIGURAÇÃO (REPETIDA) ---
> > const mesAlvoString = dv.current().mes_relatorio;
> > if (!mesAlvoString) { return; }
> > const mesAlvo = dv.date(mesAlvoString);
> > function cL(p) { /* ... (função calcularLucro) ... */ }
> > try { cL = function(p) {
> >     const valor = Number((p.valor_apostado || '0').toString().replace(",", ".")) || 0;
> >     const odd = Number((p.odd || '0').toString().replace(",", ".")) || 0;
> >     const resultado = (p.resultado || "").toLowerCase();
> >     if (resultado == 'green') return (valor * odd) - valor;
> >     if (resultado == 'red') return -valor;
> >     return 0;
> > } } catch (e) {}
> > 
> > // --- 2. FILTRO (REPETIDO) ---
> > const pages = dv.pages('#aposta').where(p => { /* ... (filtro de mês) ... */ });
> > try { pages = dv.pages('#aposta')
> >    .where(p => {
> >        const dataValida = dv.date(p.data);
> >        const resultado = (p.resultado || "").toLowerCase();
> >        const eResolvida = (resultado === 'green' || resultado === 'red');
> >        return dataValida && eResolvida &&
> >               dataValida.year === mesAlvo.year && 
> >               dataValida.month === mesAlvo.month;
> >    }); } catch (e) {}
> >
> > // --- 3. CÁLCULO (Agrupamento por dia) ---
> > const lucrosPorDia = pages
> >     .groupBy(p => dv.date(p.data)) // Agrupa por data
> >     .map(g => ({
> >         data: g.key,
> >         lucro: g.rows.map(cL).array().reduce((a, b) => a + b, 0)
> >     }))
> >     .sort(g => g.data, 'asc'); // Ordena por data
> >
> > // --- 4. DISPLAY (Tabela Diária) ---
> > // Função para formatar a linha
> > function createRow(dia) {
> >     const cor = dia.lucro > 0 ? '#43cc56' : (dia.lucro < 0 ? '#f04134' : '#a0a0a0');
> >     const dataFmt = dia.data.toFormat("dd-MMM");
> >     const lucroFmt = `R$ ${dia.lucro.toFixed(2)}`;
> >     
> >     return [
> >         `<span style="font-weight: 600;">${dataFmt}</span>`,
> >         `<span style="font-weight: 600; color: ${cor};">${lucroFmt}</span>`
> >     ];
> > }
> >
> > const tabela = lucrosPorDia.map(createRow);
> > dv.table(["Data", "Lucro/Perda"], tabela);
> > ```
>
> > [!info]+ Resumo do Mês
> > ### Por Esporte
> > ```dataviewjs
> > // --- 1. CONFIGURAÇÃO (REPETIDA) ---
> > const mesAlvoString = dv.current().mes_relatorio;
> > if (!mesAlvoString) { return; }
> > const mesAlvo = dv.date(mesAlvoString);
> > function cL(p) { /* ... (função calcularLucro) ... */ }
> > try { cL = function(p) {
> >     const valor = Number((p.valor_apostado || '0').toString().replace(",", ".")) || 0;
> >     const odd = Number((p.odd || '0').toString().replace(",", ".")) || 0;
> >     const resultado = (p.resultado || "").toLowerCase();
> >     if (resultado == 'green') return (valor * odd) - valor;
> >     if (resultado == 'red') return -valor;
> >     return 0;
> > } } catch (e) {}
> > 
> > // --- 2. FILTRO (REPETIDO) ---
> > const pages = dv.pages('#aposta').where(p => { /* ... (filtro de mês) ... */ });
> > try { pages = dv.pages('#aposta')
> >    .where(p => {
> >        const dataValida = dv.date(p.data);
> >        const resultado = (p.resultado || "").toLowerCase();
> >        const eResolvida = (resultado === 'green' || resultado === 'red');
> >        return dataValida && eResolvida &&
> >               dataValida.year === mesAlvo.year && 
> >               dataValida.month === mesAlvo.month;
> >    }); } catch (e) {}
> >
> > // --- 3. CÁLCULO (Agrupamento por Esporte) ---
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
> > // --- 4. DISPLAY (Tabela Esporte) ---
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
> > // --- 1. CONFIGURAÇÃO (REPETIDA) ---
> > const mesAlvoString = dv.current().mes_relatorio;
> > if (!mesAlvoString) { return; }
> > const mesAlvo = dv.date(mesAlvoString);
> > function cL(p) { /* ... (função calcularLucro) ... */ }
> > try { cL = function(p) {
> >     const valor = Number((p.valor_apostado || '0').toString().replace(",", ".")) || 0;
> >     const odd = Number((p.odd || '0').toString().replace(",", ".")) || 0;
> >     const resultado = (p.resultado || "").toLowerCase();
> >     if (resultado == 'green') return (valor * odd) - valor;
> >     if (resultado == 'red') return -valor;
> >     return 0;
> > } } catch (e) {}
> > 
> > // --- 2. FILTRO (REPETIDO) ---
> > const pages = dv.pages('#aposta').where(p => { /* ... (filtro de mês) ... */ });
> > try { pages = dv.pages('#aposta')
> >    .where(p => {
> >        const dataValida = dv.date(p.data);
> >        const resultado = (p.resultado || "").toLowerCase();
> >        const eResolvida = (resultado === 'green' || resultado === 'red');
> >        return dataValida && eResolvida &&
> >               dataValida.year === mesAlvo.year && 
> >               dataValida.month === mesAlvo.month;
> >    }); } catch (e) {}
> >
> > // --- 3. CÁLCULO (Agrupamento por Tipster) ---
> > // Agrupa por 'p.tipster', ou usa "Eu" se o campo estiver vazio
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
> > // --- 4. DISPLAY (Tabela Tipster) ---
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

### 📈 Desempenho Mensal (Gráfico Acumulado)

```chartsview
type: Line
data: |
  dataviewjs:
    // --- 1. CONFIGURAÇÃO (REPETIDA) ---
    const mesAlvoString = dv.current().mes_relatorio;
    // Não mostra erro, apenas um gráfico vazio se a data não estiver definida
    if (!mesAlvoString) { return []; }
    const mesAlvo = dv.date(mesAlvoString);

    // --- 2. FUNÇÃO HELPER DE CÁLCULO ---
    function calcularLucro(p) {
        const valor = Number((p.valor_apostado || '0').toString().replace(",", ".")) || 0;
        const odd = Number((p.odd || '0').toString().replace(",", ".")) || 0;
        const resultado = (p.resultado || "").toLowerCase();
        if (resultado == 'green') return (valor * odd) - valor;
        if (resultado == 'red') return -valor;
        return 0;
    }
    
    // --- 3. FILTRO (REPETIDO) ---
    const pages = dv.pages('#aposta')
        .where(p => {
            const dataValida = dv.date(p.data);
            const resultado = (p.resultado || "").toLowerCase();
            const eResolvida = (resultado === 'green' || resultado === 'red');
            return dataValida && eResolvida &&
                   dataValida.year === mesAlvo.year && 
                   dataValida.month === mesAlvo.month;
        });

    // --- 4. CÁLCULO (Lucro Acumulado Diário) ---
    const dataPointsDiario = pages
      .groupBy(p => dv.date(p.data).toISODate()) // Agrupa por dia
      .map(g => ({
        x: g.key, // Data
        y: g.rows.map(calcularLucro)
                 .array()
                 .reduce((sum, val) => sum + val, 0), // Lucro do dia
      }))
      .sort(p => p.x, 'asc'); // Ordena os dias

    // Agora, cria o acumulado
    const dataPointsAcumulado = [];
    let lucroAcumuladoTotal = 0;

    for (let pontoDiario of dataPointsDiario.array()) {
        lucroAcumuladoTotal += pontoDiario.y; // Soma o lucro do dia ao total
        dataPointsAcumulado.push({
            x: pontoDiario.x,
            y: lucroAcumuladoTotal, // Salva o total acumulado
            group: 'Lucro Acumulado'
        });
    }

    // 5. Retorna os dados
    return dataPointsAcumulado;

options:
  title:
    text: 'Desempenho Mensal (Acumulado)'
    style:
      fontSize: 20
  legend:
    position: 'top-right'
  xField: 'x'
  yField: 'y'
  seriesField: 'group'
  color: ['#43cc56']
  smooth: true
  area:
    style:
      fill: 'l(90) 0:#43cc56 1:rgba(67,204,86,0.1)'
      fillOpacity: 0.7
  yAxis:
    title:
      text: 'Lucro (R$)'
    label:
      formatter: |
        function(v) {
          return v + ' R$';
        }
  xAxis:
    title:
      text: 'Data'
  tooltip:
    formatter: |
      function(datum) {
        return {
          name: datum.group,
          value: datum.y.toFixed(2) + ' R$'
        };
      }
```
