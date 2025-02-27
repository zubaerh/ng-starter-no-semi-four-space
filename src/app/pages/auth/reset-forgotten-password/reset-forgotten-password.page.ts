import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { FormBuilder, ReactiveFormsModule } from '@angular/forms'
import { ActivatedRoute, Router, RouterModule } from '@angular/router'
import { ToastService } from '@core/ui/toast/toast.service'
import { AuthService } from '@main/auth/services/auth.service'

@Component({
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, RouterModule],
    templateUrl: './reset-forgotten-password.page.html',
    styleUrls: ['./reset-forgotten-password.page.scss'],
})
export default class ResetForgottenPasswordPage implements OnInit {
    form = this.fb.group({
        password: [''],
        passwordConfirmation: [''],
    })

    errors: string[] = []
    token = this.ar.snapshot.params['token'] ?? ''

    constructor(
        private auth: AuthService,
        private fb: FormBuilder,
        private router: Router,
        private ar: ActivatedRoute,
        private toast: ToastService,
    ) {}

    ngOnInit(): void {
        void 0
    }

    submit(): void {
        this.errors = []
        const { password, passwordConfirmation } = this.form.value
        if (!password || password !== passwordConfirmation) {
            this.errors.push('Passwords do not match')
            return
        }
        this.auth.resetForgottenPassword(this.token, password, passwordConfirmation).subscribe({
            next: () => {
                this.toast.success('Password reset successfully')
                this.router.navigate(['/login'])
            },
            error: (err) => {
                this.errors.push(err.error.message)
            },
        })
    }
}
