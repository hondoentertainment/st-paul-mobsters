import {
  TIE_LABELS,
  formatBookCitation,
  formatFilmCitation,
  type LibraryBook,
  type LibraryFilm,
} from '../content/referenceLibrary'

function BookEntry({ book }: { book: LibraryBook }) {
  return (
    <li className="library-list__item">
      <p className="library-list__tie" title={TIE_LABELS[book.tie]}>
        {TIE_LABELS[book.tie]}
      </p>
      <h3 className="library-list__title">{book.title}</h3>
      <p className="library-list__cite">{formatBookCitation(book)}</p>
      {book.isbn ? (
        <p className="library-list__meta">
          <span className="library-list__label">ISBN</span> {book.isbn}
        </p>
      ) : null}
      <p className="library-list__note">{book.annotation}</p>
    </li>
  )
}

function FilmEntry({ film }: { film: LibraryFilm }) {
  return (
    <li className="library-list__item">
      <p className="library-list__tie" title={TIE_LABELS[film.tie]}>
        {TIE_LABELS[film.tie]} · {film.medium}
      </p>
      <h3 className="library-list__title">{film.title}</h3>
      <p className="library-list__cite">{formatFilmCitation(film)}</p>
      <p className="library-list__note">{film.annotation}</p>
    </li>
  )
}

export function BookReferenceList({ books }: { books: LibraryBook[] }) {
  return (
    <ol className="library-list">
      {books.map((b) => (
        <BookEntry key={b.id} book={b} />
      ))}
    </ol>
  )
}

export function FilmReferenceList({ films }: { films: LibraryFilm[] }) {
  return (
    <ol className="library-list">
      {films.map((f) => (
        <FilmEntry key={f.id} film={f} />
      ))}
    </ol>
  )
}
