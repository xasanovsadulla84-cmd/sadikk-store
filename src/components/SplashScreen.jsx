import { AnimatePresence, motion } from 'framer-motion'

function SplashScreen({ visible }) {
  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="splash-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
        >
          <motion.div
            className="splash-panel glass-card"
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src="/sadikk-avatar-logo.png" alt="Sadikk Store logo" />
            <div>
              <strong>Sadikk Store</strong>
              <span>Keng ko‘lamli o‘yin marketplace</span>
            </div>
            <div className="splash-loader">
              <span />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default SplashScreen
