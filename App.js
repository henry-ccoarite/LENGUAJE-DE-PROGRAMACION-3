const App = () => {
    const { Hero } = window;
    const { Capabilities } = window;

    return (
        <>
            <Hero />
            <Capabilities />
        </>
    );
};

window.App = App;