/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from 'tslib';
import { Action, Selector, State } from '@ngxs/store';
import { SetLanguage, SetTenant } from '../actions/session.actions';
import { GetAppConfiguration } from '../actions/config.actions';
import { LocalizationService } from '../services/localization.service';
import { from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
var SessionState = /** @class */ (function() {
  function SessionState(localizationService) {
    this.localizationService = localizationService;
  }
  /**
   * @param {?} __0
   * @return {?}
   */
  SessionState.getLanguage
  /**
   * @param {?} __0
   * @return {?}
   */ = function(_a) {
    var language = _a.language;
    return language;
  };
  /**
   * @param {?} __0
   * @return {?}
   */
  SessionState.getTenant
  /**
   * @param {?} __0
   * @return {?}
   */ = function(_a) {
    var tenant = _a.tenant;
    return tenant;
  };
  /**
   * @param {?} __0
   * @param {?} __1
   * @return {?}
   */
  SessionState.prototype.setLanguage
  /**
   * @param {?} __0
   * @param {?} __1
   * @return {?}
   */ = function(_a, _b) {
    var _this = this;
    var patchState = _a.patchState,
      dispatch = _a.dispatch;
    var payload = _b.payload;
    patchState({
      language: payload,
    });
    return dispatch(new GetAppConfiguration()).pipe(
      switchMap(
        /**
         * @return {?}
         */
        function() {
          return from(_this.localizationService.registerLocale(payload));
        },
      ),
    );
  };
  /**
   * @param {?} __0
   * @param {?} __1
   * @return {?}
   */
  SessionState.prototype.setTenantId
  /**
   * @param {?} __0
   * @param {?} __1
   * @return {?}
   */ = function(_a, _b) {
    var patchState = _a.patchState;
    var payload = _b.payload;
    patchState({
      tenant: payload,
    });
  };
  SessionState.ctorParameters = function() {
    return [{ type: LocalizationService }];
  };
  tslib_1.__decorate(
    [
      Action(SetLanguage),
      tslib_1.__metadata('design:type', Function),
      tslib_1.__metadata('design:paramtypes', [Object, SetLanguage]),
      tslib_1.__metadata('design:returntype', void 0),
    ],
    SessionState.prototype,
    'setLanguage',
    null,
  );
  tslib_1.__decorate(
    [
      Action(SetTenant),
      tslib_1.__metadata('design:type', Function),
      tslib_1.__metadata('design:paramtypes', [Object, SetTenant]),
      tslib_1.__metadata('design:returntype', void 0),
    ],
    SessionState.prototype,
    'setTenantId',
    null,
  );
  tslib_1.__decorate(
    [
      Selector(),
      tslib_1.__metadata('design:type', Function),
      tslib_1.__metadata('design:paramtypes', [Object]),
      tslib_1.__metadata('design:returntype', String),
    ],
    SessionState,
    'getLanguage',
    null,
  );
  tslib_1.__decorate(
    [
      Selector(),
      tslib_1.__metadata('design:type', Function),
      tslib_1.__metadata('design:paramtypes', [Object]),
      tslib_1.__metadata('design:returntype', Object),
    ],
    SessionState,
    'getTenant',
    null,
  );
  SessionState = tslib_1.__decorate(
    [
      State({
        name: 'SessionState',
        defaults: /** @type {?} */ ({}),
      }),
      tslib_1.__metadata('design:paramtypes', [LocalizationService]),
    ],
    SessionState,
  );
  return SessionState;
})();
export { SessionState };
if (false) {
  /**
   * @type {?}
   * @private
   */
  SessionState.prototype.localizationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zdGF0ZXMvc2Vzc2lvbi5zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBZ0IsTUFBTSxhQUFhLENBQUM7QUFDcEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVwRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0lBaUJ6QyxzQkFBb0IsbUJBQXdDO1FBQXhDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7SUFBRyxDQUFDOzs7OztJQVR6RCx3QkFBVzs7OztJQUFsQixVQUFtQixFQUEyQjtZQUF6QixzQkFBUTtRQUMzQixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7OztJQUdNLHNCQUFTOzs7O0lBQWhCLFVBQWlCLEVBQXlCO1lBQXZCLGtCQUFNO1FBQ3ZCLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7OztJQUtELGtDQUFXOzs7OztJQUFYLFVBQVksRUFBcUQsRUFBRSxFQUF3QjtRQUQzRixpQkFTQztZQVJhLDBCQUFVLEVBQUUsc0JBQVE7WUFBbUMsb0JBQU87UUFDMUUsVUFBVSxDQUFDO1lBQ1QsUUFBUSxFQUFFLE9BQU87U0FDbEIsQ0FBQyxDQUFDO1FBRUgsT0FBTyxRQUFRLENBQUMsSUFBSSxtQkFBbUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUM3QyxTQUFTOzs7UUFBQyxjQUFNLE9BQUEsSUFBSSxDQUFDLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBdEQsQ0FBc0QsRUFBQyxDQUN4RSxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBR0Qsa0NBQVc7Ozs7O0lBQVgsVUFBWSxFQUEyQyxFQUFFLEVBQXNCO1lBQWpFLDBCQUFVO1lBQW1DLG9CQUFPO1FBQ2hFLFVBQVUsQ0FBQztZQUNULE1BQU0sRUFBRSxPQUFPO1NBQ2hCLENBQUMsQ0FBQztJQUNMLENBQUM7O2dCQWxCd0MsbUJBQW1COztJQUc1RDtRQURDLE1BQU0sQ0FBQyxXQUFXLENBQUM7O3lEQUM0RCxXQUFXOzttREFRMUY7SUFHRDtRQURDLE1BQU0sQ0FBQyxTQUFTLENBQUM7O3lEQUNvRCxTQUFTOzttREFJOUU7SUEzQkQ7UUFEQyxRQUFRLEVBQUU7Ozs7eUNBR1Y7SUFHRDtRQURDLFFBQVEsRUFBRTs7Ozt1Q0FHVjtJQVRVLFlBQVk7UUFKeEIsS0FBSyxDQUFnQjtZQUNwQixJQUFJLEVBQUUsY0FBYztZQUNwQixRQUFRLEVBQUUsbUJBQUEsRUFBRSxFQUFpQjtTQUM5QixDQUFDO2lEQVl5QyxtQkFBbUI7T0FYakQsWUFBWSxDQThCeEI7SUFBRCxtQkFBQztDQUFBLElBQUE7U0E5QlksWUFBWTs7Ozs7O0lBV1gsMkNBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uLCBTZWxlY3RvciwgU3RhdGUsIFN0YXRlQ29udGV4dCB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcbmltcG9ydCB7IFNldExhbmd1YWdlLCBTZXRUZW5hbnQgfSBmcm9tICcuLi9hY3Rpb25zL3Nlc3Npb24uYWN0aW9ucyc7XG5pbXBvcnQgeyBBQlAsIFNlc3Npb24gfSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHsgR2V0QXBwQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL2FjdGlvbnMvY29uZmlnLmFjdGlvbnMnO1xuaW1wb3J0IHsgTG9jYWxpemF0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2xvY2FsaXphdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IGZyb20sIGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQFN0YXRlPFNlc3Npb24uU3RhdGU+KHtcbiAgbmFtZTogJ1Nlc3Npb25TdGF0ZScsXG4gIGRlZmF1bHRzOiB7fSBhcyBTZXNzaW9uLlN0YXRlLFxufSlcbmV4cG9ydCBjbGFzcyBTZXNzaW9uU3RhdGUge1xuICBAU2VsZWN0b3IoKVxuICBzdGF0aWMgZ2V0TGFuZ3VhZ2UoeyBsYW5ndWFnZSB9OiBTZXNzaW9uLlN0YXRlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbGFuZ3VhZ2U7XG4gIH1cblxuICBAU2VsZWN0b3IoKVxuICBzdGF0aWMgZ2V0VGVuYW50KHsgdGVuYW50IH06IFNlc3Npb24uU3RhdGUpOiBBQlAuQmFzaWNJdGVtIHtcbiAgICByZXR1cm4gdGVuYW50O1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2NhbGl6YXRpb25TZXJ2aWNlOiBMb2NhbGl6YXRpb25TZXJ2aWNlKSB7fVxuXG4gIEBBY3Rpb24oU2V0TGFuZ3VhZ2UpXG4gIHNldExhbmd1YWdlKHsgcGF0Y2hTdGF0ZSwgZGlzcGF0Y2ggfTogU3RhdGVDb250ZXh0PFNlc3Npb24uU3RhdGU+LCB7IHBheWxvYWQgfTogU2V0TGFuZ3VhZ2UpIHtcbiAgICBwYXRjaFN0YXRlKHtcbiAgICAgIGxhbmd1YWdlOiBwYXlsb2FkLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRpc3BhdGNoKG5ldyBHZXRBcHBDb25maWd1cmF0aW9uKCkpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4gZnJvbSh0aGlzLmxvY2FsaXphdGlvblNlcnZpY2UucmVnaXN0ZXJMb2NhbGUocGF5bG9hZCkpKSxcbiAgICApO1xuICB9XG5cbiAgQEFjdGlvbihTZXRUZW5hbnQpXG4gIHNldFRlbmFudElkKHsgcGF0Y2hTdGF0ZSB9OiBTdGF0ZUNvbnRleHQ8U2Vzc2lvbi5TdGF0ZT4sIHsgcGF5bG9hZCB9OiBTZXRUZW5hbnQpIHtcbiAgICBwYXRjaFN0YXRlKHtcbiAgICAgIHRlbmFudDogcGF5bG9hZCxcbiAgICB9KTtcbiAgfVxufVxuIl19
