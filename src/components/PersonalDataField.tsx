interface PersonalDataFieldProps {
    fieldName: string;
    fieldData: string;
}

const PersonalDataField: React.FC<PersonalDataFieldProps> = ({
    fieldName,
    fieldData
}) => {
    return (
        <div className='border-sm flex items-center gap-3 rounded-md border border-sky-600 bg-sky-400/10 px-4 py-2'>
            <p className='text-sm font-semibold text-sky-800'>{fieldName}</p>
            <p className='text-sm font-light text-sky-600'>{fieldData}</p>
        </div>
    );
};

export default PersonalDataField;
