import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html'
})
export class UsageComponent implements OnInit {
  titleSectionProp: any = {
    class: 'text-left',
    // title: 'Purpose',
    subTitle: 'Purpose',
    description:'At Digital Alpha (“DA”) we believe that our fiduciary responsibility requires careful consideration of environmental and social factors. DA believes a tailored approach to sustainability issues for each of our portfolio companies will create value for both our LPs and other stakeholders.',
    // description: 'At Digital Alpha (“DA”) we believe that our fiduciary responsibility requires careful consideration of the impact our investments can have on environmental, social and governance (“Sustainability”) matters. DA believes a tailored approach to Sustainability issues for each of our portfolio companies will create value for not only our LPs, but for many other stakeholders. DA appreciates that tracking, collecting and reporting on Sustainability requires significant resources, however, we see that the incorporation of Sustainability is way of creating longer term sustainable growth for our portfolio companies. DA’s investments are predominantly ‘green’; developing technology and jobs related to the mission critical infras'
  };

  List: any[] = [
    {
      image: './assets/images/PRS.png'

      // title: 'Data Visualization Practices to Improve',
      // icon: 'fa fa-database',
      // desc: 'DA appreciates that tracking, collecting and reporting on Sustainability requires significant resources, however, we see that the incorporation of Sustainability is way of creating longer term sustainable growth for our portfolio companies. DA’s investments are predominantly ‘green’; developing technology and jobs related to the mission critical infrastructure needed in today’s modern world.'
    }
   
  ]
  constructor() { }

  ngOnInit() {
  }

}


