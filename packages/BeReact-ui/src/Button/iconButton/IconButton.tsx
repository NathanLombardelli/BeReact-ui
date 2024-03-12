import {JSX} from "react";
import "./IconButton.scss"

interface propsTypes {
    /** une fonction qui retourne une icone */
    Icon: JSX.ElementType,
    /**  le texte qui sera afficher sur le button */
    text? : string,
    /**  css background */
    bgColor : string,
    /**  css background */
    borderColor? : string,
    /** border-size (px) */
    borderSize? : number,
    /** Hover effect ( pulse,grow,growT ) */
    hover? : string,
    /**  true : uniquement icone , false : icone + texte */
    small : boolean,
    /**  arrondir les coins */
    round? : boolean,
    /** cursor : pointer ? */
    pointer? : boolean,
     /**  largeur en px du button */
    width : number,
     /**  hauteur en px du button */
    height : number,
     /** css color pour la font  */
    fontColor? : string,
    /** fonction appelé lor's du onClick */
    // eslint-disable-next-line @typescript-eslint/ban-types
    action : Function
}

export default function IconButton({Icon,text,bgColor,small,width,height,fontColor,action,round,pointer = true,borderColor,borderSize=0,hover}: propsTypes ) {

    const customStyle = {
        background:bgColor,
        height:height+'px',
        width:width+'px',
        fontSize:height/1.5,
        borderRadius: round? 15 : 0,
        border: borderSize +'px solid ' + borderColor
    }

    const getClass = () => {
        let classButton = "";
        classButton += small ? 'socialButtonSmall ' : 'socialButton ';
        classButton += pointer ? "cursorPointer " : null;
        classButton += hover ? hover : null;
        return classButton;
    }


    return (
          <a className={getClass()} onClick={()=>action()} style={customStyle}>
              <Icon/>
              {small ? <></> : <p style={{fontSize:Math.min((width - (text? text.length:0)) / 4, (height ) / 4),color:fontColor}}>{text}</p>}
          </a>
    )
}