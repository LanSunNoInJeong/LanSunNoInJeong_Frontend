import * as styles from "./Description.styles";
import React, { ReactNode } from "react";

interface DataListProps {
  children?: ReactNode;
}

export const DataList: React.FC<DataListProps> = ({ children, ...props }) => {
  return <styles.DataList {...props}>{children}</styles.DataList>;
};

interface DataDescProps {
  children?: ReactNode;
}

export const DataDesc: React.FC<DataDescProps> = ({ children, ...props }) => {
  return <styles.DataDesc {...props}>{children}</styles.DataDesc>;
};

interface DataTermProps {
  children?: ReactNode;
}

export const DataTerm: React.FC<DataTermProps> = ({ children, ...props }) => {
  return <styles.DataTerm {...props}>{children}</styles.DataTerm>;
};
