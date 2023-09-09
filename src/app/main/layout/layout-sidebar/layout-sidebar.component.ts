import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AuthService } from '@core/auth/services/auth.service'
import { AppStateService } from '@core/states/app-state.service'
import { DropdownAccentComponent } from '@core/ui/dropdown/dropdown-accent/dropdown-accent.component'
import { MaterialModules } from '@core/ui/material'
import { isSmallScreen } from '@core/utils/screen.util'
import { FooterCopyrightComponent } from '@main/footers/footer-copyright/footer-copyright.component'
import { FooterOneComponent } from '@main/footers/footer-one/footer-one.component'
import { HeaderOneComponent } from '@main/headers/header-one/header-one.component'

@Component({
    selector: 'app-layout-sidebar',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        MaterialModules,
        HeaderOneComponent,
        FooterOneComponent,
        FooterCopyrightComponent,
        DropdownAccentComponent,
    ],
    templateUrl: './layout-sidebar.component.html',
    styleUrls: ['./layout-sidebar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutSidebarComponent {
    @Input() opened = true

    menuToggles = {
        home: false,
        account: false,
    }

    appName = this.appState.appName
    isSmallScreen = false

    constructor(public auth: AuthService, private appState: AppStateService) {
        this.isSmallScreen = isSmallScreen()
        if (this.isSmallScreen) {
            this.opened = false
        }
    }
}
