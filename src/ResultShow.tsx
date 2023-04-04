type Props = {
    background_color: string,
    text_color:string,
    img: string,
    img_alt: string,
    text: string,
    score: number
};


function createBorderClass(pseudoElement: 'before' | 'after', x: 'l' | 'r', y: 'b' | 't') {
    let expanded = { 'l': 'left', 'r': 'right', 't': 'top', 'b': 'bottom' };
    let classes = ['absolute', 'w-[10px]', 'h-[10px]', 'subtext',
        `rounded-${y}${x}-lg`, `border-${x}-[2px]`, `${expanded[x]}-[0.5px]`,
        `border-${y}-[2px]`, `${expanded[y]}-[0px]`];
    return classes.map((e) => `${pseudoElement}:${e}`).join(' ');
}



export function ResultShow({ background_color, text_color, img, img_alt, text, score }: Props) {
   return (<div className={`relative p-4 rounded-lg ${background_color}`}>
        <div className={`flex justify-between items-align
        ${createBorderClass('before', 'l', 't')}
        ${createBorderClass('after', 'r', 't')}`}>

            <div className='flex w-[40%] space-x-3'>
                <img src={img} alt={img_alt} />
                <p className={`${text_color} font-medium`}>{text}</p>
            </div>
            <p className='font-medium text-subtext'><span className='text-black font-bold'>{score}</span><span className='mx-2'>/</span>100</p>
        </div>
        <div className={`${createBorderClass('before', 'l', 'b')} ${createBorderClass('after', 'r', 'b')}`}
        > </div>
    </div>)

}


