export class Users {
    id!: number;
    firstName!: string;
    lastName!: string;
    userName!: string;
    password!:string;
    userRole!: Role;
    email!: string;
    address!: string;
    aboutme!: string;

}
export enum Role {
    Contractor,
    Customer}
export enum Categories{
    Walking,
    Grooming,
    DayCare
}

export enum Days{
    Weekends, 
    WeekDays, 
    AnyDay


}
export enum TimeofDay{

    Morning,
    Afternoon,
    night,
    Anytime

}
