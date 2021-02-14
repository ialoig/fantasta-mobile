import React, { useState, useEffect } from 'react'
import Account from './Account'

import { User } from "../../services"

function AccountContainer() {

    const [email, setEmail] = useState(null)

    useEffect(() => {
        const email = User.Get().email;
        return setEmail(email)
    }, [email])

    return (
        <Account email={email} />
    )
}

export default AccountContainer
