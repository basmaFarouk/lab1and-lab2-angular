import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-test-from-cli',
  templateUrl: './test-from-cli.component.html',
  styleUrls: ['./test-from-cli.component.scss']
})
export class TestFromCliComponent implements AfterViewInit{
personName = 'basma farouk'
tittle ='text from cli'
imgSrc= 'assets/img/apple-touch-icon.png'
class = 'newClass'
showpassword=false
number = 1
@ViewChild('inputEl') testVar!: ElementRef;
// const testVar = document.getElementById('inputEl')
@ViewChildren('inputEl') testVarArray!: QueryList<ElementRef>
  constructor() { }
  testButton(x:HTMLInputElement){{
    console.log(x)
  }}
  ngAfterViewInit(): void {
    console.log(this.testVar.nativeElement.value)
    console.log((this.testVar.nativeElement as HTMLInputElement).value)
    this.testVarArray.forEach((el)=>{
      console.log(el)
      const element = el.nativeElement as HTMLInputElement
      element.classList.add('form-control')
    })
  }

}
