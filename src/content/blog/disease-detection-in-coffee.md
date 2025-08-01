---
title: 'Detección de Enfermedades en el Café'
description: 'Sistema de detección de enfermedades en plantas de café utilizando YOLOv8.'
publishDate: '2025-08-01'
author: 'Joshue'
featuredImage:
  src: '/posts/post-image-2.png'
  alt: 'Imagen de una planta de café'
---

### DETECCIÓN DE ENFERMEDADES EN EL CAFÉ

Este proyecto implementa un sistema de detección de enfermedades en plantas de café utilizando YOLOv8. El modelo es capaz de identificar y clasificar plantas de café en dos categorías: sanas y enfermas. ![Labview ](cafe/WhatsApp Image 2025-07-30 at 9.18.22 PM.jpeg)

### CARACTERÍSTICAS

*   Detección en tiempo real de enfermedades en plantas de café
*   Clasificación binaria: sano vs enfermo
*   Fácil de usar con una API simple
*   Visualización de resultados con cuadros delimitadores

### REQUISITOS

*   Python 3.8 o superior
*   OpenCV
*   Ultralytics (YOLOv8)
*   Numpy

### INSTALACIÓN

1.  Clona el repositorio:
    ```bash
    git clone https://github.com/Joshue-24/Disease-Detection-in-Coffee.git
    cd Disease-Detection-in-Coffee
    ```
2.  Instala las dependencias:
    ```bash
    pip install -r requirements.txt
    ```

### USO

1.  Coloca tus imágenes en la carpeta `images`
2.  Ejecuta el script de detección:
    ```bash
    python sest.py --source images/ --output results/
    ```

### EJEMPLOS

**PLANTA DE CAFÉ SANA**

![Café sano]('cafe/WhatsApp Image 2025-07-30 at 9.18.22 PM (1).jpeg')

**PLANTA DE CAFÉ ENFERMA**

![Café enfermo]('cafe/WhatsApp Image 2025-07-30 at 9.18.22 PM (2).jpeg')

### ESTRUCTURA DEL PROYECTO

```
deteccion-de-enfermedades-cafe/
├── sest.py             # Script principal de detección
├── sest.pt             # Modelo YOLOv8 entrenado
├── README.md           # Este archivo
└── images/             # Carpeta para imágenes de prueba
```

### ENTRENAMIENTO

Si deseas entrenar tu propio modelo:

1.  Prepara tu conjunto de datos en formato YOLO
2.  Configura el archivo `data.yaml`
3.  Ejecuta el entrenamiento:
    ```bash
    yolo task=detect \
         mode=train \
         model=yolov8n.pt \
         data=data.yaml \
         epochs=100 \
         imgsz=640
    ```

### CONTRIBUCIÓN

Las contribuciones son bienvenidas. Por favor, envía tus pull requests.

### LICENCIA

Este proyecto está bajo la Licencia MIT.
