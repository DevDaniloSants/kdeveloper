import { PatternFormat, PatternFormatProps } from 'react-number-format';
import { Input } from './ui/input';

const PhoneInput = (props: Partial<PatternFormatProps>) => {
    return (
        <PatternFormat
            {...props}
            format="(##) #####-####"
            autoComplete="tel-national"
            customInput={Input}
            placeholder="(00) 00000-0000"
        />
    );
};

export default PhoneInput;
