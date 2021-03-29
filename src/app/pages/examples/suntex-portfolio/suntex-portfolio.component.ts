import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suntex-portfolio',
  templateUrl: './suntex-portfolio.component.html',
  styleUrls: ['./suntex-portfolio.component.scss']
})
export class SuntexPortfolioComponent implements OnInit {

  isCollapsed = true;

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  portfolio = [
    { name : 'Polyester Fibre (PSF)', 
      type : 'textile',
      content : `From micro denier of various length to Coarse Hollow conjugated fibre for wide applications.0.8 Denier to 20 denier, Length 28 mm to 36 mm. Origin : India, Indonesia, China.`,
      imagePath : 'assets/img/PolyesterFibre.png'
    },
    { name : 'Viscose Fibre (VSF)', 
      type : 'textile',
      content : `From 1 Denier to 1.8 Denier. Length 28 mm to 36 mm. Origin : India, Indonesia, China.`,
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
    content : `Suspension Injection Grade from low K value to high K value PVC Resin of India, China, Korea, Taiwan, Japan and Vietnam origin.`,
    imagePath : 'assets/img/PVCResin.png'
    },
    { name : 'Soda Ash', 
    type : 'chemical',
    content : `Soda Ash Light and Dense from India, Turkey, China, Korea, Russia origin.`,
    imagePath : 'assets/img/SodaAsh.png'
    },
    { name : 'PET Resins', 
    type : 'chemical',
    content : `Bottle grade, Textile grade, Film grade from China, Korea, Taiwan and Vietnam origin.`,
    imagePath : 'assets/img/PetResin.png'
    },
    { name : 'HDPE - High Desnsity Polyethylene Resins (Granules)', 
    type : 'chemical',
    content : `Blow moulding, Raffia, Injection moulding and Pipe grade.`,
    imagePath : 'assets/img/HDPE.png'
    },
    { name : 'LDPE - Low Desnsity Polyethylene Resin', 
    type : 'chemical',
    content : `General purpose, Heavy duty, Lamination, Non slip grade.`,
    imagePath : 'assets/img/LDPE.png'
    },
    { name : 'PP Resin', 
    type : 'chemical',
    content : `Rafia, Injection moulding, Film, Lamination, Fibre grade.`,
    imagePath : 'assets/img/PPResins.png'
    },
    { name : 'GPPS', 
    type : 'chemical',
    content : `General Purpose Poly Styrene.`,
    imagePath : 'assets/img/GPPS.png'
    },
    { name : 'HIPS', 
    type : 'chemical',
    content : `High Purpose Poly Styrene.`,
    imagePath : 'assets/img/GPPS.png'
    },
    { name : 'Titanium Dioxide', 
    type : 'chemical',
    content : `Rutile and Anatase grade from Germany, China.`,
    imagePath : 'assets/img/TitaniumDioxide.png'
    },
    { name : 'Melamine', 
    type : 'chemical',
    content : `Resin and powdered form from UAE, China.`,
    imagePath : 'assets/img/Melamine.png'
    },
    
  ];

}
