import { PhoneNumberPipe } from './phone-number.pipe';

describe('PhoneNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new PhoneNumberPipe();
    expect(pipe).toBeTruthy();
  });

  it('should change a string to a valid formatted phone number', () => {
    let testNumber:string = '7188132967';
    const pipe = new PhoneNumberPipe();

    let testAnswer:string = pipe.transform(testNumber);

    expect(testAnswer).toEqual('(718) 813-2967');
  });
});
