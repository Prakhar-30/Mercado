import { useEffect, useState } from "react";
import { JWT_SECRET_ACCESS_TOKEN, Gateway_url } from "../../config";

function FileUpload({ ipfsHash, setIpfsHash, metadata: metadataHash,  setMetadataHash }) {
  const [selectedFile, setSelectedFile] = useState();

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmission = async () => {
    try {
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
    } catch (error) {
      console.log("Error uploading file to IPFS:", error);
    }
  };

  const handleMetadata = async () => {
    try {
      const metadataObject = {
        name: "File name",
        description: "Description of NFT",
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
     
    } catch (error) {
      console.log("Error uploading metadata to IPFS:", error);
    }
  };

  // Trigger handleMetadata when IpfsHash changes
  useEffect(() => {
    if (ipfsHash) {
      handleMetadata();
    }
  }, [ipfsHash]);

  

  return (
    <>
      <label className="form-label">Choose File</label>
      <input type="file" onChange={changeHandler} />
      <button onClick={handleSubmission}>Submit</button>
      {ipfsHash && <img src={`${Gateway_url}/ipfs/${ipfsHash}`} alt="NFT" />}
      {metadataHash && <div>{`${Gateway_url}/ipfs/${metadataHash}`} </div>}
    </>
  );
}

export default FileUpload;
