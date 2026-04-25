import { Link } from 'react-router-dom'
import type { MobstersEvidenceRow } from '../content/mobstersEvidenceTable'

type ClaimEvidenceTableProps = {
  rows: MobstersEvidenceRow[]
  caption?: string
}

export function ClaimEvidenceTable({ rows, caption }: ClaimEvidenceTableProps) {
  return (
    <div className="claim-evidence-table-wrap">
      <table className="claim-evidence-table">
        {caption ? <caption>{caption}</caption> : null}
        <thead>
          <tr>
            <th scope="col">Claim (summary)</th>
            <th scope="col">Evidence read</th>
            <th scope="col">CitationId keys</th>
            <th scope="col">What would change our mind</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              <td>{row.claim}</td>
              <td>{row.strengthLabel}</td>
              <td>
                <ul className="claim-evidence-table__ids">
                  {row.citationIds.map((id) => (
                    <li key={id}>
                      <Link to={{ pathname: '/lookup', search: `?id=${encodeURIComponent(id)}` }}>
                        {id}
                      </Link>
                    </li>
                  ))}
                </ul>
              </td>
              <td>{row.whatWouldFalsify}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
