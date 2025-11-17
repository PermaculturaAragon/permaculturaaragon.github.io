---
title: Domótica en Torre Escribana
subtitle: Automatización de calefacción y riego con domótica open source en Torre Escribana
layout: diseno
permalink: /disenos/domotica-torre-escribana/
hero_image: /assets/img/disenos/domotica/03.jpg
gallery_style: carousel     # <- activa el carrusel
gallery_ratio: landscape    # o "portrait"
images:
  - /assets/img/disenos/domotica/00.jpg
  - /assets/img/disenos/domotica/01.jpg
  - /assets/img/disenos/domotica/02.jpg
  - /assets/img/disenos/domotica/03.jpg
  - /assets/img/disenos/domotica/04.jpg
  - /assets/img/disenos/domotica/05.jpg
  - /assets/img/disenos/domotica/06.jpg
  - /assets/img/disenos/domotica/07.jpg

sistema: "DADI"
implementado: si
herramientas:
  - DAFO
  - Home Assistant
  - ESPHome
  - Zigbee
  - Telegram (notificaciones)

cliente: "Torre Escribana"
ubicacion: "Montañana - Zaragoza (AR)"
fecha: ""  # si no, usa la fecha del post
escala: ""
rev: "1.0"
autor: "Angel Escuín - Permacultura Aragón"

# Éticas (solo las que uses, deja "" para las demás)
e1: "Incrementando la eficiencia energética con un mayor control del uso de electricidad, leña y biomasa."
e2: "Reduciendo el tiempo de gestión y la carga mental mediante automatizaciones y sistemas de alarma fiables."
e3: "Disminuyendo la energía necesaria para gestionar calor y riego y compartiendo el aprendizaje y el diseño con otras personas."

# Principios (solo los usados con su explicación)
p1: "Observar el funcionamiento real de calefacción y riego (consumos, tiempos, errores) antes de automatizar y durante las pruebas."
p2: "Aprovechar depósito de inercia, aljibe y excedentes solares para almacenar energía térmica e hídrica y usarlos en momentos óptimos."
p3: "Obtener varios rendimientos a la vez: confort térmico, ahorro de agua y energía, tiempo libre y datos para rediseños futuros."
p4: "Usar sensores, ayudantes y notificaciones por Telegram como sistema de autorregulación y feedback continuo del diseño."
p5: "Priorizar fuentes renovables (sol, lluvia, leña local) y usar la electricidad de red como apoyo secundario y optimizado."
p7: "Diseñar de patrones a detalles: primero el ‘cerebro’ domótico y la arquitectura, después cada sensor, relé y automatización concreta."
p8: "Integrar más que segregar, conectando calefacción, riego, energía y avisos dentro de un mismo sistema coordinado (Home Assistant)."
p9: "Empezar con soluciones pequeñas y lentas (solo calefacción y riego principales) y dejar el sistema preparado para escalar a más usos."
p12: "Diseñar para poder responder creativamente al cambio, manteniendo siempre la opción de control manual ante fallos tecnológicos."

# Bloque “a golpe de vista”
objetivos:
  - Reducir el consumo eléctrico, de agua y de leña en la gestión diaria de calefacción y riego.
  - Disminuir el tiempo y la carga mental dedicados a encender calderas, cambiar válvulas y abrir grifos.
  - Aumentar la autonomía tecnológica.
  - Mejorar la seguridad y el confort (ACS fiable, menos olvidos, menos riesgo de sobretemperaturas y fugas de agua).

estrategias:
  - Centralizar el control en un “cerebro” domótico local y open source basado en Home Assistant sobre Raspberry Pi.
  - Integrar sensores, relés y electroválvulas para conectar calefacción, riego y energía.
  - Sincronizar el uso de la resistencia de ACS con los excedentes solares.

tecnicas:
  - Instalación de Home Assistant en Raspberry Pi 3 con dongle Sonoff Zigbee 3.0.
  - Electroválvulas, relés Zigbee y sensor de humedad Zigbee para el riego por sectores.
  - Caudalímetro y medidor de energía Shelly para monitorizar consumos de agua y electricidad en tiempo real.
  - Notificaciones y comandos a través de bot de Telegram para avisos, alarmas y control remoto básico.

evaluacion: >
  Tras varias semanas de funcionamiento continuo, el sistema basado en Home Assistant, Zigbee y ESPHome se mantiene estable y ha
  reducido tanto el tiempo de gestión como los errores en calefacción y riego. La sincronización del ACS con los excedentes
  solares mejora la eficiencia energética y los registros permiten entender mejor consumos y comportamientos. Siguen apareciendo
  retos (sensores a pilas poco fiables, necesidad de paneles más claros, ajustes finos en automatizaciones), pero el diseño
  cumple su objetivo de aumentar autonomía, eficiencia y aprendizaje tecnológico en Torre Escribana.

---
