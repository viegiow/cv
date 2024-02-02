import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html'
})
export class AboutMeComponent implements OnInit {
idade!: number
nasc: Date = new Date("2000-07-31")

  constructor() { }

  ngOnInit(): void {
    const today = new Date()
    this.idade = Math.floor((today.getTime() - this.nasc.getTime()) / (1000 * 60 * 60 * 24 * 365))
  }

}
