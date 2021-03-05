// import React, { Component } from 'react'

// import AccountDetails from "../containers/Account/AccountDetails/AccountDetails"
// import EmailSettings from "../containers/Account/AccountDetails/EmailSettings"
// import UsernameSettings from "../containers/Account/AccountDetails/UsernameSettings"
// import DeleteAccount from "../containers/Account/AccountDetails/DeleteAccount"

// import { createStackNavigator, route, TransitionPresets } from '@react-navigation/stack'
// //import { enableScreens } from "react-native-screens"
// //import { createNativeStackNavigator } from 'react-native-screens/native-stack';
// import { COLORS } from '../styles'

// //enableScreens();
// //const AccountDetailsStack = createNativeStackNavigator();
// const AccountDetailsStack = createStackNavigator();

// export class AccountDetailsNavigator extends Component {

//     render() {

//         const { email, username } = this.props.route.params

//         return (
//             <AccountDetailsStack.Navigator 
//                 initialRouteName="AccountDetails"
//                 screenOptions={{
//                     mode: "modal",
//                     headerShown: false,
//                     gestureEnabled: true,
//                     cardOverlayEnabled: true,
//                     ...TransitionPresets.ModalPresentationIOS,
//                     //statusBarHidden: false,
//                     //stackPresentation: 'formSheet',
//                   }}>
//                 <AccountDetailsStack.Screen name="AccountDetails" component={AccountDetails} 
//                     initialParams={
//                         {
//                             email: email,
//                             username: username
//                         }}/>
//                 <AccountDetailsStack.Screen name="EmailSettings" component={EmailSettings} initialParams={{email: email}}/>
//                 <AccountDetailsStack.Screen name="UsernameSettings" component={UsernameSettings}/>
//                 <AccountDetailsStack.Screen name="DeleteAccount" component={DeleteAccount}/>
//             </AccountDetailsStack.Navigator>
//         )
//     }
// }

// export default AccountDetailsNavigator
