---
type: series
title: "Naruto: Shippuden"
englishTitle: "Naruto: Shippuden"
year: 2007–2017
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0988824/
id: tt0988824
plot: Naruto Uzumaki, is a loud, hyperactive, adolescent ninja who constantly searches for approval and recognition, as well as to become Hokage, who is acknowledged as the leader and strongest of all ninja in the village.
genres:
  - Animation
  - Action
  - Adventure
writer:
  - Masashi Kishimoto
studio:
episodes: 0
duration: 24 min
onlineRating: 8.7
actors:
  - Alexandre Crepet
  - Junko Takeuchi
  - Maile Flanagan
image: https://m.media-amazon.com/images/M/MV5BNTk3MDA1ZjAtNTRhYS00YzNiLTgwOGEtYWRmYTQ3NjA0NTAwXkEyXkFqcGc@._V1_SX300.jpg
released: true
streamingServices:
airing: false
airedFrom: 28/10/2009
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

**Título:** Naruto: Shippuden
**Tipo**: `$= dv.current().type`
**Escritor:** Masashi Kishimoto
**IMDb**: `$= dv.current().onlineRating`
**Resumo:**   
**Análise:** 
**Pontos Positivos:** 
**Pontos Negativos:**  
**Conclusão:**  
**Nota Pessoal:** 10/10

---

#### Resenha:


---


