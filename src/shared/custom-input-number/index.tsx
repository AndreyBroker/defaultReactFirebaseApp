import { Input } from "@mui/material";
import { useEffect, useState } from "react";


interface InputNumberType {
    value?: number | null;
    onChange: (newValue: number | null) => void;
    type?: string
}
const InputNumber: React.FC<InputNumberType> = ({ value, onChange, type }) => {

    const [runTimeValue, setRuntimeValue] = useState("");


    useEffect(() => {
        setRuntimeValue(value?.toString() ?? "");
    }, [value])

    return(
        <Input
            type="number"
            value={runTimeValue}
            onChange={(e) => {
                setRuntimeValue(e.target.value);
            }}
            onBlur={() => {
                try{
                    var value = parseFloat(runTimeValue);
                    onChange(isNaN(value) ? null : value);
                } catch {
                    setRuntimeValue("0");
                }
            }}
        />
    )
}

export default InputNumber;