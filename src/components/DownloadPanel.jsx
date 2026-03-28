import { libraryItems } from '../data/storeData'

function DownloadPanel() {
  return (
    <div className="download-panel glass-card">
      {libraryItems.map((item) => (
        <div key={item.title} className="download-item">
          <div className="download-head">
            <div>
              <strong>{item.title}</strong>
              <span>{item.status}</span>
            </div>
            <em>{item.speed}</em>
          </div>
          <div className="progress-track">
            <div className="progress-bar" style={{ width: `${item.progress}%` }} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default DownloadPanel
