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

export { getSongsList };
