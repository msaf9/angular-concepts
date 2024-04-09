import { Component } from "@angular/core";

@Component({
    selector: 'app-new-component-no-cli-used',
    template: `
        <h1>This component is created without using cli.</h1>
    `,
    styles: `
        h1 {
            color: red;
        }
    `
})

/*
    Component creation without using cli
*/
export class NewComponent {

}