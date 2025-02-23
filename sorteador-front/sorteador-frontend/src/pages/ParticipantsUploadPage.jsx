import { useNavigate } from "react-router-dom";
import UploadParticipants from "../components/UploadParticipants/UploadParticipants.jsx";

const ParticipantsUploadPage = () => {
  const navigate = useNavigate(); // Hook para cambiar de página

  return (
    <div className="page-container">
      <UploadParticipants onNext={() => navigate("/prizes-upload")} />
    </div>
  );
};

export default ParticipantsUploadPage;

