---
type: movie
subType: ""
title: Novocaine
englishTitle: Novocaine
year: "2025"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt29603959/
id: tt29603959
plot: When the girl of his dreams is kidnapped, a man incapable of feeling physical pain turns his rare condition into an unexpected advantage in the fight to rescue her.
genres:
  - Action
  - Comedy
  - Thriller
director:
  - Dan Berk
  - Robert Olsen
writer:
  - Lars Jacobson
studio:
  - N/A
duration: 110 min
onlineRating: 6.6
actors:
  - Jack Quaid
  - Amber Midthunder
  - Ray Nicholson
image: https://m.media-amazon.com/images/M/MV5BMWU4MmUxODktMWUwYy00YzM0LTg1ZmItNzVlMTZhOWVlNWFjXkEyXkFqcGc@._V1_SX300.jpg
released: true
streamingServices: 
premiere: 14/03/2025
watched: true
lastWatched: 19/04/2025
personalRating: 6.7
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

When the girl of his dreams is kidnapped, a man incapable of feeling physical pain turns his rare condition into an unexpected advantage in the fight to rescue her.

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

**Título:** Novocaine
**Tipo**: `$= dv.current().type`
**Diretor:** `$= dv.current().director`
**IMDb**: `$= dv.current().onlineRating`
**Tempo**:  `$= dv.current().duration`
**Lançado**: `$= dv.current().premiere`
**Resumo:** novocaine trabalha em um banco e uma mulher finge gostar dele pra roubar o banco 
**Análise:** engraçadinho pra ver na sessão da tarde
**Pontos Positivos:** engraçado, ator de the boys, ação
**Pontos Negativos:**  historia fraca, bobao demais
**Conclusão:** otario demais por ficar com a mulher que enganou ele, sobra nada pro beta
**Nota Pessoal:** 6,7/10

---


