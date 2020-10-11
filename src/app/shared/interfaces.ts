export interface ReviewMeta {
  name: string
  objectType: string
  condition: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  complexity: 'easy' | 'medium' | 'hard'
  daysToRecover: number
  dateAdded: Date
  id: string
}

export interface Review extends ReviewMeta {
  coordinates: {
    lat: number,
    long: number
  }
  relevanceDate: Date
  label: string
}
