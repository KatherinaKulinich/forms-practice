import BasicForm from './components/forms/BasicForm';
// import FormikForm from './components/forms/FormikForm';
// import ReactHookForm from './components/forms/ReactHookForm';
import RefForm from './components/forms/RefForm';

const App = () => {
    return (
        <div className='min-h-screen w-full bg-[url("/src/assets/bg.jpg")] bg-cover'>
            <div className='mx-44 flex h-full flex-wrap justify-center gap-8 p-8'>
                <div className=''>
                    <BasicForm />
                </div>
                <div className=''>
                    <RefForm />
                </div>
                {/* <div className=''>
                    <FormikForm />
                </div>
                <div className=''>
                    <ReactHookForm />
                </div> */}
            </div>
        </div>
    );
};

export default App;
