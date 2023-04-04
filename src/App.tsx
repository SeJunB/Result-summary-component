import React from 'react';
import { ResultShow } from './ResultShow';


function App() {
    return (
        <main className='space-y-5 h-[95%]'>
            {/* Your Result */}
            <section className="flex flex-col items-center
                    bg-gradient-to-b from-background-gradient-top
                    to-background-gradient-bottom py-5 space-y-5
                    rounded-b-[2rem] text-subtext text-center">

                <h1 className='text-lg font-medium'>Your Result</h1>

                <div className="space-y-3
                    bg-gradient-to-b from-circle-gradient-top
                    to-circle-gradient-bottom px-10 py-7 rounded-full">

                    <h2 className="text-5xl font-[700] text-white">76</h2>
                    <p className="">of 100</p>

                </div>

                <h3 className="text-2xl font-[500] text-white">Great</h3>
                <p className="text-sm max-w-[300px]">You scored higher than 65% of the people who have taken these tests.</p>
            </section>

            {/* Summary */}
            <section className="px-7 py-3 space-y-5">
                <h2 className='font-bold'>Summary</h2>
                <ResultShow background_color='bg-light-red' text_color='text-dark-red' img='/images/icon-reaction.svg' img_alt="Lighting Bolt" text='Reaction' score={80} />
                <ResultShow background_color='bg-light-orange-yellow' text_color='text-orange-yellow' img='/images/icon-memory.svg' img_alt="Memory" text='Memory' score={92} />
                <ResultShow background_color='bg-light-green-teal' text_color='text-green-teal' img='/images/icon-verbal.svg' img_alt="Verbal" text='Verbal' score={61} />
                <ResultShow background_color='bg-light-cobalt-blue' text_color='text-cobalt-blue' img='/images/icon-visual.svg' img_alt="Visual" text='Visual' score={72} />
                <button className="w-[100%] px-3 py-3 rounded-xl text-white text-lg text-center bg-dark-gray-blue">Continue</button>
           </section>
        </main>
    );
}

export default App
