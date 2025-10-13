---
type: movie
title: Tetris
englishTitle: Tetris
year: "2023"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt12758060/
id: tt12758060
plot: Video game designer Henk Rogers seeks to secure global rights for Tetris (1984), leading to tense negotiations in the Soviet Union, involving creators, government, and corporate intrigues.
genres:
  - Biography
  - Drama
  - History
director:
  - Jon S. Baird
writer:
  - Noah Pink
studio:
  - N/A
duration: 118 min
onlineRating: 7.4
actors:
  - Taron Egerton
  - Mara Huf
  - Miles Barrow
image: https://m.media-amazon.com/images/M/MV5BMDZhY2Y4ZGQtODk4MC00NGQwLWFiMWItNzU2M2Q3Nzk2MmVlXkEyXkFqcGc@._V1_SX300.jpg
released: true
streamingServices: 
premiere: 31/03/2023
watched: true
lastWatched: 10/04/2025
personalRating: 8
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

O filme que conta como surgiu o Tetris.

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

**Título:** Tetris
**Tipo**: `$= dv.current().type`
**Diretor:** `$= dv.current().director`
**IMDb**: `$= dv.current().onlineRating`
**Tempo**:  `$= dv.current().duration`
**Lançado**: `$= dv.current().premiere`
**Resumo:**   
**Análise:** 
**Pontos Positivos:** 
**Pontos Negativos:**  
**Conclusão:**  
**Nota Pessoal:** 8/10

---

#### Resenha:


---


