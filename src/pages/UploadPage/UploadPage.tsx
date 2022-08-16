import React, { useEffect, useState } from 'react';
import UploadedSong from './UploadedSong';
import { uploadSongs } from '../../api/songs';
import './UploadPage.style.css';

interface IUploadPageProps {
  source: string,
}

const UploadPage = ({ source }: IUploadPageProps) => {
  const [uploadingSongs, setUploadingSongs] = useState<File[]>();
  const [songsLines, setSongsLines] = useState<JSX.Element[]>([]);
  const [uploadStatus, setUploadStatus] = useState('');

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

  const onSubmitForm = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const sendingData: FormData = new FormData();

    uploadingSongs?.forEach((val, index) => {
      sendingData.append('file' + index, val);
    });

    setUploadStatus('Waiting while music sending ...');
    const result = await uploadSongs(source, sendingData);
    setUploadStatus(`Uploaded ${result} songs`);
    setUploadingSongs([]);
  }

  const resetData = () => {
    setUploadingSongs([]);
    setUploadStatus('');
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
        <div>{ uploadStatus }</div>
      </form>
    </div>
  );
}

export default UploadPage;
