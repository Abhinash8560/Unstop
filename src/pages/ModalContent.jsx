import React, { useState } from "react";
import Styles from "./ModalContent.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom'

const ModalContent = ({ closeModal, onSave,onAssessmentDataChange }) => {
  const [assessmentData, setAssessmentData] = useState({
    assessmentName: "",
    purpose: "",
    description: "",
    skills: [],
    duration: "",
  });
  console.log("data",assessmentData)
   const nav=useNavigate();
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAssessmentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddSkill = () => {
    if (newSkill.trim() !== "") {
      setAssessmentData((prevData) => ({
        ...prevData,
        skills: [...prevData.skills, newSkill],
      }));
      setNewSkill("");
    }
  };

  const handleSkillInputKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAddSkill();
    }
  };

  const handleRemoveSkill = (index) => {
    setAssessmentData((prevData) => ({
      ...prevData,
      skills: prevData.skills.filter((_, i) => i !== index),
    }));
  };
  const [newSkill, setNewSkill] = useState("");
  const handleSave = (assessmentData) => {
    onSave(assessmentData);
    toast.success("Saved");
    closeModal();
    nav("/", { state: assessmentData });

  }
  return (
    <>
      <section className={Styles.modalContent}>
        <div className={Styles.modalMain} onClick={(e) => e.stopPropagation()}>
          <p className={Styles.headModal}>Create new assessment</p>
          <span className={Styles.close} onClick={closeModal}>
            &times;
          </span>
        </div>

        <div className={Styles.InputBox}>
          <label className={Styles.NameAsk}>Name of assessment</label>
          <br />
          <input
            type="text"
            placeholder="Type Here"
            value={assessmentData.assessmentName}
            onChange={handleInputChange}
            name="assessmentName"
            className={Styles.inpuytWrapper}

          />
          <br />
          <label className={Styles.NameAsk}>Purpose of the test is</label>
          <select
            className={Styles.inpuytWrapper}
            value={assessmentData.purpose}
            onChange={handleInputChange}
            name="purpose"
          >
            <option value="">Select Purpose</option>
            <option>job</option>
            <option>Learning</option>
            <option>Upgrading Skills</option>
          </select>
          <br />
          <label className={Styles.NameAsk}>Description</label>
          <select
            className={Styles.inpuytWrapper}
            value={assessmentData.description}
            onChange={handleInputChange}
            name="description"
          >
            <option value="">Select description</option>
            <option>Placement</option>
            <option>Hiring</option>
          </select>
          <br />
          <label className={Styles.NameAsk}>Skills</label>
          <br />
      
          <div className={Styles.textAreaChip}>
            {assessmentData.skills.map((skill, index) => (
              <p className={Styles.chipInner} key={index}>
                {skill} &nbsp;
                <span
                  className={Styles.closeChip}
                  onClick={() => handleRemoveSkill(index)}
                >
                  &times;
                </span>
              </p>
            ))}
          </div>
          <input
          className={Styles.inpuytWrapper1}
          type="text"
          placeholder="Type Here"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          onKeyDown={handleSkillInputKeyDown} 
          />
          <br />

          <label className={Styles.NameAsk2}>Duration of assessment</label>
          <input
            className={Styles.inpuytWrapper2}
            type="date"
            placeholder="dd/mm/yyyy"
            value={assessmentData.duration}
            onChange={(e) =>
              setAssessmentData((prevData) => ({
                ...prevData,
                duration: e.target.value,
              }))
            }
          />
        </div>
        <div className={Styles.btnBottom}>
          <button onClick={handleSave} className={Styles.saveBttn}>
            Save
          </button>
        </div>
      </section>
    </>
  );
};

export default ModalContent;
