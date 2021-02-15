#/bin/bash

FILE="./node_modules/react-native-web/dist/index.js"
TEXT="export const ViewPropTypes = { style: null };
export const MaskedViewIOS = { style: null };\n\n"

echo -e "$TEXT$(cat $FILE)" > $FILE
