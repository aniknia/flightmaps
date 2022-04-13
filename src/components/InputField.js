import { PinInputField, PinInput } from "@chakra-ui/pin-input"
import { useState, useEffect } from 'react'

// TODO: Extend PinInput theme so that when the airport does not exist a red highlight appears

export default function InputField(props) {
    const [value, setValue] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
        if(value.length >= 3) {
            fetch("http://localhost:5000/v1/check_code/" + value)
            .then(response => response.json())
            .then(data => {
                if (data["default"] === true) {
                    props.flag(false);
                    setError(false);
                    console.log("empty")
                } else if (data["check_code"] === true) {
                    props.set(value);
                    props.flag(true);
                    setError(false);
                    console.log("airport exists");
                } else {
                    props.flag(false);
                    setError(true);
                    console.log("airport does not exist");
                }
            })
            }
        }
    );

    return (
        <PinInput type='alphanumeric' isInvalid={error} onChange={setValue}>
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
        </PinInput>
    )
}