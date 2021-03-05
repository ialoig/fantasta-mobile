import React from 'react'

import { createStackNavigator, TransitionPresets } from "@react-navigation/stack"
import { useRoute } from '@react-navigation/native';

import { User } from "../services"

import Account from '../containers/Account/Account';
import AccountDetails from '../containers/Account/AccountDetails/AccountDetails';
import EmailSettings from '../containers/Account/AccountDetails/EmailSettings';
import UsernameSettings from '../containers/Account/AccountDetails/UsernameSettings';
import DeleteAccount from '../containers/Account/AccountDetails/DeleteAccount';
import Settings from '../containers/Account/Settings/Settings';
import Language from '../containers/Account/Settings/Language';
import Support from '../containers/Account/Support/Support';
import Feedback from '../containers/Account/Support/Feedback';
import ContactUs from '../containers/Account/Support/ContactUs';

//const AccountStack = createStackNavigator();

// export class AccountNavigator extends Component {
    
//     render() {
//         const email = User.Get().email;
//         const username = User.Get().username ? User.Get().username : email;

//         console.log("[AccountNavigator] - params: email["+email+"], username["+username+"]")

//         return (
//             <AccountStack.Navigator initialRouteName="Account" headerMode="none" mode="modal">
//                 <AccountStack.Screen name="Account" component={Account} 
//                     initialParams={
//                         {
//                             email: email,
//                             username: username
//                         }} />
//                 <AccountStack.Screen name="AccountDetailsNavigator" component={AccountDetailsNavigator} />
//                 <AccountStack.Screen name="Settings" component={Settings} />
//                 <AccountStack.Screen name="Support" component={Support} />
//             </AccountStack.Navigator>
//         )
//     }
// }

// export default AccountNavigator



const AccountStack = createStackNavigator();
const AccountDetailsStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const SupportStack = createStackNavigator();

function AccountNavigator() {

    //const email = User.Get().email;
    //const username = User.Get().username ? User.Get().username : email;
    
    const params = userParams();

    return (
        <AccountStack.Navigator initialRouteName="Account" headerMode="none" mode="modal">
            <AccountStack.Screen name="Account" component={Account} 
                initialParams={params} />
            <AccountStack.Screen name="AccountDetailsNavigator" component={AccountDetailsNavigator} />
            <AccountStack.Screen name="SettingsNavigator" component={SettingsNavigator} />
            <AccountStack.Screen name="SupportNavigator" component={SupportNavigator} />
        </AccountStack.Navigator>
    )
}

export default AccountNavigator


function AccountDetailsNavigator()  {

    const route = useRoute();
    const { email, username} = route.params

    return (
        <AccountDetailsStack.Navigator
            initialRouteName="AccountDetails"
            mode="modal"
            screenOptions={screenModalConfig}>
            <AccountDetailsStack.Screen name="AccountDetails" component={AccountDetails} 
                initialParams={
                    {
                        email: email,
                        username: username
                    }}/>
            <AccountDetailsStack.Screen name="EmailSettings" component={EmailSettings} initialParams={{email: email}}/>
            <AccountDetailsStack.Screen name="UsernameSettings" component={UsernameSettings}/>
            <AccountDetailsStack.Screen name="DeleteAccount" component={DeleteAccount}/>
        </AccountDetailsStack.Navigator>
    )
}


function SettingsNavigator()  {

    return (
        <SettingsStack.Navigator
            initialRouteName="Settings"
            mode="modal"
            screenOptions={screenModalConfig}>
            <SettingsStack.Screen name="Settings" component={Settings} />
            <SettingsStack.Screen name="Language" component={Language} />
        </SettingsStack.Navigator>
    )
}


function SupportNavigator()  {

    return (
        <SupportStack.Navigator
            initialRouteName="Support"
            mode="modal"
            screenOptions={screenModalConfig}>
            <SupportStack.Screen name="Support" component={Support} />
            <SupportStack.Screen name="Feedback" component={Feedback} />
            <SupportStack.Screen name="ContactUs" component={ContactUs} />
        </SupportStack.Navigator>
    )
}


function userParams () {
    const email = User.Get().email;
    const username = User.Get().username ? User.Get().username : email;

    return {
        email: email,
        username: username
    }
}


const screenModalConfig = {
    headerShown: false,
    gestureEnabled: true,
    cardOverlayEnabled: false,
    ...TransitionPresets.ModalPresentationIOS,
}