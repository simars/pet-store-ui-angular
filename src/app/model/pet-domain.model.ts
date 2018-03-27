export interface IdName {
  id: number,
  name: string
}

export interface Pet extends IdName{
  status : string,
  category: IdName,
  tags : IdName[],
  photoUrls: string[]
}


