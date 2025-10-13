---
type: movie
subType: ""
title: Surf's Up
englishTitle: Surf's Up
year: "2007"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0423294/
id: tt0423294
plot: A behind-the-scenes look at the annual Penguin World Surfing Championship, and its newest participant, up-and-comer Cody Maverick.
genres:
  - Animation
  - Adventure
  - Comedy
director:
  - Ash Brannon
  - Chris Buck
writer:
  - Don Rhymer
  - Ash Brannon
  - Chris Buck
studio:
  - N/A
duration: 85 min
onlineRating: 6.7
actors:
  - Shia LaBeouf
  - Zooey Deschanel
  - Jon Heder
image: https://m.media-amazon.com/images/M/MV5BMjE4NDE3NzcwM15BMl5BanBnXkFtZTcwMTI0ODYzMw@@._V1_SX300.jpg
released: true
streamingServices:
premiere: 08/06/2007
watched: true
lastWatched: 08/05/2025
personalRating: 10
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

**Título:** Surf's Up
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
**Nota Pessoal:** 10/10

---

#### Resenha:


---


