>[!multi-column]
>
>
>> [!info]+ Importante
>> - [Meu GitHub](https://github.com/AugustodoBRT)
>> - [Sigaa](https://sig.cefetmg.br/sigaa/verTelaLogin.do)
>> 
>>
>> 

---

```gEvent
type: week
exclude: []
include:
  - augustodobrt8@gmail.com
  - Trabalho
  - Academia
  - Tarefas
  - Estudo
  - Lazer
  - Prova
  - Faculdade

hourRange:
  - 0
  - 24
offset: 0
timespan: 7
showAllDay: true
navigation: true


```
---
```dataviewjs
// Calculate days since first note
const files = dv.pages()
const oldestFile = files.sort(f => f.file.ctime)[0]
const daysSinceStart = Math.floor((Date.now() - oldestFile.file.ctime) / (1000 * 60 * 60 * 24))
// Count total notes
const totalNotes = files.length
// Count unique tags
const allTags = files.flatMap(p => p.file.tags).distinct()
const totalTags = allTags.length
// Create a visually appealing display that works in both light and dark modes
dv.paragraph(`<div style="
  background-color: var(--background-secondary);
  border: 1px solid var(--background-modifier-border);
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  font-family: var(--font-text);
  color: var(--text-normal);
">
  <h2 style="color: var(--text-normal);">󱖫 Status Obsidian</h2>
  <p style="font-size: 18px; margin: 10px 0;">
     Você está usando o Obsidian por <strong>${daysSinceStart}</strong> dias
  </p>
  <p style="font-size: 18px; margin: 10px 0;">
     Você tem <strong>${totalNotes}</strong> notas
  </p>
  <p style="font-size: 18px; margin: 10px 0;">
    󰐃 Você está usando <strong>${totalTags}</strong> tags unicas
</div>`)
```



> [!multi-column]
>
> > [!tip]+ Criado Recente
>>```dataview
> >List
> >From ""
> >sort file.ctime Desc
> >Limit 5
> >```
>
> > [!example]+ Modificada Recente
>> ```dataview 
> > List 
> > From ""
> > sort file.mtime Desc
> > Limit 5
> > ```
> 
> 
---

