import { hasPrint } from './interfacrForClass';

export class Invoice implements hasPrint {
  constructor(
    readonly client: string,
    private work: string,
    public amount: number
  ) {}

  print() {
    return `${this.client} owes ${this.amount}$ for this work`;
  }
}

export class Payment implements hasPrint {
  constructor(
    readonly recipient: string,
    private job: string,
    public amt: number
  ) {}
  print() {
    return `I owe ${this.recipient} ${this.amt}$ for this job: ${this.job}`;
  }
}
