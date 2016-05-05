var month = 1;
while (month <= 12) {
  console.log("for month " + month);
  if (month === 1 || month === 3 || month === 5 || month === 7 || month === 7 || month === 10 || month === 12) {
    console.log('31 days');
  }
  else if (month === 2) {
    console.log('28 days');
  } else {
    console.log('30 days');
  }
  month = month + 1;
}
