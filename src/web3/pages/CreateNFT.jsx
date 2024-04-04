import React, { useState } from 'react';
import axios from 'axios';

function CreateNFT() {
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [ipfsHash, setIpfsHash] = useState('');
    const [metadata, setMetadata] = useState('');
    const [error, setError] = useState('');

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleUpload = async () => {
        try {
            if (!image) {
                setError('Please select an image');
                return;
            }

            setLoading(true);

            // Upload image to IPFS
            const formData = new FormData();
            formData.append('image', image);
            const ipfsResponse = await axios.post('https://ipfs.infura.io:5001/api/v0/add', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            const ipfsHash = ipfsResponse.data.Hash;
            setIpfsHash(ipfsHash);

            // Store metadata
            const metadata = {
                name: 'NFT Name',
                description: 'Description of NFT',
                image: `https://ipfs.io/ipfs/${ipfsHash}`
            };
            const metadataResponse = await axios.post('https://ipfs.infura.io:5001/api/v0/add', JSON.stringify(metadata));
            const metadataHash = metadataResponse.data.Hash;
            setMetadata(metadataHash);

            setLoading(false);
            setError('');
        } catch (error) {
            setLoading(false);
            setError('Error uploading image');
            console.error(error);
        }
    };

    return (
        <div className="bg-gray-900 min-h-screen flex items-center justify-center">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
                <h1 className="text-2xl font-bold text-white mb-4">Create NFT</h1>
                <input type="file" onChange={handleImageChange} accept="image/*" className="mb-4" />
                {error && <p className="text-red-500 mb-4">{error}</p>}
                {loading ? (
                    <p className="text-white">Uploading...</p>
                ) : (
                    <button onClick={handleUpload} className="bg-blue-500 text-white px-4 py-2 rounded-md">
                        Upload
                    </button>
                )}
                {ipfsHash && (
                    <p className="text-white mt-4">IPFS Hash: {ipfsHash}</p>
                )}
                {metadata && (
                    <p className="text-white mt-4">Metadata IPFS Hash: {metadata}</p>
                )}
            </div>
        </div>
    );
}

export default CreateNFT;
