import { PageMeta } from '../components/PageMeta'
import { citingShort, licenseName, licenseUrl, siteAttribution } from '../content/citingThisSite'

export function LicensePage() {
  return (
    <>
      <PageMeta
        path="/license"
        title="License & attribution"
        description="Creative Commons CC BY-SA 4.0 license and how to cite the St. Paul History reference site."
      />
      <h1 className="page-title">License &amp; attribution</h1>
      <section className="section section__prose">
        <h2>Text on this site</h2>
        <p>
          Unless otherwise noted, original explanatory text on{' '}
          <strong>{siteAttribution.project}</strong> is licensed under{' '}
          <a href={licenseUrl} target="_blank" rel="noopener noreferrer">
            {licenseName}
          </a>
          . You may share and adapt the material provided you give appropriate credit, indicate if
          changes were made, and distribute derivatives under the same license.
        </p>
        <p>
          <strong>Suggested citation:</strong> {citingShort.suggested}
        </p>
        <p>
          Third-party sources linked or summarized here (books, newspapers, institutional sites)
          remain under their respective copyrights or public-domain status; this license applies to
          our prose, not to quoted passages from other works.
        </p>
      </section>
      <section className="section section__prose">
        <h2>For productions</h2>
        <p>
          This site is a research aid, not a substitute for clearance on likenesses, music, or
          studio chain-of-title. Keep your own source log for defensible period detail.
        </p>
      </section>
    </>
  )
}
