# Simulación con GROMACS

Este tutorial cubre los pasos básicos para ejecutar una simulación de dinámica molecular con GROMACS.

## 🧪 Paso 1: Preparación del sistema

```bash
gmx pdb2gmx -f estructura.pdb -o estructura_processed.gro -water spce
```

## ⚗️ Paso 2: Definición de caja y solvatación

```bash
gmx editconf -f estructura_processed.gro -o estructura_newbox.gro -c -d 1.0 -bt cubic
gmx solvate -cp estructura_newbox.gro -cs spc216.gro -o estructura_solv.gro -p topol.top
```

## ⚡ Paso 3: Energía mínima

```bash
gmx grompp -f minim.mdp -c estructura_solv.gro -p topol.top -o em.tpr
gmx mdrun -v -deffnm em
```
