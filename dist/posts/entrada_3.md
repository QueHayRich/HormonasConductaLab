# Análisis ADME de compuestos

El análisis ADME (Absorción, Distribución, Metabolismo y Excreción) es crucial en la evaluación de nuevos compuestos bioactivos.

## 📊 Herramientas recomendadas

- **SwissADME**: Evaluación en línea de parámetros ADME.
- **ADMETlab 2.0**: Predicciones precisas usando modelos de IA.
- **QikProp** (Schrödinger): Software comercial avanzado.

## 📌 Parámetros clave

- LogP (lipofilia)
- TPSA (área polar superficial)
- Número de violaciones de la regla de Lipinski

## 🧬 Ejemplo con Python

```python
import pandas as pd
data = pd.read_csv('moleculas.csv')
filtro = data[data['logP'] < 5]
print(filtro[['nombre', 'TPSA', 'violaciones_Lipinski']])
```
