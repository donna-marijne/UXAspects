import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AccordionModule, CheckboxModule, InfiniteScrollModule, NumberPickerModule, AccessibilityModule } from '@ux-aspects/ux-aspects';
import { InfiniteScrollFullscreenTestPageComponent } from './fullscreen/infinite-scroll-fullscreen.testpage.component';
import { InfiniteScrollTestPageComponent } from './standard/infinite-scroll.testpage.component';

@NgModule({
    imports: [
        CheckboxModule,
        NumberPickerModule,
        AccessibilityModule,
        AccordionModule,
        CommonModule,
        FormsModule,
        InfiniteScrollModule,
        RouterModule.forChild([
            {
                path: '',
                component: InfiniteScrollTestPageComponent
            },
            {
                path: 'fullscreen',
                component: InfiniteScrollFullscreenTestPageComponent
            }
        ])
    ],
    declarations: [
        InfiniteScrollTestPageComponent,
        InfiniteScrollFullscreenTestPageComponent
    ]
})
export class InfiniteScrollTestPageModule { }
