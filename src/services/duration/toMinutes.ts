const toMinutes = (duration: number) => {
  const secDuration = Math.round(duration % 60);
  const minutesDuration = 
    Math.trunc(duration / 60) + ':' + (secDuration < 10 ? '0' : '') + secDuration;

  return minutesDuration;
}

export default toMinutes;
