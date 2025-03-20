export interface ITask {
  id: number;
  title: string;
  description: string;
  priority: "High" | "Medium" | "Low";
  status: {
    actual: "Done" | "Pending" | "In Progress";
    previous: "Done" | "Pending" | "In Progress";
  };
  startDate: string;
  endDate: string;
}
