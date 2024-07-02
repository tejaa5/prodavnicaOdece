import {Injectable} from "@angular/core";

export interface Korisnik {
  id: number;
  ime: string;
  prezime: string;
  username: string;
  email: string;
  password: string;
  adresa?: string;
  broj?:string;


}
@Injectable()
export class UserService {

  currentUser: Korisnik = UserService.dummyUserList[0];

  static dummyUserList: Array<Korisnik> = [
    {
      id: 0,
      ime: "Teodora",
      prezime: "Sabic",
      username: "teja5",
      email: "tsabic3@gmail.com",
      password: "12345678"

    },


    {
      id: 1,
      ime: "Uros",
      prezime: "Bozinovic",
      username: "ukikuki",
      email: "bozinovicu@gmail.com",
      password: "volimpozoriste"



    }]


  getUserName(korisnik: Korisnik): string {
    return korisnik.username;
  }

  getUserById(id: number): Korisnik {
    var foundUser!: Korisnik;

    UserService.dummyUserList.forEach((korisnik) => {
      if (korisnik.id == id) {
        foundUser = korisnik;
      }
    });

    return foundUser;
  }

  getUser(korisnikUsername: string): Korisnik {
    return UserService.dummyUserList.find(userToFind => userToFind.username == korisnikUsername)!;
  }

  isPasswordCorrect(korisnikUsername: string, password: string): boolean {
    return UserService.dummyUserList.find(userToFind =>
      (userToFind.username == korisnikUsername && userToFind.password == password)) != undefined;
  }

  registerUser(ime: string, prezime:string, username: string, email: string, password: string): Korisnik {

    var maxId: number = 0;
    UserService.dummyUserList.forEach(korisnik => {
      if (maxId < korisnik.id) {
        maxId = korisnik.id
      }
    });

    var id = ++maxId;
    var korisnik: Korisnik = {id, email, password, username, ime, prezime };

    UserService.dummyUserList.push(korisnik);

    console.log(korisnik);
    return korisnik;
  }


}

