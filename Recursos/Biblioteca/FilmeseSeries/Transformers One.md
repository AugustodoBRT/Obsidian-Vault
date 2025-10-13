---
type: movie
title: Transformers One
englishTitle: Transformers One
year: "2024"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt8864596/
id: tt8864596
plot: The untold origin story of Optimus Prime and Megatron, better known as sworn enemies, but who once were friends bonded like brothers who changed the fate of Cybertron forever.
genres:
  - Animation
  - Action
  - Adventure
director:
  - Josh Cooley
writer:
  - Eric Pearson
  - Andrew Barrer
  - Gabriel Ferrari
studio:
  - N/A
duration: 104 min
onlineRating: 7.6
actors:
  - Chris Hemsworth
  - Brian Tyree Henry
  - Scarlett Johansson
image: https://m.media-amazon.com/images/M/MV5BNWMwZmVkMjQtMTE3OC00Yjg4LTk5YmYtOWYwYjU2Zjg1ZTBkXkEyXkFqcGc@._V1_SX300.jpg
released: true
streamingServices:
premiere: 20/09/2024
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
	dv.paragraph(`> [!SUCCESS] \`INPUT[toggle:watched]\` watched \n last watched on ${dv.current().lastWatched || '---'}`);
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