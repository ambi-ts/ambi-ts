export class Random {
  public RandGP = (max: number): number => Math.floor(Math.random() * max);
  public nextDouble(): number {
    return Math.random();
  }
}
