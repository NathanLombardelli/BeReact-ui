import './WavyText.scss';

interface BaseProps {
    /** text */
    text: string;
    /** default Consolas */
    fontFamily?: string;
    /** css font color */
    color?: string;
    /** delay default: 0.1 */
    delay?: number;
    /** jump height in px default: 10 */
    jumpHeight?: number;
    /** animation time in second default: 1 */
    animationTime?: number;
    /** css font-size default: 1em */
    fontSize?: string;
}

interface WithHueColor extends BaseProps {
    /** base hue color hsl(${hueColor + (variation * index) % 360}, 100%, 50%) */
    hueColor: number;
    /** hue color variation hsl(${hueColor + (variation * index) % 360}, 100%, 50%) */
    variation: number;
}

interface WithoutHueColor extends BaseProps {
    /** base hue color variation hsl(${hueColor + (variation * index) % 360}, 100%, 50%) */
    hueColor?: never;
    /** hue color variation hsl(${hueColor + (variation * index) % 360}, 100%, 50%) */
    variation?: never;
}

type WavyTextProps = WithHueColor | WithoutHueColor;

export default function WavyText({text,fontFamily,color,variation,hueColor,delay,jumpHeight,animationTime,fontSize}: WavyTextProps) {
    const baseHue = hueColor ? hueColor : 10;
    const letterSpans = [...text].map((letter, index) => {
        const style = {
            '--i': index + 1 ,
            '--delay': delay ? `${delay}s` : '0.1s',
            '--jumpHeight': jumpHeight ? `-${jumpHeight}px` : '-10px',
            '--animationTime': animationTime ? `${animationTime}s` : '1s',
            fontFamily: fontFamily,
            fontSize: fontSize,
            color: variation ? `hsl(${baseHue + (variation * index) % 360}, 100%, 50%)` : color,
        } as React.CSSProperties;

        return (
            <span key={index} style={style}>{letter === ' ' ? '\u00A0' : letter}</span>
        )
    });

    return (
        <div className="wavy">
            {letterSpans}
        </div>
    );
}
