import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Tool } from "../../../shared/sdk/models";

@Component({
  selector: 'app-toollist',
  templateUrl: './toollist.component.html',
  styleUrls: ['./toollist.component.css']
})
export class ToollistComponent implements OnInit {
  selectedIndex: number;
  _tool: Tool;
  @Input() tools;
  @Input() selectedTools: Tool[];
  @Output() onToolSelect = new EventEmitter<Tool>();
  @Output() onToolDeselect = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
    //Show first tool in the section
    this.showTool(this.tools[0], 0);
  }

  addTool(evt, item) {
    if (evt.checked) {
      this.onToolSelect.emit(item);
    } else {
      this.onToolDeselect.emit(item);
    }
  }

  showTool(tool, index) {
    this._tool = tool;
    if (this.selectedIndex === null) {
      this.selectedIndex = index;
    }
    else if (this.selectedIndex === index) {
      this.selectedIndex = null;
    }
    else {
      this.selectedIndex = index;
    }
  }

  isCheckBoxSelected(tool) {
    this.selectedTools = this.selectedTools || [];
    let isDefined = this.selectedTools.find(st => {
      return st.toolName === tool.toolName;
    });
    return (isDefined !== undefined);
  }

}
