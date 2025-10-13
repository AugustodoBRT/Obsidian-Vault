---
type: series
title: Severance
englishTitle: Severance
year: 2022–
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt11280740/
id: tt11280740
plot: Mark leads a team of office workers whose memories have been surgically divided between their work and personal lives. When a mysterious colleague appears outside of work, it begins a journey to discover the truth about their jobs.
genres:
  - Drama
  - Mystery
  - Sci-Fi
writer:
  - Dan Erickson
studio: 
episodes: 0
duration: N/A
onlineRating: 8.7
actors:
  - Adam Scott
  - Zach Cherry
  - Britt Lower
image: https://m.media-amazon.com/images/M/MV5BZDI5YzJhODQtMzQyNy00YWNmLWIxMjUtNDBjNjA5YWRjMzExXkEyXkFqcGc@._V1_SX300.jpg
released: true
streamingServices: 
airing: true
airedFrom: 18/02/2022
airedTo: unknown
watched: true
lastWatched: ""
personalRating: 0
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
Crazy Crazy novo lost bom demais

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

**Título:** Severance
**Tipo**: `$= dv.current().type`
**Escritor:** Dan Erickson
**IMDb**: `$= dv.current().onlineRating`
**Resumo:**   
**Análise:** 
**Pontos Positivos:** 
**Pontos Negativos:**  
**Conclusão:**  
**Nota Pessoal:** 8.4/10

---

#### Resenha:


---


