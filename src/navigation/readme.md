
# React Navigation 
> Routing and navigation for your React Native apps


## 📔 Official documentation: 
* [React Navigation](https://reactnavigation.org/docs/getting-started)



## 🧐 What's inside?

> |---- Routes.js

Main App Route. It has initial pages defined, such as SplashScreen, Login, Register ...

> |---- AccountNavigator.js

Define a Navigator for Account page. 
It has specific Navigator options and get initial paramters to be passed on screens.


> |---- routesConfig.js

Contains Header and Card configurations to use on Screen declaration.

`Header` configurations are related to:
* Title
* back button
* right button

`Card` configuration can be :
* modal : contains transitions and style

> |---- routesNames.js

All routes names as global variables.


## Todo 📝 vs Done ✅

📝 Transition between pages (right to left/ from bottom ...)

✅ Routes as global variables

✅ Screen settings as a function with parameters to be passed by

✅ Specific Modal transition for iOS and Android

✅ Keyboard doesn't dismiss on Android devices if Screen is a modal page. Added an ad-hoc listener.