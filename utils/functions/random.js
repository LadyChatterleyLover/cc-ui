const random = (min, max) => {
  if (max >= min) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  } else {
    return 0
  }
}

export default random
