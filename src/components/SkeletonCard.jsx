function SkeletonCard() {
  return (
    <div className="glass-card skeleton-card">
      <div className="skeleton shimmer skeleton-image" />
      <div className="skeleton-body">
        <div className="skeleton shimmer skeleton-line long" />
        <div className="skeleton shimmer skeleton-line" />
        <div className="skeleton shimmer skeleton-line short" />
      </div>
    </div>
  )
}

export default SkeletonCard
