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

**Título:** {{title}}
**Tipo**: `$= dv.current().type`
**Escritor:** {{writer}}
**IMDb**: `$= dv.current().onlineRating`
**Resumo:**   
**Análise:** 
**Pontos Positivos:** 
**Pontos Negativos:**  
**Conclusão:**  
**Nota Pessoal:** 10/10

---

#### Resenha:


---


