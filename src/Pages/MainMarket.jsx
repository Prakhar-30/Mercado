import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { cn } from "../utils/cn";
import { BackgroundGradientDemo } from "../components/BackgroundGradientDemo";
import { Using3dCard } from "../components/Using3dCard";
import GlowingButton from "../components/GlowingButton";
import { useStateContext } from "../contexts";
import { getMetadata } from "../utils/web3Helpers";
import { Gateway_url } from "../../config";

export function MainMarket() {
  const [backgroundImage, setBackgroundImage] = useState("");
  const [shadowColor, setShadowColor] = useState("#00ffff");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageDetails, setSelectedImageDetails] = useState({
    name: "",
    description: "",
  });
  const location = useLocation();
  const { ERC1155_CONTRACT } = useStateContext();
  const [metadata, setMetadata] = useState([]);
  const [filteredMetadata, setFilteredMetadata] = useState([]);
  console.log(metadata);
  console.log(filteredMetadata);
  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const hashes = await ERC1155_CONTRACT.methods.getAll().call();
        const metadataArray = [];
        for (let i = 1; i < hashes.length; i++) {
          const data = await getMetadata(Gateway_url, hashes[i]);
          metadataArray.push(data);
        }
        setMetadata(metadataArray);
      } catch (error) {
        console.error("Error fetching metadata:", error);
      }
    };
    fetchMetadata();
  }, [ERC1155_CONTRACT]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const theme = params.get("theme");

    let filteredData = [];
    if (theme) {
      filteredData = metadata.filter((item) => item.theme === theme);
    } else {
      // If no theme is specified or metadata is not loaded yet
      filteredData = [...metadata];
    }
    setFilteredMetadata(filteredData);

    switch (theme) {
      case "Music":
        setBackgroundImage("/public/imageMusic.jpg");
        setShadowColor("#39ff14");
        break;
      case "Gaming":
        setBackgroundImage("/public/imageGaming.jpg");
        setShadowColor("#00ffff");
        break;
      case "Arts":
        setBackgroundImage("/public/imageArts.jpg");
        setShadowColor("#F535AA");
        break;
      default:
        setBackgroundImage("");
        break;
    }
  }, [location.search, metadata]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    const selectedMetadata = filteredMetadata.find((item) => item.image === image);
    setSelectedImageDetails({
      name: selectedMetadata?.name || "",
      description: selectedMetadata?.description || "",
    });
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden flex min-h-screen flex-col items-center justify-center z-[5000] bg-slate-950 w-full pt-20",
        backgroundImage && "bg-cover bg-center bg-no-repeat bg-fixed"
      )}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      <style>
        {`
          /* Hide scrollbar for Chrome, Safari and Opera */
          .MarketSectionContainer::-webkit-scrollbar {
            display: none;
          }

          /* Hide scrollbar for IE, Edge and Firefox */
          .MarketSectionContainer {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
        `}
      </style>
      <div className="absolute inset-0 bg-black opacity-75 overflow-hidden"></div>
      <Navbar />
      <div className="p-0 size-72 absolute left-0 top-0 ml-0">
        <img src="public/logoHere2.png" alt="" />
      </div>
      <div className="flex justify-center items-center z-10">
        <div
          className="MarketSectionContainer ml-64 border border-gray-500 rounded-md"
          style={{
            width: "60%",
            backgroundColor: "rgba(169, 169, 169, 0.2)",
            boxShadow: `inset 0 0 18px ${shadowColor}, 0 0 35px rgba(150, 150, 150, 0.5)`,
            overflowY: "auto",
          }}
        >
          <div className="MarketSection grid grid-cols-3 gap-10 p-8 pr-2 pb-3" style={{ width: "850px", height: "600px" }}>
            {filteredMetadata.map((item, index) => (
              <div className="flex justify-center" key={index}>
                <BackgroundGradientDemo>
                  <div className="">
                    <img
                      src={item?.image}
                      alt={item?.name}
                      style={{ width: "300px", height: "250px" }}
                      onClick={() => handleImageClick(item?.image)}
                    />
                  </div>
                </BackgroundGradientDemo>
              </div>
            ))}
          </div>
        </div>

        <div
          className="CartSection p-0 ml-1 mr-16 border border-gray-500 rounded-md"
          style={{ height: "650px", width: "450px", boxShadow: "0 4px 6px rgba(255,255 , 255, 0.8)" }}
        >
          <div className="flex justify-center items-center mt-4">
            <p className="text-neutral-200 text-2xl">CART</p>
          </div>
          <div className="flex justify-center">
            {selectedImage && <Using3dCard src={selectedImage} title="NFT" />}
          </div>
          <div className="Details">
            <div className="text-neutral-200 text-2xl mb-4">
              Name:
              <span className="text-neutral-500">{selectedImageDetails.name}</span>
            </div>
            <div className="text-neutral-200 text-2xl mt-4 mb-4">
              Description:
              <span className="text-neutral-500">{selectedImageDetails.description}</span>
            </div>
            <div className="text-neutral-200 text-2xl mt-4 mb-4">
              Price:
              <span className="text-neutral-500">{selectedImageDetails.price || ""}</span>
            </div>
            <div className="text-neutral-200 text-2xl mt-4 mb-4">
              Creator:
              <span className="text-neutral-500">{selectedImageDetails.creator || ""}</span>
            </div>
            <div className="text-neutral-200 text-2xl mt-4 mb-4">
              Owner:
              <span className="text-neutral-500">{selectedImageDetails.owner || ""}</span>
            </div>
          </div>
          <div className="Purchase flex justify-center items-center">
            <GlowingButton text="Make Purchase" />
          </div>
        </div>
      </div>
    </div>
  );
}
