---
type: series
title: Dragon Ball Daima
englishTitle: Dragon Ball Daima
year: 2024–
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt29485149/
id: tt29485149
plot: Due to a conspiracy, Goku and friends are transformed into children. They intend to travel to a mysterious new world to undo this change.
genres:
  - Animation
  - Action
  - Adventure
writer:
  - Akira Toriyama
studio: 
episodes: 0
duration: N/A
onlineRating: 8.1
actors:
  - Masako Nozawa
  - Yumiko Kobayashi
  - Kôki Uchiyama
image: https://m.media-amazon.com/images/M/MV5BYWNjY2MxOTAtYWVjMS00YzJjLTk1ZTYtZGE0ZDA5MmQwNDUzXkEyXkFqcGc@._V1_SX300.jpg
released: true
streamingServices: 
airing: false
airedFrom: 11/10/2024
airedTo: unknown
watched: false
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

Dragon Ball Daima gira em torno de Goku e seus amigos, que são transformados em crianças devido a uma conspiração. Para corrigir as coisas, eles planejam ir para um novo mundo. A série é apresentada como uma grande aventura de ação em um lugar desconhecido e misterioso. 

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

**Título:** Dragon Ball Daima
**Tipo**: `$= dv.current().type`
**Escritor:** [[Akira Toriyama]]
**IMDb**: `$= dv.current().onlineRating`
**Resumo:**   
**Análise:** 
**Pontos Positivos:** 
**Pontos Negativos:**  
**Conclusão:**  
**Nota Pessoal:** 10/10

---
