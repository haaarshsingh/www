enum Status {
  ANSWERED = 'ANSWERED',
  UNANSWERED = 'UNANSWERED',
}

export type Question = {
  id: string
  createdAt: Date
  status: Status
  content: string
  answer: string | null
}
