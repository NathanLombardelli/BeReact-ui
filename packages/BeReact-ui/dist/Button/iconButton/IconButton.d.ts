import { JSX } from "react";
import "./IconButton.scss";
interface propsTypes {
    /** une fonction qui retourne une icone */
    Icon: JSX.ElementType;
    /**  le texte qui sera afficher sur le button */
    text?: string;
    /**  css background */
    bgColor: string;
    /**  css background */
    borderColor?: string;
    /** border-size (px) */
    borderSize?: number;
    /** Hover effect ( pulse,grow,growT ) */
    hover?: string;
    /**  true : uniquement icone , false : icone + texte */
    small: boolean;
    /**  arrondir les coins */
    round?: boolean;
    /** cursor : pointer ? */
    pointer?: boolean;
    /**  largeur en px du button */
    width: number;
    /**  hauteur en px du button */
    height: number;
    /** css color pour la font  */
    fontColor?: string;
    /** fonction appelé lor's du onClick */
    action: Function;
}
export default function IconButton({ Icon, text, bgColor, small, width, height, fontColor, action, round, pointer, borderColor, borderSize, hover }: propsTypes): import("react/jsx-runtime").JSX.Element;
export {};
