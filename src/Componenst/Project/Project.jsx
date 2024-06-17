import React, { useState } from "react";
import "./ProjectGallery.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import arrow_icon from "../../assets/arrow_icon.svg";
import Modal from "react-modal";
import Project_Data from '../../assets/project_data'
Modal.setAppElement("#root"); // ทำให้ Modal ทำงานได้ใน React
const MyWork = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (images) => {
    setSelectedImages(images);
    setCurrentIndex(0);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImages([]);
    setCurrentIndex(0);
  };

  const showNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % selectedImages.length);
  };

  const showPrevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + selectedImages.length) % selectedImages.length);
  };

  return (
    <div id="services" className="mywork">
      <div className="mywork-title">
        <h1>My Project</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {Project_Data.map((work, index) => (
          <div key={index} className="project-item">
            <img
              src={work.p_img[0]} // เลือกรูปแรกของแต่ละรายการ
              alt=""
              onClick={() => openModal(work.p_img)}
              style={{ cursor: "pointer" }}
            />
            <div className="project-info">
              <h2>{work.p_name}</h2>
              <p>{work.p_desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mywork_showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          },
        }}
      >
        {selectedImages.length > 0 && (
          <>
            <img src={selectedImages[currentIndex]} alt="Full Size" style={{  maxWidth: '730px', maxHeight:'600px',objectFit: 'contain',}} />
            <button onClick={showPrevImage} style={{ position: 'absolute', top: '50%', left: '10px', padding: '10px', backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Prev</button>
            <button onClick={showNextImage} style={{ position: 'absolute', top: '50%', right: '10px', padding: '10px', backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Next</button>
            <button onClick={closeModal} style={{ position: 'absolute', top: '10px', right: '10px', padding: '10px', backgroundColor: '#f44336', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Close</button>

          </>
        )}
      </Modal>
    </div>
  );
};

export default MyWork;
