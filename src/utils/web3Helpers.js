import axios from 'axios';

export const getMetadata = async (Gateway_url,metadataHash) => {
    try {
        const res = await axios.get(`${Gateway_url}/ipfs/${metadataHash}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};