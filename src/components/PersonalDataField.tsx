interface PersonalDataFieldProps {
    fieldName: string;
    fieldData: string;
}

const PersonalDataField: React.FC<PersonalDataFieldProps> = ({
    fieldName,
    fieldData
}) => {
    return (
        <div className='border-sm flex items-center justify-between gap-3 rounded-md border border-violet-400 bg-violet-400/15 px-4 py-2'>
            <p className='text-sm font-semibold text-violet-800'>{fieldName}</p>
            <p className='text-sm font-light text-violet-600'>{fieldData}</p>
        </div>
    );
};

export default PersonalDataField;
