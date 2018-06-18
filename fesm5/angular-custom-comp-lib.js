import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AngularCustomCompLibService = /** @class */ (function () {
    function AngularCustomCompLibService() {
    }
    AngularCustomCompLibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    AngularCustomCompLibService.ctorParameters = function () { return []; };
    /** @nocollapse */ AngularCustomCompLibService.ngInjectableDef = defineInjectable({ factory: function AngularCustomCompLibService_Factory() { return new AngularCustomCompLibService(); }, token: AngularCustomCompLibService, providedIn: "root" });
    return AngularCustomCompLibService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AngularCustomCompLibComponent = /** @class */ (function () {
    function AngularCustomCompLibComponent() {
    }
    /**
     * @return {?}
     */
    AngularCustomCompLibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    AngularCustomCompLibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'an-angularCustomCompLib',
                    template: "\n    <p>\n      angular-custom-comp-lib works!\n    </p>\n  ",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    AngularCustomCompLibComponent.ctorParameters = function () { return []; };
    return AngularCustomCompLibComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AngularCustomCompLibModule = /** @class */ (function () {
    function AngularCustomCompLibModule() {
    }
    AngularCustomCompLibModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [AngularCustomCompLibComponent],
                    exports: [AngularCustomCompLibComponent]
                },] },
    ];
    return AngularCustomCompLibModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    /**
     * @return {?}
     */
    HeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    HeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'an-header',
                    template: "<h1>\n  <ng-content></ng-content>\n</h1>",
                    styles: ["h1{width:100%;height:70px;background:#444;color:#fff;line-height:70px}"]
                },] },
    ];
    /** @nocollapse */
    HeaderComponent.ctorParameters = function () { return []; };
    return HeaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    HeaderModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [HeaderComponent],
                    exports: [HeaderComponent]
                },] },
    ];
    return HeaderModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FloatbuttonComponent = /** @class */ (function () {
    function FloatbuttonComponent() {
    }
    /**
     * @return {?}
     */
    FloatbuttonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    FloatbuttonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'an-floatbutton',
                    template: "<div class=\"floatbutton\">\n  +\n</div>",
                    styles: [".floatbutton{width:60px;height:60px;border-radius:50%;background-color:#444;color:#fff;font-size:40px;position:fixed;right:20px;bottom:20px;text-align:center;line-height:60px;font-weight:700}"]
                },] },
    ];
    /** @nocollapse */
    FloatbuttonComponent.ctorParameters = function () { return []; };
    return FloatbuttonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FloatbuttonModule = /** @class */ (function () {
    function FloatbuttonModule() {
    }
    FloatbuttonModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [FloatbuttonComponent],
                    exports: [FloatbuttonComponent]
                },] },
    ];
    return FloatbuttonModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SubheaderComponent = /** @class */ (function () {
    function SubheaderComponent() {
    }
    /**
     * @return {?}
     */
    SubheaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SubheaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'an-subheader',
                    template: "<div class=\"subheader\">\n  subheader\n</div>",
                    styles: [".subheader{width:100%;height:50px;background:#ddd;color:#444;line-height:50px}"]
                },] },
    ];
    /** @nocollapse */
    SubheaderComponent.ctorParameters = function () { return []; };
    return SubheaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SubheaderModule = /** @class */ (function () {
    function SubheaderModule() {
    }
    SubheaderModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [SubheaderComponent],
                    exports: [SubheaderComponent]
                },] },
    ];
    return SubheaderModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { AngularCustomCompLibService, AngularCustomCompLibComponent, AngularCustomCompLibModule, HeaderModule, FloatbuttonModule, SubheaderModule, FloatbuttonComponent as ɵb, HeaderComponent as ɵa, SubheaderComponent as ɵc };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1jdXN0b20tY29tcC1saWIuanMubWFwIiwic291cmNlcyI6WyJuZzovL2FuZ3VsYXItY3VzdG9tLWNvbXAtbGliL2xpYi9hbmd1bGFyLWN1c3RvbS1jb21wLWxpYi5zZXJ2aWNlLnRzIiwibmc6Ly9hbmd1bGFyLWN1c3RvbS1jb21wLWxpYi9saWIvYW5ndWxhci1jdXN0b20tY29tcC1saWIuY29tcG9uZW50LnRzIiwibmc6Ly9hbmd1bGFyLWN1c3RvbS1jb21wLWxpYi9saWIvYW5ndWxhci1jdXN0b20tY29tcC1saWIubW9kdWxlLnRzIiwibmc6Ly9hbmd1bGFyLWN1c3RvbS1jb21wLWxpYi9saWIvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiLCJuZzovL2FuZ3VsYXItY3VzdG9tLWNvbXAtbGliL2xpYi9oZWFkZXIvaGVhZGVyLm1vZHVsZS50cyIsIm5nOi8vYW5ndWxhci1jdXN0b20tY29tcC1saWIvbGliL2Zsb2F0YnV0dG9uL2Zsb2F0YnV0dG9uLmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhci1jdXN0b20tY29tcC1saWIvbGliL2Zsb2F0YnV0dG9uL2Zsb2F0YnV0dG9uLm1vZHVsZS50cyIsIm5nOi8vYW5ndWxhci1jdXN0b20tY29tcC1saWIvbGliL3N1YmhlYWRlci9zdWJoZWFkZXIuY29tcG9uZW50LnRzIiwibmc6Ly9hbmd1bGFyLWN1c3RvbS1jb21wLWxpYi9saWIvc3ViaGVhZGVyL3N1YmhlYWRlci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFyQ3VzdG9tQ29tcExpYlNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhbi1hbmd1bGFyQ3VzdG9tQ29tcExpYicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBhbmd1bGFyLWN1c3RvbS1jb21wLWxpYiB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhckN1c3RvbUNvbXBMaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFuZ3VsYXJDdXN0b21Db21wTGliQ29tcG9uZW50IH0gZnJvbSAnLi9hbmd1bGFyLWN1c3RvbS1jb21wLWxpYi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXSxcbiAgZGVjbGFyYXRpb25zOiBbQW5ndWxhckN1c3RvbUNvbXBMaWJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQW5ndWxhckN1c3RvbUNvbXBMaWJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJDdXN0b21Db21wTGliTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhbi1oZWFkZXInLFxuICB0ZW1wbGF0ZTogYDxoMT5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9oMT5gLFxuICBzdHlsZXM6IFtgaDF7d2lkdGg6MTAwJTtoZWlnaHQ6NzBweDtiYWNrZ3JvdW5kOiM0NDQ7Y29sb3I6I2ZmZjtsaW5lLWhlaWdodDo3MHB4fWBdXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtIZWFkZXJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbSGVhZGVyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJNb2R1bGUge31cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FuLWZsb2F0YnV0dG9uJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZmxvYXRidXR0b25cIj5cbiAgK1xuPC9kaXY+YCxcbiAgc3R5bGVzOiBbYC5mbG9hdGJ1dHRvbnt3aWR0aDo2MHB4O2hlaWdodDo2MHB4O2JvcmRlci1yYWRpdXM6NTAlO2JhY2tncm91bmQtY29sb3I6IzQ0NDtjb2xvcjojZmZmO2ZvbnQtc2l6ZTo0MHB4O3Bvc2l0aW9uOmZpeGVkO3JpZ2h0OjIwcHg7Ym90dG9tOjIwcHg7dGV4dC1hbGlnbjpjZW50ZXI7bGluZS1oZWlnaHQ6NjBweDtmb250LXdlaWdodDo3MDB9YF1cbn0pXG5leHBvcnQgY2xhc3MgRmxvYXRidXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGbG9hdGJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vZmxvYXRidXR0b24uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0Zsb2F0YnV0dG9uQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0Zsb2F0YnV0dG9uQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBGbG9hdGJ1dHRvbk1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW4tc3ViaGVhZGVyJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwic3ViaGVhZGVyXCI+XG4gIHN1YmhlYWRlclxuPC9kaXY+YCxcbiAgc3R5bGVzOiBbYC5zdWJoZWFkZXJ7d2lkdGg6MTAwJTtoZWlnaHQ6NTBweDtiYWNrZ3JvdW5kOiNkZGQ7Y29sb3I6IzQ0NDtsaW5lLWhlaWdodDo1MHB4fWBdXG59KVxuZXhwb3J0IGNsYXNzIFN1YmhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFN1YmhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vc3ViaGVhZGVyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtTdWJoZWFkZXJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbU3ViaGVhZGVyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTdWJoZWFkZXJNb2R1bGUge31cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7SUFPRTtLQUFpQjs7Z0JBTGxCLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7O3NDQUpEOzs7Ozs7O0FDQUE7SUFhRTtLQUFpQjs7OztJQUVqQixnREFBUTs7O0lBQVI7S0FDQzs7Z0JBZEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLFFBQVEsRUFBRSwrREFJVDtvQkFDRCxNQUFNLEVBQUUsRUFBRTtpQkFDWDs7Ozt3Q0FWRDs7Ozs7OztBQ0FBOzs7O2dCQUdDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsRUFBRTtvQkFDWCxZQUFZLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztvQkFDN0MsT0FBTyxFQUFFLENBQUMsNkJBQTZCLENBQUM7aUJBQ3pDOztxQ0FQRDs7Ozs7OztBQ0FBO0lBV0U7S0FBaUI7Ozs7SUFFakIsa0NBQVE7OztJQUFSO0tBQ0M7O2dCQVpGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFLDBDQUVOO29CQUNKLE1BQU0sRUFBRSxDQUFDLHdFQUF3RSxDQUFDO2lCQUNuRjs7OzswQkFSRDs7Ozs7OztBQ0FBOzs7O2dCQUlDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFlBQVksRUFBRSxDQUFDLGVBQWUsQ0FBQztvQkFDL0IsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDO2lCQUMzQjs7dUJBUkQ7Ozs7Ozs7QUNBQTtJQVdFO0tBQWlCOzs7O0lBRWpCLHVDQUFROzs7SUFBUjtLQUNDOztnQkFaRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLDBDQUVMO29CQUNMLE1BQU0sRUFBRSxDQUFDLGlNQUFpTSxDQUFDO2lCQUM1TTs7OzsrQkFSRDs7Ozs7OztBQ0FBOzs7O2dCQUlDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFlBQVksRUFBRSxDQUFDLG9CQUFvQixDQUFDO29CQUNwQyxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztpQkFDaEM7OzRCQVJEOzs7Ozs7O0FDQUE7SUFXRTtLQUFpQjs7OztJQUVqQixxQ0FBUTs7O0lBQVI7S0FDQzs7Z0JBWkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixRQUFRLEVBQUUsZ0RBRUw7b0JBQ0wsTUFBTSxFQUFFLENBQUMsZ0ZBQWdGLENBQUM7aUJBQzNGOzs7OzZCQVJEOzs7Ozs7O0FDQUE7Ozs7Z0JBSUMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsWUFBWSxFQUFFLENBQUMsa0JBQWtCLENBQUM7b0JBQ2xDLE9BQU8sRUFBRSxDQUFDLGtCQUFrQixDQUFDO2lCQUM5Qjs7MEJBUkQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==