


import { Injectable } from '@angular/core';
import { Userprofile } from './../model/classes/userprofile';

@Injectable()
export class Globals {
  activeUser=new Userprofile();
}

// export interface CustomWindow extends Window {
//   customAttribute: Useraccount;
// }

// export var activeUser:Useraccount;
