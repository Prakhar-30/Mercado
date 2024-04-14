import React, { useState, useEffect } from "react";
import { JWT_SECRET_ACCESS_TOKEN, Gateway_url } from "../../config";

function FileUpload({ ipfsHash, setIpfsHash, metadataHash, setMetadataHash }) {
  const [selectedFile, setSelectedFile] = useState();
  const [uploadingFile, setUploadingFile] = useState(false);
  const [uploadingMetadata, setUploadingMetadata] = useState(false);
  const [metadataFields, setMetadataFields] = useState({
    name: "",
    description: "",
    theme: "",
  });

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmission = async () => {
    try {
      setUploadingFile(true);

      const formData = new FormData();
      formData.append("file", selectedFile);

      const res = await fetch(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${JWT_SECRET_ACCESS_TOKEN}`,
          },
          body: formData,
        }
      );
      const resData = await res.json();
      setIpfsHash(resData.IpfsHash);

      setUploadingFile(false);
    } catch (error) {
      console.log("Error uploading file to IPFS:", error);
      setUploadingFile(false);
    }
  };

  const handleMetadata = async () => {
    try {
      setUploadingMetadata(true);

      const metadataObject = {
        name: metadataFields.name,
        description: metadataFields.description,
        theme: metadataFields.theme,
        image: `${Gateway_url}/ipfs/${ipfsHash}`,
      };
      const metadata = JSON.stringify(metadataObject);

      const res = await fetch(
        "https://api.pinata.cloud/pinning/pinJsonToIPFS",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${JWT_SECRET_ACCESS_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: metadata,
        }
      );
      const resData = await res.json();
      setMetadataHash(resData.IpfsHash);

      setUploadingMetadata(false);
    } catch (error) {
      console.log("Error uploading metadata to IPFS:", error);
      setUploadingMetadata(false);
    }
  };

  // Trigger handleMetadata when IpfsHash changes
  useEffect(() => {
    if (ipfsHash) {
      handleMetadata();
    }
  }, [ipfsHash]);

  const handleInputChange = (field, value) => {
    setMetadataFields((prevFields) => ({
      ...prevFields,
      [field]: value,
    }));
  };

  return (
    <>
      <label className="form-label">Choose File</label>
      <input type="file" onChange={changeHandler} />
      {uploadingFile && <p>Uploading File...</p>}
      {uploadingMetadata && <p>Uploading Metadata...</p>}
      {ipfsHash && <img src={`${Gateway_url}/ipfs/${ipfsHash}`} alt="NFT" />}
      

      {/* Metadata Input Fields */}
      {!metadataHash &&
      <>
      <input
        type="text"
        placeholder="Name"
        className="my-3"
        value={metadataFields.name}
        onChange={(e) => handleInputChange("name", e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        className="my-3 block"
        value={metadataFields.description}
        onChange={(e) => handleInputChange("description", e.target.value)}
      />
      <select
        value={metadataFields.theme}
        onChange={(e) => handleInputChange("theme", e.target.value)}
      >
        <option value="">Select Theme</option>
        <option value="Gaming">Gaming</option>
        <option value="Arts">Arts</option>
        <option value="Music">Music</option>
      </select>

      <button onClick={handleSubmission} className="block my-4 bg-blue-500 p-2">Submit</button>
      </>
      }
    </>
      
  );
}

export default FileUpload;
