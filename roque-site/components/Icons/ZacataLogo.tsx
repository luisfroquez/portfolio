import { motion } from 'framer-motion'
import { transition } from '../../modules/navbar/ThemeToggle/constants'

export const ZacataLogo = () => {
  const variants = {
    initial: { scale: 0.6, rotate: 90 },
    animate: { scale: 1, rotate: 0, transition },
    whileTap: { scale: 0.95, rotate: 15 }
  }

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 531.47 659.54"
      key="github"
      fill="none"
    >
      <motion.path
        d="M502.85,601.63c-9.43-5.34-21.16-12-33.1-20.75-13.7-10.03-22.2-22.95-27.02-32.37-2.99-22.09-5.45-44.73-7.04-60.48,8.02-25.54,10.41-49.43,11.09-62.73,4.21,.5,7.56-.73,9.67-1.88,20.15-10.97,21.87-65.55,20.49-78.51-.72-6.79-.74-15.28-.76-23.5-.05-20.88-.09-38.91-9.76-45.77-6-4.25-12.58-4.37-18.36-2.75,.54-8.59,1-20.85,.68-35.09v-.18h-.01c-.42-18.11-2.14-39.4-6.63-60.38-11.22-52.44-57.63-122.9-59.6-125.88l-3.03-4.57-16.35,5.68c-8.98-21.79-23.79-37-44.1-45.25-52.87-21.49-132.69,9.08-190.35,38.5C52.64,84.53,32.34,116.31,27.93,125.08c-18.55,12.95-20.73,25.93-22.84,38.49-.68,4.07-1.39,8.28-2.69,12.53-3.29,10.71-.89,22.4,2.37,31.44l-4.77-2.63,.84,12.89c1.29,19.69,24.72,33.45,33.49,37.94,10.32,33.93,21.56,66.44,33.44,96.67,.08,.28,.19,.73,.36,1.34,12,45.15,42.63,153.43,67.7,183.58,13.26,15.94,26.87,29.58,40.8,40.91l-.2,.08c10.29,26.49,15.12,53.82,14.35,81.22l14.18-1.58c.41-22.01-2.56-43.95-8.83-65.48,28.02,18.13,57.22,27.27,87.39,27.27,4,0,8.03-.17,12.06-.49l-1.12-14.09c-52.17,4.16-101.88-21.71-147.76-76.88-19.01-22.86-45.99-107.03-64.91-178.17-.37-1.39-.59-2.15-.62-2.24l-.11-.3c-4.57-11.63-9.05-23.6-13.42-35.87,9.38-10.86,17.87-30.31,13.82-64.6,2.34-.37,4.96-1.1,7.75-2.4,10.65-4.98,19.4-16.12,26.05-33.13,10.99-.41,37.31-4.08,74.53-26.57,38.95-23.52,55.77-35.24,60.79-38.88,7.96-.8,36.78-4.62,73.26-20.64,1.66,1.57,3.14,3.02,3.87,3.81,1.28,2.19,3.65,3.16,5.12,3.76,19.97,8.19,53.05,28.19,50.31,70.22l-.45,6.88,6.87,.62c.29,.02,28.94,2.92,45.04,30.56,.36,24.7-1.63,42.65-1.67,42.96l-2,17.71,13.62-11.53c.08-.07,8.52-6.97,13.7-3.31,3.72,2.65,3.77,24.01,3.79,34.28,.02,8.57,.04,17.43,.84,24.96,2.07,19.45-3.79,59.47-13.19,64.6-.44,.23-1.76,.96-5.28-1.89l-11.76-9.5,.25,15.12c.02,.87,.88,87.13-48.46,132.73l9.59,10.38c13.15-12.14,23.02-26.64,30.46-41.68,1.27,11.23,2.75,23.43,4.39,35.44,4.66,33.99,9.01,55.39,13.3,65.43l13-5.55c-1.79-4.18-4.37-13.03-7.64-31.57,4,4.3,8.59,8.51,13.85,12.37,12.6,9.23,24.74,16.11,34.49,21.64,5.81,3.3,13.62,7.07,16.51,9.75l19.08-2.13c0-1.68-14.26-11.78-28.62-19.92Zm-105.41-403.78c-.18-34.62-20.92-62.08-59-77.77-1.61-1.84-4.23-4.32-8.43-8.17l-3.46-3.17-4.26,1.95c-41.7,19.13-74.44,21.49-74.76,21.51l-2.14,.14-1.7,1.31c-.14,.1-14.91,11.3-61.21,39.26-44.28,26.75-71.14,24.54-71.35,24.52l-5.61-.62-1.85,5.33c-11.77,33.96-26.63,31.36-28.15,30.99l-11.31-4.68,2.1,12.56c4.49,26.92,1.09,43.72-4.42,54.16-5.15-15.13-10.14-30.64-14.92-46.48l-.93-3.07-2.91-1.32c-5.2-2.38-17.59-9.48-24.08-17.95,.12-.02,.24-.04,.35-.06l10.38-1.84-5.64-8.91c-3.57-5.64-12.01-22.98-8.23-35.29,1.58-5.14,2.4-10.03,3.13-14.33,1.97-11.77,3.4-20.27,18.39-30.22l1.93-1.2,.79-2.21c.12-.32,13.37-32.33,94.94-73.98C190.12,30.23,265.77,.84,313.69,20.32c18.61,7.56,31.21,21.74,38.54,43.35l2.28,6.75,19.16-6.65c10.46,16.5,45.53,73.98,54.61,116.42,2.65,12.42,4.28,25.05,5.23,37.05-13.08-12.49-27.77-17.46-36.07-19.39Zm-48.18,282.62c-23.59,8.41-48.01,15.13-72.63,19.77-15.73,2.88-32.41,5.29-48.33,7.01-5.5,.6-11.02,1.11-16.54,1.42l-.54,.03c-.17,.21-.34-.81-.52,1.97l-.02,6.02c.19,2.78,.4,1.76,.6,1.96,5.92,.16,11.89,.08,17.81-.09,33.46-1.27,67.01-7.65,98.48-19.14,4.76-1.94,12.37-4.9,16.89-7.2,2.76-1.32,5.51-2.67,8.23-4.05l-3.43-7.7Zm-1.98-20.15l.66,2.52c7.5,.48,14.81,2.67,19.67,8.49,.58,.8,1.24,1.58,1.87,2.37,.35,.59,1.37,2.05,1.78,2.64,.76,1.23,1.43,2.55,2.4,3.83l2.52-.61c.7-15.47-14.96-25.92-28.9-19.24Zm-20.91-162.16c-7.99,.79-14.46,7.26-15.25,15.25-1.07,10.81,7.93,19.81,18.74,18.74,8-.79,14.46-7.26,15.25-15.25,1.07-10.81-7.93-19.81-18.74-18.74Zm-160.98,36.99c-8,.8-14.46,7.26-15.26,15.26-1.07,10.81,7.94,19.81,18.75,18.74,7.99-.79,14.46-7.26,15.25-15.25,1.07-10.81-7.94-19.82-18.74-18.75Zm150.75-60.14c-1.65,.79-3.21,1.53-4.67,2.19-17.93,8.17-45.24,12.89-45.51,12.94l2.37,13.94c1.19-.21,29.38-5.07,49-14.01,1.52-.7,3.15-1.47,4.87-2.28,24.91-11.82,48.86-20.2,68.02,6.68l11.51-8.2c-27.61-38.76-65.33-20.87-85.59-11.26Zm-213.55,60.67l6.85,12.37c46.93-25.98,93.18-22.28,93.65-22.24l1.25-14.08c-2.05-.19-50.87-4.21-101.75,23.95Z"
        fill="currentColor"
        initial="initial"
        animate="animate"
        whileTap="whileTap"
        variants={variants}
      />
    </motion.svg>
  )
}
