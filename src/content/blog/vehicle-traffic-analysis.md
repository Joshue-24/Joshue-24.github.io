---
title: 'Análisis de Tráfico Vehicular Inteligente'
description: 'Sistema avanzado de monitoreo y análisis de tráfico vehicular en tiempo real que utiliza visión por computadora e inteligencia artificial.'
publishDate: '2025-08-01'
author: 'Joshue'
featuredImage:
  src: '/posts/post-image-1.png'
  alt: 'Imagen del sistema de análisis de tráfico'
---

# SISTEMA DE ANÁLISIS DE TRÁFICO VEHICULAR INTELIGENTE

Sistema avanzado de monitoreo y análisis de tráfico vehicular en tiempo real que utiliza visión por computadora e inteligencia artificial para el conteo y seguimiento de vehículos en diferentes segmentos viales.

## 🚀 CARACTERÍSTICAS PRINCIPALES

*   🚗 **Detección en Tiempo Real:** Utiliza YOLOv8 para la detección precisa de vehículos.
*   📍 **Seguimiento de Objetos:** Implementa ByteTrack para el seguimiento consistente de vehículos entre fotogramas.
*   🛣️ **Análisis por Segmentos:** Permite definir múltiples segmentos de carretera para análisis independiente.
*   📊 **Estadísticas en Tiempo Real:** Muestra conteos y métricas de tráfico actualizadas.
*   💾 **Exportación de Datos:** Guarda los resultados en formato CSV para análisis posteriores.

## 📸 DEMOSTRACIÓN VISUAL

### PRIMERA VERSIÓN: DETECCIÓN BÁSICA
Primera versión mostrando la detección básica de vehículos.

### VERSIÓN FINAL: SISTEMA COMPLETO
Versión final con seguimiento, conteo y análisis de direcciones.

### ANÁLISIS DE SEMAFORIZACIÓN
Sistema de semaforización inteligente basado en el análisis de flujo vehicular.

## 🛠️ REQUISITOS TÉCNICOS

*   Python 3.8 o superior
*   OpenCV
*   Ultralytics YOLOv8
*   PyTorch
*   Numpy
*   Pandas

## 🚀 INSTALACIÓN

1.  Clona el repositorio:
    ```bash
    git clone https://github.com/Joshue-24/Vehicle-Traffic-Analysis.git
    cd Vehicle-Traffic-Analysis
    ```
2.  Instala las dependencias:
    ```bash
    pip install ultralytics opencv-python numpy pandas
    ```

## 🏃‍♂️ USO

1.  Ejecuta el script principal:
    ```bash
    python TRAKING32.py
    ```
2.  Configura los parámetros en el código según sea necesario:
    *   Ajusta `modelo.conf` para cambiar el umbral de confianza (0-1)
    *   Modifica `modelo.iou` para ajustar la intersección sobre unión
    *   Personaliza los segmentos de análisis en el código

## 📁 ESTRUCTURA DEL PROYECTO

```
Vehicle-Traffic-Analysis/
├── TRAKING32.py       # Script principal de análisis de tráfico
├── 4 segmentos.py     # Versión con 4 puntos de segmentación
├── best.pt           # Modelo YOLOv8 pre-entrenado
├── bytetrack.yaml     # Configuración del tracker
├── detec/            # Módulos de detección
├── Trafic_1.png      # Imagen de portada
├── trafic_2.jpeg     # Captura del sistema completo
└── trafic_3.jpeg     # Captura de la primera versión
```

## 🚦 SISTEMA DE SEMAFORIZACIÓN INTELIGENTE

### ANÁLISIS DE FLUJO VEHICULAR

El sistema implementa un esquema de semaforización adaptativo que analiza en tiempo real:

*   Volumen de tráfico por carril y dirección
*   Tiempos de espera de los vehículos
*   Patrones de giro (izquierda, derecha, recto)
*   Densidad vehicular en cada segmento de la intersección

### ÍNDICES DE DESEMPEÑO

El sistema calcula y optimiza los siguientes índices:

1.  **Nivel de Servicio (LOS):** Evalúa la calidad del flujo vehicular (de A a F)
2.  **Tiempo de Espera Promedio:** Por carril y dirección
3.  **Tasa de Flujo:** Vehículos por hora por carril
4.  **Proporción de Giro:** Porcentaje de vehículos que giran a izquierda/derecha

### ESQUEMA DE GIROS

El sistema detecta y clasifica los giros en:

*   **Giro a la Izquierda:** Vehículos que se desplazan hacia el cuadrante superior izquierdo
*   **Giro a la Derecha:** Vehículos que se desplazan hacia el cuadrante inferior derecho
*   **Flujo Recto:** Vehículos que mantienen su trayectoria horizontal

### ALGORITMO DE CONTROL

1.  Detección en Tiempo Real: Usando YOLOv8 + ByteTrack
2.  Clasificación de Trayectorias: Análisis de vectores de movimiento
3.  Cálculo de Métricas: Por carril y dirección
4.  Optimización de Tiempos: Ajuste dinámico de los semáforos

### 📊 SALIDA DE DATOS

El sistema genera un archivo CSV con las siguientes métricas por vehículo detectado:

*   ID del vehículo
*   Coordenadas (x, y)
*   Velocidad estimada (km/h)
*   Dirección de movimiento (grados)
*   Tipo de giro (izquierda/derecha/recto)
*   Tiempo de espera (segundos)
*   Carril de origen y destino
*   Timestamp (formato ISO 8601)

## 🤝 CONTRIBUCIÓN

¡Las contribuciones son bienvenidas! Por favor, abre un issue para discutir los cambios que te gustaría realizar.

## ✉️ CONTACTO

Para consultas o soporte, por favor abre un issue en el repositorio.