let defaultCity = '上海'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (exception) {
}

export default {
  city: defaultCity
}
