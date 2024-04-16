import React, { useState, useEffect } from 'react';
import { cn } from '../utils/cn';
import { BackgroundGradientDemo } from '../components/BackgroundGradientDemo';
import { useStateContext } from '../contexts';
import { getMetadata } from '../utils/web3Helpers';
import { Gateway_url } from '../../config';
import AnimatedText from '../components/AnimatedDiv';

const CreatorProfile = () => {
  const { ERC1155_CONTRACT, account } = useStateContext();
  const [metadata, setMetadata] = useState([]);
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const hashes = await ERC1155_CONTRACT.methods.getAll().call();
        const metadataArray = [];

        for (let i = 0; i < hashes.length; i++) {
          const data = await getMetadata(Gateway_url, hashes[i]);
          const token_id = Number(await ERC1155_CONTRACT.methods.getTokenIdByURI(hashes[i]).call());
          const ownerOfThisNFT = await ERC1155_CONTRACT.methods.tokenIDtoHolderFn(token_id).call();
          const NFTamount = Number(await ERC1155_CONTRACT.methods.balanceOf(ownerOfThisNFT[0], token_id).call());

          const nftDetails = {
            name: data.name,
            description: data.description,
            price: data.price,
            image: data.image,
            creator: data.creator,
            owner: ownerOfThisNFT[0],
            available: NFTamount,
          };

          // Only include NFTs where the creator matches the connected account
          if (nftDetails.creator.toLowerCase() === account.toLowerCase()) {
            metadataArray.push(nftDetails);
          }
        }

        setMetadata(metadataArray);
      } catch (error) {
        console.error('Error fetching metadata:', error);
      }
    };

    if (ERC1155_CONTRACT && account) {
      fetchMetadata();
    }
  }, [ERC1155_CONTRACT, account]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={cn('relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full')}>
      <div className='justify-center items-center mt-[8rem] text-slate-400 text-8xl'>
        CREATOR
      </div>

      <div className='flex items-center mt-[4rem]'>
      <div className='w-[20rem] h-[20rem] border-2 bg-white rounded-full mr-[60px] translate-x-[8rem] translate-y-[1rem]'>
          {profileImage ? (
            <img src={profileImage} className='w-full h-full rounded-full object-cover' alt='Profile' />
          ) : (
            <div className='flex mt-[9rem] ml-[4rem]'>
              <input type='file' accept='image/*' onChange={handleImageChange} />
            </div>
          )}
        </div>

        <div className='px-[10rem] py-[2rem] rounded-md w-[80rem] h-[20rem] mr-0'>
          <AnimatedText>
            <ol className='mt-[1rem] ml-[2rem] list-decimal text-slate-400'>
              <li className='mb-2 line-clamp-1 line-through'>Upload Your Profile</li>
              <li className='mb-2 line-clamp-1 line-through'>Tell us about yourself</li>
              <li className='mb-2 line-clamp-1'>Fill your achievements</li>
            </ol>
          </AnimatedText>
        </div>
      </div>

      <div className='mt-[50px] flex flex-row '>
        <div className='px-8 py-4 rounded-md w-[25rem] h-[30rem] ml-[-30rem] mt-[3rem]'>
          <AnimatedText>
            <div className='mt-[1rem] list-decimal text-slate-400 px-10'>
              <p>
                <strong>Highest Sold NFT:</strong> $XX,XXX
              </p>
              <p>
                <strong>Total NFTs Sold:</strong> XX
              </p>
              <p>
                <strong>Collaborations:</strong> Artist A, Artist B, Artist C
              </p>
            </div>
          </AnimatedText>
        </div>

        <div className='ml-60 flex items-center mt-4'>
            <AnimatedText>
          {metadata.map((item, index) => (
              <div key={index} className=' rounded-md w-72 h-80 mb-4 flex flex-col items-center'>
              <img src={item.image} className='h-52 w-52 mb-4 rounded' alt={item.name} />
              <div className='text-[12px] text-center text-slate-400'>
                <p>
                  <strong>Name:</strong> {item.name}
                </p>
                <p>
                  <strong>Description:</strong> {item.description}
                </p>
                <p>
                  <strong>Creator:</strong> {item.creator}
                </p>
                
                <p>
                  <strong>Available:</strong> {item.available}
                </p>
              </div>
            </div>
          ))}
          </AnimatedText>
        </div>
      </div>
    </div>
  );
};

export default CreatorProfile;
