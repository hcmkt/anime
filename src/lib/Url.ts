class Url {
  static getTwitterUrl = (id: string): string => {
    return 'https://twitter.com/' + id;
  };

  static trimUrl = (url: string): string => {
    const urlWithoutProtocol = url.split('://').at(-1) ?? '';

    return urlWithoutProtocol?.at(-1) === '/'
      ? urlWithoutProtocol.slice(0, -1)
      : urlWithoutProtocol;
  };
}

export default Url;
