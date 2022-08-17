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

const deleteSong = async (source: string, id: string) => {
  const resp = await fetch(source + '/songs/delete', {
    method: 'DELETE',
    body: JSON.stringify({id: id,}),
    headers: {
      'Content-Type': 'application/json'
    },
  });

  if(resp.status === 200) {
    return 'ok';
  } else {
    return 'error';
  }
}

export { getSongsList, uploadSongs, deleteSong };
