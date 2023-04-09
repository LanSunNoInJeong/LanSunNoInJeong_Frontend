import * as styles from "./Box.styles";
import { forwardRef, HTMLAttributes } from "react";

interface BoxProps extends HTMLAttributes<HTMLDivElement> {}

const Box = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  return (
    <styles.Box {...props} ref={ref}>
      {props.children}
    </styles.Box>
  );
});

export default Box;
