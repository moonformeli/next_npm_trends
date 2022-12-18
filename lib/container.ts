import type { AxiosResponse } from 'axios';

type Error = object;
type Kind = 'Left' | 'Right';
type Left = { data: null; isError: true; error: Error };
type Right<T> = { data: T; isError: false; error: null };
type ContainerType<T> = Left | Right<T>;

class Container {
  static Validate<T>(d: AxiosResponse<T>): Kind {
    const { status } = d;

    if (status === 200) {
      return 'Left';
    }
    return 'Right';
  }

  static pack<T>(d: AxiosResponse<T>, kind: Kind): ContainerType<T> {
    const { data } = d;
    const response = {
      data: null,
      isError: true,
      error: null,
    };

    if (kind === 'Left') {
      response.error = data;

      return response as Left;
    }

    response.data = data;
    return response as Right<T>;
  }

  static containify<T>(d: AxiosResponse<T>): ContainerType<T> {
    const kind = Container.Validate<T>(d);

    return Container.pack<T>(d, kind);
  }
}
