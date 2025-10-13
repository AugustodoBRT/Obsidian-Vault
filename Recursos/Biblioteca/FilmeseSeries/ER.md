---
type: series
title: ER
englishTitle: ER
year: 1994–2009
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0108757/
id: tt0108757
plot: The doctors who work in the ER at the County General Hospital in Chicago grapple with ups and downs in their personal and professional lives while trying to give apt medical care to their patients.
genres:
  - Drama
  - Romance
writer:
  - Michael Crichton
studio: 
episodes: 0
duration: 44 min
onlineRating: 7.9
actors:
  - Anthony Edwards
  - George Clooney
  - Julianna Margulies
image: https://m.media-amazon.com/images/M/MV5BMzM5NjQ4M2QtNWQyMy00OWUxLWIyZjktNmY2ZjMyZjA2NWE0XkEyXkFqcGc@._V1_SX300.jpg
released: true
streamingServices: 
airing: false
airedFrom: 19/09/1994
airedTo: unknown
watched: true
lastWatched: 
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

**Título:** ER
**Tipo**: `$= dv.current().type`
**Escritor:** Michael Crichton
**IMDb**: `$= dv.current().onlineRating`
**Resumo:**   
**Análise:** Em quesito de serie de médico, a melhor que eu já vi, desenvolve muito bem os personagens de uma maneira sutil e sempre mantendo o drama de um pronto socorro cheio.
**Pontos Positivos:** tudo
**Pontos Negativos:** 
**Conclusão:**  
**Nota Pessoal:** 10/10

---

#### Resenha:


---


