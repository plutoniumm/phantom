// example SCSS -> CSS Transform | CSS -> SCSS Transform
type Transform = (a: string) => Promise<string>;

// example an SCSS<->CSS interchange
interface Interchange {
  atob: Transform;
  btoa: Transform;
}