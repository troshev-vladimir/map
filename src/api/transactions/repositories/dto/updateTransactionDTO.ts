export class UpdateTransactionDTO {
  constructor(
    public amount: number,
    public type: 'income' | 'expense',
    public date: string,
    public description: string,
  ) {}
}
