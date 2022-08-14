import React from "react";

type props = {
  name: string,
  pos: number,
  setUploading: React.Dispatch<React.SetStateAction<File[] | undefined>>,
}

const UploadedSong = ({name, pos, setUploading}: props) => {
  const removeSong = (e: React.MouseEvent<HTMLInputElement>) => {
    setUploading(old => {
      if(old !== undefined) {
        const newVal = [...old];
        newVal?.splice(pos, 1);
        return newVal;
      }
    });
  }

  return(
    <div className="uploadedSong">
      <div>{ name }</div>
      <div>
        <input type="button" value="Remove" onClick={removeSong} />
      </div>
    </div>
  );
}

export default UploadedSong;
