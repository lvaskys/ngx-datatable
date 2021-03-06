/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../../src/components/footer/footer.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../../../../src/components/footer/pager.component';
import * as import11 from './pager.component.ngfactory';
import * as import12 from '@angular/core/src/security';
var renderType_DataTableFooterComponent_Host:import0.RenderComponentType = (null as any);
class _View_DataTableFooterComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _DataTableFooterComponent_0_4:import3.DataTableFooterComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_DataTableFooterComponent_Host0,renderType_DataTableFooterComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('datatable-footer',rootSelector,(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','datatable-footer');
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_DataTableFooterComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._DataTableFooterComponent_0_4 = new import3.DataTableFooterComponent();
    this._appEl_0.initComponent(this._DataTableFooterComponent_0_4,[],compView_0);
    compView_0.create(this._DataTableFooterComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.DataTableFooterComponent) && (0 === requestNodeIndex))) { return this._DataTableFooterComponent_0_4; }
    return notFoundResult;
  }
}
function viewFactory_DataTableFooterComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_DataTableFooterComponent_Host === (null as any))) { (renderType_DataTableFooterComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,[],{})); }
  return new _View_DataTableFooterComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const DataTableFooterComponentNgFactory:import9.ComponentFactory<import3.DataTableFooterComponent> = new import9.ComponentFactory<import3.DataTableFooterComponent>('datatable-footer',viewFactory_DataTableFooterComponent_Host0,import3.DataTableFooterComponent);
const styles_DataTableFooterComponent:any[] = [];
var renderType_DataTableFooterComponent:import0.RenderComponentType = (null as any);
class _View_DataTableFooterComponent0 extends import1.AppView<import3.DataTableFooterComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _text_5:any;
  _el_6:any;
  /*private*/ _appEl_6:import2.AppElement;
  _DataTablePagerComponent_6_4:import10.DataTablePagerComponent;
  _text_7:any;
  _text_8:any;
  _text_9:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_DataTableFooterComponent0,renderType_DataTableFooterComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckOnce);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_3 = this.renderer.createElement(this._el_1,'div',(null as any));
    this.renderer.setElementAttribute(this._el_3,'class','page-count');
    this._text_4 = this.renderer.createText(this._el_3,'',(null as any));
    this._text_5 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_6 = this.renderer.createElement(this._el_1,'datatable-pager',(null as any));
    this.renderer.setElementAttribute(this._el_6,'class','datatable-pager');
    this._appEl_6 = new import2.AppElement(6,1,this,this._el_6);
    var compView_6:any = import11.viewFactory_DataTablePagerComponent0(this.viewUtils,this.injector(6),this._appEl_6);
    this._DataTablePagerComponent_6_4 = new import10.DataTablePagerComponent();
    this._appEl_6.initComponent(this._DataTablePagerComponent_6_4,[],compView_6);
    this._text_7 = this.renderer.createText((null as any),'\n       ',(null as any));
    compView_6.create(this._DataTablePagerComponent_6_4,[],(null as any));
    this._text_8 = this.renderer.createText(this._el_1,'\n     ',(null as any));
    this._text_9 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_6,'change',this.eventHandler(this._handle_change_6_0.bind(this)));
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    this._expr_7 = import7.UNINITIALIZED;
    this._expr_8 = import7.UNINITIALIZED;
    this._expr_9 = import7.UNINITIALIZED;
    this._expr_10 = import7.UNINITIALIZED;
    const subscription_0:any = this._DataTablePagerComponent_6_4.change.subscribe(this.eventHandler(this._handle_change_6_0.bind(this)));
    this.init([],[
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._text_8,
      this._text_9
    ]
    ,[disposable_0],[subscription_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import10.DataTablePagerComponent) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._DataTablePagerComponent_6_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changed:boolean = true;
    changed = false;
    const currVal_4:any = this.context.pagerLeftArrowIcon;
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._DataTablePagerComponent_6_4.pagerLeftArrowIcon = currVal_4;
      changed = true;
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = this.context.pagerRightArrowIcon;
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this._DataTablePagerComponent_6_4.pagerRightArrowIcon = currVal_5;
      changed = true;
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = this.context.pagerPreviousIcon;
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this._DataTablePagerComponent_6_4.pagerPreviousIcon = currVal_6;
      changed = true;
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = this.context.pagerNextIcon;
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this._DataTablePagerComponent_6_4.pagerNextIcon = currVal_7;
      changed = true;
      this._expr_7 = currVal_7;
    }
    const currVal_8:any = this.context.pageSize;
    if (import4.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this._DataTablePagerComponent_6_4.size = currVal_8;
      changed = true;
      this._expr_8 = currVal_8;
    }
    const currVal_9:any = this.context.rowCount;
    if (import4.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this._DataTablePagerComponent_6_4.count = currVal_9;
      changed = true;
      this._expr_9 = currVal_9;
    }
    const currVal_10:any = this.context.curPage;
    if (import4.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      this._DataTablePagerComponent_6_4.page = currVal_10;
      changed = true;
      this._expr_10 = currVal_10;
    }
    if (changed) { this._appEl_6.componentView.markAsCheckOnce(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = this.context.footerHeight;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementStyle(this._el_1,'height',((this.viewUtils.sanitizer.sanitize(import12.SecurityContext.STYLE,currVal_0) == (null as any))? (null as any): (this.viewUtils.sanitizer.sanitize(import12.SecurityContext.STYLE,currVal_0).toString() + 'px')));
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = import4.interpolate(2,'',this.context.rowCount.toLocaleString(),' ',this.context.totalMessage,'');
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setText(this._text_4,currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_3:boolean = !this.context.isVisible;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementProperty(this._el_6,'hidden',currVal_3);
      this._expr_3 = currVal_3;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_change_6_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.page.emit($event)) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_DataTableFooterComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.DataTableFooterComponent> {
  if ((renderType_DataTableFooterComponent === (null as any))) { (renderType_DataTableFooterComponent = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,styles_DataTableFooterComponent,{})); }
  return new _View_DataTableFooterComponent0(viewUtils,parentInjector,declarationEl);
}