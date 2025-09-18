import RegisterImage from "../../assets/images/Register-image.png";
import Image from "../../assets/images/User.png";
import logo from "../../assets/images/Logo_transparent.png";
import { useNavigate } from "react-router-dom";

function RoleSelection() {
    const navigate = useNavigate();
  return (
  <div className="container-fluid">
      <div className="row">
      <div className="col-md-6 d-none d-md-flex align-items-center justify-content-start">
          <div>
            <img
              src={RegisterImage}
              alt="Register"
              className="img-fluid"
              style={{ maxHeight: "80vh", objectFit: "contain" }}
            />
          </div>
        </div>
      <div className="col-md-6 bg-white d-flex flex-column align-items-center full-height pt-5">
        <div className="d-flex">
          <img src={logo} alt="Logo" width={70} height={70} />
        <h2 className="text-success text-center mt-2">Welcome to Helth Hub-Pro</h2>
        </div>
       <div>
         <h4 className="mt-4">I am a :</h4>
        <div className="d-block flex-column mt-4">
            <div className="d-flex mb-4" onClick={() => navigate('/auth/register?role=patient')}>
            <img src={Image} alt="Patient" width={50} height={50} />
            <div className="ms-3 cursor-pointer">
              <span>Patient</span>
              <p className="text-success">
                I am looking for medical services and care.
              </p>
            </div>
          </div>
          <div className="d-flex mb-4 " onClick={() => navigate('/auth/register-clinic?role=clinic')}>
            <img src={Image} alt="Clinic" width={50} height={50} />
            <div className="ms-3 cursor-pointer">
              <span>Clinic</span>
              <p className="text-success">
                I manage medical facilities and patient care.
              </p>
            </div>
          </div>
          <div className="d-flex mb-4" onClick={() => navigate('/auth/register?role=doctor')}>
            <img src={Image} alt="Doctor" width={50} height={50} />
            <div className="ms-3 cursor-pointer">
              <span>Doctor</span>
              <p className="text-success">
                I provide medical consultations and treatment.
              </p>
            </div>
          </div>
        </div>
       </div>
      </div>
    </div>
  </div>
  );
}

export default RoleSelection;
