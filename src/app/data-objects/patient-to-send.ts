export class PatientToSend {
  public name: string;
  public surname: string;
  public height: number;
  public weight: number;

  public constructor(name: string, surname: string, height: number, weight: number) {
    this.name = name;
    this.surname = surname;
    this.height = height;
    this.weight = weight;
  }
}
