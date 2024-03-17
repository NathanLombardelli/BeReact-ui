import {useRef, useCallback, ReactNode} from 'react';
import './HoloCard.scss';

interface propsTypes{
    content: ReactNode
}

export default function HoloCard({content} : propsTypes) {
    const cardRef = useRef<HTMLDivElement>(null);

    const resetCardPosition = useCallback(() => {
        const el = cardRef.current;
        if(el){
            el.style.setProperty("--x", "50%");
            el.style.setProperty("--y", "50%");
            el.style.setProperty("--bg-x", "50%");
            el.style.setProperty("--bg-y", "50%");
            el.style.setProperty("--r-x", "0deg");
            el.style.setProperty("--r-y", "0deg");
        }
    }, []);

    const mouseMoveHandler = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const el = cardRef.current;
        if (el) {
            const w = el.clientWidth;
            const h = el.clientHeight;
            const b = el.getBoundingClientRect();

            const X = (e.clientX - b.left) / w;
            const Y = (e.clientY - b.top) / h;

            const rX = -(X - 0.5) * 26;
            const rY = (Y - 0.5) * 26;

            const bgX = 40 + 20 * X;
            const bgY = 40 + 20 * Y;

            el.style.setProperty("--x", 100 * X + "%");
            el.style.setProperty("--y", 100 * Y + "%");

            el.style.setProperty("--bg-x", bgX + "%");
            el.style.setProperty("--bg-y", bgY + "%");

            el.style.setProperty("--r-x", rX + "deg");
            el.style.setProperty("--r-y", rY + "deg");
        }
    }, []);


    return (
        <div className="card" ref={cardRef} onMouseMove={mouseMoveHandler} onMouseLeave={resetCardPosition}>
            <div className="card__wrapper">
                <div className="card__3d">
                    <div className="card__image">
                        {content}
                    </div>
                    <div className="card__layer1"></div>
                    <div className="card__layer2"></div>
                </div>
            </div>
        </div>
    );
}
