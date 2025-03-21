import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-blog',
  templateUrl: './our-blog.component.html'
})
export class OurBlogComponent implements OnInit {
  


  List: any[] = [
    {
      image: './assets/images/partners/10.png',
      name:  'Unitas Global',
      // time: 'September 26, 2019 ',
      title: 'Exit announced 2023',
      info:'Click here for more information',
      subtitle: "https://blogs.cisco.com/news/cisco-announces-intent-to-acquire-working-group-two"
      // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
    },
    
    // {
    //   img: './assets/images/partners/1.png',
    //   name:  'British Telecom',
    //   // time: 'September 26, 2019 ',
    //   title: 'Press',
    //   // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
    // },
    
    
  ]
  constructor() { }

  ngOnInit() {
  }

}
