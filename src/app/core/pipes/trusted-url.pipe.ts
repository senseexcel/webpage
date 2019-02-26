import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Pipe({ name: 'trustedUrl' })
export class TrustedUrlPipe implements PipeTransform {
    constructor(public sanitizer: DomSanitizer) { }
    transform(url: string): SafeUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
