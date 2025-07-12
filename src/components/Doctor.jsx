import chat from "../assets/chat.jpg";
import file from "../assets/file.jpg";
import human from "../assets/human.jpg";
import location from "../assets/location.jpg";
import "./style/Doctor.css";
import Select from 'react-select';

function Doctor() {

    const doctorOptions = [
  { value: 'doctor1', label: 'Doctor 1' },
  { value: 'doctor2', label: 'Doctor 2' },
  { value: 'doctor3', label: 'Doctor 3' },
];
  return (
    <div>
      <div className="demo">
        <div className="upper">
          <h1>Meet Our Verified Doctors</h1>
           <Select
      options={doctorOptions}
      placeholder="Choose a doctor"
      className="doctor-select"
    />
        </div>
        <div className="flex">
          <div className="section-2">
            <img src={chat} alt="" />
            <h4>Chat with AI</h4>
            <p>Chat Anytime From Any Where</p>
          </div>
          <div className="section-2">
            <img src={file} alt="" />
            <h4>Scan Medical Reports</h4>
            <p>Scan Medical Reports Get Prescribtion</p>
          </div>
          <div className="section-2">
            <img src={human} alt="" />
            <h4>Talk to Real Doctor</h4>
            <p>Talk to Real Doctor</p>
          </div>
          <div className="section-2">
            <img src={location} alt="" />
            <h4>Find Nearby Lab </h4>
            <h1>Hospitals</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doctor;
