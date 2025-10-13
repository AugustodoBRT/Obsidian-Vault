---
date: <%tp.date.now("DD-MM-YYYY")%>T<%tp.date.now("HH:mm")%>
tags:
  - Daily
cssclasses:
  - daily
  <% "- " + tp.date.now("dddd", 0, tp.file.title, "DDMMYYYY", "en").toLowerCase() %>
---
# DAILY NOTE
## <% tp.date.now("dddd, MMMM Do, YYYY", 0, tp.file.title, "DDMMYYYY", "en") %>

***
### Journal
#### TIME


...
***
### Tarefas
- [ ] Task 1

