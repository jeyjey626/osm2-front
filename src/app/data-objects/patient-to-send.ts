export class PatientToSend {
  public name: string;
  public surname: string;
  public heightset: string;

  public constructor(name: string, surname: string, height: string) {
    this.name = name;
    this.surname = surname;
    this.heightset = height;
  }
}
