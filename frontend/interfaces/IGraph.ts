interface IGraph {
  labels: string[];
  seriesData: Array<{
    name: string;
    data: number[];
  }>;
}

export default IGraph;