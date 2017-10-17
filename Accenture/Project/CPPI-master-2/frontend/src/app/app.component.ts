import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { StorageBrowser } from './shared/sdk/index';
import { ProjectService } from './Services/project.service';
import { TdMediaService } from '@covalent/core';
import { Router,NavigationEnd, NavigationStart } from '@angular/router';

@Component({
  selector: 'cppi-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProjectService, StorageBrowser]
})
export class AppComponent implements AfterViewInit {
  title = 'app works!';

  constructor(private _iconRegistry: MdIconRegistry,
    private _domSanitizer: DomSanitizer,
    private projectService: ProjectService,
    private _changeDetectorRef: ChangeDetectorRef,
    public media: TdMediaService,
    private router: Router) {
    this._iconRegistry.addSvgIconInNamespace('assets', 'accenture',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/accentureLogo.svg'));
    this._iconRegistry.registerFontClassAlias('fontawesome', 'fa');
    router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event:NavigationEnd) => {
        // You only receive NavigationStart events
        console.log(event);
        this.projectService.setPreviousRoute(event.url);
      });
  }

  ngAfterViewInit(): void {
    this.media.broadcast();
    this._changeDetectorRef.detectChanges();
  }
}