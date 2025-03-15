export class Transaction {
  constructor(
    public id: ID,
    public amount: number,
    public type: 'income' | 'expense',
    public date: string,
    public description: string,
  ) {}
}
