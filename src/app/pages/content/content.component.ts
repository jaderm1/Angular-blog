import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/fakeData'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{
photoCover:string='https://blog.br.playstation.com/tachyon/sites/4/2022/06/c50ed40ccbee94460e55dee40a077efc09474a20.jpg'
contentTitle:string ='Titulo'
contentDescription:string='Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio temporibus culpa ducimus repellat accusantium, cumque repellendus dolore deserunt at aliquam doloremque sint tempora laboriosam consectetur neque magnam, quos rem sit? '

private id :string |null ="0"
constructor(
  private route :ActivatedRoute
){}
  ngOnInit(): void {
    this.route.paramMap.subscribe(value=>
   
      this.id =value.get("id"))
      this.setValuesToComponent(this.id)
  }
setValuesToComponent (id:string|null){
  const result = dataFake.filter(article=>article.id==id)[0]
  
    this.contentTitle = result.title
    this.contentDescription=result.description
    this.photoCover=result.photoCover
    

    }
  }