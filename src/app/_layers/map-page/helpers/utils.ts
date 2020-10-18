export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const invertCoord = (coord: [number, number]) => {
  return [coord[1], coord[0]]
}

export const invertCoords = (coordsArr) => {
  if(coordsArr[0] !instanceof Array) {
    return coordsArr.map(coord => invertCoord(coord))
  }
  return coordsArr.map(coordsEl => invertCoords(coordsEl))
}

export const chooseColor = (point) => {
  switch (point.status) {
    case 1:
      return 'green'
    case 2:
      return 'yellow'
    case 3:
      return 'red'
    case 4:
      return 'brown'
    default:
      return 'green'
  }
}

export const chooseMarker = (point) => {
  return `${point.type}-${chooseColor(point)}`
}
