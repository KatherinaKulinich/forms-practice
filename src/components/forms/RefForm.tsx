import { useState } from 'react';
import { validateValues } from '../../helpers/validation';
import { FormData } from '../../types/FormData';
import { initialValues, inputsData } from '../../utils/inputsData';
import { inputsRefs } from '../../utils/inputsRefs';
import ConfettiEffect from '../ConfettiEffect';
import Field from '../Field';
import Form from '../Form';
import ModalFormIsFinished from '../modals/ModalFormIsFinished';

const RefForm: React.FC = () => {
    const [isConfetti, setIsConfetti] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [formData, setFormData] = useState<FormData>(initialValues);

    const onSubmitFormData: React.FormEventHandler<HTMLFormElement> = (
        event
    ) => {
        event.preventDefault();
        const data: FormData = inputsRefs.reduce(
            (o, key) =>
                Object.assign(o, { [key.input]: key.ref.current?.value }),
            {} as FormData
        );

        setFormData(data);
        setIsConfetti(true);
        validateValues(data);
    };

    const onFormFinished = () => {
        setIsConfetti(false);
        setIsModalVisible(true);
    };

    // const isButtonDisabled = Object.values(formData).every((key) => key === '');

    return (
        <>
            <Form
                formTitle='Uncontrolled Form'
                formSubTitle='with ref and custom validation'
                onSubmitForm={onSubmitFormData}
                isDisabled={false}
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

            {isConfetti && <ConfettiEffect offTheEffect={onFormFinished} />}
            <ModalFormIsFinished
                isVisible={isModalVisible}
                formData={formData}
                onClose={() => setIsModalVisible(false)}
            />
        </>
    );
};

export default RefForm;
