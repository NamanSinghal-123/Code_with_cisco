
import "../styles/InsuranceForm.css";
import { useNavigate } from "react-router-dom";

const InsuranceForm = ({ userData }) => {
 
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    // event.preventDefault();

    // // Check if userData is available and email matches
    // if (!userData || userData.email !== event.target.email.value) {
    //   console.error("Unauthorized access");
    //   return;
    // }

    // Assuming form submission was successful, navigate to OCR page
    navigate('/home1');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="centered-form">
        {/* <h5>Almost there!</h5> */}
       
        {/* Pass email as hidden input */}
        <input type="hidden" name="email" value={userData ? userData.email : ""} />
        {/* Submit button */}
        <div className="button-container">
          <button type="submit" className="submit-button">
            Click Here
          </button>
        </div>
      </form>
    </div>
  );
};

export default InsuranceForm;
