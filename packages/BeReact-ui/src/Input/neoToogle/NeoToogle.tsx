import "./NeoToogle.scss"

interface propsTypes {
    /**  css background */
    bgColor? : string,
    /**  css background */
    neoncolor? : string,
    /**  css background */
    toogleColor? : string,
    /**  css background */
    borderColor? : string,
    /**  size */
    size? : string,
    /**  checked (state) */
    checked? : boolean,
    /**  setChecked  (state) */
    // eslint-disable-next-line @typescript-eslint/ban-types
    checkedChange : (checked: boolean) => void,
}

export default function NeoToogle({ bgColor,neoncolor,borderColor,toogleColor,size,checked,checkedChange} : propsTypes) {
    const style = {
        '--color': neoncolor,
        '--toogleColor': toogleColor,
        '--borderColor':borderColor,
        "--size":size,
        background: bgColor,
    } as React.CSSProperties

    const handleChange = () => {
        checkedChange(!checked);
    };

    return (
        <input checked={checked} onChange={handleChange} type="checkbox" role="switch" className="neon" style={style} />
    )
}

