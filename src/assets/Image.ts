const sortedImages = (images: Record<string, string>): string[] =>
  Object.entries(images)
    .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath))
    .map(([, image]) => image)

export const faune_de_mada = sortedImages(
  import.meta.glob<string>('./Faune de MADA/*.jpg', {
    eager: true,
    import: 'default',
    query: '?url',
  }),
)

export const flore_de_mada = sortedImages(
  import.meta.glob<string>('./Flore de Mada/*.jpg', {
    eager: true,
    import: 'default',
    query: '?url',
  }),
)

export const hero = sortedImages(
  import.meta.glob<string>('./Hero/*.jpg', {
    eager: true,
    import: 'default',
    query: '?url',
  }),
)

export const peuple_de_mada = sortedImages(
  import.meta.glob<string>('./Peuple de MADA/*.jpg', {
    eager: true,
    import: 'default',
    query: '?url',
  }),
)

export const ville_de_mada = sortedImages(
  import.meta.glob<string>('./Ville de MADA/*.jpg', {
    eager: true,
    import: 'default',
    query: '?url',
  }),
)
