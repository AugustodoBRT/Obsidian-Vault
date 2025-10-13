---
type: movie
title: 8 Mile
englishTitle: 8 Mile
year: "2002"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0298203/
id: tt0298203
plot: Follows a young rapper in the Detroit area, struggling with every aspect of his life; he wants to make it big but his friends and foes make this odyssey of rap harder than it may seem.
genres:
  - Drama
  - Music
director:
  - Curtis Hanson
writer:
  - Scott Silver
studio:
  - N/A
duration: 110 min
onlineRating: 7.2
actors:
  - Eminem
  - Brittany Murphy
  - Kim Basinger
image: https://m.media-amazon.com/images/M/MV5BMzFhZDhjMDAtZWJlZS00ZWUyLWFlZGMtYTcwZjFlODcyMGE2XkEyXkFqcGc@._V1_SX300.jpg
released: true
streamingServices:
premiere: 08/11/2002
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
	dv.paragraph(`> [!SUCCESS] \ Visto por ultimo em ${dv.current().lastWatched || '---'}`);
} else {
	dv.paragraph(`> [!WARNING] \ not yet watched`);
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
**IMDb**: `$= dv.current().onlineRating`
**Tempo**:  `$= dv.current().duration`
**Lançado**: `$= dv.current().premiere`
**Diretor**: `$= dv.current().director`