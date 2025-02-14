import React, { useState } from "react";
import Navbar from "../Nav/Navbar";

const jobRoles = ["Frontend Developer", "Backend Developer", "Full Stack Developer", "UI/UX Designer"];
const workModes = ["Work From Home", "On-Site", "Hybrid"];

const HiringPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    jobRole: "",
    workMode: "",
    skills: "",
    about: "",
    githubLink: "",
    projectRole: "",
    resume: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-[5rem]">
          We are <span style={{ color: "var(--accent-color)" }}>KLob</span>Tech
        </h1>
        <div className="text-center text-[2.5rem]">
          <h3>We Are Open for Hiring</h3>
          <p>Please fill out this form to be a part of our team.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-gray-200 p-6 rounded-lg w-3/4 mx-auto mt-4">
        <div className="grid  grid-cols-2 gap-4">
          <div>
            <label>Your Name:
              <input type="text" name="name" required onChange={handleChange} className="w-full p-2 border rounded  bg-transparent border-solid border-" />
            </label>
          </div>
          <div>
            <label>Email ID:
              <input type="email" name="email" required onChange={handleChange} className="w-full p-2 border rounded  bg-transparent border-solid border-" />
            </label>
          </div>
          <div>
            <label>Mobile No:
              <input type="tel" name="mobile" required onChange={handleChange} className="w-full p-2 border rounded  bg-transparent border-solid border-" />
            </label>
          </div>
          <div>
            <label>Job Designation:
              <select name="jobRole" required onChange={handleChange} className="w-full p-2 border rounded  bg-transparent border-solid border-">
                <option value="">Select</option>
                {jobRoles.map((role) => (
                  <option key={role} value={role}>{role}</option>
                ))}
              </select>
            </label>
          </div>
          <div>
            <label>Work Mode:
              <select name="workMode" required onChange={handleChange} className="w-full p-2 border rounded  bg-transparent border-solid border-">
                <option value="">Select</option>
                {workModes.map((mode) => (
                  <option key={mode} value={mode}>{mode}</option>
                ))}
              </select>
            </label>
          </div>
          <div>
            <label>Location:
              <input type="text" value="Jaipur" disabled className="w-full p-2 border rounded  bg-transparent border-solid border- bg-gray-100" />
            </label>
          </div>
          <div className="col-span-2">
            <label>Skills:
              <textarea name="skills" rows="3" required onChange={handleChange} className="w-full p-2 border rounded  bg-transparent border-solid border-"></textarea>
            </label>
          </div>
          <div className="col-span-2">
            <label>Tell us about yourself:
              <textarea name="about" rows="4" required onChange={handleChange} className="w-full p-2 border rounded  bg-transparent border-solid border-"></textarea>
            </label>
          </div>
          <div>
            <label>GitHub/Project Link:
              <input type="text" name="githubLink" required onChange={handleChange} className="w-full p-2 border rounded  bg-transparent border-solid border-" />
            </label>
          </div>
          <div>
            <label>Explain your role in the project:
              <textarea name="projectRole" rows="3" required onChange={handleChange} className="w-full p-2 border rounded  bg-transparent border-solid border-"></textarea>
            </label>
          </div>
          <div className="col-span-2">
            <label>Upload Resume:
              <input type="file" name="resume" onChange={handleFileChange} className="w-full p-2 border rounded  bg-transparent border-solid border-" />
            </label>
          </div>
          <div className="col-span-2 text-center">
            <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700">Submit Application</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default HiringPage;