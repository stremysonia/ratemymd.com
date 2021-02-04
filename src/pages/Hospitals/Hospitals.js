// import React, { useState } from "react";
// import './Hospitals.css';
// import axios from 'axios';

// function Hospitals() {
//     const [medicalCenter, setMedicalCenter] = useState("");

//     const getMedicalCenter = () => {
//         axios.get("https://api.yelp.com/v3/categories/hospitals").then(
//             (response) => {
//                 console.log(response);
//                 setMedicalCenter(response.data.setup + "..." + response.data.setup)
//             }
//         );
//     };
//     return (
//         <div>
//             Hello Yepl <button onClick={getMedicalCenter}>Get Medical Center Right Now</button>
//             {medicalCenter}
//         </div>
//     );
// }

// export default Hospitals;
