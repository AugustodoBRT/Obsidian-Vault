```chartsview
type: Line
data: |
  dataviewjs:
    const dataPoints = dv.pages('#aposta')
      .where(p => {
        const dataValida = dv.date(p.data);
        const resultado = (p.resultado || "").toLowerCase().trim();
        return dataValida && (resultado === 'green' || resultado === 'red');
      })
      .groupBy(p => dv.date(p.data).toISODate())
      .map(g => ({
        x: g.key,
        y: g.rows.map(p => {
          const valor = Number((p.valor_apostado || '0').toString().replace(",", ".")) || 0;
          const odd = Number((p.odd || '0').toString().replace(",", ".")) || 0;
          const resultado = p.resultado.toLowerCase();
          if (resultado == 'green') {
            return (valor * odd) - valor;
          } else if (resultado == 'red') {
            return -valor;
          }
          return 0;
        }).array()
        .reduce((sum, val) => sum + val, 0),
        group: 'Lucro Diário'
      }))
      .sort(p => p.x, 'asc');
    return dataPoints.array();
options:
  # Título Principal
  title:
    text: 'Desempenho Diário'
    style:
      fontSize: 20
      
  legend:
    position: 'top-right'
    
  xField: 'x'
  yField: 'y'
  seriesField: 'group'

  color: ['#43cc56']
  
  smooth: true
  
  area:
    style:
      fill: 'l(90) 0:#43cc56 1:rgba(67,204,86,0.1)'
      fillOpacity: 0.7

  # Eixo Y (Lucro)
  yAxis:
    title:
      text: 'Lucro (R$)'
    label:
      
      # Sintaxe de função "segura"
      formatter: |
        function(v) {
          return v + ' R$';
        }

  # Eixo X (Data)
  xAxis:
    title:
      text: 'Data'
  
  tooltip:
    # Sintaxe de função "segura"
    formatter: |
      function(datum) {
        return {
          name: datum.group,
          value: datum.y.toFixed(2) + ' R$'
        };
      }
```
