interface propsTypes {
    /**  css background */
    bgColor?: string;
    /**  css background */
    neoncolor?: string;
    /**  css background */
    toogleColor?: string;
    /**  css background */
    borderColor?: string;
    /**  size */
    size?: string;
    /**  checked (state) */
    checked?: boolean;
    /**  setChecked  (state) */
    checkedChange: (checked: boolean) => void;
}
export default function NeoToogle({ bgColor, neoncolor, borderColor, toogleColor, size, checked, checkedChange }: propsTypes): import("react/jsx-runtime").JSX.Element;
export {};
