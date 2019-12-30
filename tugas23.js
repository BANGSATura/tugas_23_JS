function tugas() {
  var data = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];
  var filtered = data.filter(data => {
    return data > 15;
  });
  console.log(filtered);
}
tugas();
