(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('angular-custom-comp-lib', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global['angular-custom-comp-lib'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,i0,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AngularCustomCompLibService = (function () {
        function AngularCustomCompLibService() {
        }
        AngularCustomCompLibService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        AngularCustomCompLibService.ctorParameters = function () { return []; };
        /** @nocollapse */ AngularCustomCompLibService.ngInjectableDef = i0.defineInjectable({ factory: function AngularCustomCompLibService_Factory() { return new AngularCustomCompLibService(); }, token: AngularCustomCompLibService, providedIn: "root" });
        return AngularCustomCompLibService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AngularCustomCompLibComponent = (function () {
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
            { type: i0.Component, args: [{
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
    var AngularCustomCompLibModule = (function () {
        function AngularCustomCompLibModule() {
        }
        AngularCustomCompLibModule.decorators = [
            { type: i0.NgModule, args: [{
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
    var HeaderComponent = (function () {
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
            { type: i0.Component, args: [{
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
    var HeaderModule = (function () {
        function HeaderModule() {
        }
        HeaderModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [common.CommonModule],
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
    var FloatbuttonComponent = (function () {
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
            { type: i0.Component, args: [{
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
    var FloatbuttonModule = (function () {
        function FloatbuttonModule() {
        }
        FloatbuttonModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [common.CommonModule],
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
    var SubheaderComponent = (function () {
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
            { type: i0.Component, args: [{
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
    var SubheaderModule = (function () {
        function SubheaderModule() {
        }
        SubheaderModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [common.CommonModule],
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

    exports.AngularCustomCompLibService = AngularCustomCompLibService;
    exports.AngularCustomCompLibComponent = AngularCustomCompLibComponent;
    exports.AngularCustomCompLibModule = AngularCustomCompLibModule;
    exports.HeaderModule = HeaderModule;
    exports.FloatbuttonModule = FloatbuttonModule;
    exports.SubheaderModule = SubheaderModule;
    exports.ɵb = FloatbuttonComponent;
    exports.ɵa = HeaderComponent;
    exports.ɵc = SubheaderComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1jdXN0b20tY29tcC1saWIudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9hbmd1bGFyLWN1c3RvbS1jb21wLWxpYi9saWIvYW5ndWxhci1jdXN0b20tY29tcC1saWIuc2VydmljZS50cyIsIm5nOi8vYW5ndWxhci1jdXN0b20tY29tcC1saWIvbGliL2FuZ3VsYXItY3VzdG9tLWNvbXAtbGliLmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhci1jdXN0b20tY29tcC1saWIvbGliL2FuZ3VsYXItY3VzdG9tLWNvbXAtbGliLm1vZHVsZS50cyIsIm5nOi8vYW5ndWxhci1jdXN0b20tY29tcC1saWIvbGliL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIiwibmc6Ly9hbmd1bGFyLWN1c3RvbS1jb21wLWxpYi9saWIvaGVhZGVyL2hlYWRlci5tb2R1bGUudHMiLCJuZzovL2FuZ3VsYXItY3VzdG9tLWNvbXAtbGliL2xpYi9mbG9hdGJ1dHRvbi9mbG9hdGJ1dHRvbi5jb21wb25lbnQudHMiLCJuZzovL2FuZ3VsYXItY3VzdG9tLWNvbXAtbGliL2xpYi9mbG9hdGJ1dHRvbi9mbG9hdGJ1dHRvbi5tb2R1bGUudHMiLCJuZzovL2FuZ3VsYXItY3VzdG9tLWNvbXAtbGliL2xpYi9zdWJoZWFkZXIvc3ViaGVhZGVyLmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhci1jdXN0b20tY29tcC1saWIvbGliL3N1YmhlYWRlci9zdWJoZWFkZXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhckN1c3RvbUNvbXBMaWJTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW4tYW5ndWxhckN1c3RvbUNvbXBMaWInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgYW5ndWxhci1jdXN0b20tY29tcC1saWIgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJDdXN0b21Db21wTGliQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbmd1bGFyQ3VzdG9tQ29tcExpYkNvbXBvbmVudCB9IGZyb20gJy4vYW5ndWxhci1jdXN0b20tY29tcC1saWIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW10sXG4gIGRlY2xhcmF0aW9uczogW0FuZ3VsYXJDdXN0b21Db21wTGliQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0FuZ3VsYXJDdXN0b21Db21wTGliQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFyQ3VzdG9tQ29tcExpYk1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW4taGVhZGVyJyxcbiAgdGVtcGxhdGU6IGA8aDE+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvaDE+YCxcbiAgc3R5bGVzOiBbYGgxe3dpZHRoOjEwMCU7aGVpZ2h0OjcwcHg7YmFja2dyb3VuZDojNDQ0O2NvbG9yOiNmZmY7bGluZS1oZWlnaHQ6NzBweH1gXVxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbSGVhZGVyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0hlYWRlckNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhbi1mbG9hdGJ1dHRvbicsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImZsb2F0YnV0dG9uXCI+XG4gICtcbjwvZGl2PmAsXG4gIHN0eWxlczogW2AuZmxvYXRidXR0b257d2lkdGg6NjBweDtoZWlnaHQ6NjBweDtib3JkZXItcmFkaXVzOjUwJTtiYWNrZ3JvdW5kLWNvbG9yOiM0NDQ7Y29sb3I6I2ZmZjtmb250LXNpemU6NDBweDtwb3NpdGlvbjpmaXhlZDtyaWdodDoyMHB4O2JvdHRvbToyMHB4O3RleHQtYWxpZ246Y2VudGVyO2xpbmUtaGVpZ2h0OjYwcHg7Zm9udC13ZWlnaHQ6NzAwfWBdXG59KVxuZXhwb3J0IGNsYXNzIEZsb2F0YnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRmxvYXRidXR0b25Db21wb25lbnQgfSBmcm9tICcuL2Zsb2F0YnV0dG9uLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtGbG9hdGJ1dHRvbkNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtGbG9hdGJ1dHRvbkNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgRmxvYXRidXR0b25Nb2R1bGUge31cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FuLXN1YmhlYWRlcicsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInN1YmhlYWRlclwiPlxuICBzdWJoZWFkZXJcbjwvZGl2PmAsXG4gIHN0eWxlczogW2Auc3ViaGVhZGVye3dpZHRoOjEwMCU7aGVpZ2h0OjUwcHg7YmFja2dyb3VuZDojZGRkO2NvbG9yOiM0NDQ7bGluZS1oZWlnaHQ6NTBweH1gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWJoZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTdWJoZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL3N1YmhlYWRlci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbU3ViaGVhZGVyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1N1YmhlYWRlckNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgU3ViaGVhZGVyTW9kdWxlIHt9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkNvbXBvbmVudCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFpQjs7b0JBTGxCQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7OzswQ0FKRDs7Ozs7OztBQ0FBO1FBYUU7U0FBaUI7Ozs7UUFFakIsZ0RBQVE7OztZQUFSO2FBQ0M7O29CQWRGQyxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLHlCQUF5Qjt3QkFDbkMsUUFBUSxFQUFFLCtEQUlUO3dCQUNELE1BQU0sRUFBRSxFQUFFO3FCQUNYOzs7OzRDQVZEOzs7Ozs7O0FDQUE7Ozs7b0JBR0NDLFdBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUUsRUFBRTt3QkFDWCxZQUFZLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQzt3QkFDN0MsT0FBTyxFQUFFLENBQUMsNkJBQTZCLENBQUM7cUJBQ3pDOzt5Q0FQRDs7Ozs7OztBQ0FBO1FBV0U7U0FBaUI7Ozs7UUFFakIsa0NBQVE7OztZQUFSO2FBQ0M7O29CQVpGRCxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLFdBQVc7d0JBQ3JCLFFBQVEsRUFBRSwwQ0FFTjt3QkFDSixNQUFNLEVBQUUsQ0FBQyx3RUFBd0UsQ0FBQztxQkFDbkY7Ozs7OEJBUkQ7Ozs7Ozs7QUNBQTs7OztvQkFJQ0MsV0FBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRSxDQUFDQyxtQkFBWSxDQUFDO3dCQUN2QixZQUFZLEVBQUUsQ0FBQyxlQUFlLENBQUM7d0JBQy9CLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQztxQkFDM0I7OzJCQVJEOzs7Ozs7O0FDQUE7UUFXRTtTQUFpQjs7OztRQUVqQix1Q0FBUTs7O1lBQVI7YUFDQzs7b0JBWkZGLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixRQUFRLEVBQUUsMENBRUw7d0JBQ0wsTUFBTSxFQUFFLENBQUMsaU1BQWlNLENBQUM7cUJBQzVNOzs7O21DQVJEOzs7Ozs7O0FDQUE7Ozs7b0JBSUNDLFdBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUUsQ0FBQ0MsbUJBQVksQ0FBQzt3QkFDdkIsWUFBWSxFQUFFLENBQUMsb0JBQW9CLENBQUM7d0JBQ3BDLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO3FCQUNoQzs7Z0NBUkQ7Ozs7Ozs7QUNBQTtRQVdFO1NBQWlCOzs7O1FBRWpCLHFDQUFROzs7WUFBUjthQUNDOztvQkFaRkYsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxjQUFjO3dCQUN4QixRQUFRLEVBQUUsZ0RBRUw7d0JBQ0wsTUFBTSxFQUFFLENBQUMsZ0ZBQWdGLENBQUM7cUJBQzNGOzs7O2lDQVJEOzs7Ozs7O0FDQUE7Ozs7b0JBSUNDLFdBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUUsQ0FBQ0MsbUJBQVksQ0FBQzt3QkFDdkIsWUFBWSxFQUFFLENBQUMsa0JBQWtCLENBQUM7d0JBQ2xDLE9BQU8sRUFBRSxDQUFDLGtCQUFrQixDQUFDO3FCQUM5Qjs7OEJBUkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=