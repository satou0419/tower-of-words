import React, { useState, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navigation.css";
import "./root.css";
import "@fontsource/lilita-one";
import Logout from "./Logout";
import DialogBox from "./DialogBox"; // Import your custom DialogBox component
import { Context } from "./App";
import jsPDF from "jspdf";
import "jspdf-autotable";

export default function Navigation() {
  const [words, userInfo, handleLogin] = useContext(Context);
  const { username, lastname, firstname, userArchive, userID } = userInfo.user;
  const { credit, progress } = userInfo;
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
  const [isExportDialogOpen, setExportDialogOpen] = useState(false);

  const openLogoutModal = () => {
    setLogoutModalOpen(true);
  };
  const closeLogoutModal = () => {
    setLogoutModalOpen(false);
  };

  const openExportDialog = () => {
    setExportDialogOpen(true);
  };

  const closeExportDialog = () => {
    setExportDialogOpen(false);
  };

  const confirmExport = () => {
    closeExportDialog();

    // Continue with the export logic
    const pdf = new jsPDF();

    // Set font size
    pdf.setFontSize(12);

    // Add user information to the first page
    pdf.text(`Username: ${username}`, 20, 20);
    pdf.text(`Firstname: ${firstname}`, 20, 30);
    pdf.text(`Lastname: ${lastname}`, 20, 40);
    pdf.text(`Credit: ${credit}`, 20, 50);
    pdf.text(`Progress: ${progress}`, 20, 60);

    // Add a separator line
    pdf.line(20, 70, 190, 70);

    // Set up the columns for the table
    const columns = ["#", "Word", "Part of Speech", "Definition"];

    // Set up the data for the table
    const data = userArchive.words.map((word, index) => [
      index + 1,
      word.word,
      word.partOfSpeech,
      word.definition,
    ]);

    // Set the y-position for the table
    const startY = 80;

    // Add the table to the PDF
    pdf.autoTable({
      head: [columns],
      body: data,
      startY,
    });

    // Save the PDF
    pdf.save("user_information.pdf");
  };

  return (
    <div className="wrapper">
      <nav>
        <img src="./images/logo.png" alt="tow-logo" className="nav-logo" />
        <section className="user-details">
          <Link to="/accinfo">{username}</Link>
          <span className="currency">Currency: {credit}</span>
        </section>
        <section className="nav-links">
          <li className="push-right">
            <Link to="/home">HOME</Link>
          </li>
          <li>
            <Link to="/items">ITEMS</Link>
          </li>
          <li>
            <Link to="/archive">ARCHIVE</Link>
          </li>

          <li onClick={openExportDialog}>EXPORT</li>

          <li onClick={openLogoutModal}>LOGOUT</li>
        </section>
      </nav>
      <section className="content">
        <Outlet />
      </section>
      {isLogoutModalOpen && <Logout onClose={closeLogoutModal} />}
      {isExportDialogOpen && (
        <DialogBox
          title="Export Confirmation"
          message="Are you sure you want to export?"
          imageSrc={"./images/dialog-export.gif"}
          onCancel={closeExportDialog}
          onConfirm={confirmExport}
          buttons={[
            {
              label: "No",
              className: "btn-cancel",
              onClick: closeExportDialog,
            },
            { label: "Yes", className: "btn-confirm", onClick: confirmExport },
          ]}
        />
      )}
    </div>
  );
}
