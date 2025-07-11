/* =======================================
 * 店舗データ
 * URL:src/data/storeData.ts
 * Created: 2025-07-03
 * Last updated: 2025-07-11
 * ======================================= */

export type Store = {
  storeId: string;
  name: string;
  area: string;
  logo: string;
  phone: string;
  url: string;
  shopColor: string;
};

export const stores = [
  /* === [ 横浜エリア ] ================= */
  {
    storeId: 'yh_club',
    name: 'クラブダンディ',
    area: 'yokohama',
    logo: '/images/logo/yokohama_club-dandy.svg',
    phone: '045-243-2468',
    url: 'https://www.dandy-g.jp/club_dandy/top.html',
    shopColor: '#00B645',
  },
  {
    storeId: 'yh_dandy',
    name: '横浜ダンディ',
    area: 'yokohama',
    logo: '/images/logo/yokohama_y-dandy.svg',
    phone: '045-242-8030',
    url: 'https://www.dandy-g.jp/dandy/top.html',
    shopColor: '#FF2880',
  },
  {
    storeId: 'yh_mr',
    name: 'ミスターダンディ',
    area: 'yokohama',
    logo: '/images/logo/yokohama_mr-dandy.svg',
    phone: '045-243-9555',
    url: 'https://www.dandy-g.jp/mr_dandy/top.html',
    shopColor: '#FE9800',
  },

  /* === [ 京都エリア ] ================= */
  {
    storeId: 'kt_hot',
    name: '京都ホットポイント',
    area: 'kyoto',
    logo: '/images/logo/kt-hot.svg',
    phone: '075-361-4144',
    url: 'https://www.hot-point.co.jp/hot/top.html',
    shopColor: '#01D10B',
  },
  {
    storeId: 'kt_part2',
    name: 'ホットポイントパート2',
    area: 'kyoto',
    logo: '/images/logo/kt-part2.svg',
    phone: '075-361-0688',
    url: 'https://www.hot-point.co.jp/hot2/top.html',
    shopColor: '#F5B484',
  },
  {
    storeId: 'kt_lip',
    name: 'リップスティック',
    area: 'kyoto',
    logo: '/images/logo/kt-lip.svg',
    phone: '075-213-0588',
    url: 'https://www.hot-point.co.jp/lip/top.html',
    shopColor: '#3984FD',
  },
  {
    storeId: 'kt_villa',
    name: 'ホットポイントヴィラ',
    area: 'kyoto',
    logo: '/images/logo/kt-villa.svg',
    phone: '075-213-1383',
    url: 'https://www.hot-point.co.jp/villa/top.html',
    shopColor: '#FF2103',
  },

  /* === [ 神戸エリア ] ================= */
  {
    storeId: 'kb_hot',
    name: '神戸ホットポイント',
    area: 'kobe',
    logo: '/images/logo/kobe-hot.webp',
    phone: '078-332-0388',
    url: 'http://www.hpg-kobe.jp/hot/',
    shopColor: '#D9C796',
  },
  {
    storeId: 'kb_style',
    name: 'ホットポイントスタイル',
    area: 'kobe',
    logo: '/images/logo/kobe-style.webp',
    phone: '078-332-5088',
    url: 'http://www.hpg-kobe.jp/style/',
    shopColor: '#FE9AB6',
  },
  {
    storeId: 'kb_villa',
    name: 'ホットポイントヴィラ',
    area: 'kobe',
    logo: '/images/logo/kobe-villa.webp',
    phone: '078-332-3666',
    url: 'http://www.hpg-kobe.jp/villa/',
    shopColor: '#CF8DE6',
  },

  /* === [ 福岡エリア ] ================= */
  {
    storeId: 'fu_hot',
    name: '福岡ホットポイント',
    area: 'fukuoka',
    logo: '/images/logo/fukuoka.webp',
    phone: '092-281-5558',
    url: 'https://www.fukuoka-hotpoint.jp/hot/top.html',
    shopColor: '#00AFD1',
  },
  {
    storeId: 'fu_villa',
    name: 'ホットポイントヴィラ',
    area: 'fukuoka',
    logo: '/images/logo/fukuoka-villa.svg',
    phone: '092-262-5002',
    url: 'https://www.fukuoka-hotpoint.jp/villa/top.html',
    shopColor: '#B6659F',
  },
  /* === [ 熊本エリア ] ================= */
  {
    storeId: 'km_hot',
    name: '熊本ホットポイント',
    area: 'kumamoto',
    logo: '/images/logo/kumaoto-hot.svg',
    phone: '096-356-3033',
    url: 'https://www.kumamoto-hotpoint.cc/top.html',
    shopColor: '#EA524F',
  },
  {
    storeId: 'km_villa',
    name: 'ホットポイントヴィラ',
    area: 'kumamoto',
    logo: '/images/logo/kumaoto-villa.svg',
    phone: '096-351-7500',
    url: 'https://www.hotpoint-villa.cc/top.html',
    shopColor: '#FFB020',
  },
];
