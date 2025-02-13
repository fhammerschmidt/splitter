import React from 'react';
import { SplitDirection, GutterTheme } from './index';
interface GutterProps {
    className?: string;
    theme: GutterTheme;
    draggerClassName?: string;
    direction?: SplitDirection;
    onMouseDown?: (e: any) => void;
}
declare const Gutter: React.ForwardRefExoticComponent<GutterProps & React.RefAttributes<HTMLDivElement>>;
export default Gutter;
