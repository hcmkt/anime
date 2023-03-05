class ImageUrl {
  static getImageUrlGenerator = (
    imageUrl: string | null | undefined | Array<string | null | undefined>
  ) =>
    (function* () {
      const imageUrls = [imageUrl].flat().filter(Boolean) as string[];
      for (const imageUrl of imageUrls) {
        yield imageUrl;
      }

      return 'https://placehold.jp/02D1E0/ffffff/1200x630.png?text=No%20Image';
    })();
}

export default ImageUrl;
