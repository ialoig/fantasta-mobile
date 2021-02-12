import React, { useState } from 'react'
import Settings from './Settings';
import Account from './Account'
// import { Actions } from 'react-native-router-flux';


// export class AccountContainer extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             email : "user@email.com",
//             section: ["account", "settings", "leagues", "support"],
//             actualPage: "account"
//         }
//     }


//     render() {
//         return <Account email={this.state.email} />
//     }
// }

// export default AccountContainer



function AccountContainer({navigation}) {

    const [email, setEmail] = useState("user@email.com")

    return (
        <Account email={email} navigation={navigation} />
    )
}

export default AccountContainer
