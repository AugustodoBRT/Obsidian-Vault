---
type: movie
title: Sinners
englishTitle: Sinners
year: "2025"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt31193180/
id: tt31193180
plot: Trying to leave their troubled lives behind, twin brothers return to their hometown to start again, only to discover that an even greater evil is waiting to welcome them back.
genres:
  - Action
  - Drama
  - Horror
director:
  - Ryan Coogler
writer:
  - Ryan Coogler
studio:
  - N/A
duration: 137 min
onlineRating: .nan
actors:
  - Miles Caton
  - Saul Williams
  - Andrene Ward-Hammond
  - Michael B. Jordan
image: https://m.media-amazon.com/images/M/MV5BNjIwZWY4ZDEtMmIxZS00NDA4LTg4ZGMtMzUwZTYyNzgxMzk5XkEyXkFqcGc@._V1_SX300.jpg
released: true
streamingServices: 
premiere: 18/04/2025
watched: true
lastWatched: 18/04/2025
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

Dispostos a deixar suas vidas conturbadas para trás, irmãos gêmeos retornam à cidade natal para recomeçar suas vidas do zero, quando descobrem que um mal ainda maior está à espera deles para recebê-los de volta.

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

**Título:** Sinners
**Tipo**: `$= dv.current().type`
**Diretor:** `$= dv.current().director`
**IMDb**: 8,2
**Tempo**:  `$= dv.current().duration`
**Lançado**: `$= dv.current().premiere`
**Resumo:** pretos de gueto em 1932 onde são atacados por vampiros e quase morre todo mundo.   
**Análise:** não tem como alguma coisa com vampiro ser ruim
**Pontos Positivos:** vampiro
**Pontos Negativos:** Filme escuro até demais, poderia ser um pouco mais claro
**Conclusão:** compensa ver, é literalmente de vampiro
**Nota Pessoal:** 8/10

---
