import React, { useEffect, useState } from 'react';
import UploadedSong from './UploadedSong';
import './UploadPage.style.css';

const UploadPage = () => {
  const [uploadingSongs, setUploadingSongs] = useState<File[]>();
  const [songsLines, setSongsLines] = useState<JSX.Element[]>([]);

  const onFilesLoading = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    const toUpload: File[] = [];
    if(files?.length !== undefined) {
      let elements = [];
      for(let i = 0; i < files.length; i++) {
        toUpload.push(files[i]);
        elements.push(
          <UploadedSong name={ files[i].name } pos={i} setUploading={setUploadingSongs} key={i} />
        );
      }
      setSongsLines(elements);
      setUploadingSongs(toUpload);
    }
  }

  useEffect(() => {
    console.log(uploadingSongs);
    
    if(uploadingSongs !== undefined) {
      const elements: JSX.Element[] = [];
      uploadingSongs.forEach((val, i) => {
        elements.push(
          <UploadedSong name={val.name} pos={i} setUploading={setUploadingSongs} key={i} />
        );
      });
      setSongsLines(elements);
    }
  }, [uploadingSongs])

  const onSubmitForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  const resetData = () => {
    setUploadingSongs([]);
  }

  return (
    <div className='uploadPage'>
      <form onSubmit={ onSubmitForm } >
        <div className='uploadFilesList'>{songsLines}</div>
        <div className='uploadPageButtons'>
          <input type="file" onChange={onFilesLoading} multiple={true} />
          <input type="reset" value="Reset" onClick={resetData} />
          <input type="submit" value="Upload" />
        </div>
      </form>
    </div>
  );
}

export default UploadPage;
