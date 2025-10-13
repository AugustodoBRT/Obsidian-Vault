---
type: movie
subType: ""
title: Inglourious Basterds
englishTitle: Inglourious Basterds
year: "2009"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0361748/
id: tt0361748
plot: In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.
genres:
  - Adventure
  - Drama
  - War
director:
  - Quentin Tarantino
writer:
  - Quentin Tarantino
studio:
  - N/A
duration: 153 min
onlineRating: 8.4
actors:
  - Brad Pitt
  - Diane Kruger
  - Eli Roth
image: https://m.media-amazon.com/images/M/MV5BODZhMWJlNjYtNDExNC00MTIzLTllM2ItOGQ2NGVjNDQ3MzkzXkEyXkFqcGc@._V1_SX300.jpg
released: true
streamingServices: 
premiere: 21/08/2009
watched: true
lastWatched: 19/04/2025
personalRating: 9
tags:
  - mediaDB/tv/movie
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

In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.

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

**Título:** Inglourious Basterds
**Tipo**: `$= dv.current().type`
**Diretor:** `$= dv.current().director`
**IMDb**: `$= dv.current().onlineRating`
**Tempo**:  `$= dv.current().duration`
**Lançado**: `$= dv.current().premiere`
**Resumo:** Matar Nazista  
**Análise:** Bom demais
**Pontos Positivos:** Mata e queimma nazistas
**Pontos Negativos:** tinha que matarr mais
**Conclusão:**  bom demias
**Nota Pessoal:** 9/10

---

#### Resenha:


---


