import DirectionAwareHover from "./DirectionAwareHover";

function DirectionAwareContainer({ imageUrl, title }) {
  return (
    <div className="h-[35rem] relative  flex items-center justify-center">
      <DirectionAwareHover imageUrl={imageUrl}>
        <p className="font-bold text-xl">{title}</p>
      </DirectionAwareHover>
    </div>
  );
}

export default DirectionAwareContainer;
