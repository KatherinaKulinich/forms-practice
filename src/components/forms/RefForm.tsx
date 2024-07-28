import { inputsData } from '../../utils/inputsData';
import { inputsRefs } from '../../utils/inputsRefs';
import Field from '../Field';
import Form from '../Form';

const RefForm: React.FC = () => {
    const onSubmitFormData: React.FormEventHandler<HTMLFormElement> = (
        event
    ) => {
        event.preventDefault();
        console.log(inputsRefs[1].ref.current?.value);
    };

    return (
        <>
            <Form
                formTitle='Uncontrolled Form'
                formSubTitle='with useRef and custom validation'
                onSubmitForm={onSubmitFormData}
            >
                {inputsData?.map((data) => {
                    return inputsRefs?.map((refItem) => {
                        if (data.name === refItem.input)
                            return (
                                <Field
                                    key={data.name}
                                    type={data.type}
                                    name={data.name}
                                    labelText={data.label}
                                    placeholder={data.placeholder}
                                    isErrorMessage={false}
                                    message='Error'
                                    ref={refItem.ref}
                                />
                            );
                    });
                })}
            </Form>
        </>
    );
};

export default RefForm;
