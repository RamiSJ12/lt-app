import spain from './resources/jorge-fernandez-salas-ChSZETOal-I-unsplash.jpg';
import egypt from './resources/spencer-davis-UvKCy14AYRY-unsplash.jpg';
import turkey from './resources/fatih-yurur-kNSREmtaGOE-unsplash.jpg';
import germany from './resources/brandenburger-tor-tja.jpg';
import greece from './resources/andre-benz-tPPi0jzLP_w-unsplash.jpg';
import italy from './resources/faruk-kaymak-KTsg_xKnB3E-unsplash.jpg';
import kenya from './resources/ian-macharia-7k91OUDYAQ0-unsplash.jpg';
import france from './resources/chris-karidis-nnzkZNYWHaU-unsplash.jpg';
import london from './resources/eva-dang-EXdXLrZXS9Q-unsplash.jpg';

export type Course =
  | 'spanish'
  | 'arabic'
  | 'turkish'
  | 'german'
  | 'greek'
  | 'italian'
  | 'swahili'
  | 'french'
  | 'ingles';

const data = {
  spanish: {
    image: spain,
    title: 'Spanish',
    metaUrl: 'http://syntaxblitz.net/static/lt/spanish-meta.json',
    // this will get moved once we're fetching meta from the server
    meta: {
      lessons: [
        {
          url: 'http://syntaxblitz.net/static/lt/spanish1.mp3',
          id: 'spanish1',
          duration: 334.132,
          name: 'Lesson 1',
        },
        {
          url: 'http://syntaxblitz.net/static/lt/spanish2.mp3',
          id: 'spanish2',
          name: 'Lesson 2',
          duration: 7 * 60 + 58.77,
        },
        {
          url: 'http://syntaxblitz.net/static/lt/spanish3.mp3',
          id: 'spanish3',
          name: 'Lesson 3',
          duration: 6 * 60 + 14.88,
        },
        {
          url: 'http://syntaxblitz.net/static/lt/spanish4.mp3',
          id: 'spanish4',
          name: 'Lesson 4',
          duration: 8 * 60 + 28.89,
        },
        {
          url: 'http://syntaxblitz.net/static/lt/spanish5.mp3',
          id: 'spanish5',
          name: 'Lesson 5',
          duration: 9 * 60 + 24.79,
        },
      ],
      // if we remove files in the future and users want to delete all files for a course, we need
      // to be able to find them somehow. we'll keep this updated with the IDs of the removed files.
      oldIds: [],
    },
    uiColors: {
      background: '#fbc02d',
      text: 'black',
      backgroundAccent: '#c49000',
    },
  },
  arabic: {
    image: egypt,
    title: 'Arabic',
    meta: {
      lessons: [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
      ],
    },
    uiColors: {
      background: '#424242',
      text: 'white',
      backgroundAccent: '#1b1b1b',
    },
  },
  turkish: {
    image: turkey,
    title: 'Turkish',
    meta: {
      lessons: [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
      ],
    },
    uiColors: {
      background: '#d32f2f',
      text: 'white',
      backgroundAccent: '#9a0007',
    },
  },
  german: {
    image: germany,
    title: 'German',
    meta: {
      lessons: [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
      ],
    },
    uiColors: {
      background: '#bf360c',
      text: 'white',
      backgroundAccent: '#870000',
    },
  },
  greek: {
    image: greece,
    title: 'Greek',
    meta: {
      lessons: [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
      ],
    },
    uiColors: {
      background: '#e3f2fd',
      text: 'black',
      backgroundAccent: '#b1bfca',
    },
  },
  italian: {
    image: italy,
    title: 'Italian',
    meta: {
      lessons: [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
      ],
    },
    uiColors: {
      background: '#2e7d32',
      text: 'white',
      backgroundAccent: '#005005',
    },
  },
  swahili: {
    image: kenya,
    title: 'Swahili',
    meta: {
      lessons: [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
      ],
    },
    uiColors: {
      background: '#0097a7',
      text: 'white',
      backgroundAccent: '#006978',
    },
  },
  french: {
    image: france,
    title: 'French',
    meta: {
      lessons: [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
      ],
    },
    uiColors: {
      background: '#1976d2',
      text: 'white',
      backgroundAccent: '#004ba0',
    },
  },
  ingles: {
    image: london,
    title: 'Inglés',
    meta: {
      lessons: [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
      ],
    },
    uiColors: {
      background: '#512da8',
      text: 'white',
      backgroundAccent: '#140078',
    },
  },
};

export default data;
