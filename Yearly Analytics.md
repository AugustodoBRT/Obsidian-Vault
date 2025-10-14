# Yearly Analytics

## Summary cards
**Total Focus:**  
```dataviewjs
// simples: soma de minutos nas notas do ano (exemplo)
const pages = dv.pages('"Daily"').where(p => p["focus-entries"]);
let totalMin = 0;
for (let p of pages) {
  for (let e of p["focus-entries"]) totalMin += e.minutes;
}
dv.paragraph(`Total: **${(totalMin/60).toFixed(1)}h** in ${pages.length} days`);
```


## Breakdown por categoria (gráfico tipo pizza — Tracker)
```tracker
searchType: tag
searchTarget: "#focus"
dataset:
  - tag: "#focus/coding"
    label: "Coding"
  - tag: "#focus/algorithms"
    label: "Algorithms"
  - tag: "#focus/physics"
    label: "Physics"
  - tag: "#focus/business"
    label: "Business"
chart:
  type: pie
  title: "Focus Breakdown (h)"
  valueType: minutes
  convertToHours: true
  width: 520
  height: 320
```
# Exemplo de bloco suportado pelo Heatmap Tracker (configurar através do plugin UI)


dataset:
  folder: "Daily"
  field: "focus-entries"
  dateField: "date"
  aggregation: sum
  valueField: minutes
display:
  type: year-heatmap
  year: 2025

```dataview
table date as "Dia", length(rows(focus-entries)) as "Sessões", sum(rows(focus-entries).map(x => x.minutes))/60 as "Horas"
from "Daily"
where focus-entries
group by date
sort date desc
limit 30
```


```dataview
// Estatísticas: melhor dia, média de sessão, total por tag
const pages = dv.pages('"Daily"').where(p => p["focus-entries"]);
let totalMin = 0, sessions = 0;
let byTag = {};
for (let p of pages) {
  for (let e of p["focus-entries"]) {
    totalMin += e.minutes; sessions++;
    let tag = e.tag || "untagged";
    byTag[tag] = (byTag[tag] || 0) + e.minutes;
  }
}
let avgSession = sessions ? (totalMin/sessions).toFixed(1) : 0;
dv.paragraph(`**Total:** ${(totalMin/60).toFixed(1)}h • **Sessões:** ${sessions} • **Média sessão:** ${avgSession} min`);
dv.table(["Tag","Horas"], Object.entries(byTag).map(([t,m])=>[t,(m/60).toFixed(1)]));

```

