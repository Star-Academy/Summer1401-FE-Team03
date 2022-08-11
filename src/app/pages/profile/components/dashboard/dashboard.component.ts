import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AlterRequestModel} from '../../../../models/api/alter/alter-request.model';
import {AuthService} from '../../../../services/api/auth/auth.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
    @ViewChild('imageUpload') public imageUpload!: ElementRef<HTMLInputElement>;

    public constructor(private authService: AuthService) {}

    public data: AlterRequestModel = {
        firstName: this.authService.cachedUser?.firstName,
        avatar: this.authService.cachedUser?.avatar,
        lastName: this.authService.cachedUser?.lastName,
        email: this.authService.cachedUser?.email,
        dateOfBirth: new Date(this.authService.cachedUser?.dateOfBirth || ''),
        phone: this.authService.cachedUser?.phone,
        username: this.authService.cachedUser?.username,
        password: this.authService.cachedUser?.password,
        gender: this.authService.cachedUser?.gender,
    };

    public async formSubmitHandler(): Promise<void> {
        this.data.avatar = await this.convertImageToBase64(this.imageUpload.nativeElement.files);
        await this.authService.alter(this.data);
    }

    private async convertImageToBase64(files: FileList | null): Promise<string | undefined> {
        if (!files || !files[0]) return undefined;

        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = (): void => {
                resolve(reader.result?.toString());
            };
            reader.readAsDataURL(files[0]);
        });
    }
}
