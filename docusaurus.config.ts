import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// LaTeX 수식 렌더링을 위한 플러그인 임포트 ***
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: 'From Pain to Cure',
  tagline: 'Turning the pain of disease into innovation and cures',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // 실제 배포될 도메인 주소 (URL), 루트 리포지토리이므로 baseUrl은 슬래시('/') 하나만
  url: 'https://pain2cure.github.io',
  baseUrl: '/',

  // GitHub 계정 정보 및 리포지토리명 설정
  organizationName: 'min-kim', // GitHub 계정명 또는 사용자명
  projectName: 'pain2cure.github.io', // GitHub 리포지토리명

  onBrokenLinks: 'throw',

  // 한국어(ko) 기본, 영어(en) 서브 다국어(i18n) 설정
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en'],
    localeConfigs: {
      ko: { label: '한국어', htmlLang: 'ko' },
      en: { label: 'English', htmlLang: 'en' },
    },
  },

  // KaTeX CSS 스타일시트 추가 ***
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-GvrOXuhMATgEsSwCs4smul74iXGOixntILdUW9XmUC6+HX0sLNAK3q71HotJqlAn',
      crossorigin: 'anonymous',
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // 필요시 'edit this page' 링크 주소를 본인 리포지토리로 수정 가능
          editUrl: 'https://github.com/min-kim/pain2cure.github.io/tree/main/',
          // 문서 영역 LaTeX 플러그인 적용
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/min-kim/pain2cure.github.io/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          // 블로그 영역 LaTeX 플러그인 적용
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',      // 기본 모드를 무조건 'light'로 설정
      disableSwitch: true,       // 우측 상단 다크모드 토글 스위치 버튼을 숨김
      respectPrefersColorScheme: false, // 사용자 기기의 다크모드 설정 감지 무시
    },
    navbar: {
      title: 'From Pain to Cure',
      logo: {
        alt: 'From Pain to Cure Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'researchSidebar',
          position: 'left',
          label: 'Learn & Research',
        },
        {
          type: 'docSidebar',
          sidebarId: 'projectsSidebar',
          position: 'left',
          label: 'Build & Projects',
        },
        { to: '/about', label: 'About & CV', position: 'right' },
        { type: 'localeDropdown', position: 'right' }, // 언어 선택 드롭다운
        {
          href: 'https://github.com/min-kim/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Research',
          items: [
            {
              label: 'Learn & Research',
              to: '/docs/research',
            },
          ],
        },
        {
          title: 'Projects',
          items: [
            {
              label: 'Build & Projects',
              // 실제 존재하는 문서의 상세 경로로 수정
              to: '/docs/projects/life-hacks/nest/nest-review',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/min-kim/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} From Pain to Cure. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;