import {
  SiRust,
  SiTypescript,
  SiGo,
  SiCplusplus,
  SiPython,
  SiFlutter,
  SiReact,
  SiNodedotjs,
  SiTauri,
  SiDocker,
  SiKubernetes,
} from "react-icons/si"

export const skillIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Rust": SiRust,
  "TypeScript": SiTypescript,
  "Go": SiGo,
  "C++": SiCplusplus,
  "Python": SiPython,
  "Flutter": SiFlutter,
  "React": SiReact,
  "Node.js": SiNodedotjs,
  "Tauri": SiTauri,
  "Docker": SiDocker,
  "Kubernetes": SiKubernetes,
}
