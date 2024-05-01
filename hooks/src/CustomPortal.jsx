import { createPortal } from 'react-dom'

function CustomPortal({ children, wrapperId = 'custom-portal' }) {
  return createPortal(children, document.getElementById(wrapperId))
}
export default CustomPortal
