import { useParams } from "react-router-dom";

const Edit = () => {
  const params = useParams();

  return (
    <div>
      EditPage - {params.id}
    </div>
  )
}

export default Edit;