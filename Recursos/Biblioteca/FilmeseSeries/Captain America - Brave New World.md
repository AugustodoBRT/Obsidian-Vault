---
type: movie
title: "Captain America: Brave New World"
englishTitle: "Captain America: Brave New World"
year: "2025"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt14513804/
id: tt14513804
plot: Sam Wilson, the new Captain America, finds himself in the middle of an international incident and must discover the motive behind a nefarious global plan.
genres:
  - Action
  - Adventure
  - Sci-Fi
director:
  - Julius Onah
writer:
  - Rob Edwards
  - Malcolm Spellman
  - Dalan Musson
studio:
  - N/A
duration: 118 min
onlineRating: 6
actors:
  - Anthony Mackie
  - Harrison Ford
  - Danny Ramirez
image: https://m.media-amazon.com/images/M/MV5BNDRjY2E0ZmEtN2QwNi00NTEwLWI3MWItODNkMGYwYWFjNGE0XkEyXkFqcGc@._V1_SX300.jpg
released: true
streamingServices:
premiere: 14/02/2025
watched: true
lastWatched: ""
personalRating: 7
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

Novo capitão america negão enche a porrada no hulk e no bicho verde

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

**Título:** Captain America: Brave New World
**Tipo**: `$= dv.current().type`
**Diretor:** `$= dv.current().director`
**IMDb**: `$= dv.current().onlineRating`
**Tempo**:  `$= dv.current().duration`
**Lançado**: `$= dv.current().premiere`
**Resumo:**   
**Análise:** 
**Pontos Positivos:** muita porradia, ação
**Pontos Negativos:** Historia meio meh
**Conclusão:**  top
**Nota Pessoal:** 7/10

---

#### Resenha:


---


