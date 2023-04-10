import * as styles from "./Image.styles";
import React from "react";

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

const Image: React.FC<ImageProps> = ({ ...props }) => {
  return <styles.Image {...props} />;
};

export default Image;
