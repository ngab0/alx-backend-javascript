export interface Teacher  {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string; 
  [index:string]: any; 
};

export interface Directors extends Teacher {
  numberOfReports: number;
};

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
};

export const printTeacher = (firstName: string, lastName: string): string => (`${firstName[0]}. ${lastName}`);

export interface IStudentClass {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

export interface IStudentClassConstructor {
  new (firstName:string, lastName:string): IStudentClass;
}

export class StudentClass implements IStudentClass {
  firstName:string;
  lastName:string;

  constructor(firstName:string, lastName:string) {
    this.firstName = firstName;
    this.lastName = lastName; 
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}
