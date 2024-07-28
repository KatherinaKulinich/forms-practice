// import { Form } from 'react-hook-form';
// import { inputsData } from '../../utils/inputsData';
// import Field from '../Field';

interface ReactHookFormProps {}

const ReactHookForm: React.FC<ReactHookFormProps> = () => {
    return (
        <>
            {/* <Form
                formTitle='Form using library'
                formSubTitle='React-hook-form'
                onSubmitForm={}
            >
                {inputsData?.map((data) => (
                    <Field
                        key={data.name}
                        type={data.type}
                        name={data.name}
                        labelText={data.label}
                        placeholder={data.placeholder}
                        onChange={(event) => onChangeFormData(event)}
                    />
                ))}
            </Form> */}
        </>
    );
};

export default ReactHookForm;
