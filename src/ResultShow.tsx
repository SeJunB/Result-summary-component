type Props = {
    background_color: string,
    text_color: string,
    img: string,
    img_alt: string,
    text: string,
    score: number
};

export function ResultShow({ background_color, text_color, img, img_alt, text, score }: Props) {
    return (<div className={`relative p-4 rounded-lg ${background_color} w-[100%]`}>
        <div className='result-border result-border-top flex justify-between items-align'>

            <div className='flex w-[40%] space-x-3'>
                <img src={img} alt={img_alt} />
                <p className={`${text_color} font-medium`}>{text}</p>
            </div>
            <p className='font-medium text-subtext'><span className='text-black font-bold'>{score}</span><span className='mx-2'>/</span>100</p>
        </div>
        <div className='result-border result-border-bottom'> </div>
    </div>)

}


