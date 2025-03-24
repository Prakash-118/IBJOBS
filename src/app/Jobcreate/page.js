'use client';
import React from 'react'
import '../Jobcreate/page.css';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Page = () => {
    const [formData, setFormData] = useState({
        jobTitle: "",
        description: "",
        email: "",
        username: "",
        jobSector: "",
        jobType: "",
        skills: [],
        minSalary: "",
        maxSalary: "",
        category: "",
        area: "",
        qualification: "",
        gender: "",
        experience: "",
        country: "India",
        state: "",
        city: ""
      });
      const stateDistricData = {
        AndhraPradesh: ["Srikakulam", "Parvathipuram Manyam", "Vizianagaram", "Visakhapatnam", "Alluri Sitarama Raju", "Anakapalli", "Kakinada", "East Godavari", "Dr. B. R. Ambedkar konaseema", "Eluru", "West Godavari", "NTR", "Krishna", "Palnadu", "Guntur", "Bapatla", "Sri Potti Sriramulu Nellore", "Prakasam", "Kurnool", "Nandyal", "Anantapuramu", "Sri Sthya Sai", "YSR Kadapa", "Annamayya", "Tirupati", "Chittoor"],
        ArunachalPradesh: ["Tawang", "West Kameng", "Bichon", "East Kameng", "Pakke-Kessang", "Kurung Kumey", "Papum Pare", "Kra Daddi", "Lower Subansiri", "Kamle", "Keyi Panyor", "Upper Subansiri", "Shi-Yomi", "West Siang", "Siang","Lower Siang", "Lepa-Rada", "Upper Siang", "East Siang", "Dibang Valley", "Lohit", "Anjaw", "Namsai", "Changlang", "Tirap", "Longding"],
        Assam: ["Baksa", "Bajali", "Barpeta", "Biswanath", "Bongaigoan", "Cachar", "Charaideo", "Chirang", "Darrang", "Dhemaji", "Dhubri", "DibruGarh", "Dima Hasao", "Goalpara", "Golaghat", "Hailakandi", "Hojai", "Jorhat", "Kamrup Metropolitan", "Kamrup", "Karbi Anglong", "Sribhumi", "Kokrajhar", "Lakhimpur", "Majuli", "Morigaon", "Nagaon", "Nalbari", "Sivasagar", "Sonitpur", "South Salmara-Mankachar", "Tamulpur", "Tinsukia", "Udalguri", "West Karbi Anglong"],
        Bihar: ["Patna", "Gaya", "Bhagalpur", "Darbhanga", "Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhojpur", "Buxer", "Gopalganj", "Jamui", "Jehanabad", "Katihar", "Kishanganj", "Khagaria", "Lakhisarai", "Madhepura", "Madhubani", "Munger", "Muzaffarpur", "Nalanda", "Nawada", "Pachim Champaran", "Purnia", "Rohtas", "Saharsa", "Samastipur", "Saran", "Sheikhpura", "Sheohar","Sitamarhi", "Supaul", "Vaishali"],
        Chandigarh: ["Chandigarh"],
        Delhi: ["north", "south", "east", "west", "central", "Shahadara", "New Delhi", "North East Delhi", "North West Delhi", "South East Delhi", "South West Delhi"],
        Goa: ["North Goa", "South Goa"],
        Gujarat: ["Ahmedabad", "Amreli", "Anand", "Aravalli", "Banaskantha", "Bharuch", "Bhavnagar", "Botad", "Chhota Udaipur", "Dahod", "Dang", "Devbhoomi Dwarka", "Gandhinagar", "Gir Somnath", "Jamnagar", "Junagadh", "Kutch", "Kheda", "Mahisagar", "Mehsana", "Morbi", "Narmada", "Navsari", "Panchmahal", "Patan", "Porbandar", "Rajkot", "Sabarkantha", "Surat", "Surendranagar", "Tapi", "Vadodara", "Valsad", "Vav-Tharad"],
        Haryana: ["Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Gurugram", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Nuh", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar"],
        HimachalPradesh: ["Shimla", "Sirmaur", "Solan", "Kinnaur", "Kullu", "Lahaul & Spiti", "Mandi", "Bilaspur", "Chamba", "Hamirpur", "Kangra", "Una"],
        Jharkhand: ["Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "East Singhbhum", "Garhwa", "Giridih", "Godda", "Gumla", "Hazaribagh", "Jamtara", "Khunti", "Kodarma", "Latehar", "Lohardaga", "Pakur", "Palamu", "Ramgarh", "Ranchi", "Sahibganj", "Saraikela-Kharsawan", "Simdega", "West Singhbhum"],
        Karnataka: ["bangalore Urban", "Begurluru Rural", "Chamarajanagara", "Davanagere", "Bangalakote", "Gadaga", "Udupi", "Koppala", "Ramanagara", "Chikkaballapura", "Yadagiri", "Vijaynagara"],
        Kerala: ["Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta", "Thiruvananthuram", "Thrissur", "Wayanad"],
        MadhyaPradesh: ["Bhopal", "Raisen", "Rajgarh", "Sehore", "Vidisha", "Morena", "Sheopur", "Bhind", "Gwalior", "Ashoknagar", "Datia", "Guna", "Alirajpur", "Barwani", "Indore", "Dhar", "Jhabua", "Khandwa", "Khargone", "Balaghat", "Chhindwara", "Jabalpur", "Katni", "Mandla", "Narsinghpur", "Seoni", "Dindori", "Pandhurna", "Betul", "Harda", "Narmadapuram", "Rewa", "Satna", "Sidhi", "Singrauli", "Mauganj", "Maihar", "Chhatarpur", "Damoh", "Panna", "Sagar", "Tikamgarh", "Niwari", "Anuppur", "Shahdol", "Umaria", "Agar Malwa", "Dewas", "Mandsaur", "Neemuch", "Ratlam", "Shajapur", "Ujjain"],
        Maharashtra: ["Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara", "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban", "Nagpur",  "Nanded", "Nandurbar", "Nashik", "Osmanbad", "Palghar", "Parbhani", "Pune", "Raigad", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal"],
        Manipur: ["Bhisnupur", "Chandel", "Churachandpur", "Imphal East", "Imphal West", "Jiribam", "Kakching", "Kamjong", "Kangpokpi", "Noney", "Pherzawl", "Senapati", "Tamenglong", "Tengnoupal", "Thobal", "Ukhrul"],
        Meghalaya: ["East Garo Hills", "East Khasi Hills", "East Jaintia Hills", "North Garo Hills", "Ri Bhoi", "South Garo Hills", "South West Garo Hills", "West Jaintia Hills", "West Garo Hills", "West Khasi Hills"],
        Mizoram: ["Aizawl", "Champhai", "Hnahthial", "Khawzawl", "Kolasib", "Lawngtlai", "Lunglei", "Mamit", "Saiha", "Saitual", "Serchhip"],
        Nagaland: ["Chumoukedima District", "Dimapur District", "Kiphire District", "Kohima District", "Longleng District", "Meluri District", "Mokokchung", "Mon District", "Niuland District", "Noklak District", "Peren District", "Phek District", "Shamator District", "Tuensang District", "Wokha District", "Zunheboto District"],
        Odisha: ["Angul", "Balangir", "Balasore", "Bargarh", "Bhadrak", "Boudh", "Cuttack", "Debagarh", "Dhenkanal", "Gajapati", "Ganjam", "Jagatsinghapur", "Jajpur", "Jharsuguda", "Kalahandi", "Kandhamal", "Kendrapara","Kendujhar", "Khordha", "Koraput", "Malkangiri", "Mayurbhanj", "Nabarangpur", "Nayagarh", "Nuapada", "Puri", "Rayagada", "Sambalpur", "Subarnapur", "Sundargarh", "Odisha"],
        Punjab: ["Amritsar", "Barnala", "Bathinda", "Fazilka", "Faridkot", "Fatehgarh Sahib", "Firozpur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "Mohali", "Muktsar", "Pathankot", "Patiala", "Rupnagar", "Sangrur", "Shahid Bhagat Singh Nagar", " Tarn Taran"],
        Rajasthan: ["Ajmer", "Alwar", "Balotra", "Banswara", "Baran", "Barmer", "Beawar", "Bharatpur", "Bhilwara", "Bikaner", "Bundi", "Chittorgarh", "Churu", "Dausa", "Deeg", "Didwana-Kuchaman", "Dholpur", "Dungarpur", "Hanumangarh", "Jaipur", "Jaisalmer", "Jalore", "Jhalwar", "Jhunjhunu", "Jodhpur", "Karauli", "Khairthal-Tijara", "Kotputli-Behor", "Kota", "Nagpur", "Pali", "Phalodi", "Pratapgarh", "Rajsamand", "Salumbar", "Sawai Madhopur", "Sikar", "Sirohi", "Sri Ganganagar", "Tonk", "Udaipur"],
        Sikkim: ["Gangtok", "Mangan", "Namchi", "Gyalshing or Geyzing", "Pakyong", "Soreng"],
        TamilNadu: ["Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kallakurichi", "Kancheepuram", "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Mayiladuthurai", "Nagapattinam", "Namakkal", "Nilgiris", "Pudukkottai", "Ramanathapuram", "Ranipet", "Salem", "Sivaganga", "Tenkasi", "Thanjavur", "Theni", "Thoothukudi", "Tiruchirappalli", "Tiruneveli", "Tirupathur", "Tiruppur", "Tiruvallur", "Tirvannamalai", "Tiruvarur", "Vellore", "Viluppuram", "Virudhunagar"],
        Telangana: ["Adilabad", "Kumuram Bheem Asifabad", "Mancherial", "Nirmal", "Nizamabad", "Jagtial", "Peddapalli", "Kamareddy", "Rajanna Sircilla", "Karimnagar", "Jayashankar Bhupalpally", "Sangareddy", "Medak", "Siddipet", "Jangaon", "Hanumakonda", "Warangal", "Mulugu", "Bhadradri Kothagudem", "Khammam", "Mahabubabad", "Suryapet", "Nalgonda", "Yadadri Bhuvanagiri", "Medchal-Malkajgiri", "Hyderabad", "Ranga Reddy", "Vikarabad", "Narayanpet", "Mahabubanagar", "Nagarkurnool", "Wanaparthy", "Jogulamba Gadwal"],
        Tripura: ["Ambassa", "Udaipur", "Khowai", "Sipahijala", "Unakoti", "North Tripura", "South Tripura", "West Tripura"],
        Uttrakhand: ["Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Haridwar", "Nanital", "Pauri", "Pithoragarh", "Rudraprayag", "Tehri", "Udham Singh Nagar", "Uttarkashi"],
        UttarPradesh: ["Agra", "Aligarh", "PrayagRaj", "Ambedkar Nagar", "Amroha", "Auraiya", "Azamgarh", "Badaun", "Bahraich", "Ballia", "Balrampur", "Banda District", "Barabanki", "Bareilly", "Basti", "Bijnor", "Bulandshahr", "Chanduli", "Chitrakoot", "Deoria", "Etah", "Etawah", "Faizabad", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur District", "Hardoi", "Hathras", "Jaunpur District", "Jhansi", "Kannauj", "Kanpur Nagar", "Kasganj", "kaushambi", "Kushinagar", "Lakhimpur Kheri", "Lalitpur", "Lucknow", "Maharjganj", "Mahoba", "Mainpuri", "Mathura", "Mau", 'Meerut', "Miezapur", "Moradabad", "Pilibhit", "Pratapgarh", "Rae bareli", "Rampur", "Saharanpur", "Sant Kabir Nagar", "Sant Ravidas Nagar", "Sambhal", "Shahjahanpur", "Shamli", "Shrsvasti", "Siddharthnagar", "Sitapur", "Sobhadra", "Sultanpur", "Unnao", "Varanasi(Kashi)", "Allahabad", "Amethi", "Bagpat"],
        WestBengal: ["Alipurduar", "Bankura", "Paschim Bardhaman", "Purba Bardhaman", "Birbhum", "Cooch Behar", "Darjeeling", "Dakshin Dinajpur", "Hooghly", "Howrah", "Jalpaiguri", "Jhargram", "Kolkata", "Kalimpong", "Malda", "Paschim Medinipur", "Purba Medinipur", "Murshidabad", "Nadia", "North 24 Parganas", "South 24 Parganas", "Purulia", "Uttar Dinajpur"],
        AndamanNicobarIslands: ["North Andaman", "South Andaman", "Nicobar"],
        DadraNagar: ["Dadra", "Nagar Haveli"],
        DamanDiu: ["Daman", "Diu"],
        JammuKashir: ["Kathua", "Jammu", "Udhampur", "Reasi", "Rajouri", "Poonch", "Doda", "Ramban", "Kishtwar", "Anantnag", "Kulgam", "Pulwama", "Shopian", "Budgam", "Srinagar", "Ganderbal", "Bandipora", "Baramulla", "Kupwara"],
        Lakshadweep: ["Lakshadweep"],
        Ladakh: ["Kargil", "Leh", "Changthang", "Drass", "Nubra", "Sham", "Zanskar"],
        Puducherry: ["Puducherry", "Karaikal", "Mahe", "Yanam"],
      };

      const [errors, setErrors] = useState({});
      const [submitted, setSubmitted] = useState(false);
      const [selectedState, setSelectedState] = useState("");
      const [districts, setDisricts] = useState([]);


      const handleStateChange = (e) => {
        const selectedState = e.target.value;
        setSelectedState(selectedState);
        setDisricts(stateDistricData[selectedState] || []);
        setFormData((prev) => ({ ...prev, state: selectedState, city: "" })); 
      };
      
      
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: name === "skills" ? value.split(",") : value, }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
      };
      
      const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};
        for (let key in formData) {
          if (!formData[key]) {
            newErrors[key] = "This field is reuired";
          }
        }
        if (Object.keys(newErrors).length > 0) {
          setErrors(newErrors);
          return
        }
        console.log("Job Details Submitted:", formData);
        setSubmitted(true);

        setTimeout(() => {
          setSubmitted(false);
      }, 3000);
      };

  return (
    <>
   <div className="job-post-container">
      <h2>Post A New Job</h2>
      <div className="progress-bar">
        <div className={`step ${!submitted ? "active" : "completed"}`}>
          <FontAwesomeIcon icon={faBriefcase} className="ico"/>
          <span>Job Details</span>
        </div>
        <div className={`step ${submitted ? "active" : ""}`}>
          <FontAwesomeIcon icon={faCheckCircle} className="ico"/>
          <span>Confirmation</span>
        </div>
      </div>
      
      <form onSubmit={handleSubmit}>
        <input type="text" name="jobTitle" placeholder="Job Title" onChange={handleChange} />
        {errors.jobTitle && <p className='error-text'>{errors.jobTitle}</p>}


        <textarea name="description" placeholder="Description" onChange={handleChange}></textarea>
        {errors.description && <p className='error-text'>{errors.description}</p>}



        <div className="row">
          <input type="email" name="email" placeholder="Email Address" onChange={handleChange} />
          {errors.email && <p className='error-text'>{errors.email}</p>}


          <input type="text" name="username" placeholder="Username" onChange={handleChange} />
          {errors.username && <p className='error-text'>{errors.username}</p>}
        </div>


        <div className="row">
          <select name="jobSector" onChange={handleChange}><option>Select Sector</option>
          <option>It</option>
          <option>helth</option>
          </select>
          {errors.jobSector && <p className='error-text'>{errors.jobSector}</p>}


          <select name="jobType" onChange={handleChange}><option>Select Type</option>
          <option>Jatt</option>
          <option>Full Time</option>
          </select>
          {errors.jobType && <p className='error-text'>{errors.jobType}</p>}
        </div>


        <input type="text" name="skills" placeholder="Required Skills" onChange={handleChange} />
        {errors.skills && <p className='error-text'>{errors.skills}</p>}



        <div className="row">
          <input type="number" name="minSalary" placeholder="Min Salary pa" onChange={handleChange} />
          {errors.minSalary && <p className='error-text'>{errors.minSalary}</p>}


          <input type="number" name="maxSalary" placeholder="Max Salary pa" onChange={handleChange} />
          {errors.maxSalary && <p className='error-text'>{errors.maxSalary}</p>}
        </div>
        
        <h3>Other Information</h3>
        <div className="row">
          <select name="category" onChange={handleChange}><option>Category</option>
          <option>Hills</option>
          <option>hello ji</option>
          </select>
          {errors.category && <p className='error-text'>{errors.category}</p>}


          <select name="area" onChange={handleChange}><option>Functional Area</option>
          <option>hybrid</option>
          <option>Remote</option>
          </select>
          {errors.area && <p className='error-text'>{errors.area}</p>}
        </div>


        <div className="row">
          <select name="qualification" onChange={handleChange}><option>Qualification</option>
          <option>12th</option>
          <option>Graduate</option>
          </select>
          {errors.qualification && <p className='error-text'>{errors.qualification}</p>}



          <select name="gender" onChange={handleChange}><option>Gender</option>
          <option>Male</option>
          <option>Female</option>
          </select>
          {errors.gender && <p className='error-text'>{errors.gender}</p>}
        </div>


        <input type="number" name="experience" placeholder="Experience" onChange={handleChange} />
        {errors.experience && <p className='error-text'>{errors.experience}</p>}

        
        <h3>Address / Location</h3>
        <div className="row">
          <select name="country" onChange={handleChange} defaultValue="India"><option>Country</option>
          <option>Afganistan</option>
          <option>Albania</option>
          <option>Algeria</option>
          <option>Angola</option>
          <option>Antigua and Barbuda</option>
          <option>Argentina</option>
          <option>Armenia</option>
          <option>Australia</option>
          <option>Austria</option>
          <option>Azerbaijan</option>
          <option>Bahamas</option>
          <option>Bahrain</option>
          <option>Bangladesh</option>
          <option>Barbados</option>
          <option>Belarus</option>
          <option>Belgium</option>
          <option>Belize</option>
          <option>Benin</option>
          <option>Bhutan</option>
          <option>Bolivia</option>
          <option>Bosnia and Herzegovina</option>
          <option>Botswana</option>
          <option>Brazil</option>
          <option>Brunei</option>
          <option>Bulgaria</option>
          <option>Burkina Faso</option>
          <option>Burundi</option>
          <option>Cambodia</option>
          <option>Cameroon</option>
          <option>Canada</option>
          <option>Central African Republic</option>
          <option>Chad</option>
          <option>Chile</option>
          <option>China</option>
          <option>Colombia</option>
          <option>Comoros</option>
          <option>Congo (Brazzaville)</option>
          <option>Congo (Kinshasa)</option>
          <option>Costa Rica</option>
          <option>Côte dIvoire</option>
          <option>Croatia</option>
          <option>Cuba</option>
          <option>Cyprus</option>
          <option>Czech Republic</option>
          <option>Denmark</option>
          <option>Djibouti</option>
          <option>Dominica</option>
          <option>Dominican Republic</option>
          <option>East Timor (Timor-Leste)</option>
          <option>Ecuador</option>
          <option>Egypt</option>
          <option>El Salvador</option>
          <option>Equatorial Guinea</option>
          <option>Eritrea</option>
          <option>Estonia</option>
          <option>Ethiopia</option>
          <option>Fiji</option>
          <option>Finland</option>
          <option>France</option>
          <option>French Guiana</option>
          <option>Gabon</option>
          <option>Gambia</option>
          <option>Georgia</option>
          <option>Germany</option>
          <option>Ghana</option>
          <option>Greece</option>
          <option>Greenland</option>
          <option>Guatemala</option>
          <option>Guinea</option>
          <option>Guinea-Bissau</option>
          <option>Guyana</option>
          <option>Haiti</option>
          <option>Honduras</option>
          <option>Hungary</option>
          <option>Iceland</option>
          <option>India</option>
          <option>Indonesia</option>
          <option>Iran</option>
          <option>Iraq</option>
          <option>Ireland</option>
          <option>Israel</option>
          <option>Italy</option>
          <option>Jamaica</option>
          <option>Japan</option>
          <option>Jordan</option>
          <option>Kazakhstan</option>
          <option>Kenya</option>
          <option>Kiribati</option>
          <option>Kosovo</option>
          <option>Kuwait</option>
          <option>Kyrgyzstan</option>
          <option>Laos</option>
          <option>Latvia</option>
          <option>Lebanon</option>
          <option>Lesotho</option>
          <option>Liberia</option>
          <option>Libya</option>
          <option>Liechtenstein</option>
          <option>Lithuania</option>
          <option>Luxembourg</option>
          <option>Madagascar</option>
          <option>Malawi</option>
          <option>Malaysia</option>
          <option>Maldives</option>
          <option>Mali</option>
          <option>Malta</option>
          <option>Marshall Islands</option>
          <option>Martinique</option>
          <option>Mauritania</option>
          <option>Mauritius</option>
          <option>Mayotte</option>
          <option>Mexico</option>
          <option>Micronesia</option>
          <option>Moldova</option>
          <option>Monaco</option>
          <option>Mongolia</option>
          <option>Montenegro</option>
          <option>Montserrat</option>
          <option>Morocco</option>
          <option>Mozambique</option>
          <option>Myanmar (Burma)</option>
          <option>Namibia</option>
          <option>Nauru</option>
          <option>Nepal</option>
          <option>Netherlands</option>
          <option>New Caledonia</option>
          <option>New Zealand</option>
          <option>Nicaragua</option>
          <option>Niger</option>
          <option>Nigeria</option>
          <option>Niue</option>
          <option>Norfolk Island</option>
          <option>Northern Mariana Islands</option>
          <option>Norway</option>
          <option>Oman</option>
          <option>Pakistan</option>
          <option>Palau</option>
          <option>Panama</option>
          <option>Papua New Guinea</option>
          <option>Paraguay</option>
          <option>Peru</option>
          <option>Philippines</option>
          <option>Pitcairn Islands</option>
          <option>Poland</option>
          <option>Portugal</option>
          <option>Qatar</option>
          <option>Reunion</option>
          <option>Romania</option>
          <option>Russia</option>
          <option>Rwanda</option>
          <option>Saint Barthelemy</option>
          <option>Saint Helena</option>
          <option>Saint Kitts and Nevis</option>
          <option>Saint Lucia</option>
          <option>Saint Martin</option>
          <option>Saint Pierre and Miquelon</option>
          <option>Saint Vincent and the Grenadines</option>
          <option>Samoa</option>
          <option>San Marino</option>
          <option>Sao Tome and Principe</option>
          <option>Saudi Arabia</option>
          <option>Senegal</option>
          <option>Serbia</option>
          <option>Seychelles</option>
          <option>Sierra Leone</option>
          <option>Singapore</option>
          <option>Sint Maarten (Dutch part)</option>
          <option>Slovakia</option>
          <option>Slovenia</option>
          <option>Solomon Islands</option>
          <option>Somalia</option>
          <option>South Africa</option>
          <option>South Georgia and the South Sandwich Islands</option>
          <option>South Korea</option>
          <option>South Sudan</option>
          <option>Spain</option>
          <option>Sri Lanka</option>
          <option>Sudan</option>
          <option>Suriname</option>
          <option>Svalbard and Jan Mayen</option>
          <option>Swaziland</option>
          <option>Sweden</option>
          <option>Switzerland</option>
          <option>Syria</option>
          <option>Taiwan</option>
          <option>Tajikistan</option>
          <option>Tanzania</option>
          <option>Thailand</option>
          <option>Timor-Leste</option>
          <option>Togo</option>
          <option>Tokelau</option>
          <option>Tonga</option>
          <option>Trinidad and Tobago</option>
          <option>Tunisia</option>
          <option>Turkey</option>
          <option>Turkmenistan</option>
          <option>Turks and Caicos Islands</option>
          <option>Tuvalu</option>
          <option>Uganda</option>
          <option>Ukraine</option>
          <option>United Arab Emirates</option>
          <option>United Kingdom</option>
          <option>United States</option>
          <option>United States Minor Outlying Islands</option>
          <option>Uruguay</option>
          <option>Uzbekistan</option>
          <option>Vanuatu</option>
          <option>Vatican City</option>
          <option>Venezuela</option>
          <option>Vietnam</option>
          <option>Virgin Islands (British)</option>
          <option>Virgin Islands (US)</option>
          <option>Wallis and Futuna</option>
          <option>Western Sahara</option>
          <option>Yemen</option>
          <option>Zambia</option>
          <option>Zimbabwe</option>
          
          </select>
          {errors.country && <p className='error-text'>{errors.country}</p>}


          <select name="state" onChange={handleStateChange}><option>Select State</option>
           {Object.keys(stateDistricData).map((state) =>(
            <option key={state} value={state}>{state}</option>
           ))}
          </select>
          {errors.state && <p className='error-text'>{errors.state}</p>}
        </div>
        <div className="row">
         <select disabled={!selectedState}>
          <option value="">Select City</option>
          {districts.map((district) => (
            <option key={district} value={district}>{district}</option>
          ))}
        </select>
        </div>
        {/* <input type="text" name="city" placeholder="City" onChange={handleChange} /> */}
        {errors.city && <p className='error-text'>{errors.city}</p>}
        
        <button type="submit" className="submts">Post Job</button>
      </form>
      
      {submitted && (
        <div className="confirmation-popup">
          <FontAwesomeIcon icon={faCheckCircle} style={{ color: "green" }} />
          <span>Job Created</span>
        </div> 
      )}
    </div>
    
    </>
  )
}

export default Page
