# Fantasta

## Introduction

Mobile app to run Fantacalcio auction per League. Outcome will be an .xls file sent to the League participants.

## Getting Started

* npm version: 6.14.10
* node version: 14.15.3

## Environment setup

* Install expo ([documentation](https://reactnative.dev/docs/environment-setup))

  ```npm install -g expo-cli```

* Install dependencies

  ```npm install```

## Build and Run

Go to the root folder of the project and run

```npm start```

It builds and lunches the mobile app. Follow instruction on the screen to lunch application on a real device / simulated device / web browser

## Build on web browser

In order to run app in your web browser and avoid problems with some libraries copy the following rows:

export const ViewPropTypes = { style: null };
export const MaskedViewIOS = { style: null };

at the start of this path:

..path to your project...\Fantasta_mobile\node_modules\react-native-web\dist\index.js

## Debuggare su browser

premere F12 ( oppure tasto destro del mouse + ispeziona ) nella pagina della app sul broser

La pgina si divide in due e sulla destra avremo la schermata di debug; cliccando sui 3 palliniin alto a destra e scegliendo come dockside la prima opzione avremo una finestra di debug separata.

Premendo il pulsante in alto a sinistra ( quadrato + freccia ) e selezionando un punto nella pagina si evidenza il punto preciso nell'html dove è presentequel tag

Il secondo pulsante in alto a sinistra permette di visualizzare la pagina del browser in modalità smartphone/tablet e potrete scegliere il dispositivo che preferite

  **Elements** vi mostrerà il sorgente html della vostra pagina
  **Sources** vi mostrerà all'interno di source i vostri file e sarà possibile mettere dei brakpoint sul vostro codice
