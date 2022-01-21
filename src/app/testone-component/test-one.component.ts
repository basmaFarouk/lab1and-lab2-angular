import { Template } from "@angular/compiler/src/render3/r3_ast";
import { Component } from "@angular/core";


@Component({
    selector:'app-test-one',
    template: `<h1> Hello from Test Component</h1>`,
    styles: [`h1 {color:red;}`]
})
 export class TestOneComponent{}