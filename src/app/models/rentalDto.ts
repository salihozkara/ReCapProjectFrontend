export interface RentalDto{
    id:number
    carName:string
    brandName:string
    colorName:string
    companyName:string
    firstName:string
    lastName:string
    rentDate:Date
    returnDate?:Date
}