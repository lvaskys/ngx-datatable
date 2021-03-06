/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../../src/components/body/body-cell.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/linker/element_ref';
import * as import9 from '@angular/core/src/security';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from '@angular/common/src/directives/ng_if';
import * as import13 from '@angular/core/src/linker/template_ref';
import * as import14 from '@angular/common/src/directives/ng_template_outlet';
var renderType_DataTableBodyCellComponent_Host:import0.RenderComponentType = (null as any);
class _View_DataTableBodyCellComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _DataTableBodyCellComponent_0_4:import3.DataTableBodyCellComponent;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_DataTableBodyCellComponent_Host0,renderType_DataTableBodyCellComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('datatable-body-cell',rootSelector,(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','datatable-body-cell');
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_DataTableBodyCellComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._DataTableBodyCellComponent_0_4 = new import3.DataTableBodyCellComponent(new import8.ElementRef(this._el_0));
    this._appEl_0.initComponent(this._DataTableBodyCellComponent_0_4,[],compView_0);
    compView_0.create(this._DataTableBodyCellComponent_0_4,this.projectableNodes,(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_0,'focus',this.eventHandler(this._handle_focus_0_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_0,'blur',this.eventHandler(this._handle_blur_0_1.bind(this)));
    var disposable_2:Function = this.renderer.listen(this._el_0,'click',this.eventHandler(this._handle_click_0_2.bind(this)));
    var disposable_3:Function = this.renderer.listen(this._el_0,'dblclick',this.eventHandler(this._handle_dblclick_0_3.bind(this)));
    var disposable_4:Function = this.renderer.listen(this._el_0,'keydown',this.eventHandler(this._handle_keydown_0_4.bind(this)));
    this._expr_5 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    this._expr_7 = import7.UNINITIALIZED;
    this._expr_8 = import7.UNINITIALIZED;
    this._expr_9 = import7.UNINITIALIZED;
    this._expr_10 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[this._el_0],[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3,
      disposable_4
    ]
    ,[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.DataTableBodyCellComponent) && (0 === requestNodeIndex))) { return this._DataTableBodyCellComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_5:any = this._DataTableBodyCellComponent_0_4.isFocused;
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementClass(this._el_0,'active',currVal_5);
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = this._DataTableBodyCellComponent_0_4.isSortActive;
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementClass(this._el_0,'sort-active',currVal_6);
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = this._DataTableBodyCellComponent_0_4.isSortAscending;
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setElementClass(this._el_0,'sort-asc',currVal_7);
      this._expr_7 = currVal_7;
    }
    const currVal_8:any = this._DataTableBodyCellComponent_0_4.isSortDescending;
    if (import4.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this.renderer.setElementClass(this._el_0,'sort-desc',currVal_8);
      this._expr_8 = currVal_8;
    }
    const currVal_9:any = this._DataTableBodyCellComponent_0_4.width;
    if (import4.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this.renderer.setElementStyle(this._el_0,'width',((this.viewUtils.sanitizer.sanitize(import9.SecurityContext.STYLE,currVal_9) == (null as any))? (null as any): (this.viewUtils.sanitizer.sanitize(import9.SecurityContext.STYLE,currVal_9).toString() + 'px')));
      this._expr_9 = currVal_9;
    }
    const currVal_10:any = this._DataTableBodyCellComponent_0_4.height;
    if (import4.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      this.renderer.setElementStyle(this._el_0,'height',((this.viewUtils.sanitizer.sanitize(import9.SecurityContext.STYLE,currVal_10) == (null as any))? (null as any): this.viewUtils.sanitizer.sanitize(import9.SecurityContext.STYLE,currVal_10).toString()));
      this._expr_10 = currVal_10;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_focus_0_0($event:any):boolean {
    this._appEl_0.componentView.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._DataTableBodyCellComponent_0_4.onFocus()) !== false);
    return (true && pd_0);
  }
  private _handle_blur_0_1($event:any):boolean {
    this._appEl_0.componentView.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._DataTableBodyCellComponent_0_4.onBlur()) !== false);
    return (true && pd_0);
  }
  private _handle_click_0_2($event:any):boolean {
    this._appEl_0.componentView.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._DataTableBodyCellComponent_0_4.onClick($event)) !== false);
    return (true && pd_0);
  }
  private _handle_dblclick_0_3($event:any):boolean {
    this._appEl_0.componentView.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._DataTableBodyCellComponent_0_4.onDblClick($event)) !== false);
    return (true && pd_0);
  }
  private _handle_keydown_0_4($event:any):boolean {
    this._appEl_0.componentView.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._DataTableBodyCellComponent_0_4.onKeyDown($event)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_DataTableBodyCellComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_DataTableBodyCellComponent_Host === (null as any))) { (renderType_DataTableBodyCellComponent_Host = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,[],{})); }
  return new _View_DataTableBodyCellComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const DataTableBodyCellComponentNgFactory:import11.ComponentFactory<import3.DataTableBodyCellComponent> = new import11.ComponentFactory<import3.DataTableBodyCellComponent>('datatable-body-cell',viewFactory_DataTableBodyCellComponent_Host0,import3.DataTableBodyCellComponent);
const styles_DataTableBodyCellComponent:any[] = [];
var renderType_DataTableBodyCellComponent:import0.RenderComponentType = (null as any);
class _View_DataTableBodyCellComponent0 extends import1.AppView<import3.DataTableBodyCellComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _anchor_3:any;
  /*private*/ _appEl_3:import2.AppElement;
  _TemplateRef_3_5:any;
  _NgIf_3_6:import12.NgIf;
  _text_4:any;
  _anchor_5:any;
  /*private*/ _appEl_5:import2.AppElement;
  _TemplateRef_5_5:any;
  _NgIf_5_6:import12.NgIf;
  _text_6:any;
  _anchor_7:any;
  /*private*/ _appEl_7:import2.AppElement;
  _TemplateRef_7_5:any;
  _NgIf_7_6:import12.NgIf;
  _text_8:any;
  _text_9:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_DataTableBodyCellComponent0,renderType_DataTableBodyCellComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_1,'class','datatable-body-cell-label');
    this._text_2 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._anchor_3 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._appEl_3 = new import2.AppElement(3,1,this,this._anchor_3);
    this._TemplateRef_3_5 = new import13.TemplateRef_(this._appEl_3,viewFactory_DataTableBodyCellComponent1);
    this._NgIf_3_6 = new import12.NgIf(this._appEl_3.vcRef,this._TemplateRef_3_5);
    this._text_4 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._anchor_5 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._appEl_5 = new import2.AppElement(5,1,this,this._anchor_5);
    this._TemplateRef_5_5 = new import13.TemplateRef_(this._appEl_5,viewFactory_DataTableBodyCellComponent2);
    this._NgIf_5_6 = new import12.NgIf(this._appEl_5.vcRef,this._TemplateRef_5_5);
    this._text_6 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._anchor_7 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._appEl_7 = new import2.AppElement(7,1,this,this._anchor_7);
    this._TemplateRef_7_5 = new import13.TemplateRef_(this._appEl_7,viewFactory_DataTableBodyCellComponent3);
    this._NgIf_7_6 = new import12.NgIf(this._appEl_7.vcRef,this._TemplateRef_7_5);
    this._text_8 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._text_9 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this.init([],[
      this._text_0,
      this._el_1,
      this._text_2,
      this._anchor_3,
      this._text_4,
      this._anchor_5,
      this._text_6,
      this._anchor_7,
      this._text_8,
      this._text_9
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import13.TemplateRef) && (3 === requestNodeIndex))) { return this._TemplateRef_3_5; }
    if (((token === import12.NgIf) && (3 === requestNodeIndex))) { return this._NgIf_3_6; }
    if (((token === import13.TemplateRef) && (5 === requestNodeIndex))) { return this._TemplateRef_5_5; }
    if (((token === import12.NgIf) && (5 === requestNodeIndex))) { return this._NgIf_5_6; }
    if (((token === import13.TemplateRef) && (7 === requestNodeIndex))) { return this._TemplateRef_7_5; }
    if (((token === import12.NgIf) && (7 === requestNodeIndex))) { return this._NgIf_7_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = this.context.column.checkboxable;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgIf_3_6.ngIf = currVal_0;
      this._expr_0 = currVal_0;
    }
    const currVal_1:boolean = !this.context.column.cellTemplate;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._NgIf_5_6.ngIf = currVal_1;
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this.context.column.cellTemplate;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._NgIf_7_6.ngIf = currVal_2;
      this._expr_2 = currVal_2;
    }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_DataTableBodyCellComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.DataTableBodyCellComponent> {
  if ((renderType_DataTableBodyCellComponent === (null as any))) { (renderType_DataTableBodyCellComponent = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,styles_DataTableBodyCellComponent,{})); }
  return new _View_DataTableBodyCellComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_DataTableBodyCellComponent1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_DataTableBodyCellComponent1,renderType_DataTableBodyCellComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'label',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','datatable-checkbox');
    this._text_1 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'input',(null as any));
    this.renderer.setElementAttribute(this._el_2,'type','checkbox');
    this._text_3 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    this._expr_1 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_2,'click',this.eventHandler(this._handle_click_2_0.bind(this)));
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_1:any = this.parent.context.isSelected;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementProperty(this._el_2,'checked',currVal_1);
      this._expr_1 = currVal_1;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_2_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.onCheckboxChange($event)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_DataTableBodyCellComponent1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_DataTableBodyCellComponent1(viewUtils,parentInjector,declarationEl);
}
class _View_DataTableBodyCellComponent2 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_DataTableBodyCellComponent2,renderType_DataTableBodyCellComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'span',(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,[],[]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = this.parent.context.value;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementProperty(this._el_0,'innerHTML',this.viewUtils.sanitizer.sanitize(import9.SecurityContext.HTML,currVal_0));
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_DataTableBodyCellComponent2(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_DataTableBodyCellComponent2(viewUtils,parentInjector,declarationEl);
}
class _View_DataTableBodyCellComponent3 extends import1.AppView<any> {
  _anchor_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _TemplateRef_0_5:any;
  _NgTemplateOutlet_0_6:import14.NgTemplateOutlet;
  _map_0:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_DataTableBodyCellComponent3,renderType_DataTableBodyCellComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._anchor_0 = this.renderer.createTemplateAnchor((null as any),(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._anchor_0);
    this._TemplateRef_0_5 = new import13.TemplateRef_(this._appEl_0,viewFactory_DataTableBodyCellComponent4);
    this._NgTemplateOutlet_0_6 = new import14.NgTemplateOutlet(this._appEl_0.vcRef);
    this._map_0 = import4.pureProxy3((p0:any,p1:any,p2:any):{[key: string]:any} => {
      return {
        value: p0,
        row: p1,
        column: p2
      }
      ;
    });
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this.init([].concat([this._appEl_0]),[this._anchor_0],[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import13.TemplateRef) && (0 === requestNodeIndex))) { return this._TemplateRef_0_5; }
    if (((token === import14.NgTemplateOutlet) && (0 === requestNodeIndex))) { return this._NgTemplateOutlet_0_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_0:any = this._map_0(this.parent.context.value,this.parent.context.row,this.parent.context.column);
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgTemplateOutlet_0_6.ngOutletContext = currVal_0;
      if ((changes === (null as any))) { (changes = {}); }
      changes['ngOutletContext'] = new import7.SimpleChange(this._expr_0,currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this.parent.context.column.cellTemplate;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._NgTemplateOutlet_0_6.ngTemplateOutlet = currVal_1;
      if ((changes === (null as any))) { (changes = {}); }
      changes['ngTemplateOutlet'] = new import7.SimpleChange(this._expr_1,currVal_1);
      this._expr_1 = currVal_1;
    }
    if ((changes !== (null as any))) { this._NgTemplateOutlet_0_6.ngOnChanges(changes); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_DataTableBodyCellComponent3(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_DataTableBodyCellComponent3(viewUtils,parentInjector,declarationEl);
}
class _View_DataTableBodyCellComponent4 extends import1.AppView<any> {
  _text_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_DataTableBodyCellComponent4,renderType_DataTableBodyCellComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._text_0 = this.renderer.createText((null as any),'\n      ',(null as any));
    this.init([].concat([this._text_0]),[this._text_0],[],[]);
    return (null as any);
  }
}
function viewFactory_DataTableBodyCellComponent4(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_DataTableBodyCellComponent4(viewUtils,parentInjector,declarationEl);
}