import { PageMeta } from '../components/PageMeta'
import { Section } from '../components/Section'
import { places, placesNote } from '../content/places'

export function PlacesPage() {
  return (
    <>
      <PageMeta
        path="/places"
        title="Places"
        description="Wabasha Street Caves, Landmark Center, river bluffs, downtown—documented St. Paul sites for Prohibition and gangster-era research."
      />
      <h1 className="page-title">Places</h1>
      <Section title="Sites to know">
        <p>{placesNote}</p>
        <ul className="place-list">
          {places.map((p) => (
            <li key={p.name}>
              <strong>{p.name}</strong>
              {p.address ? (
                <span style={{ display: 'block', fontSize: '0.95rem' }}>
                  {p.address}
                </span>
              ) : null}
              <p style={{ marginBottom: 0 }}>{p.description}</p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}
