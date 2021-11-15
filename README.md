<p align="center">
  <img width="400" height="100" src="./assets/img/logo/logo-horizontal.svg">
</p>
<h1 align="center"> The most exciting Fantacalcio auction</h1>

Mobile app to run Fantacalcio auction per League. Outcome will be an .xls file sent to the League participants.
Participants can participate to the auction League to bet on preferred players.

## Getting Started

* npm version: 6.14.10
* node version: 14.15.3
* expo version: 42.0.0

## Environment setup

* Install expo ([documentation](https://reactnative.dev/docs/environment-setup))

  ```npm install -g expo-cli```

* Install dependencies

  ```npm install```

## Build and Run

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

***
## 🎨 Design Patters

Design patterns can be seen as templates for how to solve problems.
In that mobile app following common patterns are used :

* ### [Container Pattern](https://medium.com/@Ziimm_/four-javascript-design-patterns-in-react-abdbcbcfaee7)
*Also reffered as Container and Presentational Pattern.*

This pattern is especially ideal for separation of concerns, between logic and presentation.

*Logic* refers to anything outside of the UI; for example, API calls, event handlers and data manipulation.

*Presentation* refers to the contents of the render method where we create elements to be displayed on the UI.

Here an example.

Given this reusable `CommentList` component:

```javascript
const CommentList = ({ comments }) => (
  <ul>
    {comments.map(comment => (
      <li>
        {comment.body}-{comment.author}
      </li>
    ))}
  </ul>
);
```

We can create a new component responsible for fetching data and rendering the CommentList function component.
```javascript
class "CommentListContainer" extends React.Component {
  constructor() {
    super()
    this.state = { comments: [] }
  }

  componentDidMount() {
    $.ajax({
      url: "/my-comments.json",
      dataType: 'json',
      success: comments =>
        this.setState({comments: comments});
    })
  }

  render() {
    return <CommentList comments={this.state.comments} />
  }
}
```

***Best practice**: Append ‘container’ to the end of the container component filename and give the original name -profile.js, to the presentational one. The container component is usually a class component, while the presentational component will be a functional component.*

The spread operator is a convenient way to pass attributes as opposed to writing each one manually.

References: [The Container Pattern](https://medium.com/@Ziimm_/four-javascript-design-patterns-in-react-abdbcbcfaee7)