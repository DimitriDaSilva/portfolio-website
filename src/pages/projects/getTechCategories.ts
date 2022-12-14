import projects from "shared/projects";

export default function getTechCategories(): string[] {
  const techCategoriesDuplicates = projects
    .map((project) => {
      return project.stack;
    })
    .flat(1);

  return [...new Set<string>(techCategoriesDuplicates)];
}
