export class User {
  constructor(
    public id: number,
    public first_name: string = '',
    public last_name: string = '',
    public email: string,
    public year: number = 1900,
    public password: string
  ) { }
}
