const getSongsList = async (source: string): Promise<[]> => {
  try {
    const response = await fetch(source + '/musicList/getAll');

    if(response.status === 200) {
      return await response.json();
    } else {
      return [];
    }
  } catch (error) {
    return [];
  }
}

const uploadSongs = async (source: string, files: FormData): Promise<string> => {
  try {
    const response = await fetch(source + '/songs/upload', {
      method: 'POST',
      body: files,
    });
    if(response.status === 200) {
      return await response.json();
    } else {
      return '0';
    }
  } catch (error) {
    return('0')
  }
}

export { getSongsList, uploadSongs };
