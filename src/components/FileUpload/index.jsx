/* eslint-disable react/prop-types */
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

import { FaUpload } from "react-icons/fa";

import styles from "./index.module.css";

const FileUpload = ({ pdfFile, setPdfFile }) => {
  const onDrop = useCallback((acceptedFiles) => {
    // Make sure only one file was dropped
    if (acceptedFiles.length !== 1) {
      alert("Please drop only one PDF file");
      return;
    }

    // Make sure the file is a PDF
    if (acceptedFiles[0].type !== "application/pdf") {
      alert("Please drop only PDF files");
      return;
    }

    console.log(acceptedFiles[0]);
    // Set the PDF file
    setPdfFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className={styles.container}>
      <FaUpload size={25} className="mb-3" />
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the PDF file here ...</p>
      ) : (
        <p>Drag and drop a single PDF file here, or click to select file</p>
      )}
      {pdfFile && (
        <p>
          <strong>Selected PDF file:</strong> {pdfFile.name}
        </p>
      )}
    </div>
  );
};

export default FileUpload;
