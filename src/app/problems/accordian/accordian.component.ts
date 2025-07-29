import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent implements OnInit {
  items: any = [];
  iconClass = 'fa-chevron-down';
  activeAccordian: number = -1;

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        title: "JavaScript Basics",
        content: "Learn variables, functions, and loops in JavaScript."
      },
      {
        title: "React.js Overview",
        content: "Understand components, state, and props in React."
      },
      {
        title: "Node.js",
        content: "Basics of server-side development with Node.js."
      },
      {
        title: "Full-Stack Development",
        content: "Build full-stack apps with React and Node.js."
      },
    ]
  }

  onToggle(index: number) {
    this.activeAccordian = this.activeAccordian == index? -1: index;
  }

}
