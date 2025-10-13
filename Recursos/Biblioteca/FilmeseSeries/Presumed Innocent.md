---
type: series
title: Presumed Innocent
englishTitle: Presumed Innocent
year: "2024"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt17677860/
id: tt17677860
plot: A horrific murder upends the Chicago Prosecuting Attorney's' office when one of its own is suspected of the crime.
genres:
  - Crime
  - Drama
  - Mystery
writer:
  - Miki Johnson
  - David E, Kelley
  - Scott Turow
  - Sharr White
studio:
episodes: 0
duration: N/A
onlineRating: 7.7
actors:
  - Jake Gyllenhaal
  - Ruth Negga
  - Bill Camp
image: https://m.media-amazon.com/images/M/MV5BNDk1MWM3NmItZmNjZS00ZmZkLTk1ZDAtZjFiN2FiZjczNmZhXkEyXkFqcGc@._V1_SX300.jpg
released: true
streamingServices:
airing: false
airedFrom: 12/06/2024
airedTo: unknown
watched: true
lastWatched: 06/01/2025
personalRating: 7.5
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

- Uma investigação vira de cabeça pra baixo quando o vice-promotor vira o suspeito do crime.

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

**Título:** Presumed Innocent
**Tipo**: `$= dv.current().type`
**Escritor:** [Miki Johnson](https://www.imdb.com/name/nm7540641/?ref_=ttfc_fc_wr1), [David E. Kelley](https://www.imdb.com/name/nm0005082/?ref_=ttfc_fc_wr2), [Scott Turow](https://www.imdb.com/name/nm0878017/?ref_=ttfc_fc_wr5), [Sharr White](https://www.imdb.com/name/nm7442628/?ref_=ttfc_fc_wr6)
**IMDb**: `$= dv.current().onlineRating`
**Resumo:** Uma investigação policial sobre a morte de uma promotora da polícia, onde o principal suspeito é seu parceiro de trabalho, com uma reviravolta no final. 
**Análise:** Boa trama, muito bom de assistir, porém achei que o final seria um pouco mais impressionante.
**Pontos Positivos:** Fácil de assistir, ótima atuação, boa historia.
**Pontos Negativos:** achei que seria mais envolvente, com um plot melhor ainda, porém não foi tudo isso, mas, não deixa de ser bom 
**Conclusão:** Recomendo pra passar o tempo ou maratonar igual eu fiz, se gosta de casos policiais e investigação, melhor ainda.
**Nota Pessoal:** 8/10

---
