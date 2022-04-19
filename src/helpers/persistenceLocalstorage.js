export const storageGet = (path) => {
  const items = JSON.parse(localStorage.getItem(path));
  return items;
};

export const storagePost = ({ path, data}) => {
  const items = storageGet(path) ? storageGet(path) : [];
  const obj = items.find((object) => {
    return object.num == data.num;
  });
  
  if (obj) {
    const index = items.findIndex((object) => {
      return object.num == data.num;
    });

    items[index] = {
      ...obj,
      points: obj.points + data.points
    }

  } else {
    items.push(data);
  }

  items.sort(function(a, b) {
    return parseFloat(b.points) - parseFloat(a.points)
  });

  localStorage.setItem(path, JSON.stringify(items));
  return JSON.parse(localStorage.getItem(path));
};
  
export default {};