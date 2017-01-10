/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../../src/components/body/progress-bar.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
var renderType_ProgressBarComponent_Host:import0.RenderComponentType = (null as any);
class _View_ProgressBarComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _ProgressBarComponent_0_4:import3.ProgressBarComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ProgressBarComponent_Host0,renderType_ProgressBarComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('datatable-progress',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_ProgressBarComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._ProgressBarComponent_0_4 = new import3.ProgressBarComponent();
    this._appEl_0.initComponent(this._ProgressBarComponent_0_4,[],compView_0);
    compView_0.create(this._ProgressBarComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.ProgressBarComponent) && (0 === requestNodeIndex))) { return this._ProgressBarComponent_0_4; }
    return notFoundResult;
  }
}
function viewFactory_ProgressBarComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_ProgressBarComponent_Host === (null as any))) { (renderType_ProgressBarComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,[],{})); }
  return new _View_ProgressBarComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const ProgressBarComponentNgFactory:import9.ComponentFactory<import3.ProgressBarComponent> = new import9.ComponentFactory<import3.ProgressBarComponent>('datatable-progress',viewFactory_ProgressBarComponent_Host0,import3.ProgressBarComponent);
const styles_ProgressBarComponent:any[] = [];
var renderType_ProgressBarComponent:import0.RenderComponentType = (null as any);
class _View_ProgressBarComponent0 extends import1.AppView<import3.ProgressBarComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _text_7:any;
  _text_8:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ProgressBarComponent0,renderType_ProgressBarComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckOnce);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_1,'class','progress-linear');
    this.renderer.setElementAttribute(this._el_1,'role','progressbar');
    this._text_2 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_3 = this.renderer.createElement(this._el_1,'div',(null as any));
    this.renderer.setElementAttribute(this._el_3,'class','container');
    this._text_4 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._el_5 = this.renderer.createElement(this._el_3,'div',(null as any));
    this.renderer.setElementAttribute(this._el_5,'class','bar');
    this._text_6 = this.renderer.createText(this._el_3,'\n      ',(null as any));
    this._text_7 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._text_8 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this.init([],[
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7,
      this._text_8
    ]
    ,[],[]);
    return (null as any);
  }
}
export function viewFactory_ProgressBarComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.ProgressBarComponent> {
  if ((renderType_ProgressBarComponent === (null as any))) { (renderType_ProgressBarComponent = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,styles_ProgressBarComponent,{})); }
  return new _View_ProgressBarComponent0(viewUtils,parentInjector,declarationEl);
}