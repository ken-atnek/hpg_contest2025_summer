/* =======================================
 * ランキングデータ
 * URL:src/data/rankingData.ts
 * Created: 2025-07-03
 * Last updated: 2025-07-03
 * ======================================= */

export type RankingItem = {
  id: number;
  rank: number;
  name: string;
  image: string;
  shop: string;
  url: string;
  area: string;
  size?: string;
};

export const rankingData: Record<string, RankingItem[]> = {
  first: [
    {
      id: 1,
      rank: 1,
      area: 'fukuoka',
      shop: '福岡ホットポイントヴィラ',
      name: '宝生 かな',
      url: 'https://www.fukuoka-hotpoint.jp/villa/g-info.php?g_id=4368&ls=glist',
      image: '/images/cast/fu_villa_kana.webp',
      size: 'Age.30 / T.155 / B.86 [D] / W.59 / H.85',
    },
    {
      id: 2,
      rank: 2,
      area: 'kumamoto',
      shop: '熊本ホットポイント',
      name: '逢坂えれな',
      url: 'https://www.kumamoto-hotpoint.cc/detail.php?g_id=466&is_Area=no&s_dir=hot&mode=slink&link_Source=glist',
      image: '/images/cast/km_hot_erena.webp',
    },
    {
      id: 3,
      rank: 3,
      area: 'kobe',
      shop: '神戸ホットポイント',
      name: 'み☆や',
      url: 'http://www.hpg-kobe.jp/hot/model_profile40.html',
      image: '/images/cast/kb_hot_miya.webp',
    },
    {
      id: 4,
      rank: 4,
      area: 'yokohama',
      shop: 'クラブダンディ',
      name: '青山瀬里',
      url: 'https://www.dandy-g.jp/club_dandy/detail.php?g_id=6438',
      image: '/images/cast/yh_club_seri.webp',
    },
    {
      id: 5,
      rank: 5,
      area: 'kumamoto',
      shop: '熊本ホットポイント',
      name: '星川★美桜',
      url: 'https://www.kumamoto-hotpoint.cc/detail.php?g_id=467&is_Area=no&s_dir=hot&mode=slink&link_Source=glist',
      image: '/images/cast/km_hot_mio.webp',
    },
    {
      id: 6,
      rank: 6,
      area: 'kyoto',
      shop: 'リップスティック',
      name: '槙村ももか',
      url: 'https://www.hot-point.co.jp/lip/girls_info.php?g_id=3958',
      image: '/images/cast/kt_lip_momoka.webp',
    },
    {
      id: 7,
      rank: 7,
      area: 'kobe',
      shop: '神戸ホットポイント',
      name: '野崎りおん',
      url: 'https://www.hpg-kobe.jp/hot/model_profile685.html',
      image: '/images/cast/kb_hot_rion.webp',
    },
    {
      id: 8,
      rank: 8,
      area: 'kumamoto',
      shop: '熊本ホットポイント',
      name: 'サラ',
      url: 'https://www.kumamoto-hotpoint.cc/detail.php?g_id=173&is_Area=no&s_dir=hot&mode=slink&link_Source=stop_rk&log=1626519419',
      image: '/images/cast/km_hot_sara.webp',
    },
    {
      id: 9,
      rank: 9,
      area: 'fukuoka',
      shop: '福岡ホットポイントヴィラ',
      name: '宇野 つかさ',
      url: 'https://www.fukuoka-hotpoint.jp/villa/g-info.php?g_id=6364&ls=glist',
      image: '/images/cast/fu_villa_tsukasa.webp',
    },
    {
      id: 10,
      rank: 10,
      area: 'kumamoto',
      shop: '熊本ホットポイント',
      name: '神崎あんり',
      url: 'https://www.kumamoto-hotpoint.cc/detail.php?g_id=176&is_Area=no&s_dir=hot&mode=slink&link_Source=glist',
      image: '/images/cast/km_hot_anri.webp',
    },
    {
      id: 11,
      rank: 11,
      area: 'fukuoka',
      shop: '福岡ホットポイントヴィラ',
      name: '平子 れん',
      url: 'https://www.fukuoka-hotpoint.jp/villa/g-info.php?g_id=6371&ls=glist',
      image: '/images/cast/fu_villa_ren.webp',
    },
    {
      id: 12,
      rank: 12,
      area: 'kobe',
      shop: '神戸ホットポイント',
      name: '小湊にいな',
      url: 'https://www.hpg-kobe.jp/hot/model_profile780.html',
      image: '/images/cast/kb_hot_niina.webp',
    },
    {
      id: 13,
      rank: 13,
      area: 'kumamoto',
      shop: '熊本ホットポイント',
      name: '春野 蘭',
      url: 'https://www.kumamoto-hotpoint.cc/detail.php?g_id=181',
      image: '/images/cast/km_hot_ran.webp',
    },
    {
      id: 14,
      rank: 14,
      area: 'kyoto',
      shop: '京都ホットポイント',
      name: '唐沢ひめの',
      url: 'https://www.hot-point.co.jp/hot/girls_info.php?g_id=5504',
      image: '/images/cast/kt_hot_himeno.webp',
    },
    {
      id: 15,
      rank: 15,
      area: 'kyoto',
      shop: '京都ホットポイント',
      name: '吉村つかさ',
      url: 'https://www.hot-point.co.jp/hot/girls_info.php?g_id=7317',
      image: '/images/cast/kt_hot_tsukasa.webp',
    },
    {
      id: 16,
      rank: 16,
      area: 'kumamoto',
      shop: '熊本ホットポイント',
      name: '藤咲ゆあ',
      url: 'https://www.kumamoto-hotpoint.cc/detail.php?g_id=465',
      image: '/images/cast/km_hot_yua.webp',
    },
    {
      id: 17,
      rank: 17,
      area: 'kumamoto',
      shop: '熊本ホットポイント',
      name: 'マヤ',
      url: 'https://www.kumamoto-hotpoint.cc/detail.php?g_id=178',
      image: '/images/cast/km_hot_maya.webp',
    },
    {
      id: 18,
      rank: 18,
      area: 'kumamoto',
      shop: '熊本ホットポイント',
      name: '坂下さや',
      url: 'https://www.kumamoto-hotpoint.cc/detail.php?g_id=171',
      image: '/images/cast/km_hot_saya.webp',
    },
    {
      id: 19,
      rank: 19,
      area: 'kyoto',
      shop: 'ホットポイントパート2',
      name: '木南まい',
      url: 'https://www.hot-point.co.jp/hot2/girls_info.php?g_id=7208',
      image: '/images/cast/kt_lip_momoka.webp',
    },
    {
      id: 20,
      rank: 20,
      area: 'kyoto',
      shop: 'リップスティック',
      name: '飯田あいな',
      url: 'https://www.hot-point.co.jp/lip/girls_info.php?g_id=7452',
      image: '/images/cast/kt_lip_aina.webp',
    },
  ],
  second: [
    // 他のステージ用
  ],
  // ...
};
