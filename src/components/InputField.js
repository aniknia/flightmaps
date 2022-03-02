import { PinInputField, PinInput } from "@chakra-ui/pin-input"
import React from 'react'

// TODO: Extend PinInput theme so that when the airport does not exist a red highlight appears

export default function InputField(props) {
    const [value, SetValue] = React.useState()

    React.useEffect(() => {
        fetch("http://localhost:5000/v1/check_code/" + value)
        .then(response => response.json())
        .then(data => {
            if (data["default"] === true) {
                console.log("empty")
            } else if (data["check_code"] === true) {
                console.log("airport exists");
            } else {
                console.log("airport does not exist");
            }
        })
    }, [value]);

    return (
        <PinInput type='alphanumeric' onChange={(event) => SetValue(event)}>
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
        </PinInput>
    )
}