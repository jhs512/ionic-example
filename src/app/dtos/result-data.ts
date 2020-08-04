export class ResultData<T> {
  constructor(public resultCode: string, public msg: string, public data: T) {}
}
