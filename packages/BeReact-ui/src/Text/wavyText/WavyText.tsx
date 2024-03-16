import './WavyText.scss';
interface WavyTextProps {
    /** text */
    text: string;
    /** default Consolas */
    fontFamily?:string;
    /** css font color */
    color?:string;
    /** delay default: 0.1 */
    delay?:number;
    /** jump height in px default: 10 */
    jumpHeight?:number;
    /** animation time in second default: 1 */
    animationTime?:number;
    /** css font-size default: 1em */
    fontSize?: string;
}

export default function WavyText({text,fontFamily,color,delay,jumpHeight,animationTime,fontSize}: WavyTextProps) {

    const letterSpans = [...text].map((letter, index) => {

        const varStyle = {
            '--i': index + 1 ,
            '--delay':delay? delay+'s' : '0.1s',
            '--jumpHeight':jumpHeight? -jumpHeight+'px' : '-10px',
            '--animationTime':animationTime?animationTime+'s':'1s',
            fontFamily:fontFamily,
            fontSize:fontSize,
            color:color,
        } as React.CSSProperties

        return (
            <span key={index} style={varStyle}>{letter === ' ' ? '\u00A0' : letter}</span>
        )
    });

    return (
        <div className="wavy">
            {letterSpans}
        </div>
    );
}
