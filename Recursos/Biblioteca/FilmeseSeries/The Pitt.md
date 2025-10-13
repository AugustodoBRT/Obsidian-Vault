---
type: series
title: The Pitt
englishTitle: The Pitt
year: 2025–
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt31938062/
id: tt31938062
plot: The daily lives of healthcare professionals in a Pittsburgh hospital as they juggle personal crises, workplace politics, and the emotional toll of treating critically ill patients, revealing the resilience required in their noble ...
genres:
  - Drama
writer:
  - R. Scott Gemmill
studio:
episodes: 0
duration: N/A
onlineRating: 8.2
actors:
  - Noah Wyle
  - Tracy Ifeachor
  - Patrick Ball
image: https://m.media-amazon.com/images/M/MV5BMTU3MDliMGEtMDQxNi00OTk1LTg1NWMtZDM2NmEwZDA1ZDk2XkEyXkFqcGc@._V1_SX300.jpg
released: true
streamingServices:
airing: true
airedFrom: 09/01/2025
airedTo: unknown
watched: true
lastWatched: ""
personalRating: 9
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
O caos em um Pronto Socorro na sua melhor forma.

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

**Título:** The Pitt
**Tipo**: `$= dv.current().type`
**Escritor:** R. Scott Gemmill
**IMDb**: `$= dv.current().onlineRating`
**Resumo:**   
**Análise:** 
**Pontos Positivos:** ótima pra passar o tempo, muita ação e confusão no hospital, top demais, nunca para
**Pontos Negativos:** não tem 
**Conclusão:**  
**Nota Pessoal:** 10/10

---

#### Resenha:


---


