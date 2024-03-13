interface propsTypes {
    /**  css background */
    bgColor?: string;
    /**  neon color */
    neoncolor?: string;
    /**  toogle Color*/
    toogleColor?: string;
    /**  css borderColor */
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
