import { ReactNode } from "react";

interface IGraphInform {
  labels: string[];
  seriesData: Array<{
    name: string;
    data: number[];
  }>;
}

interface IGeneral {
  infoGraph?: any,
  msg?: any,
  dataTable?: any,
  filterRow?: any,
  title?: string,
  statusModal?: boolean,
  changeModal?: any
}

interface ContainerProps {
  children?: ReactNode,
  classes?: string
}

interface ITable {
  dataTable?: any
  msg?: any,
  filterToRow?: any
}

interface Props { }

export { IGraphInform, IGeneral, Props, ContainerProps, ITable };