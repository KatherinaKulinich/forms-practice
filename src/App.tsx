import Form from './components/Form';

const App = () => {
    return (
        <div className='h-screen w-full bg-[url("/src/assets/bg.jpg")] bg-cover'>
            <div className='relative flex h-full w-full justify-center bg-gradient-to-b from-cyan-500/10 to-blue-500/30'>
                <Form />
            </div>
        </div>
    );
};

export default App;
