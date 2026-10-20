import { PinInput } from "@chakra-ui/react"
import { useState, useEffect } from 'react'
import { checkCode } from './flightmapper'

export default function InputField(props) {
    const [error, setError] = useState(false);

    useEffect(() => {
        if(props.value.length >= 3) {
            checkCode(props.value)
            .then(data => {
                if (data["default"] === true) {
                    props.flag(false);
                    setError(false);
                    console.log("empty")
                } else if (data["check_code"] === true) {
                    props.set(props.value);
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
        <PinInput.Root type='alphanumeric' invalid={error} value={Array.from({ length: 4 }, (_, i) => props.value[i] || '')} onValueChange={e => props.set(e.valueAsString)}>
            <PinInput.HiddenInput />
            <PinInput.Control>
                <PinInput.Input index={0} />
                <PinInput.Input index={1} />
                <PinInput.Input index={2} />
                <PinInput.Input index={3} />
            </PinInput.Control>
        </PinInput.Root>
    )
}