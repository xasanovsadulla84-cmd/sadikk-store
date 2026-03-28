const notices = [
  { title: 'Forge Notes installed', note: 'Kutubxonaga qo‘shildi va sync tayyor.' },
  { title: 'Shadow Drift updated', note: 'Yangi neon district va rank rewards aktiv.' },
]

function SoftToastStack() {
  return (
    <div className="toast-stack">
      {notices.map((notice) => (
        <div key={notice.title} className="toast-card glass-card">
          <strong>{notice.title}</strong>
          <span>{notice.note}</span>
        </div>
      ))}
    </div>
  )
}

export default SoftToastStack
