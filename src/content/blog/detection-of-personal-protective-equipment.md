---
title: 'Detección de Equipos de Protección Personal (EPP)'
description: 'Sistema de detección de Equipos de Protección Personal (EPP) utilizando visión por computadora.'
publishDate: '2025-08-01'
author: 'Joshue'
featuredImage:
  src: '/posts/post-image-3.png'
  alt: 'Imagen de equipos de protección personal'
---

# DETECCIÓN DE EQUIPOS DE PROTECCIÓN PERSONAL (EPP)

Este proyecto implementa un sistema de detección de Equipos de Protección Personal (EPP) utilizando visión por computadora. El sistema puede identificar diferentes elementos de protección en tiempo real a partir de imágenes o flujos de video.

## CARACTERÍSTICAS

*   Detección de múltiples elementos de protección personal
*   Procesamiento en tiempo real
*   Exportación de resultados a CSV y Excel
*   Interfaz de línea de comandos fácil de usar

## REQUISITOS

*   Python 3.7 o superior
*   OpenCV
*   PyTorch
*   NumPy
*   Pandas
*   Ultralytics YOLO

## INSTALACIÓN

1.  Clona este repositorio:
    ```bash
    git clone https://github.com/Joshue-24/Detection-of-Personal-Protective-Equipment.git
    cd Detection-of-Personal-Protective-Equipment
    ```

2.  Instala las dependencias:
    ```bash
    pip install -r requirements.txt
    ```

## USO

Para ejecutar la detección de EPP en una imagen:

```bash
python Detec.py --source imagen.jpg
```

Para usar la cámara en tiempo real:

```bash
python Detec2.py
```

## EJEMPLOS

*   DETECCIÓN DE EPP EN IMAGEN
*   DETECCIÓN EN TIEMPO REAL
*   RESULTADOS DE DETECCIÓN

## ESTRUCTURA DEL PROYECTO

*   `Detec.py`: Script principal para detección en imágenes
*   `Detec2.py`: Script para detección en tiempo real con cámara
*   `EPPS.pt`, `best.pt`: Modelos pre-entrenados
*   `data.yaml`: Configuración de datos
*   `detecciones_epps.csv` y `detecciones_epps.xlsx`: Salidas de detección
*   `epps_1.png`, `epps_2.png`, `epps_3.png`: Imágenes de ejemplo

## CONTRIBUCIÓN

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría hacer.