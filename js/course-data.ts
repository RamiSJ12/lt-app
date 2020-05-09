import spanishCover from '../resources/spanish-cover-stylized.png';
import arabicCover from '../resources/arabic-cover-stylized.png';
import turkishCover from '../resources/turkish-cover-stylized.png';
import germanCover from '../resources/german-cover-stylized.png';
import greekCover from '../resources/greek-cover-stylized.png';
import italianCover from '../resources/italian-cover-stylized.png';
import swahiliCover from '../resources/swahili-cover-stylized.png';
import frenchCover from '../resources/french-cover-stylized.png';
import inglesCover from '../resources/ingles-cover-stylized.png';

import fs from 'react-native-fs';
import path from 'react-native-path';
import DownloadManager from './download-manager';

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

/* SAMPLE METADATA: 

  {
    version: 0,
    lessons: [
      {
        url: 'http://syntaxblitz.net/static/lt/spanish1.mp3',
        id: 'spanish1',
        duration: 334.132,
        title: 'Lesson 1',
        pauses: [
          {
            start: 4.983162,
            end: 6.588704,
          },
          ...
        ],
      },
      {
        url: 'http://syntaxblitz.net/static/lt/spanish2.mp3',
        id: 'spanish2',
        ...
      },
      ...
    ],

    // added post-download by client:
    downloaded: 1588555792598
  },
*/

const courseMeta = {};

const data = {
  spanish: {
    image: spanishCover,
    title: 'Spanish',
    metaUrl:
      'https://language-transfer.us-east-1.linodeobjects.com/spanish-meta.json',
    fallbackLessonCount: 90,
    uiColors: {
      background: '#7186d0',
      softBackground: '#d5d9ee',
      text: 'white',
      backgroundAccent: '#516198',
    },
  },
  arabic: {
    image: arabicCover,
    title: 'Arabic',
    metaUrl:
      'https://language-transfer.us-east-1.linodeobjects.com/arabic-meta.json',
    fallbackLessonCount: 38,
    uiColors: {
      background: '#c2930f',
      softBackground: '#e9dccc',
      text: 'black',
      backgroundAccent: '#806006',
    },
  },
  turkish: {
    image: turkishCover,
    title: 'Turkish',
    metaUrl:
      'https://language-transfer.us-east-1.linodeobjects.com/turkish-meta.json',
    fallbackLessonCount: 44,
    uiColors: {
      background: '#a20b3b',
      softBackground: '#e0ccce',
      text: 'white',
      backgroundAccent: '#760629',
    },
  },
  german: {
    image: germanCover,
    title: 'German',
    metaUrl:
      'https://language-transfer.us-east-1.linodeobjects.com/german-meta.json',
    fallbackLessonCount: 50,
    uiColors: {
      background: '#009900',
      softBackground: '#cbdecb',
      text: 'white',
      backgroundAccent: '#870000',
    },
  },
  greek: {
    image: greekCover,
    title: 'Greek',
    metaUrl:
      'https://language-transfer.us-east-1.linodeobjects.com/greek-meta.json',
    fallbackLessonCount: 120,
    uiColors: {
      background: '#d57d2f',
      softBackground: '#efd7cd',
      text: 'white',
      backgroundAccent: '#9c5a20',
    },
  },
  italian: {
    image: italianCover,
    title: 'Italian',
    metaUrl:
      'https://language-transfer.us-east-1.linodeobjects.com/italian-meta.json',
    fallbackLessonCount: 45,
    uiColors: {
      background: '#e423ae',
      softBackground: '#f5cce3',
      text: 'white',
      backgroundAccent: '#a7177f',
    },
  },
  swahili: {
    image: swahiliCover,
    title: 'Swahili',
    metaUrl:
      'https://language-transfer.us-east-1.linodeobjects.com/swahili-meta.json',
    fallbackLessonCount: 110,
    uiColors: {
      background: '#12eddd',
      softBackground: '#ccf8f2',
      text: 'black',
      backgroundAccent: '#0aaea2',
    },
  },
  french: {
    image: frenchCover,
    title: 'French',
    metaUrl:
      'https://language-transfer.us-east-1.linodeobjects.com/french-meta.json',
    fallbackLessonCount: 40,
    uiColors: {
      background: '#10bdff',
      softBackground: '#cce8ff',
      text: 'white',
      backgroundAccent: '#098abc',
    },
  },
  ingles: {
    image: inglesCover,
    title: 'Inglés',
    metaUrl:
      'https://language-transfer.us-east-1.linodeobjects.com/ingles-meta.json',
    fallbackLessonCount: 40,
    uiColors: {
      background: '#7186d0',
      softBackground: '#d5daee',
      text: 'white',
      backgroundAccent: '#516198',
    },
  },
};

const CourseData = {
  courseExists(course: Course): boolean {
    return !!data[course];
  },

  getCourseList(): Array<string> {
    return Object.keys(data);
  },

  getImageForCourse(course: Course) {
    return data[course].image;
  },

  getCourseTitle(course: Course): string {
    return data[course].title;
  },

  getCourseImage(course: Course) {
    return data[course].image;
  },

  getCourseUIColors(course: Course) {
    return data[course].uiColors;
  },

  getFallbackLessonCount(course: Course) {
    return data[course].fallbackLessonCount;
  },

  isCourseMetadataLoaded(course: Course) {
    return !!courseMeta[course];
  },

  getMetadataVersion(course: Course) {
    return courseMeta[course].version;
  },

  async genLoadCourseMetadata(
    course: Course,
    forceLoadFromServer: boolean = false,
  ): Promise<void> {
    const metaFilename = path.basename(data[course].metaUrl);
    const localPath = `${DownloadManager.getDownloadFolderForCourse(
      course,
    )}/${metaFilename}`;

    if (!forceLoadFromServer) {
      if (CourseData.isCourseMetadataLoaded(course)) {
        return;
      }

      try {
        const metaString = await fs.readFile(localPath);
        courseMeta[course] = JSON.parse(metaString);
        return;
      } catch (e) {}
    }

    const json = await fetch(data[course].metaUrl).then((r) => r.json());

    json.downloaded = +new Date();
    courseMeta[course] = json;

    if (
      !(await fs.exists(DownloadManager.getDownloadFolderForCourse(course)))
    ) {
      await fs.mkdir(DownloadManager.getDownloadFolderForCourse(course));
    }
    await fs.writeFile(localPath, JSON.stringify(json));
  },

  clearCourseMetadata(course: Course): void {
    courseMeta[course] = undefined;
  },

  getLessonId(course: Course, lesson: number): string {
    return courseMeta[course].lessons[lesson].id;
  },

  getLessonUrl(course: Course, lesson: number, quality: string): string {
    const urls = courseMeta[course].lessons[lesson].urls;
    if (quality === 'high') {
      return urls[urls.length - 1];
    } else {
      return urls[0];
    }
  },

  getNextLesson(course: Course, lesson: number): number | null {
    if (lesson + 1 === courseMeta[course].lessons.length) {
      return null;
    }

    return lesson + 1;
  },

  getLessonIndices(course: Course): Array<number> {
    return courseMeta[course].lessons.map((_, i) => i);
  },

  getLessonTitle(course: Course, lesson: number) {
    return courseMeta[course].lessons[lesson].title;
  },

  getLessonDuration(course: Course, lesson: number) {
    return courseMeta[course].lessons[lesson].duration;
  },
};

export default CourseData;
