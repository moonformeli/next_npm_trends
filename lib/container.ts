import type { AxiosResponse } from 'axios';

type Kind = 'Left' | 'Right';
type Left = { data: null; isError: true; error: string };
type Right<T> = { data: T; isError: false; error: null };
type ContainerType<L, R> = Left | Right<R>;

function assertNull(data: any): asserts data is null {
  if (data !== null) {
    throw new Error('data should be null');
  }
}

function assertNotNull<T>(data: T): asserts data is NonNullable<T> {
  if (data === null) {
    throw new Error('data should not be nullable');
  }
}

export default class Container<T> {
  private readonly v: T;
  private readonly k: Kind;

  constructor(v: T, k: Kind) {
    this.v = v;
    this.k = k;
  }

  pack() {
    if (this.k === 'Left') {
      assertNull(this.v);
      const response: Left = {
        data: null,
        isError: true,
        error: 'Error',
      };

      return response;
    } else {
      assertNotNull<T>(this.v);
      const response: Right<T> = {
        data: this.v,
        isError: false,
        error: null,
      };

      return response;
    }
  }

  static Left() {
    return new Container<null>(null, 'Left');
  }

  static Right<T>(d: T) {
    return new Container<T>(d, 'Left');
  }

  static containify<Response, Request>(d: AxiosResponse<Response, Request>) {
    const { status, data } = d;

    if (status >= 200 && status < 300) {
      return Container.Right<Response>(data).pack();
    }

    return Container.Left().pack();
  }
}
