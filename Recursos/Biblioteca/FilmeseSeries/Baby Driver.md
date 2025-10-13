---
type: movie
title: Baby Driver
englishTitle: Baby Driver
year: "2017"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt3890160/
id: tt3890160
plot: Coerced into working for a crime boss, a young getaway driver must face the music when a doomed heist threatens his life, love, and freedom.
genres:
  - Action
  - Crime
  - Drama
director:
  - Edgar Wright
writer:
  - Edgar Wright
studio:
  - N/A
duration: 113 min
onlineRating: 7.5
actors:
  - Ansel Elgort
  - Jon Bernthal
  - Jon Hamm
image: https://m.media-amazon.com/images/M/MV5BMjM3MjQ1MzkxNl5BMl5BanBnXkFtZTgwODk1ODgyMjI@._V1_SX300.jpg
released: true
streamingServices: 
premiere: 28/06/2017
watched: true
lastWatched: 03/01/2025
personalRating: 7
tags:
  - mediaDB/tv/movie
---
`$= '![Image|180](' + dv.current().image + ')'`

# `$= dv.current().title`

```dataviewjs
if (dv.current().watched) {
	dv.paragraph(`> [!SUCCESS] \ last watched on ${dv.current().lastWatched || '---'}`);
} else {
	dv.paragraph(`> [!WARNING] \`INPUT[toggle:watched]\` not yet watched`);
}
```

**Nota**: `$= dv.current().personalRating` de 10

**Genêro**:
```dataviewjs
dv.current().genres.length === 0 ? dv.span(' - none') : dv.list(dv.current().genres)
```

```dataviewjs
if (!dv.current().released) {
	dv.span('**Not released** The movie is not yet released.')
}
```

**Tipe**: `$= dv.current().type`
**Nota Online**: `$= dv.current().onlineRating`
**Tempo**:  `$= dv.current().duration`
**Lançado**: `$= dv.current().premiere`
**Diretor**: `$= dv.current().director`