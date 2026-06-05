import 'react-native-url-polyfill/auto';

// DOMException is not implemented in Hermes — polyfill it for Supabase
if (typeof (global as any).DOMException === 'undefined') {
  (global as any).DOMException = class DOMException extends Error {
    readonly name: string;
    constructor(message?: string, name?: string) {
      super(message);
      this.name = name ?? 'DOMException';
    }
  };
}
