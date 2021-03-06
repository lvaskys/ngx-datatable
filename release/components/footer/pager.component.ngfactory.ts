/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../../src/components/footer/pager.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/common/src/directives/ng_for';
import * as import11 from '@angular/core/src/linker/template_ref';
import * as import12 from '@angular/core/src/change_detection/differs/iterable_differs';
var renderType_DataTablePagerComponent_Host:import0.RenderComponentType = (null as any);
class _View_DataTablePagerComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _DataTablePagerComponent_0_4:import3.DataTablePagerComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_DataTablePagerComponent_Host0,renderType_DataTablePagerComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('datatable-pager',rootSelector,(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','datatable-pager');
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_DataTablePagerComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._DataTablePagerComponent_0_4 = new import3.DataTablePagerComponent();
    this._appEl_0.initComponent(this._DataTablePagerComponent_0_4,[],compView_0);
    compView_0.create(this._DataTablePagerComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.DataTablePagerComponent) && (0 === requestNodeIndex))) { return this._DataTablePagerComponent_0_4; }
    return notFoundResult;
  }
}
function viewFactory_DataTablePagerComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_DataTablePagerComponent_Host === (null as any))) { (renderType_DataTablePagerComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,[],{})); }
  return new _View_DataTablePagerComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const DataTablePagerComponentNgFactory:import9.ComponentFactory<import3.DataTablePagerComponent> = new import9.ComponentFactory<import3.DataTablePagerComponent>('datatable-pager',viewFactory_DataTablePagerComponent_Host0,import3.DataTablePagerComponent);
const styles_DataTablePagerComponent:any[] = [];
var renderType_DataTablePagerComponent:import0.RenderComponentType = (null as any);
class _View_DataTablePagerComponent0 extends import1.AppView<import3.DataTablePagerComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _text_9:any;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _el_13:any;
  _text_14:any;
  _el_15:any;
  _text_16:any;
  _text_17:any;
  _text_18:any;
  _anchor_19:any;
  /*private*/ _appEl_19:import2.AppElement;
  _TemplateRef_19_5:any;
  _NgFor_19_6:import10.NgFor;
  _text_20:any;
  _el_21:any;
  _text_22:any;
  _el_23:any;
  _text_24:any;
  _el_25:any;
  _text_26:any;
  _text_27:any;
  _text_28:any;
  _el_29:any;
  _text_30:any;
  _el_31:any;
  _text_32:any;
  _el_33:any;
  _text_34:any;
  _text_35:any;
  _text_36:any;
  _text_37:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  /*private*/ _expr_12:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_DataTablePagerComponent0,renderType_DataTablePagerComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckOnce);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = this.renderer.createElement(parentRenderNode,'ul',(null as any));
    this.renderer.setElementAttribute(this._el_1,'class','pager');
    this._text_2 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_3 = this.renderer.createElement(this._el_1,'li',(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._el_5 = this.renderer.createElement(this._el_3,'a',(null as any));
    this.renderer.setElementAttribute(this._el_5,'href','javascript:void(0)');
    this._text_6 = this.renderer.createText(this._el_5,'\n          ',(null as any));
    this._el_7 = this.renderer.createElement(this._el_5,'i',(null as any));
    this._text_8 = this.renderer.createText(this._el_5,'\n        ',(null as any));
    this._text_9 = this.renderer.createText(this._el_3,'\n      ',(null as any));
    this._text_10 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_11 = this.renderer.createElement(this._el_1,'li',(null as any));
    this._text_12 = this.renderer.createText(this._el_11,'\n        ',(null as any));
    this._el_13 = this.renderer.createElement(this._el_11,'a',(null as any));
    this.renderer.setElementAttribute(this._el_13,'href','javascript:void(0)');
    this._text_14 = this.renderer.createText(this._el_13,'\n          ',(null as any));
    this._el_15 = this.renderer.createElement(this._el_13,'i',(null as any));
    this._text_16 = this.renderer.createText(this._el_13,'\n        ',(null as any));
    this._text_17 = this.renderer.createText(this._el_11,'\n      ',(null as any));
    this._text_18 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._anchor_19 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._appEl_19 = new import2.AppElement(19,1,this,this._anchor_19);
    this._TemplateRef_19_5 = new import11.TemplateRef_(this._appEl_19,viewFactory_DataTablePagerComponent1);
    this._NgFor_19_6 = new import10.NgFor(this._appEl_19.vcRef,this._TemplateRef_19_5,this.parentInjector.get(import12.IterableDiffers),this.ref);
    this._text_20 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_21 = this.renderer.createElement(this._el_1,'li',(null as any));
    this._text_22 = this.renderer.createText(this._el_21,'\n        ',(null as any));
    this._el_23 = this.renderer.createElement(this._el_21,'a',(null as any));
    this.renderer.setElementAttribute(this._el_23,'href','javascript:void(0)');
    this._text_24 = this.renderer.createText(this._el_23,'\n          ',(null as any));
    this._el_25 = this.renderer.createElement(this._el_23,'i',(null as any));
    this._text_26 = this.renderer.createText(this._el_23,'\n        ',(null as any));
    this._text_27 = this.renderer.createText(this._el_21,'\n      ',(null as any));
    this._text_28 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_29 = this.renderer.createElement(this._el_1,'li',(null as any));
    this._text_30 = this.renderer.createText(this._el_29,'\n        ',(null as any));
    this._el_31 = this.renderer.createElement(this._el_29,'a',(null as any));
    this.renderer.setElementAttribute(this._el_31,'href','javascript:void(0)');
    this._text_32 = this.renderer.createText(this._el_31,'\n          ',(null as any));
    this._el_33 = this.renderer.createElement(this._el_31,'i',(null as any));
    this._text_34 = this.renderer.createText(this._el_31,'\n        ',(null as any));
    this._text_35 = this.renderer.createText(this._el_29,'\n      ',(null as any));
    this._text_36 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._text_37 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_5,'click',this.eventHandler(this._handle_click_5_0.bind(this)));
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    var disposable_1:Function = this.renderer.listen(this._el_13,'click',this.eventHandler(this._handle_click_13_0.bind(this)));
    this._expr_5 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    this._expr_7 = import7.UNINITIALIZED;
    var disposable_2:Function = this.renderer.listen(this._el_23,'click',this.eventHandler(this._handle_click_23_0.bind(this)));
    this._expr_9 = import7.UNINITIALIZED;
    this._expr_10 = import7.UNINITIALIZED;
    var disposable_3:Function = this.renderer.listen(this._el_31,'click',this.eventHandler(this._handle_click_31_0.bind(this)));
    this._expr_12 = import7.UNINITIALIZED;
    this.init([],[
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._text_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._el_15,
      this._text_16,
      this._text_17,
      this._text_18,
      this._anchor_19,
      this._text_20,
      this._el_21,
      this._text_22,
      this._el_23,
      this._text_24,
      this._el_25,
      this._text_26,
      this._text_27,
      this._text_28,
      this._el_29,
      this._text_30,
      this._el_31,
      this._text_32,
      this._el_33,
      this._text_34,
      this._text_35,
      this._text_36,
      this._text_37
    ]
    ,[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3
    ]
    ,[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import11.TemplateRef) && (19 === requestNodeIndex))) { return this._TemplateRef_19_5; }
    if (((token === import10.NgFor) && (19 === requestNodeIndex))) { return this._NgFor_19_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_6:any = this.context.pages;
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this._NgFor_19_6.ngForOf = currVal_6;
      if ((changes === (null as any))) { (changes = {}); }
      changes['ngForOf'] = new import7.SimpleChange(this._expr_6,currVal_6);
      this._expr_6 = currVal_6;
    }
    if ((changes !== (null as any))) { this._NgFor_19_6.ngOnChanges(changes); }
    if (!throwOnChange) { this._NgFor_19_6.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:boolean = !this.context.canPrevious();
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementClass(this._el_3,'disabled',currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_2:any = import4.interpolate(1,'',this.context.pagerPreviousIcon,'');
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementProperty(this._el_7,'className',currVal_2);
      this._expr_2 = currVal_2;
    }
    const currVal_3:boolean = !this.context.canPrevious();
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementClass(this._el_11,'disabled',currVal_3);
      this._expr_3 = currVal_3;
    }
    const currVal_5:any = import4.interpolate(1,'',this.context.pagerLeftArrowIcon,'');
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementProperty(this._el_15,'className',currVal_5);
      this._expr_5 = currVal_5;
    }
    const currVal_7:boolean = !this.context.canNext();
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setElementClass(this._el_21,'disabled',currVal_7);
      this._expr_7 = currVal_7;
    }
    const currVal_9:any = import4.interpolate(1,'',this.context.pagerRightArrowIcon,'');
    if (import4.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this.renderer.setElementProperty(this._el_25,'className',currVal_9);
      this._expr_9 = currVal_9;
    }
    const currVal_10:boolean = !this.context.canNext();
    if (import4.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      this.renderer.setElementClass(this._el_29,'disabled',currVal_10);
      this._expr_10 = currVal_10;
    }
    const currVal_12:any = import4.interpolate(1,'',this.context.pagerNextIcon,'');
    if (import4.checkBinding(throwOnChange,this._expr_12,currVal_12)) {
      this.renderer.setElementProperty(this._el_33,'className',currVal_12);
      this._expr_12 = currVal_12;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_5_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.selectPage(1)) !== false);
    return (true && pd_0);
  }
  private _handle_click_13_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.prevPage()) !== false);
    return (true && pd_0);
  }
  private _handle_click_23_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.nextPage()) !== false);
    return (true && pd_0);
  }
  private _handle_click_31_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.selectPage(this.context.totalPages)) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_DataTablePagerComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.DataTablePagerComponent> {
  if ((renderType_DataTablePagerComponent === (null as any))) { (renderType_DataTablePagerComponent = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,styles_DataTablePagerComponent,{})); }
  return new _View_DataTablePagerComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_DataTablePagerComponent1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_DataTablePagerComponent1,renderType_DataTablePagerComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'li',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','pages');
    this._text_1 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'a',(null as any));
    this.renderer.setElementAttribute(this._el_2,'href','javascript:void(0)');
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_2,'click',this.eventHandler(this._handle_click_2_0.bind(this)));
    this._expr_2 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = (this.context.$implicit.number === this.parent.context.page);
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementClass(this._el_0,'active',currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_2:any = import4.interpolate(1,'\n          ',this.context.$implicit.text,'\n        ');
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setText(this._text_3,currVal_2);
      this._expr_2 = currVal_2;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_2_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.selectPage(this.context.$implicit.number)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_DataTablePagerComponent1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_DataTablePagerComponent1(viewUtils,parentInjector,declarationEl);
}