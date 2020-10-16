export const invertCoord = (coord: [number, number]) => {
  return [coord[1], coord[0]]
}

export const invertCoords = (coordsArr) => {
  if(coordsArr[0] !instanceof Array) {
    return coordsArr.map(coord => invertCoord(coord))
  }
  return coordsArr.map(coordsEl => invertCoords(coordsEl))
}

export class CustomArray extends Array {
  listen = (eventName, cb) => {
    this.forEach(object => {
      object.listen(eventName, cb)
    })
  }

  changeState = (options) => {
    this.forEach(object => {
      object.changeState(options)
    })
  }
}

export class CustomObject extends Object {
  forEach(cb) {
    for (let object in this) {
      cb(this[object])
    }
  }
}
