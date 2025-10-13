---
type: series
title: Arcane
englishTitle: Arcane
year: 2021–2024
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt11126994/
id: tt11126994
plot: Amid the stark discord of twin cities Piltover and Zaun, two sisters fight on rival sides of a war between magic technologies and clashing convictions.
genres:
  - Animation
  - Action
  - Adventure
writer:
  - N/A
studio: 
episodes: 0
duration: N/A
onlineRating: 9
actors:
  - Kevin Alejandro
  - Hailee Steinfeld
  - Ella Purnell
image: https://m.media-amazon.com/images/M/MV5BOWJhYjdjNWEtMWFmNC00ZjNkLThlZGEtN2NkM2U3NTVmMjZkXkEyXkFqcGc@._V1_SX300.jpg
released: true
streamingServices: Netflix
airing: false
airedFrom: 06/11/2021
airedTo: unknown
watched: true
lastWatched: 17/04/2025
personalRating: 10
tags:
  - mediaDB/tv/series
---
`$= '![Image|180](' + dv.current().image + ')'`

# `$= dv.current().title`

```dataviewjs
if (dv.current().watched) {
	dv.paragraph(`> [!SUCCESS] \Visto por ultimo em ${dv.current().lastWatched || '---'}`);
} else {
	dv.paragraph(`> [!WARNING] \ not yet watched`);
}
```


---
#### Sinopse:

Amid the stark discord of twin cities Piltover and Zaun, two sisters fight on rival sides of a war between magic technologies and clashing convictions.

---

#### Genêro:
```dataviewjs
dv.current().genres.length === 0 ? dv.span(' - none') : dv.list(dv.current().genres)
```

```dataviewjs
let text = '';

if (!dv.current().released) {
	text += '**Not released**\n';
	if (dv.current().airedFrom) {
		text += 'The series will release on ' + dv.current().release_date + '.';
	} else {
		text += 'The series is not released yet.';
	}
	
} else if (dv.current().airing) {
	text += '**Not finished**\n';
	text += 'The series is not fully released yet.';
}

if (text) {
	dv.paragraph(text);
}
```
---

#### Informações Gerais:

**Título:** Arcane
**Tipo**: `$= dv.current().type`
**Escritor:** N/A
**IMDb**: `$= dv.current().onlineRating`
**Resumo:** Começa roubando uma casa, termina derrotando um DEUS  
**Análise:** Melhor serie de animação de todos os tempos com uma qualidade e historia impecavel.
**Pontos Positivos:** Tudo
**Pontos Negativos:**  Acaba
**Conclusão:** Foda, espero pelas proximas series da Riot 
**Nota Pessoal:** 10/10

---
