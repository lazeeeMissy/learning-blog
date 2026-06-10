import { useParams } from "react-router-dom";

export default function ProjectDetailPage() {
  const params = useParams();
  return <div>{params.projectTitle}</div>;
}
