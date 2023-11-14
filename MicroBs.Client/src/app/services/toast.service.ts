import { Injectable, TemplateRef } from '@angular/core';

@Injectable()
export class ToastService {
    toasts: ToastMessage[] = [];

    public RemoveAll() {
        this.toasts = []
    }

    public Remove(toast: any) {
        this.toasts = this.toasts.filter(t => t !== toast);
    }

    //

    public ShowError(subject: string, message: string, delayInMs: number = 7000) {
        this.Show(subject, message, eToastType.Error, delayInMs);
    }

    public ShowSuccess(subject: string, message: string, delayInMs: number = 7000) {
        this.Show(subject, message, eToastType.Success, delayInMs);
    }

    public ShowWarning(subject: string, message: string, delayInMs: number = 7000) {
        this.Show(subject, message, eToastType.Warning, delayInMs);
    }

    public Show(subject: string, message: string, type: eToastType, delayInMs: number) {
        this.ShowInternal(
            {
                Subject: subject,
                Message: message,
                Type: type,
                delayInMs: delayInMs
            } as ToastMessage);
    }

    // Private Methods

    private ShowInternal(item: ToastMessage) {
        this.toasts.push(item);
    }
}

export enum eToastType {
    Error,
    Warning,
    Success,
}

export class ToastMessage {
    Type: eToastType = eToastType.Success;
    Subject: string = ''
    Message: string = ''
    delayInMs: number = 7000
}