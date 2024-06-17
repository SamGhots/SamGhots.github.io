import React, { useState } from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import arrow_icon from "../../assets/arrow_icon.svg";
import mycertificate_data from "../../assets/mycertificate_data";
import Modal from "react-modal";

Modal.setAppElement("#root"); // ทำให้ Modal ทำงานได้ใน React

const MyWork = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imgSrc) => {
    setSelectedImage(imgSrc);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My certificate</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mycertificate_data.map((work, index) => (
          <img
            key={index}
            src={work.w_img}
            alt=""
            onClick={() => openModal(work.w_img)}
            style={{ cursor: "pointer" }}
          />
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
        {selectedImage && <img src={selectedImage} alt="Full Size" style={{ width: '100%', height: '100%' }} />}
        <button
  onClick={closeModal}
  style={{
    position: 'absolute',
    top: '90px',
    right: '50px',
    backgroundColor: '#f44336', // สีแดง
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    borderRadius: '5px', // เพิ่มขอบมนขอบรูปหลัง
    cursor: 'pointer',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' // เพิ่มเงาให้ปุ่ม
  }}
  onMouseOver={(e) => e.target.style.backgroundColor = '#d32f2f'}
  onMouseOut={(e) => e.target.style.backgroundColor = '#f44336'}
>
  Close
</button>


      </Modal>
    </div>
  );
};

export default MyWork;
