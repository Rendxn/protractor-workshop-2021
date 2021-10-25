import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private sigInBtn: ElementFinder;

  private emailInput: ElementFinder;

  private passwdInput: ElementFinder;

  constructor() {
    this.sigInBtn = $('#SubmitLogin > span');
    this.emailInput = $('#email');
    this.passwdInput = $('#passwd');
  }

  public async signIn(): Promise<void> {
    await this.sigInBtn.click();
  }

  public async fillForm(email = 'aperdomobo@gmail.com', passwd = 'WorkshopProtractor'): Promise<void[]> {
    const emailPromise = this.emailInput.sendKeys(email);
    const passwdPromise = this.passwdInput.sendKeys(passwd);
    return Promise.all([emailPromise, passwdPromise]);
  }
}
