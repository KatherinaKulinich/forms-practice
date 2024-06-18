import BasicForm from './components/forms/BasicForm';

const App = () => {
    return (
        <div className='min-h-screen w-full bg-[url("/src/assets/bg.jpg")] bg-cover'>
            <div className='flex h-full w-full flex-wrap gap-7 p-9'>
                <BasicForm />
            </div>
        </div>
    );
};

export default App;
