import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParceldeliveryService {

  parcels=[
    {
    "name":'John Doe',
    "email": "johndoe@gmail.com",
    'destination': "Nyeri",    
    },

    {
      "name":'Jane Doe',
      "email": "janedoe@gmail.com",
      'destination': "Juja",    
    },

    {
      "name":'Mary Jane',
      "email": "maryjane@gmail.com",
      'destination': "Thika",    
    },
    {
      "name":'David James',
      "email": "davidjames@gmail.com",
      'destination': "Kasarani",    
    }
  
  
  ]
  
}
