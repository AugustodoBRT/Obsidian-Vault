---
type: series
title: From
englishTitle: From
year: 2022–
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt9813792/
id: tt9813792
plot: Unravel the mystery of a city in middle U.S.A. that imprisons everyone who enters. As the residents struggle to maintain a sense of normality and seek a way out, they must also survive the threats of the surrounding forest.
genres:
  - Drama
  - Horror
  - Mystery
writer:
  - John Griffin
studio: 
episodes: 0
duration: N/A
onlineRating: 7.8
actors:
  - Harold Perrineau
  - Catalina Sandino Moreno
  - Eion Bailey
image: https://m.media-amazon.com/images/M/MV5BYzM5ZWMxOGEtZjEyMC00YjQ0LThiYjEtZjVkZGEzN2NlOGEwXkEyXkFqcGc@._V1_SX300.jpg
released: true
streamingServices: 
airing: true
airedFrom: 20/02/2022
airedTo: unknown
watched: true
lastWatched: "2024"
personalRating: 9
tags:
  - mediaDB/tv/series
---
`$= '![Image|180](' + dv.current().image + ')'`

# `$= dv.current().title`

```dataviewjs
if (dv.current().watched) {
	dv.paragraph(`> [!SUCCESS] \last watched on ${dv.current().lastWatched || '---'}`);
} else {
	dv.paragraph(`> [!WARNING] \ not yet watched`);
}
```

**Rating**: `$= dv.current().personalRating` de 10

**Genres**:
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

**Type**: `$= dv.current().type`
**IMDb**: `$= dv.current().onlineRating` 
**Aired from**: `$= dv.current().airedFrom`
**Aired until**: `$= dv.current().airedTo`
