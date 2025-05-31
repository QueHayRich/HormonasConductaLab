# Cómo preprocesar archivos PDB

**Publicado el:** 31 de mayo de 2025  
**Autor:** Richie

---

Una de las tareas más comunes en química computacional es limpiar y preprocesar archivos `.pdb` para que estén listos para simulaciones de dinámica molecular o docking. En esta entrada vamos a mostrar cómo hacerlo en PyMOL y con `pdbfixer`.

---

## 🔬 Usando PyMOL

```bash
load receptor.pdb
remove solvent
save receptor_clean.pdb
```

---

## 🧪 Usando `pdbfixer` en Python

```python
from pdbfixer import PDBFixer
from openmm.app import PDBFile

fixer = PDBFixer(filename='receptor.pdb')
fixer.findMissingResidues()
fixer.findMissingAtoms()
fixer.addMissingAtoms()
fixer.addMissingHydrogens()
PDBFile.writeFile(fixer.topology, fixer.positions, open('receptor_fixed.pdb', 'w'))
```

---

## 📎 Recurso descargable

Puedes descargar un ejemplo de archivo aquí:  
[🔽 Descargar receptor.pdb](../assets/1a2c.pdb)
