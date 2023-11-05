import { Component, OnInit } from '@angular/core';
import { product } from './products';
@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
title='my Super Market🥨🧈🧃'
arrProducts: product[] = [{name:'bread',amount:50,price:4.7,color:'red'},{name:'milk',amount:6,price:5.0,color:'blue'},{name:'biscuits',amount:0,price:17.6,color:'yellow'},{name:'cucumber',amount:25,price:1.1,color:'green'}]
  constructor() { }

  ngOnInit(): void {
  }

}
