import BasicForm from './components/forms/BasicForm';
import RefForm from './components/forms/RefForm';

const App = () => {
    return (
        <div className='min-h-screen w-full bg-[url("/src/assets/bg.jpg")] bg-cover'>
            <div className='mx-44 flex min-h-screen flex-wrap items-center justify-center gap-8 p-8'>
                <div className=''>
                    <BasicForm />
                </div>
                <div className=''>
                    <RefForm />
                </div>
            </div>
        </div>
    );
};

export default App;
