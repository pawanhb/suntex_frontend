import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suntex-portfolio',
  templateUrl: './suntex-portfolio.component.html',
  styleUrls: ['./suntex-portfolio.component.scss']
})
export class SuntexPortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  portfolio = [
    { name : 'Polyester Fibre (PSF)', 
      type : 'textile',
      content : `From micro denier of various length to Coarse Hollow conjugated fibre for wide applications.0.8 Denier to 20 denier, Length 28 mm to 36 mm. Origin : India, Indonesia, China.`,
      imagePath : 'assets/img/PolyesterFibre.png'
    },
    { name : 'Viscose Fibre (VSF)', 
      type : 'textile',
      content : `From 1 Denier to 1.8 Denier. Length 28 mm to 36 mm.<br />Origin : India, Indonesia, China. <br />`,
      imagePath : 'assets/img/ViscoseFibre.png'
    },    
    { name : 'Yarn', 
      type : 'textile',
      content : `Cotton Yarn, Polyester yarn, Blended Yarns, Polyester and Nylon Filament yarns.`,
      imagePath : 'assets/img/Yarn.png'
    },
    { name : 'Value Added Yarn', 
      type : 'textile',
      content : `Dyed yarn, Melange Yarn, Slub yarn, Linen and Hemp yarn.`,
      imagePath : 'assets/img/ValueAddedYarn.png'
    },
    { name : 'Fabrics', 
      type : 'textile',
      content : `All types of Knitted and Woven greig and finished fabrics.`,
      imagePath : 'assets/img/Fabrics.png'
    },
    { name : 'Garments', 
      type : 'textile',
      content : `Ladies wear, Mens wear.`,
      imagePath : 'assets/img/Garments.png'
    },
    
    { name : 'PVC Resin', 
    type : 'chemical',
    content : `PVC Resin of India, China, Korea, Taiwan and Vietnam origin.`,
    imagePath : 'assets/img/PVCResin.png'
    },
    { name : 'Soda Ash', 
    type : 'chemical',
    content : `Soda Ash Light and Dense from India, Turkey, China, Korea, Russia origin.`,
    imagePath : 'assets/img/SodaAsh.png'
    },
    { name : 'PET Resins', 
    type : 'chemical',
    content : `Bottle Grade, Textile Grade, Film grade from China, Korea, Taiwan.`,
    imagePath : 'assets/img/PetResin.png'
    },
    { name : 'Sugar', 
    type : 'agro',
    content : `India origin S30 Sugar. Brazil, Thailand, Malaysia origin – ICUMSA45 Sugar.`,
    imagePath : 'assets/img/Sugar.png'
    },
    { name : 'Crude Palm Oil', 
    type : 'agro',
    content : `Crude palm oil from Malaysia, Indonesia.`,
    imagePath : 'assets/img/CrudePalm.png'
    },
    { name : 'Sunflower Oil', 
    type : 'agro',
    content : `Sunflower oil from Ukraine.`,
    imagePath : 'assets/img/Sunflower.png'
    },
    { name : 'Rice', 
    type : 'agro',
    content : `All variety rice from India.`,
    imagePath : 'assets/img/Rice.png'
    },
  ];

}
