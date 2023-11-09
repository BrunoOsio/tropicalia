import { projects } from "../mock/projects";
import { Project } from "../types/Project";

export const getProject = (projectNumber: number): Project | undefined =>
  projects.find((project) => project.number == projectNumber);
