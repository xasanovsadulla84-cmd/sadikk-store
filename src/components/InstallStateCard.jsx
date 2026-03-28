import { libraryItems } from '../data/storeData'

function InstallStateCard() {
  return (
    <div className="install-state-stack">
      {libraryItems.slice(0, 3).map((item) => (
        <div className="glass-card install-row" key={item.title}>
          <div>
            <strong>{item.title}</strong>
            <span>{item.status}</span>
          </div>
          <div className="install-progress-wrap">
            <div className="install-progress"><span style={{ width: `${item.progress}%` }} /></div>
            <small>{item.progress}%</small>
          </div>
        </div>
      ))}
    </div>
  )
}

export default InstallStateCard
