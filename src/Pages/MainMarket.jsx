import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { cn } from "../utils/cn";
import { BackgroundGradientDemo } from "../components/BackgroundGradientDemo";
import { Using3dCard } from "../components/Using3dCard";
import GlowingButton from "../components/GlowingButton";

export function MainMarket() {
  const [backgroundImage, setBackgroundImage] = useState("");
  const [shadowColor, setShadowColor] = useState("#00ffff");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageDetails, setSelectedImageDetails] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const theme = params.get("theme");

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
  }, [location.search]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    // Hardcoded details for demonstration
    switch (image) {
      case "/public/demo nfts/nft1.png":
        setSelectedImageDetails({
          price: "10 MEC",
          creator: "John Doe",
          owner: "Jane Doe",
        });
        break;
      case "/public/demo nfts/nft2.png":
        setSelectedImageDetails({
          price: "15 MEC",
          creator: "Alice Smith",
          owner: "Bob Smith",
        });
        break;
      case "/public/demo nfts/nft3.png":
        setSelectedImageDetails({
          price: "7 MEC",
          creator: "Alec Benjamin",
          owner: "Bobby Shane",
        });
        break;
      case "/public/demo nfts/nft4.png":
        setSelectedImageDetails({
          price: "2 MEC",
          creator: "Johnny Camron",
          owner: "Helen Smith",
        });
        break;
      case "/public/demo nfts/nft5.png":
        setSelectedImageDetails({
          price: "3 MEC",
          creator: "Jessica Quin",
          owner: "Harley",
        });
        break;
      case "/public/demo nfts/nft6.png":
        setSelectedImageDetails({
          price: "7 MEC",
          creator: "Egsy Martha Jr.",
          owner: "Jane Foster",
        });
        break;
      case "/public/demo nfts/nft7.png":
        setSelectedImageDetails({
          price: "12 MEC",
          creator: "Alice Wood",
          owner: "Chris Pattinson",
        });
        break;
      case "/public/demo nfts/nft8.png":
        setSelectedImageDetails({
          price: "8 MEC",
          creator: "Robert Pat",
          owner: "Bob Smith",
        });
        break;
      case "/public/demo nfts/nft9.png":
        setSelectedImageDetails({
          price: "9 MEC",
          creator: "Quill Warner",
          owner: "Henry Carline",
        });
        break;
      default:
        setSelectedImageDetails(null);
        break;
    }
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden flex min-h-screen flex-col items-center justify-center z-[5000] bg-slate-950 w-full pt-20",
        backgroundImage && "bg-cover bg-center bg-no-repeat bg-fixed"
      )}
      style={
        backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}
      }
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
          <div
            className="MarketSection grid grid-cols-3 gap-10 p-8 pr-2 pb-3"
            style={{ width: "850px", height: "600px" }}
          >
            {Array.from({ length: 9 }, (_, i) => i + 1).map((index) => (
              <div className="flex justify-center" key={index}>
                <BackgroundGradientDemo>
                  <div className="">
                    <img
                      src={`/public/demo nfts/nft${index}.png`}
                      alt={`nft${index}`}
                      style={{ width: "300px", height: "250px" }}
                      onClick={() =>
                        handleImageClick(`/public/demo nfts/nft${index}.png`)
                      }
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
            {selectedImageDetails && (
              <>
                <div className="text-neutral-200 text-2xl mb-4">
                  Price:
                  <span className="text-neutral-500">
                    {" "}
                    {selectedImageDetails.price}
                  </span>
                </div>
                <div className="text-neutral-200 text-2xl mt-4 mb-4">
                  Creator:
                  <span className="text-neutral-500">
                    {" "}
                    {selectedImageDetails.creator}
                  </span>
                </div>
                <div className="text-neutral-200 text-2xl mt-4 mb-4">
                  Owner:
                  <span className="text-neutral-500">
                    {" "}
                    {selectedImageDetails.owner}
                  </span>
                </div>
              </>
            )}
          </div>
          <div className="Purchase flex justify-center items-center">
            <GlowingButton text="Make Purchase" />
          </div>
        </div>
      </div>
    </div>
  );
}
