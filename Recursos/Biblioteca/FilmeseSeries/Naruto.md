---
type: series
title: Naruto
englishTitle: Naruto
year: 2002–2007
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0409591/
id: tt0409591
plot: Naruto Uzumaki, a mischievous adolescent ninja, struggles as he searches for recognition and dreams of becoming the Hokage, the village's leader and strongest ninja.
genres:
  - Animation
  - Action
  - Adventure
writer:
  - Masashi Kishimoto
studio:
episodes: 0
duration: 24 min
onlineRating: 8.4
actors:
  - Junko Takeuchi
  - Maile Flanagan
  - Kate Higgins
image: https://m.media-amazon.com/images/M/MV5BZTNjOWI0ZTAtOGY1OS00ZGU0LWEyOWYtMjhkYjdlYmVjMDk2XkEyXkFqcGc@._V1_SX300.jpg
released: true
streamingServices:
airing: false
airedFrom: 10/09/2005
airedTo: unknown
watched: true
lastWatched: "2017"
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

**Título:** Naruto
**Tipo**: `$= dv.current().type`
**Escritor:** Masashi Kishimoto
**IMDb**: `$= dv.current().onlineRating`
**Resumo:**   
**Análise:** 
**Pontos Positivos:** 
**Pontos Negativos:**  
**Conclusão:**  
**Nota Pessoal:** 9/10

---

#### Resenha:


---


