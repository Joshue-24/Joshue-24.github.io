---
title: 'Detección de Lenguaje de Señas con Python'
description: 'Sistema avanzado de detección de lenguaje de señas utilizando visión por computadora.'
publishDate: '2025-08-01'
author: 'Joshue'
featuredImage:
  src: '/posts/post-image-6.png'
  alt: 'Imagen de manos haciendo lenguaje de señas'
---

# DETECCIÓN DE LENGUAJE DE SEÑAS CON PYTHON

Este proyecto implementa un sistema avanzado de detección de lenguaje de señas utilizando visión por computadora. Utiliza OpenCV para el procesamiento de imágenes y MediaPipe para el seguimiento de manos en tiempo real.

## CARACTERÍSTICAS

*   ✅ Detección en tiempo real de manos
*   👆 Seguimiento de 21 puntos de referencia (landmarks) por mano
*   🔤 Reconocimiento del alfabeto completo (A-Z)
*   🎯 Alta precisión en la detección de gestos
*   📱 Interfaz intuitiva con visualización en tiempo real
*   🔄 Fácil de extender para reconocer palabras o frases completas

## REQUISITOS

*   Python 3.7 o superior
*   Cámara web

## INSTALACIÓN

1.  Clona este repositorio o descarga los archivos
2.  Crea y activa un entorno virtual (recomendado):
    ```bash
    python -m venv venv
    source venv/bin/activate  # En Windows: venv\Scripts\activate
    ```
3.  Instala las dependencias:
    ```bash
    pip install -r requirements.txt
    ```

## USO

1.  Ejecuta el script principal:
    ```bash
    python deteccion_senas.py
    ```
2.  Muestra tu mano frente a la cámara
3.  Presiona 'q' para salir

## EJEMPLOS

### DETECCIÓN DE LETRAS
(Imagen: leng_1.png)

### RECONOCIMIENTO EN TIEMPO REAL
(Imagen: leng_2.png)

## ESTRUCTURA DEL CÓDIGO

*   `deteccion_senas.py`: Script principal que contiene la lógica de detección
*   `requirements.txt`: Lista de dependencias necesarias
*   `leng_1.png`, `leng_2.png`, `leng_3.jpeg`: Imágenes de ejemplo

## PERSONALIZACIÓN

Puedes extender esta implementación para reconocer señas específicas analizando las posiciones de los landmarks devueltos por `encontrarPosicion()`. Algunas ideas para mejorar el proyecto:

*   Agregar reconocimiento de palabras completas
*   Implementar un sistema de aprendizaje automático para mejorar la precisión
*   Añadir soporte para múltiples manos simultáneas
*   Crear una interfaz gráfica más amigable

## CÓMO CONTRIBUIR

1.  Haz un fork del proyecto
2.  Crea una rama con tu nueva característica (`git checkout -b feature/nueva-caracteristica`)
3.  Haz commit de tus cambios (`git commit -am 'Añade nueva característica'`)
4.  Haz push a la rama (`git push origin feature/nueva-caracteristica`)
5.  Abre un Pull Request