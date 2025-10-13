---
type: series
title: The Outsider
englishTitle: The Outsider
year: "2020"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt8550800/
id: tt8550800
plot: When an insidious supernatural force edges its way into a seemingly straightforward investigation into the gruesome murder of a young boy, it leads a seasoned cop and an unorthodox investigator to question everything they believe in.
genres:
  - Crime
  - Drama
  - Horror
writer:
  - Richard Price
studio:
episodes: 0
duration: 60 min
onlineRating: 7.6
actors:
  - Ben Mendelsohn
  - Bill Camp
  - Jeremy Bobb
image: https://m.media-amazon.com/images/M/MV5BOGY0YjJmOWItOGI2MS00N2VmLTlmNjYtMDM3YjY1MzkyM2E1XkEyXkFqcGc@._V1_SX300.jpg
released: true
streamingServices:
airing: false
airedFrom: 12/01/2020
airedTo: unknown
watched: true
lastWatched: ""
personalRating: 4
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

Um crime onde o "assassino" está em dois locais diferentes, mas (spoiler) é so um cara que transforma nas pessoas e já apresenta isso no primeiro episodio, uma merda.
 
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

**Título:** The Outsider
**Tipo**: `$= dv.current().type`
**Escritor:** Richard Price
**IMDb**: `$= dv.current().onlineRating`
**Resumo:**   
**Análise:** merda
**Pontos Positivos:** nao tem 
**Pontos Negativos:**  muitos
**Conclusão:**  uma merda
**Nota Pessoal:** 4/10

---

#### Resenha:


---


