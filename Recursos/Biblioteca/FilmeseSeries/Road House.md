---
type: movie
title: Road House
englishTitle: Road House
year: "2024"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt3359350/
id: tt3359350
plot: Ex-UFC fighter Dalton takes a job as a bouncer at a Florida Keys roadhouse, only to discover that this paradise is not all it seems.
genres:
  - Action
  - Thriller
director:
  - Doug Liman
writer:
  - Anthony Bagarozzi
  - Chuck Mondry
  - R. Lance Hill
studio:
  - N/A
duration: 121 min
onlineRating: 6.2
actors:
  - Jake Gyllenhaal
  - Daniela Melchior
  - Conor McGregor
image: https://m.media-amazon.com/images/M/MV5BODVkYjlkM2UtNWVlMS00N2U1LTgxOTYtODlmNmE1YTgzMjczXkEyXkFqcGc@._V1_SX300.jpg
released: true
streamingServices: 
premiere: 21/03/2024
watched: true
lastWatched: "2024"
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

- Um ex-lutador do UFC consegue um emprego como segurança em um estabelecimento na Flórida Keys, apenas para descobrir que este paraíso não é tudo o que parece.

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

#### Informações gerais:

**Título:** Road House
**Tipo**: `$= dv.current().type`
**Diretor:** `$= dv.current().director`
**IMDb**: `$= dv.current().onlineRating`
**Tempo**:  `$= dv.current().duration`
**Lançado**: `$= dv.current().premiere`
**Resumo:** Um ex lutador de UFC que matou seu adversario, se aposenta e vai trabalhar num lugar paradisiaco.  
**Análise:** Bom demais, porradaria ação pra todo lado, perfeito pra passar o tempo.
**Pontos Positivos:** filmaço da porra, assiste sem pretenção de historia nem nada, só é pura ação e entreterimento. 
**Pontos Negativos:** história fraca, mas nada demais. 
**Conclusão:**  
**Nota Pessoal:** 8/10

---
