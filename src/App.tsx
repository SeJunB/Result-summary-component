import { ResultShow } from './ResultShow';

function App() {
    return (
        <main className="md:flex md:space-y-0 md:shadow md:rounded-[2rem]">
            {/* Your Result */}
            <section className="card bg-result-gradient text-center
                                text-subtext rounded-b-[2rem]
                                md:rounded-[2rem]">
                <h1 className='text-lg font-medium'>Your Result</h1>
                <div className="bg-score-gradient score-circle">
                    <h2 className="text-5xl font-[700] text-white">76</h2>
                    <p className="text-sm">of 100</p>
                </div>
                <h3 className="text-2xl font-[500] text-white">Great</h3>
                <p className="text-sm">You scored higher than
                    65% of the people who have taken these tests.</p>
            </section>

            {/* Summary */}
            <section className="card justify-center relative md:w-[90%]">
                <h2 className='self-start font-bold'>Summary</h2>
                <ResultShow background_color='bg-light-red' text_color='text-dark-red' img='/images/icon-reaction.svg' img_alt="Lighting Bolt" text='Reaction' score={80} />
                <ResultShow background_color='bg-light-orange-yellow' text_color='text-orange-yellow' img='/images/icon-memory.svg' img_alt="Memory" text='Memory' score={92} />
                <ResultShow background_color='bg-light-green-teal' text_color='text-green-teal' img='/images/icon-verbal.svg' img_alt="Verbal" text='Verbal' score={61} />
                <ResultShow background_color='bg-light-cobalt-blue' text_color='text-cobalt-blue' img='/images/icon-visual.svg' img_alt="Visual" text='Visual' score={72} />
                <button className="button text-lg text-white bg-dark-gray-blue">Continue</button>
            </section>

        </main>
    );
}

export default App
