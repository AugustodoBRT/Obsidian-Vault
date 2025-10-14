# 📊 Yearly Analytics

## 🔹 Summary Cards
```dataviewjs
// Soma total de minutos e dias registrados
const pages = dv.pages('"Daily"').where(p => p["focus-entries"]);
let totalMin = 0;
for (let p of pages) {
  for (let e of p["focus-entries"]) totalMin += e.minutes ?? 0;
}
dv.paragraph(`**Total Focus:** ${(totalMin/60).toFixed(1)}h in ${pages.length} days`);
```

---

## 🧩 Breakdown por categoria (Tracker - gráfico tipo pizza)
```tracker
searchType: tag
searchTarget: "#focus"
dataset:
  - tag: "#focus/coding"
    label: "Coding"
    id: coding
  - tag: "#focus/algorithms"
    label: "Algorithms"
    id: algorithms
  - tag: "#focus/physics"
    label: "Physics"
    id: physics
  - tag: "#focus/business"
    label: "Business"
    id: business
  - tag: "#focus/misc"
    label: "Misc"
    id: misc
chart:
  type: pie
  title: "Focus Breakdown (hours)"
  valueType: minutes
  convertToHours: true
  width: 520
  height: 300
```

```heatmap-tracker

dataset:
  folder: "Daily"
  field: "focus-entries"
  dateField: "date"
  aggregation: sum
  valueField: minutes
display:
  type: year-heatmap
  year: 2025
```

```dataview
TABLE date AS "Dia",
length(focus-entries) AS "Sessões",
(round(sum(focus-entries.minutes) / 60, 1)) AS "Horas"
FROM "Daily"
WHERE focus-entries
SORT date DESC
LIMIT 30

```
```dataviewjs
const pages = dv.pages('"Daily"').where(p => p["focus-entries"]);
let totalMin = 0, sessions = 0;
let byTag = {};
for (let p of pages) {
  for (let e of p["focus-entries"]) {
    totalMin += e.minutes ?? 0;
    sessions++;
    let tag = e.tag ?? "untagged";
    byTag[tag] = (byTag[tag] || 0) + (e.minutes ?? 0);
  }
}
let avg = sessions ? (totalMin / sessions).toFixed(1) : 0;
dv.paragraph(`**Total:** ${(totalMin/60).toFixed(1)}h • **Sessões:** ${sessions} • **Média:** ${avg} min`);
dv.table(["Tag", "Horas"], Object.entries(byTag).map(([t, m]) => [t, (m/60).toFixed(1)]));

```
