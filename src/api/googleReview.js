import axios from 'axios';

const apiKey = 'AIzaSyABX4LTqTLQGg_b3jFOH8Z6_H5CDqn8tbc';

export const getPlaceId = async (storeName, latitude, longitude) => {
  const textSearchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(storeName)}&location=${latitude},${longitude}&key=${apiKey}`;
  const response = await axios.get(textSearchUrl);
  if (response.data.status === 'OK') {
    return response.data.results[0].place_id;
  } else {
    throw new Error('स्थान सापडले नाही.');
  }
};

export const getPlaceReviews = async (placeId) => {
  const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;
  const response = await axios.get(detailsUrl);
  if (response.data.status === 'OK') {
    return response.data.result.reviews;
  } else {
    throw new Error('रिव्ह्यू मिळवण्यात अडचण आली.');
  }
};
