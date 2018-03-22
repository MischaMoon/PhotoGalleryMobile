# PhotoGalleryMobile - ionic cli 3.20.0

## Setup

Requirements to use this project:

##### Node.js (https://nodejs.org/en/)

We need  node.js to build our project and to manage dependencies, the packages we use and it also spins up a little development server which will host our app on our local machine making to easy for us to test it. 

So make sure to download the lastest version of nodejs year simply dowload it and go from installer should be very straightforward.

In case you're not with the latest version of npm:
```sh
 npm install npm -g  
```

##### Ionic update to the lastest version

npm install -g ionic@latest

## Install NPM Dependencies
Once you clone this repository, run this command on your terminal to install all needed dependencies:
```sh
  npm install
```

Then install this plugin ionic-img-viewer (plugin can display image in full screen with the ability to zoom)
```sh
  npm i ionic-img-viewer
```

  Make sure you have Ionic and Angular installed.
 
## Launching the App
#### After installing the needed dependencies you are done, so what you will see when you launch this app with the commande below:

```sh
  ionic serve -l 
```
__________________________________________________________________________________________________________________
![alt tag](https://raw.githubusercontent.com/jesuiselle/PhotoGalleryMobile/master/src/assets/imgs/picture1.PNG)
__________________________________________________________________________________________________________________

![alt tag](https://raw.githubusercontent.com/jesuiselle/PhotoGalleryMobile/master/src/assets/imgs/picture2.PNG)

✅Features

    -Tap on the pic to see it fullscreen

    -Slide up to close the view
    
    -Tap on the navigation arrow to close the view
    
    -Double tap / pinch the pic when open to zoom
    
__________________________________________________________________________________________________________________
## Install cordova plugin Dependencies
 
To add iOS platform and install all needed puglins, run this command on your terminal:

```sh
ionic cordova platform add ios
ionic cordova run ios
```
To add Android platform and install all needed puglins, run this command on your terminal:

```sh
  ionic cordova platform add android
  ionic cordova run android
```
## Launching the App
#### After installing the needed dependencies you are done, so what you will see when you launch this app with the commande below:

```sh
  ionic serve
```
__________________________________________________________________________________________________________________
![alt tag](https://raw.githubusercontent.com/jesuiselle/PhotoGalleryMobile/master/src/assets/imgs/picture_1.PNG)
__________________________________________________________________________________________________________________

![alt tag](https://raw.githubusercontent.com/jesuiselle/PhotoGalleryMobile/master/src/assets/imgs/picture_2.PNG)

✅Features

    -Tap on the pic to see it fullscreen

    -Slide up to close the view
    
    -Tap on the navigation arrow to close the view
    
    -Double tap / pinch the pic when open to zoom
    
