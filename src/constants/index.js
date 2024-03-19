import { meta, shopify, starbucks, tesla } from '../assets/images'
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript
} from '../assets/icons'

export const skills = [
  {
    imageUrl: css,
    name: 'CSS',
    type: 'Frontend'
  },
  {
    imageUrl: express,
    name: 'Express',
    type: 'Backend'
  },
  {
    imageUrl: git,
    name: 'Git',
    type: 'Version Control'
  },
  {
    imageUrl: github,
    name: 'GitHub',
    type: 'Version Control'
  },
  {
    imageUrl: html,
    name: 'HTML',
    type: 'Frontend'
  },
  {
    imageUrl: javascript,
    name: 'JavaScript',
    type: 'Frontend'
  },
  {
    imageUrl: mongodb,
    name: 'MongoDB',
    type: 'Database'
  },

  {
    imageUrl: mui,
    name: 'Material-UI',
    type: 'Frontend'
  },
  {
    imageUrl: nextjs,
    name: 'Next.js',
    type: 'Frontend'
  },
  {
    imageUrl: nodejs,
    name: 'Node.js',
    type: 'Backend'
  },
  {
    imageUrl: react,
    name: 'React',
    type: 'Frontend'
  },
  {
    imageUrl: redux,
    name: 'Redux',
    type: 'State Management'
  },
  {
    imageUrl: tailwindcss,
    name: 'Tailwind CSS',
    type: 'Frontend'
  },
  {
    imageUrl: typescript,
    name: 'TypeScript',
    type: 'Frontend'
  }
]

export const experiences = [
  {
    title: 'Full stack Developer',
    company_name: 'Self Employed',
    icon: meta,
    iconBg: '#a2d2ff',
    date: 'Jan 2023 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.'
    ]
  },
  {
    title: 'React.js Developer',
    company_name: 'Self Employed',
    icon: starbucks,
    iconBg: '#accbe1',
    date: 'March 2022 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.'
    ]
  },
  {
    title: 'Front-End Developer',
    company_name: 'Self Employed',
    icon: tesla,
    iconBg: '#fbc3bc',
    date: 'Jan 2021 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.'
    ]
  },
  {
    title: 'Web Developer',
    company_name: 'Self Employed',
    icon: shopify,
    iconBg: '#b7e4c7',
    date: 'Jan 2021 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.'
    ]
  }
]

export const socialLinks = [
  {
    name: 'Contact',
    iconUrl: contact,
    link: '/contact'
  },
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/HilalAyaz'
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/itshilaal'
  }
]

export const projects = [
  {
    iconUrl: pricewise,
    theme: 'btn-back-red',
    name: 'Full Stack Event Manager App',
    description:
      'Event Hub is a Full Stack Web App that enables users to create and manage events. It is built with Next.js 14 and TypeScript, ensuring a seamless user experience. User Authentication is handled by Clerk, payments are handled by Stripe and the events are stored in MongoDB.The app is responsive and can be used on any device.',
    githubLink: '',
    link: 'https://nextjs-event-manager-mu.vercel.app/'
  },
  {
    iconUrl: threads,
    theme: 'btn-back-green',
    name: 'ArtIQnova',
    description:
      'ArtIQnova is a Full Stack website Built with Next.js 14 that allows users to generate art using CloudinaryAI. User Authentication is handled by Clerk, payments are handled by Stripe and the details are stored in MongoDB. It is responsive and can be used on any device.',
    githubLink: '',
    link: 'https://art-iq-nova.vercel.app/'
  },
  {
    iconUrl: threads,
    theme: 'btn-back-green',
    name: 'Personal Developer Portfolio',
    description:
      ' This is my personal portfolio website. It is built with ReactJs. It allows users to know about me and view my projects and skills in detail. The website is responsive and can be used on any device.',
    githubLink: '',
    link: 'https://hilalayaz-webdev.netlify.app/'
  },
  {
    iconUrl: car,
    theme: 'btn-back-blue',
    name: 'Brainwave UI/UX',
    description:
      'A UI/UX website developed with ReactJs and Tailwindcss. It provides an interactive and user-friendly interface with a modern and clean design with animations using AOS library. The website is responsive and can be used on any device.',
    githubLink: '',
    link: 'https://brainwave-devdesigner.netlify.app/'
  },
  {
    iconUrl: snapgram,
    theme: 'btn-back-pink',
    name: 'Weather App',
    description:
      'A weather forecasting application built with Next and TypeScript, providing real-time weather updates, forecasts, and interactive maps for locations worldwide. The website is responsive and can be used on any device.',
    githubLink: '',
    link: 'https://weather-app-devdesigner.netlify.app/'
  },
  {
    iconUrl: estate,
    theme: 'btn-back-black',
    name: 'Modern Bank Website UI/UX',
    description:
      'Developed a modern bank website with ReactJs and Tailwindcss. It provides a user-friendly interface. The website is responsive and can be used on any device.',
    githubLink: '',
    link: 'https://bank-app-devdesigner.netlify.app/'
  },
  {
    iconUrl: summiz,
    theme: 'btn-back-yellow',
    name: 'AI Summarizer Application',
    description:
      'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    githubLink: '',
    link: 'https://web-url-summary.netlify.app/'
  },
  {
    iconUrl: threads,
    theme: 'btn-back-yellow',
    name: 'DevDesigner Portfolio',
    description:
      'A company portfolio website developed using HTML and Tailwind CSS. The website is responsive and can be used on any device.',
    githubLink: '',
    link: 'https://devdesignerpk.netlify.app/'
  },
  {
    iconUrl: summiz,
    theme: 'btn-back-yellow',
    name: 'Text Analysis in Python',
    description:
      'Text Analysis App utilizes Flask and NLTK to offer quick insights into text content, including paragraph, sentence, word, and character counts, alongside identifying the most common words.',
    githubLink: '',
    link: 'https://web-url-summary.netlify.app/'
  },
  {
    iconUrl: summiz,
    theme: 'btn-back-yellow',
    name: 'Snake Game in Python',
    description:
      'Classic Snake Game implemented in Python using Pygame library. Eat food, avoid obstacles, and grow your snake to achieve a high score!',
    githubLink: 'https://github.com/HilalAyaz/snake-game-python',
    link: '#'
  }
]
